import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function CadastrarInspecao() {

    const navegar = useNavigate();
    const handleCadastro = (e: FormEvent) => {

    }

    const handleCancelar = () => {
        Swal.fire({
          title: 'Você tem certeza?',
          text: 'Todos os dados preenchidos serão descartados.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar',
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Cadastro cancelado',
              'Todos os dados preenchidos foram descartados.',
              'success',
            );
            navegar('/inspecao');
          } else if (result.dismiss === Swal.DismissReason.cancel) {
          }
        });
      };

    return (
        <form onSubmit={(e) => handleCadastro(e)}>
            <div className="box">
                <div className="create-area">
                    <div className="create-area-content">
                            <h1 className="title">Cadastrar Inspeção</h1>
                            <div id="msg"></div>
                            
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            className="input-text"
                            name="nome"
                            required
                        />
                        <label htmlFor="name" className="input-label">
                            Nome Inspeção
                        </label>
                    </div>
                    <div>
                        <input type="text" 
                            className='input-text'
                            name='descricao'
                        />
                        <label htmlFor="descricao" className="input-label">
                            Descrição
                        </label>
                    </div>
                </div>
                <input type="submit">
                    Cadastrar Inspeção
                </input>
                <input type="button" onClick={handleCancelar}>Cancelar</input>
            </div>
        </form>
    )
}