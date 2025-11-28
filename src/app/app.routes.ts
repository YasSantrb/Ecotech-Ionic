import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./paginas/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./paginas/cadastro/cadastro.page').then( m => m.CadastroPage)
  },
];
