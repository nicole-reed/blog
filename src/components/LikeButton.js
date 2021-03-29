const LikeButton = ({ color, text, onClick }) => {

  return (
    <button
      className='heart'
      onClick={onClick}
      style={{ backgroundColor: color }}>
      {text}
    </button>
  )
}

export default LikeButton