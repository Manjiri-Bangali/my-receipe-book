import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HeaderComponent from './components/header/headerComponent';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import Recipe from './components/recipe/recipe';

import { history } from './shared/history';

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Router history={history}>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/:categoryName' component={Menu} />
              <Route path='/:recipeName' component={Recipe} />
              <Redirect from="*" to="/" />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
