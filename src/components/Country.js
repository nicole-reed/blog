import React, { useState } from 'react'

export default function Country({ name, year, cities, recommend, _id }) {
  const [expanded, setExpanded] = useState(false)


  return (
    <div key={_id}>
      <h2 onClick={() => setExpanded(!expanded)} style={{ fontWeight: 'initial', cursor: 'pointer' }} >{name}</h2>
      {expanded &&
        <div>
          <h3>I traveled here in {year}.</h3>
          <h3>I visited {cities.map((city, i) => {
            return <p key={i}>{city}</p>
          })}
          </h3>
          <h3>Would I recommend it?</h3>
          <p>{recommend === true ? <div>YES</div> : <div>Meh...</div>}</p>
        </div>
      }
    </div>
  )
}