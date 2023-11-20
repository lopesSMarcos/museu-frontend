import { useEffect, useState } from 'react';
import TopBar from '../../components/TopBar';
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import ListComponent from '../../components/List';
import Button from '../../components/Button';
import Itens from '../../components/Itens';
import Buscador from '../../components/Buscador';

export default function ListarSecao() {
  const [data, setData] = useState<{ content: Secao[] }>({ content: [] });
  const [busca, setBusca] = useState('');
  const navegar = useNavigate();

  useEffect(() => {
    // Faz uma chamada para a API para obter dados de funcionários
    api
      .get('/secao')
      .then((response) => {
        // Atualiza o estado com os dados recebidos da API
        setData(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  const handleCadastrar = () => {
    navegar('/secao/cadastrar');
  };
  return (
    <div>
      <TopBar />

      <div className="div-btn">
        <Button
          children="Adicionar Seção"
          className="btn-adc-funcionario"
          onClick={handleCadastrar}
        />
      </div>
      <Buscador busca={busca} setBusca={setBusca}/>
      <Itens data={data} busca={busca} type='secao'/>
      {/* <div id="funcionarios" className="list-funcionarios">
        {data.content.map((secao, index) => (
          // Renderiza o componente FuncionarioComponent para cada funcionário
          <ListComponent key={index} secao={secao} />
        ))}
      </div> */}
    </div>
  );
}
