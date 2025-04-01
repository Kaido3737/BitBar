import { Cocktail } from '../types/cocktail';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from './styles/CocktailCard.module.scss';

const CocktailCard = ({cocktail}: {cocktail: Cocktail}) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles['card']}
      onClick={() => navigate(`/cocktail/${cocktail.id}`)}
    >
      <img src={cocktail.image} alt={cocktail.name} className={styles['card__image']}/>
      <h2 className={styles['card__title']}>{cocktail.name}</h2>
      <p className={styles['card__description']}>{cocktail.description.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}</p>
    </div>
  );
};

export default CocktailCard;