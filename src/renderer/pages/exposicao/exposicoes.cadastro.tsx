import { getPecas } from "../../context/AuthProvider/utils"
import { useState } from "react"



export default function Cadastrar() {

    const [peca, setPeca] = useState (getPecas());
    const [ option, setOption ] = useState('');
    const [ pecas, setPecas ] = useState<any[]>([]);


    

    return (
        <div>
            <div>
                <h1>Cadastrar</h1>
            </div>
            <div>
                <label>Peças Presentes</label>


            </div>
            
            
        </div>
    )
}