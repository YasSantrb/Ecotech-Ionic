import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PontosService } from '../../services/pontos.service';

@Component({
  selector: 'app-detalhes-pcoleta',
  templateUrl: './detalhes-pcoleta.page.html',
  styleUrls: ['./detalhes-pcoleta.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule]
})
export class DetalhesPcoletaPage implements OnInit {
  ponto: any=null;
  editando: boolean = false;
  pontobackup: any = null;
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private pontosService: PontosService
  ) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state) {
      this.ponto = nav.extras.state['item'];  
    }
  }
 Voltar() {
    this.navCtrl.back();
  }

  EditarPonto() {
    this.router.navigate(['/editar-pcoleta'], {
      state: { item: this.ponto }
    });
  }

  async ExcluirPonto() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmação',
      message: 'Tem certeza que deseja excluir este ponto?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Excluir',
          handler: () => {
            this.pontosService.DeletarPonto(this.ponto.id).subscribe(() => {
              this.navCtrl.back();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  Editarponto() {
    this.editando = true;
    this.pontobackup = { ...this.ponto };
  }
  SalvarAlteracoes() {
    this.pontosService.AtualizarPonto(this.ponto.id, this.ponto).subscribe({
      next: () => {
        this.editando = false;
      },
      error: (err) => {
        console.log('Erro ao salvar', err);
      },
    });
  }
  Cancelaredicao() {
    this.editando = false;
    this.ponto = { ...this.pontobackup };
  }



}