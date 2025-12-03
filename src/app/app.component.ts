import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import {IonBackButton, IonApp, IonRouterOutlet, IonMenu, IonContent, IonList, IonAvatar, IonMenuToggle, IonItem, IonIcon, IonLabel, IonNote } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { gift, location, logOut, giftOutline, locationOutline, logOutOutline, addCircleOutline, businessOutline } from 'ionicons/icons';
import { MenuController } from '@ionic/angular';
import { Auth } from './services/auth';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  imports: [CommonModule, IonBackButton, IonApp, IonRouterOutlet, IonMenu, IonContent, IonList, IonAvatar, IonMenuToggle, IonItem, IonIcon, IonLabel, IonNote], 
  standalone: true 
})
export class AppComponent implements OnInit, OnDestroy { 
  userName: string = 'Usuário';
  userEmail: string = 'email@exemplo.com';
  userRole: string = 'Tipo Desconhecido';
  isDoador: boolean = false;
  isEmpresa: boolean = false;
  
  public appPages = [
    { title: 'Feed de Doações', url: '/feed-doacoes', icon: 'gift' },
    { title: 'Pontos de Coleta', url: '/pontos-coleta', icon: 'location' }, 
  ];
  
  constructor(
    private authService: Auth,
    private router: Router, 
    private menuCtrl: MenuController,
  ) {
    addIcons({gift, location, logOut, giftOutline, locationOutline, logOutOutline, addCircleOutline, businessOutline});
  }
  ionViewWillEnter() {
  this.verificarFuncaoDoUsuario();
  }

  private authSubscription: Subscription | undefined
  
  ngOnInit(): void {
    this.carregarDadosDoPerfil();
    this.verificarFuncaoDoUsuario();
    this.authSubscription = this.authService.authState$.subscribe(() => {
      this.carregarDadosDoPerfil();
      this.verificarFuncaoDoUsuario();
    });
  }


  verificarFuncaoDoUsuario() {
    const userRole = this.authService.getUserRole(); 

    if (userRole === 'DOADOR') {
      this.isDoador = true;
      this.isEmpresa = false;
    } else if (userRole === 'EMPRESA') {
      this.isEmpresa = true;
      this.isDoador = false;
    }
    else {
    this.isDoador = false;
    this.isEmpresa = false;
  }
  }
  
  navegar(url: string) {
    this.router.navigate([url]);
    this.menuCtrl.close('main-menu'); 
  }
  
  logout() {
    this.authService.logout();
    this.carregarDadosDoPerfil(); 
    
    this.verificarFuncaoDoUsuario(); 
    
    this.router.navigate(['/']);
    this.menuCtrl.close('main-menu');
  }
  
  carregarDadosDoPerfil() {
    this.userName = this.authService.getNomeUsuario() || 'Usuário'; 
    this.userEmail = this.authService.getEmailUsuario() || 'Não Informado'; 
    this.userRole = this.authService.getUserRole() || 'Tipo Desconhecido';

    const userRole = this.userRole;
    this.isDoador = userRole === 'DOADOR';
    this.isEmpresa = userRole === 'EMPRESA';
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }

  }
}