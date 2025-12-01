import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalhes-pcoleta',
  templateUrl: './detalhes-pcoleta.page.html',
  styleUrls: ['./detalhes-pcoleta.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetalhesPcoletaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
