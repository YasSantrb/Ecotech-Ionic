import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonMenuButton, IonButtons, IonCard, IonCardHeader, IonCardContent, IonFab, IonFabButton, IonFabList, IonIcon} from '@ionic/angular/standalone';
import { DoacoesService } from '../../services/doacoes.service';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacoes-doacoes',
  templateUrl: './informacoes-doacoes.page.html',
  styleUrls: ['./informacoes-doacoes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonMenuButton, IonCard, IonCardHeader, IonCardContent, IonFab, IonFabButton, IonFabList, IonIcon]
})
export class InformacoesDoacoesPage implements OnInit {
  doacoes: any[] = [];
  loading: boolean = true;
  placeholder = 'assets/imagens/placeholder.jpg';
  constructor(
    private Doacoes: DoacoesService,
    private authService: Auth,
    private router: Router,
  ) { }

  ionViewWillEnter() {
  this.carregar();
  }
  carregar() {
    this.loading = true;
    this.Doacoes.ListarMinhasDoacoes().subscribe({
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

verDetalhes(doacaoId: number) {
    this.router.navigate(['/detalhes-doacao', doacaoId]);
  }

  criarDoacao() {
  this.router.navigate(['/criar-doacao']);
}

  ngOnInit() {
  }

}
