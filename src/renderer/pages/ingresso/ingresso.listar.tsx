import { useEffect, useState } from "react";
import Buscador from "../../components/Buscador";
import Itens from "../../components/Itens";
import { getIngresso } from "../../utils/utils";



export default function ListarIngressos() {
    const [busca, setBusca] = useState('');
    const [data, setData] = useState([]);

    const fetchApi = async () => {
        const request = await getIngresso();
        setData(request?.data);
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div>
            <h3>Ingressos</h3>

            <div>
                <div>
                    <button>Novo Ingresso</button>
                    <Buscador busca={busca} setBusca={setBusca} />
                </div>
                <div>
                    <Itens busca={busca} data={data} type="ingressos"/>
                </div>
            </div>
        </div>
    )
}