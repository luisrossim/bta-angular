export interface Usuario {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    role: Role
    atualizadoEm: Date | string;
    criadoEm: Date | string;
}

export interface Role {
    id: number
    sigla: string
}

export type SeverityType = 'danger' | 'success' | 'info' | 'secondary';