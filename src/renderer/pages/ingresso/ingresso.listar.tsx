import { useEffect, useState } from "react";
import Buscador from "../../components/Buscador";
import Itens from "../../components/Itens";
import { getIngresso } from "../../context/AuthProvider/utils";
import styles from './ingresso.module.css';
import { useNavigate } from "react-router-dom";



export default function ListarIngressos() {
    const [busca, setBusca] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const fetchApi = async () => {
        const request = await getIngresso();
        setData(request?.data);
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div className={styles.section}>
            <h3>Área de Ingressos</h3>
            <div>
                <div className={styles.nav}>
                    <div className={styles.buttons}>
                        <button onClick={() => navigate('/ingressos/novo')}>Novo Ingresso</button>
                        <button onClick={() => navigate('/categoria')}>Cadastrar Categoria</button>
                    </div>
                    
                    <Buscador busca={busca} setBusca={setBusca} />
                </div>
                
                <Itens busca={busca} data={data} type="ingressos"/>
                
            </div>
        </div>
    )
}