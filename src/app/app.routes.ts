import { Routes } from '@angular/router';
import { CriarDoacaoPage } from './paginas/criardoacao/criar-doacao.page';

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
    path: 'pontos-coleta',
    loadComponent: () => import('./paginas/pontos-coleta/pontos-coleta.page').then( m => m.PontosColetaPage)
  },
  {
    path: 'criar-ponto',
    loadComponent: () => import('./paginas/criar-ponto/criar-ponto.page').then( m => m.CriarPontoPage)
  },
  {
    path: 'detalhes-pcoleta',
    loadComponent: () => import('./paginas/detalhes-pcoleta/detalhes-pcoleta.page').then( m => m.DetalhesPcoletaPage)
  },
  {
    path: 'feed-doacoes',
    loadComponent: () => import('./paginas/feed-doacoes/feed-doacoes.page').then( m => m.FeedDoacoesPage)
  },
  {
    path: 'detalhes-doacao/:id',
    loadComponent: () => import('./paginas/detalhes-doacao/detalhes-doacao.page').then( m => m.DetalhesDoacaoPage)
  },
  {
    path: 'criar-doacao',
    loadComponent: () => import('./paginas/criardoacao/criar-doacao.page').then( m => m.CriarDoacaoPage)
  },
  {
    path: 'informacoes-doacoes',
    loadComponent: () => import('./paginas/informacoes-doacoes/informacoes-doacoes.page').then( m => m.InformacoesDoacoesPage)
  },
  {
    path: 'editar-doacao/:id',
    loadComponent: () => import('./paginas/editar-doacao/editar-doacao.page').then( m => m.EditarDoacaoPage)
  }

];
