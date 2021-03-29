import React, { useState } from 'react'

export default function Lift({ name, max, date, _id }) {
  const [expanded, setExpanded] = useState(false)


  return (
    <div key={_id}>
      <h2 onClick={() => setExpanded(!expanded)} style={{ fontWeight: 'initial', cursor: 'pointer' }} >{name}</h2>
      {expanded &&
        <div>
          <h3>Current 1RM: {max}kgs</h3>
          <h3>Date: {date.substr(0, 10)}</h3>
        </div>
      }
    </div>
  )
}