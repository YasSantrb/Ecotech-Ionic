import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoacoesService } from '../../services/doacoes.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes-doacao',
  templateUrl: './detalhes-doacao.page.html',
  styleUrls: ['./detalhes-doacao.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonicModule
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
    private router: Router,
    private alertController: AlertController, // Adicione este
    private toastController: ToastController // Adicione este
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

  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    await toast.present();
  }
  
  async excluir() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza que deseja excluir esta doação? Esta ação não pode ser desfeita.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.confirmarExclusao(); 
          }
        }
      ]
    });

    await alert.present();
  }

  confirmarExclusao() {
    if (!this.doacao?.id) return;

    this.doacoesService.DeletarDoacao(this.doacao.id).subscribe({
      next: () => {
        this.presentToast('Doação excluída com sucesso!', 'success');
        this.router.navigate(['/feed-doacoes']); 
      },
      error: (err) => {
        this.presentToast('Erro ao excluir a doação.', 'danger');
        console.error('Erro de deleção:', err);
      }
    });
  }
}
