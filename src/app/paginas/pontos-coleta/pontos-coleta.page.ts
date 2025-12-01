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



  async AbrirDetalhes(ponto: any) {
    console.log('chamando alert...');
    const alert = await this.alertController.create({
      header: 'Detalhes do Ponto de Coleta',
      cssClass: 'my-alert',
      message:` 
      <p><strong>Rua:</strong> ${ponto.rua}</p>
      <p><strong>Bairro:</strong> ${ponto.bairro}</p>
      <p><strong>CEP:</strong> ${ponto.cep}</p>
      <p><strong>Número:</strong> ${ponto.numero}</p>
      <p><strong>Telefone:</strong> ${ponto.telefone}</p>
      <p><strong>Horário de Funcionamento:</strong> ${ponto.horario_funcionamento}</p>
      `,
      buttons: [
            {
              text: 'Fechar',
              role: 'cancel'
            },
            {
              text: 'Editar',
              handler: () => this.pontosService.AtualizarPonto(ponto.id, {
                rua: this.rua,
                bairro: this.bairro,  
                cep: this.cep,
                numero: this.numero,
                telefone: this.telefone,
                horario_funcionamento: this.horario_funcionamento
              }), 
            },
            {
              text: 'Excluir',
              role: 'destructive',
              handler: () => this.pontosService.DeletarPonto(ponto.id).subscribe({
              next: () => this.Get_pontocoleta(),
              error: (err) => console.error('Erro ao excluir', err)
        })
      }      
    ]});
    await alert.present();

  }
  IrparaCriarPonto() {
    this.router.navigate(['/criar-ponto']);
  }
}
