import { Endereco } from "./endereco"

export interface Cliente {
  id: number
  nome: string
  telefone: string
  cpf: string
  isAtivo: boolean
  atualizadoEm: Date | string
  criadoEm: Date | string
  enderecos?: Endereco[]
}