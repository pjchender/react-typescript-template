import './App.css';

import { Link, Route, Switch } from 'react-router-dom';
import Homepage from 'views/Homepage';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
