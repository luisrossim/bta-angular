import { CrudService } from './crud.service';
import { Injectable } from '@angular/core';
import { CreateEtapaUsuario, Etapa, EtapaUsuario } from '../../models/etapa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtapaService extends CrudService<Etapa> {

  constructor() {
    super('/v1/etapa');
  }

  public getRelacionamentos(): Observable<EtapaUsuario[]> {
    return this.http.get<EtapaUsuario[]>(`${this.apiUrl}/relacionamentos`);
  }

  public createRelacionamento(data: CreateEtapaUsuario): Observable<any> {
    return this.http.post<CreateEtapaUsuario>(`${this.apiUrl}/vincular`, data);
  }
}