import { useState, useEffect } from 'react';
import styles from './option.module.css';
import classNames from 'classnames';
import { getCategoriaIngressos } from '../../../context/AuthProvider/utils';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
    option: number | null;
    setOption: React.Dispatch<React.SetStateAction<number | null>>
}

type ICategoria = {
    id: number;
    nome: string;
    preco: number;
}

export default function Option({ option, setOption } : Readonly<Props>) {
    const [ aberto, setAberto ] = useState(false);
    const [ categorias, setCategorias ] = useState<ICategoria[]>();

    const fetchApi = async () => {
        const request = await getCategoriaIngressos();
        setCategorias(request.content);
    }
    
    const nomeOption = option && categorias?.find((opcao: ICategoria) => opcao.id === option)?.nome;

    
    useEffect(() => {
        fetchApi();
    },[0])


    return (
        <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: option !== null
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOption ?? 'Selecione uma categoria'}</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto
      })}>
        {categorias?.map((opcao: ICategoria) => (
            <div
                className={styles.ordenador__option}
                key={opcao.id}
                onClick={() => setOption(opcao.id)}
            >
                {opcao.nome} {`R$${opcao.preco}`}
            </div>
        ))}
      </div>
    </button>
    )
}