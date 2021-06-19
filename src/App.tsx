import './App.css';

import { Link, Route, Switch } from 'react-router-dom';
import DemoRenderProps from 'views/DemoRenderProps';
import Homepage from 'views/Homepage';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/render-props">RenderProps</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/render-props">
          <DemoRenderProps />
        </Route>

        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
