import Button from '../../components/ButtonPassword';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import './Login.style.css';
import { useNavigate } from 'react-router-dom';
import { SyntheticEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthProvider/useAuth';

type TipoLogin = {
  login: string;
  senha: string;
};


export default function Login() {
  const navegar = useNavigate();
  const auth = useAuth();
  const [ visible, setVisible ] = useState(false);

  const [usuario, setUsuario] = useState<TipoLogin>({
    login: 'pesquisador26@admin.com',
    senha: '123456',
  });

  const handleChange = (fieldName: keyof TipoLogin, value: string) => {
    setUsuario({ ...usuario, [fieldName]: value });
  };

  async function handleLogin(e: SyntheticEvent) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      login: { value: string };
      senha: { value: string };
    };

    const email = target.login.value;
    const senha = target.senha.value;


    try {
      await auth.authenticate(email, senha);
      toast.success('Login efetuado com sucesso!');
      navegar('/home');
    } catch(err: any) {
      toast.error(err.response.data.message);
    }

  }

  return (
    auth.login ? navegar('/home') : 
    <form onSubmit={(e) => handleLogin(e)} className="w-full">
      <div className="box">
        <div className="login-area">
          <div className="login-area-content">
            <h1 className="title">Entrar</h1>
            <div id="msg" />
            <input
              type="email"
              className="input-text"
              name='login'
              value={usuario.login}
              id="username"
              onChange={(e) => handleChange('login', e.target.value)}
              placeholder="Nome do usuário"
              required
            />
            <div className="relative">
              <input
                type={visible ? 'text' : 'password'}
                className="input-password pr-10 w-full"
                id="password"
                onChange={(e) => handleChange('senha', e.target.value)}
                name='senha'
                value={usuario.senha}
                placeholder="Senha"
                required
              />
              <Button
                className="rounded-full absolute top-0 right-0"
                id="show-password"
                aria-label="Mostrar Senha"
                onClick={() => setVisible(!visible)}
                icon={visible ? <FaRegEyeSlash size={22}/> : <FaRegEye size={22}/>}
              />
            </div>
            <input
              type="submit"
              className="input-submit"
              id="submit"
              value="Entrar"
            />
          </div>
        </div>
        <div className="background-area">
          <div className="background-area-content">
            <h1 className="title">Bem vindo</h1>
            <h1 className="title-normal">Ao Museu Pampa</h1>
            Faça login para gerenciar seu museu
          </div>
        </div>
      </div>
    </form>
  );
}
