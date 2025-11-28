import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class CadastroPage {
  nomeUsuario: string = '';
  email: string = '';
  senha: string = '';
  cep: string = '';
  cpfCnpj: string = '';
  telefone: string = '';

  constructor() {}

  Cadastrar() {
    if (!this.nomeUsuario || !this.email || !this.senha || !this.cep || !this.cpfCnpj || !this.telefone) {
      alert('Preencha todos os campos!');
      return;
    }

    console.log('Nome de usuário:', this.nomeUsuario);
    console.log('E-mail:', this.email);
    console.log('Senha:', this.senha);
    console.log('CEP:', this.cep);
    console.log('CPF/CNPJ:', this.cpfCnpj);
    console.log('Telefone:', this.telefone);

    alert('Cadastro realizado com sucesso!');
  }
}
