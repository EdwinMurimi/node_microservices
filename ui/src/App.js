import './App.css';
import { Route, Switch } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import HomeLayout from './Layouts/HomeLayout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomeLayout} />
        <Route path='/auth' component={AuthLayout} />
      </Switch>
    </div>
  );
}

export default App;
