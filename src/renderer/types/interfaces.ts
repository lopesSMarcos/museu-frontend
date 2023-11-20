export interface IItem {
    id: number;
    nome: string;
    descricao: string;
    type: string;
}

export interface IFuncionario {
    id?: number;
    nome?: string;
    cpf?: string;
    email?: string;
    telefone?: string;
    senha?: string;
    rg?: string;
    endereco?: Endereco;
    role?: string;
    area_especialização?: string;
    salario?: number;

}

interface Endereco {
    rua?: string;
    numero?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    cep?: string;
}