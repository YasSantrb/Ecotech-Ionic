import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoacoesService } from '../../services/doacoes.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Auth } from 'src/app/services/auth';
import { NavController } from '@ionic/angular';

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
  userId: number | null = null; 
  isOwner: boolean = false;
  placeholder = 'assets/imagens/placeholder.jpg';
  isDoador: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private doacoesService: DoacoesService,
    private router: Router,
    private alertController: AlertController, 
    private toastController: ToastController, 
    private navController: NavController,
    private authService: Auth
    ) {
      this.checkUserRole();
      const idUsuarioString = this.authService.getIdUsuario();
      if (idUsuarioString) {
          this.userId = Number(idUsuarioString);
      } else {
          this.userId = null;
      }
    }
    

    checkUserRole() {
        const userRole = this.authService.getUserRole();
        this.isDoador = userRole === 'DOADOR';
    }

    voltar() {
      this.navController.back();
    }

    

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.doacoesService.getDoacaoById(id).subscribe((data) => {
      this.doacao = data;
       if (this.userId !== null) { 
         this.isOwner = Number(this.doacao?.usuario) === this.userId;
       }
    });
  }

  editarDoacao() {
    this.router.navigate(['/editar-doacao', this.doacao.id], {
      state: {item: this.doacao}
    });
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
  
  async excluirDoacao() {
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
        this.router.navigate(['/informacoes-doacoes']); 
      },
      error: (err) => {
        this.presentToast('Erro ao excluir a doação.', 'danger');
        console.error('Erro de deleção:', err);
      }
    });
  }
}
