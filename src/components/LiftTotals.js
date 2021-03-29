import { useState, useEffect } from 'react'
import Lift from './Lift'



export default function LiftTotals() {
  const [lifts, setLifts] = useState([])

  useEffect(async () => {
    const response = await getAllLifts()

    setLifts(response)
  }, [])

  //Fetch Lifts
  const getAllLifts = async () => {
    const res = await fetch('http://localhost:8080/lifts')
    const data = await res.json()

    return data
  }

  //fetch by name
  const getLiftByName = async (name) => {
    const res = await fetch(`http://localhost:8080/lifts/${name}`)
    const data = await res.json()


    return data
  }

  //add country
  const createLift = async (lift) => {
    const res = await fetch('http://localhost:8080/lifts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(lift)
    })

    const data = await res.json()

    setLifts([...lifts, data])
  }

  return (
    <div className='blog-style'>
      <h1>My One Rep Max Weights</h1>
      <>
        {lifts.map((lift) => <Lift {...lift} />)}
      </>

    </div>
  )
}
