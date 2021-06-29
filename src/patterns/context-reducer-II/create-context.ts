// https://frontendmasters.com/courses/react-typescript/context-api-edge-cases/
import * as React from 'react';

// STEP 1：建立客製化的 createContext 方法
// <A extends {} | null>：A 需要滿足是任何的物件，否則是 null
// eslint-disable-next-line @typescript-eslint/ban-types
export function createContext<A extends {} | null>(): readonly [
  () => A,
  React.Provider<A | undefined>
] {
  const ctx = React.createContext<A | undefined>(undefined);

  const useContext = () => {
    const c = React.useContext(ctx);
    if (c === undefined) {
      throw new Error('useContext must be inside a Provider with a value');
    }

    return c;
  };

  // as const：讓這個 tuple 是 read only
  return [useContext, ctx.Provider] as const;
}
