import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  FazerLogin() {
    if (!this.username || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }

    console.log('Usuário:', this.username);
    console.log('Senha:', this.password);

    alert('Login realizado! (API será integrada depois)');
  }

  IrParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}
