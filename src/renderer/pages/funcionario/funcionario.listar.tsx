import React, { useEffect, useState } from 'react';
import TopBar from '../../components/TopBar';
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Itens from '../../components/Itens';
import Buscador from '../../components/Buscador';
import { getFuncionario } from '../../utils/utils';

export default function ListarFuncionario() {
  // Inicializa o estado com um objeto contendo uma propriedade 'content' que é um array de Funcionario
  const [data, setData] = useState<{ content: Funcionario[] }>({ content: [] });
  const [numberOfFuncionarios, setNumberOfFuncionarios] = useState(0);
  const [busca, setBusca] = useState('');
  const navegar = useNavigate();

  const handleCadastrar = () => {
    navegar('/funcionarios/cadastrar');
  };

  const fetchApi = async () => {
    const request = await getFuncionario();
    setData(request?.data);
    setNumberOfFuncionarios(request?.data.content.length);
  }

  useEffect(() => {
   fetchApi();
  }, []);

  return (
    <div>
      <TopBar />

      <div className="options-pages">
        <div>
          <h3>Funcionários</h3>
          {/* <Buscador busca={busca} setBusca={setBusca}/> */}
          <div id="qnt-funcionarios" className="sub-info">
            {numberOfFuncionarios} funcionários
          </div>
        </div>
        <div className="viagenspesq">
          <div>Viagens Pesquisadores</div>
          <div className="sub-info">18 viagens</div>
        </div>
      </div>

      <div className="div-btn">
      
        <button
          id="btn-adc-funcionario"
          className="btn-adc-funcionario"
          onClick={handleCadastrar}
        >
          Adicionar funcionário
        </button>
        <Buscador busca={busca} setBusca={setBusca}/>
      </div>
        <Itens busca={busca} data={data}  type={'funcionarios'}/>      
    </div>
  );
}
