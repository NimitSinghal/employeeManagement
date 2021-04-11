import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Home} from './Componenets/Pages/Home';
import {AddUser} from './Componenets/User/AddUser';
import {EditUser} from './Componenets/User/EditUser';
import {Navbar} from './Componenets/Layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/addusers" component={AddUser} />
          <Route exact path="/users/edituser/:id" component={EditUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
