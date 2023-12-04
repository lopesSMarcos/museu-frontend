import { useState, useEffect } from 'react';
import styles from './option.module.css';
import classNames from 'classnames';
import { getCategoriaIngressos } from '../../../context/AuthProvider/utils';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
    option: number | null;
    setOption: React.Dispatch<React.SetStateAction<number | null>>;
    data: any[];
}



export default function Option({ option, setOption, data } : Readonly<Props>) {
    const [ aberto, setAberto ] = useState(false);
    
    
    const nomeOption = option && data?.find((opcao: any) => opcao.id === option)?.nome;

    
    useEffect(() => {
        
    },[option])


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
        {data?.map((opcao: any) => (
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