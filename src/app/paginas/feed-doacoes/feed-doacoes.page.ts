import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DoacoesService } from '../../services/doacoes.service';
import { IonicModule, MenuController} from '@ionic/angular';
import { Auth } from '../../services/auth';

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
  placeholder = 'assets/imagens/placeholder.jpg';

  isDoador: boolean = false;
  isEmpresa: boolean = false;

  constructor(
    private Doacoes: DoacoesService,
    private authService: Auth,
    private router: Router,
  ) { }
  ionViewWillEnter() {
  this.verificarFuncaoDoUsuario();
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
  this.router.navigate(['detalhes-doacao/', id]);
}
  criarDoacao() {
  this.router.navigate(['/criar-doacao']);
}

verificarFuncaoDoUsuario() {
    const userRole = this.authService.getUserRole(); 

    if (userRole === 'DOADOR') {
      this.isDoador = true;
      this.isEmpresa = false;
    } else if (userRole === 'EMPRESA') {
      this.isEmpresa = true;
      this.isDoador = false;
    }
  }

  verDetalhes(doacaoId: number) {
    this.router.navigate(['/detalhes-doacao', doacaoId]);
  }
}
