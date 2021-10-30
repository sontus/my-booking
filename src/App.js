import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Car from './components/Home/Car/Car';
import Hotel from './components/Home/Hotel/Hotel';
import Flight from './components/Home/Flight/Flight';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            {/* Home */}
            <Route exact path="/home">
                <Home></Home>
            </Route>
            {/* Car */}
            <Route path="/car">
              <Car></Car>
            </Route>
            {/* Hotel */}
            <Route path="/hotel">
              <Hotel></Hotel>
            </Route>
            {/* Flight */}
            <Route path="/flight">
              <Flight></Flight>
            </Route>
            {/* About us */}
            <Route path="/about">
              <About></About>
            </Route>
            {/* Contact us */}
            <Route path="/contact">
              <Contact></Contact>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
