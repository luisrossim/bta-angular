import { Atribuicao } from "./atribuicao"
import { Etapa } from "./etapa"

export interface HistoricoOS {
  id: string
  ordemServicoId: string
  atribuicoes?: Atribuicao[]
  etapa: Etapa
  observacoes?: string
  concluidoEm?: Date
  atualizadoEm: Date
  criadoEm: Date
}