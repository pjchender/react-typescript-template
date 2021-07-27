import './App.css';

import { Suspense } from 'react';
import { Link } from 'react-router-dom';

import { Router, routes } from './routes';

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
        <Router routes={routes} />
      </Suspense>
    </div>
  );
};

export default App;
