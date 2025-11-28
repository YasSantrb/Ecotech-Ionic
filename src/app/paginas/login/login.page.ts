import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Auth } from 'src/app/services/auth';


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

  constructor(
    private router: Router,
    private auth: Auth) {}

  FazerLogin() {
    if (!this.username || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }
    this.auth.login({ 
      email: this.username, 
      password: this.password })
      .subscribe({
      next: (res) => {
      console.log('Logado!', res);
      this.router.navigate(['/home']);
    },
    error: (err) => {
      console.log('Deu ruim', err);
      alert('Credenciais Inválidas')
    },
  });
  
  
    console.log('Usuário:', this.username);
    console.log('Senha:', this.password);

}
  IrParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}

