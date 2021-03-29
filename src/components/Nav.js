import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Me</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/recipes'>Recipes</Link>
        </li>
        <li>
          <Link to='/travel'>Travel</Link>
        </li>
        <li>
          <Link to='/liftTotals'>Lifts</Link>
        </li>

      </ul>
    </nav>
  )
}

export default Nav
