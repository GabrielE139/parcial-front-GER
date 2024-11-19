import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contrato } from '../models/contrato.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  private url = 'http://localhost:8080/contrato';
  constructor(private http: HttpClient) { }

  getAllContratos() {
    return this.http.get<Contrato[]>(`${this.url}/contratos`);
  }

  crearContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(`${this.url}/crearContrato`, contrato);
  }
}
