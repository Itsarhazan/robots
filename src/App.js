import { Redirect } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/scss/global.scss'
import { AppHeader } from './cmps/AppHeader';
import { About } from './pages/About'
import { RobotApp } from './pages/RobotApp';
import { RobotDetails } from './pages/RobotDetails';
import { RobotEdit } from './pages/RobotEdit';


function App() {

  const PrivateRoute = (props) => {
    const isAdmin = true
    // return isAdmin ? <Route path={props.path} component={props.component} /> : <Redirect to='/' />
    return isAdmin ? <Route {...props} /> : <Redirect to='/' />
}

  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main className='container'>
          <Switch>
            <Route path='/robot/edit/:id?' component={RobotEdit} />
            <Route path='/robot/:id' component={RobotDetails} />
            <PrivateRoute path="/about" component={About} />
            <Route path="/" component={RobotApp} />
          </Switch>
        </main>
        <footer className="app-footer">
          <section className="container">
            &copy; coffeerights Itsar Hazan-2022
          </section>
        </footer>
      </div>
    </Router>

  );
}


export default App;
