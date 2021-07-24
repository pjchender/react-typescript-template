import './App.css';

import { lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Homepage from 'views/Homepage';

const DemoContext = lazy(() => import('views/DemoContext'));
const DemoContextAndReducerI = lazy(() => import('views/DemoContextAndReducerI'));
const DemoContextAndReducerII = lazy(() => import('views/DemoContextAndReducerII'));
const DemoContextAndReducerAsync = lazy(() => import('views/DemoContextAndReducerIII'));
const DemoCustomHooks = lazy(() => import('views/DemoCustomHooks'));
const DemoRenderProps = lazy(() => import('views/DemoRenderProps'));
const DemoCallbackRef = lazy(() => import('views/DemoCallbackRef'));
const DemoPortal = lazy(() => import('views/DemoPortal'));

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
            <Link to="/portal">Portal</Link>
          </li>
          <li>
            <Link to="/custom-hooks">CustomHooks</Link>
          </li>
          <li>
            <Link to="/use-context">useContext</Link>
          </li>
          <li>
            <Link to="/use-context-reducer-i">useContext + useReducer I</Link>
          </li>
          <li>
            <Link to="/use-context-reducer-ii">useContext + useReducer II</Link>
          </li>
          <li>
            <Link to="/use-context-reducer-iii">useContext + useReducer III</Link>
          </li>
          <li>
            <Link to="/callback-ref">callback + ref</Link>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<h2>Dynamic Loading...</h2>}>
        <Switch>
          <Route path="/render-props">
            <DemoRenderProps />
          </Route>

          <Route path="/portal">
            <DemoPortal />
          </Route>

          <Route path="/custom-hooks">
            <DemoCustomHooks />
          </Route>

          <Route path="/use-context">
            <DemoContext />
          </Route>

          <Route path="/use-context-reducer-i">
            <DemoContextAndReducerI />
          </Route>

          <Route path="/use-context-reducer-ii">
            <DemoContextAndReducerII />
          </Route>

          <Route path="/use-context-reducer-iii">
            <DemoContextAndReducerAsync />
          </Route>

          <Route path="/callback-ref">
            <DemoCallbackRef />
          </Route>

          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
