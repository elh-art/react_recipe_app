import React, {useEffect, useState} from "react"
import Recepie from "./Recepie"
import { v4 as uuidv4 } from 'uuid'
import "./App.css"

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('salad')

  const [vegan, setVegan] = useState(true)
  const [veganUrl, setVeganUrl] = useState('')

  const [vegetarian, setVegetarian] = useState(true)
  const [vegetarianUrl, setVegetarianUrl] = useState('')

  const [gluten, setGluten] = useState(true)
  const [glutenUrl, setGlutenUrl] = useState('')

  const [lactose, setLactose] = useState(true)
  const [lactoseUrl, setLactoseUrl] = useState('')

  //PLEASE USE YOUR OWN ID AND KEY FROM EDAMAM.COM
  const API_ID = "PLEASE USE YOURS"
  const API_KEY = "PLEASE USE YOURS"
  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}${veganUrl}${vegetarianUrl}${glutenUrl}${lactoseUrl}`

  useEffect(() => {
    fetchData()
  },[query])

  const fetchData = async() => {
    const resp = await fetch(URL)
    const data = await resp.json()
    setRecipes(data.hits)
  }

  const storeSearch = e => {
    setSearch(e.target.value)
  }

  const storeQuery = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  const toggleVegan = () => {
    setVegan(!vegan)

    if(vegan) {
      setVeganUrl('&health=vegan')
    } else {
      setVeganUrl('')
    }
  }

  const toggleVegetarian = () => {
    setVegetarian(!vegetarian)

    if(vegetarian) {
      setVegetarianUrl('&health=vegetarian')
    } else {
      setVegetarianUrl('')
    }
  }

  const toggleGluten = () => {
    setGluten(!gluten)

    if(gluten) {
      setGlutenUrl('&health=gluten-free')
    } else {
      setGlutenUrl('')
    }
  }

  const toggleLactose = () => {
    setLactose(!lactose)

    if(lactose) {
      setLactoseUrl('&health=dairy-free')
    } else {
      setLactoseUrl('')
    }
  }

  return (
    <div className="App">

      <form 
        className="search-form" 
        onSubmit={storeQuery} 
        action="" >
        <h1 className="search-header">What to eat today? 🍲</h1>
        <div className="search-container">
          <input 
              className="search-bar" 
              type="text" 
              value={search} 
              onChange={storeSearch}/>
          <button className="search-button" type="submit">🔍</button>
        </div>
      </form>

      <form className="search-options">
        <div>
          <input type="checkbox" id="vegan" name="vegan" value="false" onChange={toggleVegan}/>
          <label htmlFor="vegan">Vegan</label>
        </div>
        <div>
          <input type="checkbox" id="vegetarian" name="vegetarian" value="false" onChange={toggleVegetarian}/>
          <label htmlFor="vegetarian">Vegetarian</label>
        </div>
        <div>
          <input type="checkbox" id="gluten" name="gluten" value="false" onChange={toggleGluten}/>
          <label htmlFor="gluten">Gluten-free</label>
        </div>
        <div>
          <input type="checkbox" id="lactose" name="lactose" value="false" onChange={toggleLactose}/>
          <label htmlFor="lactose">Lactose-free</label>
        </div>
      </form>

      <div className="recipes">
        {recipes.map(recipes => (
          <Recepie
          key={uuidv4()}
          title={recipes.recipe.label}
          url={recipes.recipe.url}
          calories={recipes.recipe.calories}
          image={recipes.recipe.image}
          ingredients={recipes.recipe.ingredients}
          health={recipes.recipe.healthLabels}     
          />
        ))}
      </div>
    </div>
  )
}

export default App
