import { FormEvent } from "react"



export default function Load() {


    const handleInput = (e: FormEvent) => {

    }

    return (
        <div>
            <form onInput={handleInput}>
                <div>
                    <label>Insira o nome da Seção: </label>
                    <input type="text" />
                </div>
                <button type="submit">Concluir</button>
            </form>
        </div>
    )
}