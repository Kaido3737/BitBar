import { cocktails } from '../data/cocktails';
import CocktailCard from '../components/CocktailCard';

const Home = () => {
  return (
    <main style={{ padding: '2rem' }}>
      <div
        style={{
          display:  'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem',
        }}>
          {cocktails.map((cocktail) => (
            <CocktailCard key={cocktail.id} cocktail={cocktail} />
          ))}
        </div>
    </main>
  );
};

export default Home;