import Navigation from './components/parts/NavBarBootstrap'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Translate from './components/screens/Translate';
import Courses from './components/screens/Courses';
import Information from './components/screens/Information';
import Home from './components/screens/Home';
import Levelholder from './components/parts/levelholder';
import Oefenen from './components/screens/Oefenen'
//import './design/NavBarBootstrap.css';
import './bootstrap.css';


function App  (){
    return (

      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/translate' component={Translate}/>
          <Route exact path='/courses' component={Courses}/>
          <Route exact path='/information' component={Information}/>
          <Route exact path='/levelholder' component={Levelholder}/>
          <Route exact path='/oefenen' component={Oefenen}/>
        </Switch>
      </Router>
    );
  }

export default  App;