import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CorretorCompleto } from '../interface/corretor';
import { Usuario } from '../interface/usuario';
import { Cidade } from '../interface/cidade';

@Injectable({
  providedIn: 'root' 
})
export class CadastroService {
  private apiUrl = 'http://localhost:8080/v1/'; 

  constructor(private http: HttpClient) {}

  addCorretor(corretor: CorretorCompleto): Observable<CorretorCompleto> {
    return this.http.post<CorretorCompleto>(this.apiUrl + 'corretores', corretor);
  }

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl + 'clientes', usuario);
  }

  getCidades(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'cidades');
  }

  getCidadesCodigoIbge(codigoIbge: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'cidades/' + codigoIbge);
  }

  getBairros(idCidade:string): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'bairros/' + idCidade);
  }
}