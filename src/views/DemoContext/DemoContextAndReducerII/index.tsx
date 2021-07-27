import './index.css';

import { RGBContextProvider } from 'patterns/context-reducer-II/rgb-context';

import ColorPalette from './ColorPalette';

const DemoContextAndReducer = (): JSX.Element => {
  return (
    // STEP 4-1：使用 RGBContext 的 Provider
    <RGBContextProvider>
      <h1>DemoContextAndReducer</h1>
      <p>使用自己寫的 create-context 方法</p>
      <ColorPalette />
    </RGBContextProvider>
  );
};

export default DemoContextAndReducer;
