import './Item.css';
import { IItem } from '../../../types/interfaces';
import { Link } from 'react-router-dom';



export default function Item(props : Readonly<IItem>) {


  const { nome, buttons } = props;

  return (
    <div className={'item'}>
      <div className={'i'}>
        <div className={'titulo'}>
          <h2 className={'itemtitulo'}> <Link to={`/${props.nome}/${props.id}`}>{nome}</Link></h2>
        </div>
        <div className={'buttons'}>
          {buttons}
        </div>
      </div>
    </div>
  );
}
