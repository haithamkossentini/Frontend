import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipeService {
  baseUrl: string = 'http://127.0.0.1:85/equipes';

  constructor(private http: HttpClient) {}

  getAllEquipes() {
    return this.http.get(this.baseUrl);
  }

  getEquipeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  addEquipe(equipe: any): Observable<any> {
    return this.http.post(this.baseUrl, equipe);
  }

  updateEquipe(equipe: any) {
    return this.http.put(`${this.baseUrl}/${equipe['id']}`, equipe);
  }
  deleteEquipeById(id: string) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
