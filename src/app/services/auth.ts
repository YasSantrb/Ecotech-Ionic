import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiurl = "https://yassant2.pythonanywhere.com/api/";
  private tokenkey = "auth-token";
  private roleKey = "user-role";
  private nomeUsuario = "user-name";
  private emailUsuario = "user-email";
  private idUsuario = "user-id";
  private authState = new Subject<void>();
  authState$ = this.authState.asObservable();
  constructor(
    private http : HttpClient, 
    private router: Router,
  ) {};

cadastro(data: any): Observable<any>{
  return this.http.post(`${this.apiurl}registro/`, data);
}
private handleAuthSuccess(res: any): void {
    if(res.token){
      localStorage.setItem(this.tokenkey, res.token);
    }
    if (res.profile && res.profile.tipo_usuario) {
      localStorage.setItem(this.roleKey, res.profile.tipo_usuario); 
    }
    if (res.username) { 
      localStorage.setItem(this.nomeUsuario, res.username); 
    }
    if (res.email) { 
      localStorage.setItem(this.emailUsuario, res.email); 
    }
    if (res.usuario_id) { 
      localStorage.setItem(this.idUsuario, res.usuario_id); 
    }
    this.authState.next();
  }
  login(credentials: any): Observable<any>{
    return this.http.post(`${this.apiurl}login/`, credentials).pipe(
      tap((res:any) => {
        console.log('Logado!', res);
        this.handleAuthSuccess(res);
        this.router.navigate(['/feed-doacoes']); // <--- A navegação está aqui!
      }),
      catchError(err => {
        console.log('Erro no Login (Auth.ts)', err);
        alert('Erro ao fazer login. Código do erro: ' + err.status); // <--- O tratamento de erro está aqui!
        return throwError(() => err);})
    );
  }


getIdUsuario(): string | null {
  return localStorage.getItem(this.idUsuario);
}
getNomeUsuario(): string | null {
   return localStorage.getItem(this.nomeUsuario);
  }

getEmailUsuario(): string | null {
   return localStorage.getItem(this.emailUsuario);
  }

getUserRole(): string | null {
   return localStorage.getItem(this.roleKey);
  }

gettoken(): string| null {
  return localStorage.getItem(this.tokenkey);
}
logout(): void{
  localStorage.removeItem(this.tokenkey);
  localStorage.removeItem(this.roleKey);
  localStorage.removeItem(this.nomeUsuario); 
  localStorage.removeItem(this.emailUsuario);
  localStorage.removeItem(this.idUsuario)
  this.authState.next();
}
isLoggedIn(): boolean {
  return !!this.gettoken();
}
}