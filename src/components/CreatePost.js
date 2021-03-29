import { useState } from 'react'

const CreatePost = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [liked, setLiked] = useState(false)


  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add text')
      return
    }

    onAdd({ text, liked })

    setText('')
    setLiked(false)

  }
  return (
    <form onSubmit={onSubmit}>
      <div className='form-control'>
        <label></label>
        <input
          type='text'
          placeholder='Create a New Post'
          value={text}
          onChange={(e) => setText(e.target.value)} />
      </div>
      <input type='submit'></input>
    </form>
  )
}

export default CreatePost
