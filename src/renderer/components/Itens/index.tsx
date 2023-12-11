import { SetStateAction, useEffect, useMemo, useState } from 'react';
import Item from './Item';
import { IItem } from '../../types/interfaces';
import styles from './Itens.module.css';
import Pagination from '../Pagination/Pagination';

interface IProps {
  busca: string;
  data?: any;
  type?: string;
  buttons?: any;
}

const PageSize = 4;


export default function Itens(props: Readonly<IProps>) {
  const { busca, data, type, buttons } = props;
  const [currentPage, setCurrentPage] = useState(1);

  function testaBusca(nome: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(nome);
  }
  
  const listaFiltrada = data.filter((item: IItem) => testaBusca(item.nome));
      

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return listaFiltrada.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, listaFiltrada]);



  return (
    <div className={styles.itens}>
      {data ? currentTableData.map((item: IItem) => (
        <Item
          key={item.id}
          id={item.id}
          nome={item.nome}
          descricao={item.descricao}
          type={type}
          buttons={buttons}
        />
      )) :
        <div className="itens">
          <h1>Nada para ser visto aqui.</h1>
        </div>
      }
      <Pagination totalCount={data.length} currentPage={currentPage} pageSize={PageSize} onPageChange={page => setCurrentPage(page as number)}/>
    </div>
  );
}