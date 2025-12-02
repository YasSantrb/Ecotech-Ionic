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
  },
  {
    path: 'criar-ponto',
    loadComponent: () => import('./paginas/criar-ponto/criar-ponto.page').then( m => m.CriarPontoPage)
  },
  {
    path: 'detalhes-pcoleta',
    loadComponent: () => import('./paginas/detalhes-pcoleta/detalhes-pcoleta.page').then( m => m.DetalhesPcoletaPage)
  },  {
    path: 'feed-doacoes',
    loadComponent: () => import('./paginas/feed-doacoes/feed-doacoes.page').then( m => m.FeedDoacoesPage)
  },
  {
    path: 'detalhes-doacao',
    loadComponent: () => import('./paginas/detalhes-doacao/detalhes-doacao.page').then( m => m.DetalhesDoacaoPage)
  }



];
