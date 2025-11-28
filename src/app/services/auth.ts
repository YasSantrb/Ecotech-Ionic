import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiurl = "http://127.0.0.1:8000/api";
  private tokenkey = "auth-token";
  constructor(private http : HttpClient) {};

cadastro(data: any): Observable<any>{
  return this.http.post(`${this.apiurl}/registro/`, data);
}
login(credentials: any): Observable<any>{
  return this.http.post(`${this.apiurl}/login`, credentials).pipe(
    tap((res:any) => {
    if(res.token){
      localStorage.setItem(this.tokenkey,res.token)
      }
    })
  )
};
gettoken(): string| null {
  return localStorage.getItem(this.tokenkey);
}
logout(): void{
  localStorage.removeItem(this.tokenkey);
}
isLoggedIn(): boolean {
  return !!this.gettoken();
}
}