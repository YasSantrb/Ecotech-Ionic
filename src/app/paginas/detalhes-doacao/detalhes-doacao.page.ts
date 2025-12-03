import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoacoesService } from '../../services/doacoes.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalhes-doacao',
  templateUrl: './detalhes-doacao.page.html',
  styleUrls: ['./detalhes-doacao.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButton, IonCard, IonCardHeader, IonCardContent,
    CommonModule, FormsModule
  ]
})
export class DetalhesDoacaoPage implements OnInit {

  doacao: any = null;
  userId: number = 1; // pega do storage futuramente
  isOwner: boolean = false;
  placeholder = 'assets/imagens/placeholder.jpg';

  constructor(
    private route: ActivatedRoute,
    private doacoesService: DoacoesService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.doacoesService.getDoacaoById(id).subscribe((data) => {
      this.doacao = data;
      this.isOwner = this.doacao?.usuario_id === this.userId; 
    });
  }

  editar() {
    this.router.navigate(['/editar-doacao', this.doacao.id]);
  }

  excluir() {
    this.doacoesService.DeletarDoacao(this.doacao.id).subscribe(() => {
      this.router.navigate(['/feed-doacoes']);
    });
  }
}
