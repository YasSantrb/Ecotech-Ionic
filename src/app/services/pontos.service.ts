// src/app/services/pontos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PontosService {

  private apiUrl = "https://yassant2.pythonanywhere.com/api/";

  constructor(private http: HttpClient) {}

  listarPontos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
