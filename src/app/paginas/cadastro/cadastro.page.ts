import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Auth } from 'src/app/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class CadastroPage {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  cep: string = '';
  cpfCnpj: string = '';
  telefone: string = '';

  constructor(
    private router: Router,
    private auth: Auth,
  ) {}

  Cadastrar() {
    if (!this.username || !this.email || !this.password || !this.cep || !this.cpfCnpj || !this.telefone) {
      alert('Preencha todos os campos!');
      return;
    }
    this.auth.cadastro({
      username: this.username,
      email: this.email,
      password: this.password,
      confirmar_senha: this.confirmPassword,
      profile: {
      cep: this.cep,
      cpf_cnpj: this.cpfCnpj,
      telefone: this.telefone
    }})
      .subscribe({
        next: (res) => {
          console.log('Cadastrado!',res);
          this.router.navigate(['/feed-doacoes'])
        }
      })


    console.log('Nome de usuário:', this.username);
    console.log('E-mail:', this.email);
    console.log('Senha:', this.password);
    console.log('Confirmar Senha:', this.confirmPassword);
    console.log('CEP:', this.cep);
    console.log('CPF/CNPJ:', this.cpfCnpj);
    console.log('Telefone:', this.telefone);

  }
}
