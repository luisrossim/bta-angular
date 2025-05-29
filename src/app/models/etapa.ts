import { Usuario } from "./usuario";

export interface Etapa {
  id: number;
  descricao: string;
  etapaUsuario: Vinculacao[];
}

export interface Vinculacao {
  etapaId: number
  usuarioId: number
  usuario: Usuario
}

export interface EtapaUsuario {
  etapa: Etapa;
  usuarios: Usuario[];
}

export interface CreateEtapaUsuario { 
  etapaId: number
  usuarioIds: number[]
}