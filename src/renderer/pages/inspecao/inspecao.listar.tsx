import { useEffect, useState } from "react";
import Buscador from "../../components/Buscador";
import Itens from "../../components/Itens";
import { getInspecao } from "../../context/AuthProvider/utils";
import styles from './ingresso.module.css';
import { useNavigate } from "react-router-dom";



export default function ListarInspecao() {
    const [busca, setBusca] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    

    const fetchApi = async () => {
        const request = await getInspecao();
        setData(request?.data);
    }

    const buttons = () => {
        return (
            <div>
                <button onClick={() => navigate('/inspecao/concluir')}>Cadastrar Inspeção</button>
                <button onClick={() => navigate('/inspecao/remover')}>Concluir Inspeção</button>
            </div>
        )
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div className={styles.section}>
            <h3>Área de Inspeções</h3>
            <div>
                <div className={styles.nav}>
                    <div className={styles.buttons}>
                        <button onClick={() => navigate('/inspecao/novo')}>Cadastrar Inspeção</button>
                    </div>
                    
                    <Buscador busca={busca} setBusca={setBusca} />
                </div>
                
                <Itens busca={busca} data={data} type="inspecao" buttons={buttons}/>
                
            </div>
        </div>
    )
}