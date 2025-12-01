// src/app/paginas/pontos-coleta/pontos-coleta.page.ts

import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PontosService } from '../../services/pontos.service';

@Component({
  standalone: true,
  selector: 'app-pontos-coleta',
  imports: [IonicModule, CommonModule],
  templateUrl: './pontos-coleta.page.html',
  styleUrls: ['./pontos-coleta.page.scss']
})
export class PontosColetaPage implements OnInit {

  pontos: any[] = [];

  constructor(private pontosService: PontosService) {}

  ngOnInit() {
    this.pontosService.listarPontos().subscribe({
      next: (dados: any) => this.pontos = dados,
      error: (err: any) => console.error(err)
    });
  }

  verDetalhes(id: number) {
    // lógica futura
  }
}
