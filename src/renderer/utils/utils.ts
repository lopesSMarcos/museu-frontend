import { api } from "../api/api";
import { IFuncionario } from "../types/interfaces";


export async function getDivisao(id?: number) {
    try {
        if(id) {
            const request = await api.get(`divisao/${id}`);

            return request;
        } else {
            const request = await api.get(`divisao`);

            return request; 
        }
    }catch (e){
        let result = (e as Error).message;

        console.log(result);    
    }
}


export async function getFuncionario(id?: number) {
    try {
        if(id) {
            const request = await api.get(`funcionarios/${id}`);

            return request;
        } else {
            const request = await api.get(`funcionarios`);

            return request
        }
    } catch (e) {
        let result = (e as Error).message;

        console.log(result);
    }
}

export async function postFuncionario(params: IFuncionario) {
    try {
        const request = await api.post(`funcionarios`, params);

        return request;
    } catch (e) {
        let result = (e as Error).message;

        console.log(result);
    }
}

export async function getIngresso(id?: number) {
    try {
        if(id) {
            const request = await api.get(`ingressos/${id}`);

            return request;
        } else {
            const request = await api.get(`ingressos`);

            return request;
        }
    } catch(e:any) {
        let result = (e as Error).message;
        console.log(result);
    }
}