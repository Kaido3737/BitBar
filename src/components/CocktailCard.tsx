import { Cocktail } from '../types/cocktail';
import { useNavigate } from 'react-router-dom';
import styles from './styles/CocktailCard.module.scss';

const CocktailCard = ({cocktail}: {cocktail: Cocktail}) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/cocktail/${cocktail.id}`)}
    >
      <img src={cocktail.image} alt={cocktail.name} />
      <h2>{cocktail.name}</h2>
      <p>{cocktail.description}</p>
    </div>
  );
};

export default CocktailCard;