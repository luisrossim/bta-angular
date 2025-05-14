import { Usuario } from "./usuario";

export interface Etapa {
  id: number;
  descricao: string;
}

export interface EtapaUsuario {
  etapa: Etapa;
  usuarios: Usuario[];
}

export interface CreateEtapaUsuario { 
  etapaId: number
  usuarioIds: number[]
}