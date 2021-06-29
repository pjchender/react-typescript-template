import { createContext, useReducer } from 'react';

import { IAction, reducer } from './reducer';
import { RGBColorType } from './types';

// STEP 1-3: define initialState
const initialState: RGBColorType = {
  red: 0,
  green: 0,
  blue: 0,
};

// STEP 4-2: define RGBContext Type
// 因為原本的createContext 放的 initialState 是 RGBColorType
// 因此，TS 會把 RGBContext 直接認為是 RGBColorType
// 但因為還會在 context 中放入 dispatch 這個方法
// 因此需要定義包含 dispatch 方法在內的型別
interface RGBContextType extends RGBColorType {
  dispatch: React.Dispatch<IAction>;
}

// STEP 1-1: createContext
// STEP 4-3: 透過泛型讓 TS 知道 context 的型別是 RGBContextType (i.e., createContext<RGBContextType>)
export const RGBContext = createContext<RGBContextType>(
  // STEP 4-4: 使用 as
  // 因為 initialState 裡面並沒有 dispatch 方法，因此 TS 會報錯
  // 其中一種解決方式就是用 as
  initialState as RGBContextType
);

// STEP 3-1: create context with reducer
export const RGBContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  // STEP 3-2: use the reducer
  // 因為只有在 function component 中能使用 useReducer
  const [rgb, dispatch] = useReducer(reducer, initialState);

  // STEP 3-3: 回傳 Provider
  return (
    <RGBContext.Provider
      // STEP 4-1: 在 Provider 的 value 中放入 reducer 的 dispatch 方法
      value={{
        ...rgb,
        dispatch,
      }}
    >
      {children}
    </RGBContext.Provider>
  );
};
