export interface Endereco {
    id: number;
    clienteId: number;
    cidade: string;
    estado: string;
    hectare: number;
    coordenadasGeograficas: string | null;
    kmLojaCliente: number;
    referencia: string;
    descricao: string;
    atualizadoEm: Date | string;
    criadoEm: Date | string;
}