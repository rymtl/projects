import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/login'; // Remplace par l'URL de ton API


  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const url = `http://localhost:3000/users?email=${email}&password=${password}`;
    return this.http.get<any>(url); // Vérification utilisateur via GET
  }
  
}
