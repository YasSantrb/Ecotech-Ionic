import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PontosService } from 'src/app/services/pontos.service';
import { IonicModule } from '@ionic/angular';
import { Auth } from '../../services/auth';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-criar-ponto',
  templateUrl: './criar-ponto.page.html',
  styleUrls: ['./criar-ponto.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class CriarPontoPage implements OnInit {
  isDoador: boolean = false;
  isEmpresa: boolean = false;

  rua: string = '';
  bairro: string = '';
  cep: string = '';
  numero: string = '';
  telefone: string = '';
  horario_funcionamento: string = '';

  constructor(
    private pontoService: PontosService,
    private router: Router,
    private authService: Auth,
    private menuCtrl: MenuController
  ) { }

  ngOnInit(): void {
    this.verificarFuncaoDoUsuario();
  }

    Criar_pontocoleta() {
    if (!this.rua || !this.bairro || !this.cep || !this.numero || !this.telefone || !this.horario_funcionamento) {
      alert('Preencha todos os campos!');
      return;
    }
    this.pontoService.CriarPonto({
      rua: this.rua,
      bairro: this.bairro,
      cep: this.cep,
      numero: this.numero,
      telefone: this.telefone,
      horario_funcionamento: this.horario_funcionamento
    })
    .subscribe({
      next: (res) => {
        console.log('Ponto de coleta criado!', res);  
        this.router.navigate(['/pontos-coleta']);
      },
      error: (err) => {
        console.log('Erro ao criar ponto de coleta', err);
        alert('Erro ao criar ponto de coleta. Código do erro: ' + err.status);
      }
    });
  }
  verificarFuncaoDoUsuario() {
    const userRole = this.authService.getUserRole(); 

    if (userRole === 'DOADOR') {
      this.isDoador = true;
      this.isEmpresa = false;
    } else if (userRole === 'EMPRESA') {
      this.isEmpresa = true;
      this.isDoador = false;
    }
  }
}
