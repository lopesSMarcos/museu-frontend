import { SyntheticEvent, useState, useEffect } from "react";
import styles from  "./ingresso.module.css";
import { getCategoriaIngressos, getUserLocalStorage } from "../../context/AuthProvider/utils";
import Option from "./Option";


export default function CadastrarIngresso() {
    const vendedor = getUserLocalStorage();
    const [ novoIngresso, setNovoIngresso ] = useState({});   
    const [ option, setOption ] = useState<number | null>(null);

    
    const handlePost = (e: SyntheticEvent) => {

        e.preventDefault();

        const target = e.target as typeof e.target & {
            documento: { value: string };
            pix: { value: string };
            cartaoDeb: { value: string };
            cartaoCred: { value: string };
            dinheiro: { value: string };
        }
        // setNovoIngresso()
    }


    return (
        <form className={styles.forms} onSubmit={handlePost}>
            <div className={styles.header}>
                <h2>Sejá bem vindo ao Museu Pampa!</h2>
                <div className={styles.headerButtons}><button>Salvar</button>
                <button>Cancelar</button></div>
                
            </div>
            <hr />
            <div className={styles.contentForm}>
                <div className={styles.firstcontent}>
                    <div className={styles.left}>
                        <label>Categoria do Ingresso</label>
                        <Option option={option} setOption={setOption}/>
                    </div>
                    <div className={styles.right}>
                        <label className={styles.rightlabel}>Documento do Visitante</label>
                        <input type="file" id="selecionar-arquivo" />
                        <label className={styles.rightinputlabel} htmlFor="selecionar-arquivo" >Selecione um arquivo &#187;</label>
                    </div>
                </div>
                <div className={styles.center}>
                    <label>Pagamento</label>
                    <input type="checkbox" name="dinheiro"/><label>Dinheiro</label>
                    <input type="checkbox" name="pix" /><label>PIX</label>
                    <input type="checkbox" name="cartaodeb" /><label>Cartão Débito</label>
                    <input type="checkbox" name="cartaocred" /><label>Cartão Crédito</label>
                </div>
            </div>   
       </form>
    )
}