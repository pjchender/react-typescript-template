import './index.css';

import { UserProvider } from 'patterns/context-reducer-III/user-context';
import UserList from 'views/DemoContextAndReducerIII/UserList';

const DemoContextAndReducerAsync = (): JSX.Element => {
  return (
    <div className="demo-context-and-reducer-async">
      <h1>DemoContextAndReducer (maybe the best)</h1>
      <p>搭配 async 使用 context 和 reducer</p>
      <p>
        Reference:{' '}
        <a
          href="https://kentcdodds.com/blog/how-to-use-react-context-effectively"
          target="_blank"
          rel="noreferrer"
        >
          How to use React Context effectively
        </a>
      </p>

      {/* STEP 7：使用 UserProvider */}
      <UserProvider>
        <UserList />
      </UserProvider>
    </div>
  );
};

export default DemoContextAndReducerAsync;
