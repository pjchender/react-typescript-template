import { useReducer } from 'react';

import { createContext } from './create-context';
import { IAction, reducer } from './reducer';
import { RGBColorType } from './types';

// STEP 3-6 定義 initialState
const initialState: RGBColorType = {
  red: 0,
  green: 0,
  blue: 0,
};

// STEP 2-2 定義 context 的型別
interface RGBContextType extends RGBColorType {
  dispatch: React.Dispatch<IAction>;
}

// STEP 2-3 使用客制的 createContext 來產生 useContext 和 Provider
export const [useRGBContext, Provider] = createContext<RGBContextType>();

// STEP 3-1 建立包含有 reducer 的 provider
export const RGBContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  // STEP 3-5 取出 reducer 回傳的 rgb 和 dispatch
  const [rgb, dispatch] = useReducer(reducer, initialState);

  // STEP 3-7 回傳建立好的 Provider
  return (
    <Provider
      value={{
        ...rgb,
        dispatch,
      }}
    >
      {children}
    </Provider>
  );
};
