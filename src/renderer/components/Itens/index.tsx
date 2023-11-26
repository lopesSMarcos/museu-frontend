import { useEffect, useState } from 'react';
import Item from './Item';
import { IItem } from '../../types/interfaces';
import './Itens.css';

interface IProps {
  busca: string;
  data: any;
  type: string;
}


export default function Itens(props: Readonly<IProps>) {
  const [lista, setLista] = useState([]);
  const { busca, data, type } = props;

  function testaBusca(nome: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(nome);
  }


  const fetchData = () => {
    const listaFiltrada = data.filter((item: IItem) => testaBusca(item.nome));
    setLista(listaFiltrada);
  }

  useEffect(() => {
    fetchData();
  }, [busca]);

  return (
    <div className="itens">
      {data && lista.map((item: IItem) => (
        <Item
          key={item.id}
          id={item.id}
          nome={item.nome}
          descricao={item.descricao}
          type={type}
        />
      ))}
    </div>
  );
}