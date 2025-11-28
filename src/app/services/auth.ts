import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiurl = "https://127.0.0:8000/api";
  private tokenkey = "auth-token";
  constructor(private http : HttpClient) {};
}
