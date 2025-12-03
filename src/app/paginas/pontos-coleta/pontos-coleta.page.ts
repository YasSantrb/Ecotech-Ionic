import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PontosService } from '../../services/pontos.service';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-pontos-coleta',
  imports: [IonicModule, CommonModule, FormsModule],
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
  isEmpresa: boolean = false;
  
ngOnInit(): void {
  this.CarregarPontos();
}

  constructor(
    private router: Router,
    private pontosService: PontosService,
    private alertController: AlertController,
    private authService: Auth) {
      this.checkUserRole();
    }

checkUserRole() {
        const userRole = this.authService.getUserRole();
        this.isEmpresa = userRole === 'EMPRESA';
    }

AbrirDetalhes(item: any) {
  this.router.navigate(['/detalhes-pcoleta'], { state: { item } });
}
  IrparaCriarPonto() {
    this.router.navigate(['/criar-ponto']);
  }
  ionViewWillEnter() {
  this.checkUserRole();
  this.CarregarPontos();
}

CarregarPontos() {
    const userRole = this.authService.getUserRole();
    let pontosObservable: Observable<any[]>;

    if (userRole === 'EMPRESA') {
      pontosObservable = this.pontosService.ListarMeusPontos();
      console.log('Modo Empresa: Listando Meus Pontos');
    } else if (userRole === 'DOADOR') {
      pontosObservable = this.pontosService.ListarTodosPontos();
      console.log('Modo Doador: Listando Todos os Pontos');
    } else {
      console.error('Tipo de usuário desconhecido ou não logado.');
      this.pontos = [];
      return;
    }

    pontosObservable.subscribe({
        next: (data) => {
            this.pontos = data; 
            console.log('Pontos de coleta carregados:', this.pontos);
        },
        error: (err) => {
            console.error('Erro ao carregar pontos de coleta:', err);
            this.pontos = []; 
        }
    });
  }

}
