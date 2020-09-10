import React,{useState,useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const App_ID='eaf7665d';
  const App_KEY='a90701698845f79f76bb39996dd6f312';
  const [recipes,setRecipe]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');

  const handleChange=(event)=>{
   setSearch(event.target.value);
  }
  const handleChange1=(e)=>{
    e.preventDefault();
    setQuery(search);
  }
  useEffect(()=>{
  getRecipe();
  },[query]);
  const getRecipe=async ()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ App_ID}&app_key=${App_KEY}`);
    const data=await response.json();
  
    setRecipe(data.hits);
  }
  console.log(recipes);
  return (
    <div className="App">
      <form onSubmit={handleChange1} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={handleChange}/>
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">{recipes.map(recipe=>( 
        <Recipe
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image} 
          key={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
 />)
)}</div>
      
    </div>
  )
}


export default App;
