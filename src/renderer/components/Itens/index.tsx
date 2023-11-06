import React, { useEffect, useState } from 'react';
import 'Itens.css';
import Item from './Item';

interface T {
    nome: string;
    id: number;
    urlImage: string;
    descricao: string;
    url: string;
}

interface IProps {
    obj: T;
    busca: string;
    filtro: number | null;
    ordenador: string;
    getObjetos: () => Promise<any>;
  
  }
  
  
  export default function Itens(props: IProps) {
    const [lista, setLista] = useState([]);
    const { busca, filtro, ordenador, getObjetos, obj } = props;
  
    function testaBusca(title: string) {
      const regex = new RegExp(busca, 'i');
      return regex.test(title);
    }
  
    function testaFiltro(id: number) {
      if (filtro !== null) return filtro === id;
      return true;
    }
  
    function ordenar(novaLista: never[] = []) {
      switch (ordenador) {
        case 'nome':
          return novaLista.sort((a: typeof obj, b: typeof obj) => a.nome > b.nome ? 1 : -1);
        case 'id':
          return novaLista.sort((a: T, b: T) => a.id > b.id ? 1 : -1);
        default:
          return novaLista;
      }
    }
  
    const fetchData = async () => {
      const data = await getObjetos();
      const itens = data.content;
      const novaLista = itens.filter((item: T) => testaBusca(item.nome) && testaFiltro(item.id));
      setLista(ordenar(novaLista));
    };

    useEffect(() => {
      fetchData();
    }, [busca, filtro, ordenador]);
  
    return (
      <div className={"itens"}>
        {lista.map((item: T) => (
          <Item
            key={item.id}
            id={item.id}
            nome={item.nome}
            urlImage={item.urlImage}
            descricao={item.descricao}
            url={item.url}
          />
        ))}
      </div>
    );
  }