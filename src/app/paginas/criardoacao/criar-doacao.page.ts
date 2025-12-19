import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DoacoesService } from '../../services/doacoes.service';

@Component({
  selector: 'app-criar-doacao',
  standalone: true,
  templateUrl: './criar-doacao.page.html',
  styleUrls: ['./criar-doacao.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class CriarDoacaoPage {

  arquivoSelecionado: File | null = null;

  doacao: any = {
    nome_doacao: '',
    especificacao: '',
    endereco: '',
    descricao_geral: '',
    observacao: '',
    condicao: ''
  };

  placeholder = 'assets/imagens/placeholder.jpg';
  preview: string = this.placeholder;

  constructor(
    private service: DoacoesService,
    private router: Router
  ) {}

  selecionarImagem(event: any) {
    const file = event.target.files[0];
    if (!file) return;
    this.arquivoSelecionado = file; 
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  salvar() {
    if (!this.doacao.nome_doacao || !this.doacao.condicao) {
      alert('Preencha pelo menos Nome e Condição.');
      return;
    }

    const formData = new FormData();
    for (const key in this.doacao) {
      if (this.doacao.hasOwnProperty(key)) {
        formData.append(key, this.doacao[key]);
      }
    }

    if (this.arquivoSelecionado) {
      formData.append('fotos_eletronico', this.arquivoSelecionado, this.arquivoSelecionado.name);
    }
  
    this.service.CriarDoacao(formData).subscribe({
      next: () => {
        this.router.navigate(['/feed-doacoes']);
      },
      error: err => {
        console.error('Erro ao criar doação', err);
      }
    
    });
  }

}
