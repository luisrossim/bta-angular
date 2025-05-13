import { CrudService } from './crud.service';
import { Cliente } from '../../models/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends CrudService<Cliente> {

  constructor() {
    super('/v1/cliente');
  }
}