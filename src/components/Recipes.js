import { useState, useEffect } from 'react'
import CreateRecipe from './CreateRecipe'
import Recipe from './Recipe'


const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(async () => {
    const response = await getRecipes()

    setRecipes(response)
  }, [])

  //Fetch Recipes
  const getRecipes = async () => {
    const res = await fetch('http://localhost:5000/recipes')
    const data = await res.json()

    return data
  }

  const addRecipe = async (recipe) => {
    const res = await fetch('http://localhost:5000/recipes', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })

    const data = await res.json()

    setRecipes([...recipes, data])
  }


  return (
    <div className='blog-style'>
      <h1>Here are some of my favorite recipes to make!</h1>
      <div>
        {recipes.map((recipe) => <Recipe {...recipe} />)}
        <h3 style={{ fontWeight: 'inherit' }}>Share Your Favorite Recipe:</h3>
        <CreateRecipe onAdd={addRecipe} />
      </div>
    </div>
  )
}

export default Recipes