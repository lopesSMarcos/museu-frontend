import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

interface T {
  nome: string;
  id: number;
  urlImage: string;
  descricao: string;
  url: string;
}

export default function Item(props: Readonly<T>) {
  

  const { nome, urlImage, descricao, url } = props;
  return (
    <div className={"item"}>
        {urlImage &&
        <div className={"itemimagem"} >
        <Link to={`/${url}/${props.id}`}>
          <img src={urlImage} alt={nome} />
        </Link>
        
      </div>}
      
      <div className={"itemdescricao"}>
        <div className={"itemtitulo"} >
          <h2 className={"itemtitulo"}> <Link to={`/${url}/${props.id}`}>{nome}</Link></h2>
          <p>{descricao}</p>
        </div>
      </div>
    </div>
  );
}

