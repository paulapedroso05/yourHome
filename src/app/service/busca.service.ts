import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CorretorBusca } from '../interface/corretor';

@Injectable({
  providedIn: 'root' 
})
export class BuscaService {
  private apiUrl = 'http://localhost:8081/v1/usuarios/'; 

  constructor(private http: HttpClient) {}

  buscaCorretor(user: number, parametros: { [key: string]: string }): Observable<any> {

    let queryParams = Object.keys(parametros)
      .map(chave => `${chave}:${parametros[chave]}`) 
      .join(' '+'AND'+' '); 

    const url = `${this.apiUrl}${user}/corretores?search=${queryParams}`;

    return this.http.get<any>(url);
}

}