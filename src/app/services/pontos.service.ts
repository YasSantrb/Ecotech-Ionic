// src/app/services/pontos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from './auth';

@Injectable({ providedIn: 'root' })
export class PontosService {
  private apiUrl = "https://yassant2.pythonanywhere.com/api/";

  constructor(
    private http: HttpClient,
    private auth: Auth
  ) {}

  getHeader() {
    const token = this.auth.gettoken();
    return {
      headers: new HttpHeaders({
        'Authorization': `Token ${token}`,
        'content-type': 'application/json'
      })
    };
  }

  ListarTodosPontos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}todos_pontos_coleta/`, this.getHeader());
  }
  ListarMeusPontos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}meus_pontos_coleta/`, this.getHeader());
  }
  CriarPonto(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}meus_pontos_coleta/`, data, this.getHeader());
  }
  AtualizarPonto(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}meus_pontos_coleta/${id}/`, data, this.getHeader());
  }
  DeletarPonto(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}meus_pontos_coleta/${id}/`, this.getHeader());
  }




}
