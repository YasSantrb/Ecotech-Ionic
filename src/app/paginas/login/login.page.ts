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
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private auth: Auth) {}

  FazerLogin() {
    if (!this.email || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }
    this.auth.login({ 
      email: this.email, 
      password: this.password })
      .subscribe({
      next: () => {},
      error: () => {},
  });
  
  
    console.log('Usuário:', this.email);
    console.log('Senha:', this.password);

}
  IrParaCadastro() {
    this.router.navigate(['registro']);
  }
}

