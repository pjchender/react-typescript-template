import { Link } from 'react-router-dom';
import { IRoute, Router } from 'routes';

const DemoContext = ({ routes }: { routes: IRoute[] }): JSX.Element => {
  return (
    <div>
      <h1>useContext</h1>

      <ul>
        <li>
          <Link to="/use-context/basic">Basic Context</Link>
        </li>
        <li>
          <Link to="/use-context/use-context-reducer-i">useContext + useReducer I</Link>
        </li>
        <li>
          <Link to="/use-context/use-context-reducer-ii">useContext + useReducer II</Link>
        </li>
        <li>
          <Link to="/use-context/use-context-reducer-iii">
            useContext + useReducer III
          </Link>
        </li>
      </ul>

      <Router routes={routes} />
    </div>
  );
};

export default DemoContext;
