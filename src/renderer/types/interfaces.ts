import { SetStateAction } from "react";

export interface IItem {
    id: number;
    nome: string;
    descricao: string;
    type?: string;
    buttons?: any;
}

export interface IPaginationHook {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    onPageChange?: (page: number) => void;
    siblingCount?: number;
}

export interface IPagination{
    totalCount: number;
    currentPage: number;
    pageSize: number;
    onPageChange: (page: number | string) => void;
    siblingCount?: number;
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

export interface IUser {
    login?: string;
    token?: string;
    roles?: string[];
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
}