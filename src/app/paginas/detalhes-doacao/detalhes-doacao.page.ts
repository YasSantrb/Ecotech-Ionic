import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalhes-doacao',
  templateUrl: './detalhes-doacao.page.html',
  styleUrls: ['./detalhes-doacao.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetalhesDoacaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
