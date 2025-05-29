import { HistoricoOS } from "./historico-os";
import { Usuario } from "./usuario";

export interface Atribuicao {
  historico: HistoricoOS
  usuario: Usuario
}

export interface CreateAtribuicao {
  historicoId: string
  usuarioId: string
}