import { CrudService } from './crud.service';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends CrudService<Usuario> {

  constructor() {
    super('/v1/usuario');
  }
}