import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Blog from './components/Blog'
import Nav from './components/Nav'
import Travel from './components/Travel'
import Recipes from './components/Recipes'
import LiftTotals from './components/LiftTotals'


function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path='/' exact component={Home}></Route>

        <Route path='/about' component={About}></Route>

        <Route path='/blog' component={Blog}></Route>

        <Route path='/recipes' component={Recipes}></Route>

        <Route path='/travel' component={Travel}></Route>

        <Route path='/lifttotals' component={LiftTotals}></Route>
      </div>
    </Router>
  );
}

export default App;
