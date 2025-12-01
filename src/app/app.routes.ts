import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./paginas/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./paginas/cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'pontos-coleta',
    loadComponent: () => import('./paginas/pontos-coleta/pontos-coleta.page').then( m => m.PontosColetaPage)
  },

  {
    path: 'pontos-coleta',
    loadComponent: () =>import('./paginas/pontos-coleta/pontos-coleta.page').then(m => m.PontosColetaPage)
  }

];
