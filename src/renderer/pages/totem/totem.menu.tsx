import { useState } from "react";
import { redirect } from "react-router-dom";
import styles from "./totem.module.css";
import Itens from "../../components/Itens";
import Buscador from "../../components/Buscador";

const buttons = [
    {
        nome: "Crianças Perdidas",
        url: "/criancasperdidas"
    },
    {
        nome: "Encontrar Seção",
        url: "/encontrarsecao"
    }
]

export default function Menu() {
    const [secao, setSecao] = useState<string>();
    const [pecas, setPecas] = useState<any[]>([]);
    const [busca, setBusca] = useState<string>('');
    

    return (
        <div>
            <div>
                <h1>Olá, bem vindo a Seção: ${secao}</h1>
            </div>
            <div>
                <ul>
                    {buttons.map((button) => (
                        <li>
                            <button onClick={() => redirect(button.url)}>{button.nome}</button>
                        </li>
                    ))}
                </ul>
                
            </div>
            <div>
                <label>Peças Presentes na Seção Atual</label>
                <Buscador busca={busca} setBusca={setBusca} />
                <div>
                    <Itens busca={busca}/>
                </div>
            </div>
            
            
        </div>
    )
}