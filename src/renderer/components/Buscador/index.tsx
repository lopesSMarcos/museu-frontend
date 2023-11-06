import { CgSearch } from 'react-icons/cg';
import './Buscador.style.css';

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}
export default function Buscador({ busca, setBusca }: Props) {
  return (
    <div className='buscador'>
      <input value={busca} onChange={(evento) => setBusca(evento.target.value)} />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}