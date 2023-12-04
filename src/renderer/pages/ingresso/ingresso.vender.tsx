import { SyntheticEvent, useState, useEffect } from "react";
import styles from  "./ingresso.module.css";
import { getCategoriaIngressos, getUserLocalStorage } from "../../context/AuthProvider/utils";
import Option from "./Option";

interface ICategoria  {
    id: number;
    nome: string;
    preco: number;
}

const pagamentos = [
    {
        id: 1,
        nome: 'Pix'
    },
    {
        id: 2,
        nome: 'Cartão de Débito'
    },
    {
        id: 3,
        nome: 'Cartão de Crédito'
    },
    {
        id: 4,
        nome: 'Dinheiro'
    }
]

export default function CadastrarIngresso() {
    const vendedor = getUserLocalStorage();
    const [ novoIngresso, setNovoIngresso ] = useState({});   
    const [ option, setOption ] = useState<number | null>(null);
    const [ categorias, setCategorias ] = useState<ICategoria[]>([]);

    var input = document.getElementById('selecionar-arquivo'),
    fileName = document.getElementById('file-name');

    input?.addEventListener('change', function() {
        if (fileName) {
            const inputElement = document.getElementById('selecionar-arquivo') as HTMLInputElement;
            const fileNameAlter = inputElement.value.split( '\\' ).pop();
            if(fileNameAlter)
                fileName.textContent = fileNameAlter?.length && fileNameAlter.length > 20 ? fileNameAlter?.substring(0, 20) + '...' : fileNameAlter;
        }
    });

    
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

    const fetchApi = async () => {
        const request = await getCategoriaIngressos();
        setCategorias(request.content);
    }

    useEffect(() => {
        fetchApi();
    },[0])

    return (
        <form className={styles.forms} onSubmit={handlePost}>
            <div className={styles.header}>
                <h2>Sejá bem vindo ao Museu Pampa!</h2>
                <div className={styles.headerButtons}><button>Concluir</button>
                <button>Cancelar</button></div>
                
            </div>
            <hr />
            <div className={styles.contentForm}>
                <div className={styles.firstcontent}>
                    <div className={styles.left}>
                        <label>Categoria do Ingresso</label>
                        <Option option={option} setOption={setOption} data={categorias} />
                    </div>
                    <div className={styles.right}>
                        <label className={styles.rightlabel}>Documento do Visitante</label>
                        <input type="file" id="selecionar-arquivo" value='' />
                        <label className={styles.rightinputlabel} htmlFor="selecionar-arquivo" >Selecione um arquivo</label>
                        <span id="file-name"></span>
                    </div>
                    <div className={styles.center}>
                    <label>Pagamento</label>
                    <div className={styles.pagamentos}>
                        <Option option={option} setOption={setOption} data={pagamentos}/>
                    </div>
                </div>
                </div>
                
            </div>   
       </form>
    )
}