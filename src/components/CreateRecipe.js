import { useState } from 'react'


const CreateRecipe = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instructions, setInstructions] = useState([])


  const onSubmit = (e) => {
    e.preventDefault()

    if (!title || !ingredients || !instructions) {
      alert('Please add text')
      return
    }

    onAdd({ title, ingredients, instructions })

    setTitle('')
    setIngredients('')
    setInstructions([])

  }
  return (
    <form onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Title: </label>
        <input
          type='text'
          placeholder='Add a new recipe'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Ingredients (separated by commas): </label>
        <input
          type='text'
          placeholder='Add ingredients'
          name='ingredients'
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Instructions (separated by commas): </label>
        <input
          type='text'
          placeholder='Add instructions'
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)} />
      </div>
      <input type='submit'></input>
    </form>
  )
}

export default CreateRecipe