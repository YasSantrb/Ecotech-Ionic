import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DoacoesService } from '../../services/doacoes.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-feed-doacoes',
  templateUrl: './feed-doacoes.page.html',
  styleUrls: ['./feed-doacoes.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class FeedDoacoesPage {
  doacoes: any[] = [];
  loading: boolean = true;
  placeholder = 'assets/img/placeholder.jpg';


  constructor(
    private Doacoes: DoacoesService,
    private router: Router
  ) { }
  ionViewWillEnter() {
  this.carregar();
  }
  carregar() {
    this.loading = true;
    this.Doacoes.ListarDoacoes().subscribe({
      next: (res: any[]) => {
        this.doacoes = res;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Erro ao carregar doações', err);
        this.loading = false;
      },
    });
  }
  abrirDetalhes(id: number) {
this.router.navigate(['/doacoes', id]);
}



}
