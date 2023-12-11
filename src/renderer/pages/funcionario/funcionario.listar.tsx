import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Itens from '../../components/Itens';
import Buscador from '../../components/Buscador';
import { getFuncionario } from '../../context/AuthProvider/utils';
import styles from './funcionario.module.css';

export default function ListarFuncionario() {
  
  const [data, setData] = useState<{ content: Funcionario[] }>({ content: [] });
  const [numberOfFuncionarios, setNumberOfFuncionarios] = useState(0);
  const [busca, setBusca] = useState('');
  const navegar = useNavigate();

  const handleCadastrar = () => {
    navegar('/funcionarios/cadastrar');
  };

  const fetchApi = async () => {
    const request = await getFuncionario();

    setData(request);

    setNumberOfFuncionarios(request?.content.length);
  }

  useEffect(() => {
   fetchApi();
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div>
          <h1>Funcionários</h1>
          {/* <Buscador busca={busca} setBusca={setBusca}/> */}
          <label>
            {numberOfFuncionarios} funcionários
          </label>
        </div>
        <div>
          <h1>Viagens Pesquisadores</h1>
          <label>18 viagens</label>
        </div>
      </div>
      <div className={styles.divbusca}>
        <button
          id="btn-adc-funcionario"
          className="btn-adc-funcionario"
          onClick={handleCadastrar}
        >
          Adicionar funcionário
        </button>
        <Buscador busca={busca} setBusca={setBusca}/>
      </div>
      <hr />
        {Array.isArray(data.content) && <Itens busca={busca} data={data.content}  type={'funcionarios'}/>}      
    </div>
  );
}