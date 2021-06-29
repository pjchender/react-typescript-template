import './App.css';

import { Link, Route, Switch } from 'react-router-dom';
import DemoContext from 'views/DemoContext';
import DemoContextAndReducer from 'views/DemoContextAndReducer';
import DemoCustomHooks from 'views/DemoCustomHooks';
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
          <li>
            <Link to="/custom-hooks">CustomHooks</Link>
          </li>
          <li>
            <Link to="/use-context">useContext</Link>
          </li>
          <li>
            <Link to="/use-context-reducer">useContext + useReducer</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/render-props">
          <DemoRenderProps />
        </Route>

        <Route path="/custom-hooks">
          <DemoCustomHooks />
        </Route>

        <Route path="/use-context">
          <DemoContext />
        </Route>

        <Route path="/use-context-reducer">
          <DemoContextAndReducer />
        </Route>

        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
