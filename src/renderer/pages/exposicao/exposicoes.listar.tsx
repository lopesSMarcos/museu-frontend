

import { useEffect, useState } from "react";
import Buscador from "../../components/Buscador";
import Itens from "../../components/Itens";
import { getExposicoes, getIngresso } from "../../context/AuthProvider/utils";
import styles from './ingresso.module.css';
import { useNavigate } from "react-router-dom";



export default function Exposicoes() {
    const [busca, setBusca] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const fetchApi = async () => {
        const request = await getExposicoes();
        setData(request?.data);
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div className={styles.section}>
            <h3>Área de Exposicoes</h3>
            <div>
                <div className={styles.nav}>
                    <div className={styles.buttons}>
                        <button onClick={() => navigate('/exposicoes/novo')}>Nova Exposição</button>
                    </div>
                    
                    <Buscador busca={busca} setBusca={setBusca} />
                </div>
                
                <Itens busca={busca} data={data} type="exposicoes"/>
                
            </div>
        </div>
    )
}