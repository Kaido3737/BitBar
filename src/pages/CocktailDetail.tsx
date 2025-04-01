import { useParams } from 'react-router-dom';
import { cocktails } from '../data/cocktails';

const CocktailDetail = () => {
  const { id } = useParams<{ id: string }>();
  const cocktail = cocktails.find((c) => c.id === id);

  if (!cocktail) {
    return <p>カクテルが見つかりません</p>
  }

  return (
    <main>
      <h1>{cocktail.name}</h1>
      <img src={cocktail.image} alt={cocktail.name} />
      <p>{cocktail.description}</p>
    </main>
  );
};

export default CocktailDetail;