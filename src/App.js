import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import Navbar from './Navbar';
function App() {
  const APP_ID= 'd4517fb4';
  const APP_KEY='eb4dfad61b6adf739e6c497780abea88	';
  // const exampleRequest =  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');
  useEffect(  () =>{
      getRecipes();
  },[query]);
  
 const getRecipes = async() => {
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(response => response.json()).then(apiData => {
  const recipeData = apiData.hits;
   setRecipes(recipeData);
   }).catch(err =>{
     console.log(err,'ERROR');
   });
 };
 const updateSearch = e =>{
   setSearch(e.target.value);
 };
 const getSearch = e =>{
   e.preventDefault();
   setQuery(search);       
   setSearch('');
 }
  return (
    <div className="App">
      <Navbar/>
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}></input>
        <button type="submit"  className="search-button">Search</button>
      </form>
      <br></br><br></br>
      <div className="receipt-card">
      {recipes.map(el =>(<Recipe key={el.recipe.label} receiptData={el.recipe}></Recipe>))}
</div>
    </div>
  );
}

export default App;
