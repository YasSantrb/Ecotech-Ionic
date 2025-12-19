import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonSelectOption, IonButton, IonInput, IonSelect, IonTextarea, IonBackButton, IonButtons, IonIcon} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DoacoesService } from '../../services/doacoes.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editar-doacao',
  templateUrl: './editar-doacao.page.html',
  styleUrls: ['./editar-doacao.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonSelectOption, IonButton, IonInput, IonSelect, IonTextarea, IonBackButton, IonButtons, IonIcon]
})
export class EditarDoacaoPage implements OnInit {
  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state) {
      this.doacao = nav.extras.state['item']; 
      this.doacaobackup = { ...this.doacao }; 
      this.preview = this.doacao.foto_url || this.placeholder;
    }else {
        console.warn('Nenhum item de doação fornecido para edição.');
        this.router.navigate(['/detalhes-doacao']); 
    }
  }

doacao: any = {
    nome_doacao: '',
    especificacao: '',
    endereco: '',
    descricao_geral: '',
    observacao: '',
    condicao: '',
    foto_url: ''
  };

  editando: boolean = false;
  doacaobackup: any = null;

  placeholder = 'assets/imagens/placeholder.jpg';
  preview: string = this.placeholder;

  constructor(
    private service: DoacoesService,
    private router: Router,
    private navController: NavController,
  ) {}

  fotoSelecionada: File | null = null;

selecionarImagem(event: any) {
  const file = event.target.files[0];
  if (!file) return;

  this.fotoSelecionada = file; 

  const reader = new FileReader();
  reader.onload = () => {
    this.preview = reader.result as string;
  };
  reader.readAsDataURL(file);
}

SalvarAlteracoes() {
  if (!this.doacao.nome_doacao || !this.doacao.condicao) {
    alert('Preencha pelo menos Nome e Condição.');
    return;
  }
  const formData = new FormData();
  formData.append('nome_doacao', this.doacao.nome_doacao);
  formData.append('especificacao', this.doacao.especificacao);
  formData.append('endereco', this.doacao.endereco);
  formData.append('descricao_geral', this.doacao.descricao_geral);
  formData.append('observacao', this.doacao.observacao);
  formData.append('condicao', this.doacao.condicao);

  if (this.fotoSelecionada) {
    formData.append('fotos_eletronico', this.fotoSelecionada);
  }

  this.service.AtualizarDoacao(this.doacao.id, formData).subscribe({ 
    next: () => {
      this.router.navigate(['/detalhes-doacao', this.doacao.id], { replaceUrl: true });
    },
    error: err => {
      console.error('Erro ao salvar alteração da doação', err);
    }
  });
}

 Cancelaredicao() {
    this.editando = false;
    this.doacao = { ...this.doacaobackup };
    this.router.navigate(['/detalhes-doacao', this.doacao.id], { 
        replaceUrl: true 
    });
  }
}
