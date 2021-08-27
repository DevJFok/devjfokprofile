import logo from './logo.svg';
import Navbar from './components/Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path="/Projects">
                <Projects />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
