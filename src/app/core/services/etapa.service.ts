import { CrudService } from './crud.service';
import { Injectable } from '@angular/core';
import { Etapa } from '../../models/etapa';

@Injectable({
  providedIn: 'root'
})
export class EtapaService extends CrudService<Etapa> {

  constructor() {
    super('/v1/etapa');
  }
}