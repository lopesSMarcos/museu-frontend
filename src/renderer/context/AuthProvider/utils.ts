import { api } from "../../api/api";
import { IFuncionario, IUser } from "../../types/interfaces";


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

export async function LoginRequest(login: string, senha: string) {
    try {
        const request = await api.post('login', {
            login,
            senha
        });

        return request.data;

    } catch (error) {
        return null;
    }
}

export async function getCategoriaIngressos(id?: number) {
    try {
        if(id) {
            const request = await api.get(`categoria/${id}`);

            return request;
        } else {
            const request = await api.get(`categoria`);

            return request.data;
        }
    } catch(e:any) {
        let result = (e as Error).message;
        console.log(result);
    }
}

export function setUserLocalStorage(user: IUser | null) {
    if(user)
        sessionStorage.setItem('u', JSON.stringify(user));
    else
        sessionStorage.removeItem('u');
}

export function getUserLocalStorage() {
    const user = sessionStorage.getItem('u');

    return user ? JSON.parse(user) : null;
}