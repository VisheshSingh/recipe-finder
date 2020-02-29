import React, { useState, useEffect } from 'react';
import RecipeItem from './RecipeItem';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('chicken');
  const [search, setSearch] = useState('');
  const APP_ID = '3bf21374';
  const APP_KEY = '894a1742ffbd78fd7d48ba3bf4086acd';

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    setRecipes(data.hits);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className='App'>
      <h1>Recipe Finder</h1>

      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='search-bar'
          placeholder='Find recipe...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <input type='submit' value='Search' className='search-btn' />
      </form>
      <div className='recipes'>
        {recipes.map(dish => (
          <RecipeItem key={dish.recipe.uri} dish={dish.recipe} />
        ))}
      </div>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
