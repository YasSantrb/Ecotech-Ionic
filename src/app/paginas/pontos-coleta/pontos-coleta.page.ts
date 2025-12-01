// src/app/paginas/pontos-coleta/pontos-coleta.page.ts

import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PontosService } from '../../services/pontos.service';
import { Auth } from 'src/app/services/auth';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-pontos-coleta',
  imports: [IonicModule, CommonModule],
  templateUrl: './pontos-coleta.page.html',
  styleUrls: ['./pontos-coleta.page.scss']
})
export class PontosColetaPage implements OnInit {
  pontos: any[] = [];
  rua: string = '';
  bairro: string = '';
  cep: string = '';
  numero: string = '';
  telefone: string = '';
  horario_funcionamento: string = '';
  
ngOnInit(): void {
  this.Get_pontocoleta();
}

  constructor(
    private router: Router,
    private pontosService: PontosService, 
    private auth: Auth) {}


 Get_pontocoleta() {
    this.pontosService.ListarPontos().subscribe({
      next: (res) => {
        this.pontos = res;
        console.log("Pontos carregados:", res);
      },
      error: (err) => console.error("Erro ao buscar pontos:", err)
    });
  }

  Criar_pontocoleta() {
    if (!this.rua || !this.bairro || !this.cep || !this.numero || !this.telefone || !this.horario_funcionamento) {
      alert('Preencha todos os campos!');
      return;
    }
    this.pontosService.CriarPonto({
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
}
