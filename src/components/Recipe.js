import React, { useState } from 'react'

export default function Recipe({ title, _id, ingredients, instructions }) {
  const [expanded, setExpanded] = useState(false)


  return (
    <div key={_id}>
      <h2 onClick={() => setExpanded(!expanded)} style={{ fontWeight: 'initial', cursor: 'pointer' }} >{title}</h2>
      {expanded &&
        <div>
          <h3>Ingredients You Will Need:</h3>
          <ul style={{ listStyle: 'none' }}>
            {ingredients.map((item, i) => {
              return <li style={{ textAlign: 'left' }} key={i}>{item}</li>
            })}</ul>
          <h3>How To Make It:</h3>
          <ol>
            {instructions.map((item, i) => {
              return <li style={{ listStylePosition: 'inside', textAlign: 'left' }} key={i}>{item}</li>
            })}
          </ol>

        </div>
      }
    </div>
  )
}
