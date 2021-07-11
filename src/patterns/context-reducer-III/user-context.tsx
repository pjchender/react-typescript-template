import { createContext, useCallback, useContext, useReducer } from 'react';

import { apiFetchUsers } from './api';
import { DispatchType, StateType, userReducer } from './reducer';

interface UserContextType {
  state: StateType;
  dispatch: DispatchType;
}

// STEP 2: 建立 context
const UserContext = createContext<UserContextType | undefined>(undefined);

// STEP 3: 建立包含有 reducer 的 context provider
const UserProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(userReducer, { users: [] });
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// STEP 4: 建立 custom hook 來使用 context 內的資料
interface IUserUser {
  state: StateType;
  actions: {
    fetchUsers: () => Promise<void>;
    deleteUser: (userId: number) => void;
  };
}
const useUser = (): IUserUser => {
  const ctx = useContext(UserContext);
  if (ctx === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  // STEP 5-1: 取出 state 和 dispatch
  const { state, dispatch } = ctx;

  // STEP 5-2: 建立 actions（所有非同步的操作和 dispatch 都需放在 actions 中）
  const fetchUsers = useCallback(async () => {
    const data = await apiFetchUsers();
    dispatch({ type: 'UPDATE_USERS', payload: { users: data } });
  }, [dispatch]);

  const deleteUser = useCallback(
    (userId: number) => {
      dispatch({ type: 'DELETE_USER', payload: { userId } });
    },
    [dispatch]
  );

  // STEP 5-3: 回傳 state 和 actions（這裡沒有再把 dispatch 暴露出去）
  return { state, actions: { fetchUsers, deleteUser } };
};

export { UserProvider, useUser };
