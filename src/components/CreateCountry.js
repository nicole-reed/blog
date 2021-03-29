import { useState } from 'react'


const CreateCountry = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [cities, setCities] = useState([])
  const [recommend, setRecommend] = useState(true)


  const onSubmit = (e) => {
    e.preventDefault()

    if (!name || !year || !cities || !recommend) {
      alert('Please add text')
      return
    }

    onAdd({ name, year, cities, recommend })

    setName('')
    setYear('')
    setCities([])
    setRecommend(true)

  }
  return (
    <form onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Country: </label>
        <input
          type='text'
          placeholder='Add a new country'
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Year: </label>
        <input
          type='text'
          placeholder='Add year'
          value={year}
          onChange={(e) => setYear(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Cities (separated by commas): </label>
        <input
          type='text'
          placeholder='Add cities'
          name='cities'
          value={cities}
          onChange={(e) => setCities(e.target.value)} />
      </div>
      <input type='submit'></input>
    </form>
  )
}

export default CreateCountry