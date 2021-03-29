import { useState, useEffect } from 'react'
import Country from './Country'


const Travel = () => {
  const [countries, setCountries] = useState([])

  useEffect(async () => {
    const response = await getAllCountries()

    setCountries(response)
  }, [])

  //Fetch countries
  const getAllCountries = async () => {
    const res = await fetch('http://localhost:8080/countries')
    const data = await res.json()

    return data
  }

  //fetch by year
  const getCountriesByYear = async (year) => {
    const res = await fetch(`http://localhost:8080/countries/${year}`)
    const data = await res.json()


    return data
  }

  //add country
  const createCountry = async (post) => {
    const res = await fetch('http://localhost:8080/countries', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })

    const data = await res.json()

    setCountries([...countries, data])
  }



  return (
    <div className='blog-style'>
      <h1>My Travels So Far</h1>
      <>
        {countries.map((country) => <Country {...country} />)}
      </>
    </div>
  )
}

export default Travel

