import { useEffect, useState } from 'react';
import Buscador from '../../components/Buscador';
import TopBar from '../../components/TopBar';
import Itens from '../../components/Itens';
import './divisao.css';
import { getDivisao } from '../../context/AuthProvider/utils';

export default function ListarDivisao() {
  const [data, setData] = useState([]);
  const [busca, setBusca] = useState('');



  const fetchApi = async () => {
    const request = await getDivisao();
    setData(request?.data);
  }

  useEffect(() => {
    fetchApi();
    
  }, []);

  return (
    <div>
      <TopBar />
      <div className='section'>
        <h3>Divisões</h3>
        <Buscador busca={busca} setBusca={setBusca}/>
        <div>
          <Itens busca={busca} data={data} type='divisao' />
        </div>
      </div>
    </div>
  );
}
