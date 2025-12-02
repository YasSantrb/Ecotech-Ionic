// src/app/paginas/pontos-coleta/pontos-coleta.page.ts

import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PontosService } from '../../services/pontos.service';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {provideIonicAngular} from '@ionic/angular/standalone';

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
  
ngOnInit(): void {
  this.Get_pontocoleta();
}

  constructor(
    private router: Router,
    private pontosService: PontosService,
    private alertController: AlertController) {}


 Get_pontocoleta() {
    this.pontosService.ListarPontos().subscribe({
      next: (res) => {
        this.pontos = res;
        console.log("Pontos carregados:", res);
      },
      error: (err) => console.error("Erro ao buscar pontos:", err)
    });
  }




AbrirDetalhes(item: any) {
  this.router.navigate(['/detalhes-pcoleta'], { state: { item } });
}
  IrparaCriarPonto() {
    this.router.navigate(['/criar-ponto']);
  }
  ionViewWillEnter() {
  this.CarregarPontos();
}

CarregarPontos() {
  this.pontosService.ListarPontos().subscribe((res) => {
    this.pontos = res;
  });
}

}
