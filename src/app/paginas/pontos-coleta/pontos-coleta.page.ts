import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pontos-coleta',
  templateUrl: './pontos-coleta.page.html',
  styleUrls: ['./pontos-coleta.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PontosColetaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
