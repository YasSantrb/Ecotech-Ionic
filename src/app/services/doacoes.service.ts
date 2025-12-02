import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from './auth';
import { Doacao } from '../paginas/feed-doacoes/doacao.model';

@Injectable({
  providedIn: 'root',
})
export class DoacoesService {
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
      })
    };
  }

  ListarDoacoes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}todas_doacoes/`, this.getHeader());
  }
  ListarMinhasDoacoes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}minhas_doacoes/`, this.getHeader());
  }
  CriarDoacao(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}minhas_doacoes/`, data, this.getHeader());
  }
  AtualizarDoacao(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}minhas_doacoes/${id}/`, data, this.getHeader());
  }
  DeletarDoacao(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}minhas_doacoes/${id}/`, this.getHeader());
  }




}


