import './index.css';

import { RGBContextProvider } from 'patterns/context-reducer-I/rgb-context';

import ColorPalette from './ColorPalette';

const DemoContextAndReducer = (): JSX.Element => {
  return (
    // STEP 5-1：使用 RGBContext 的 Provider
    <RGBContextProvider>
      <h1>DemoContextAndReducer</h1>
      <p>使用 as 來滿足 TS</p>
      <ColorPalette />
    </RGBContextProvider>
  );
};

export default DemoContextAndReducer;
