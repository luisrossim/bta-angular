import { Cliente } from "./cliente";
import { HistoricoOS } from "./historico-os";

export interface OrdemServico {
  id: string;
  clienteId: number;
  hasAutomacao?: boolean;
  hasOrcamentoBanco?: boolean;
  hasProjetoPlantio?: boolean;
  quantidadeSetores?: number;
  criadoEm: Date;
  cliente: Cliente;
  historicoOs: HistoricoOS[];
  latestHistorico: HistoricoOS;
}