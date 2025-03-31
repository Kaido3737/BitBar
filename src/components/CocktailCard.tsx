import { Cocktail } from '../types/cocktail';
import styles from './styles/CocktailCard.module.scss';

const CocktailCard = ({cocktail}: {cocktail: Cocktail}) => {
  return (
    <div className={styles.card}>
      <img src={cocktail.image} alt={cocktail.name} />
      <h2>{cocktail.name}</h2>
      <p>{cocktail.description}</p>
    </div>
  );
};

export default CocktailCard;