import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CocktailDetail from './pages/CocktailDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/BitBar" element={<Home />} />
        <Route path="/BitBar/cocktail/:id" element={<CocktailDetail />} />
      </Routes>
    </>
  );
};

export default App;
