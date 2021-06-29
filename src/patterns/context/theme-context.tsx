import { createContext } from 'react';

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeType = {
  backgroundColor: string;
  color: string;
};

const themes: Record<THEME, ThemeType> = {
  [THEME.LIGHT]: {
    backgroundColor: 'white',
    color: 'black',
  },
  [THEME.DARK]: {
    backgroundColor: '#555',
    color: 'white',
  },
};

// Create Context
export const ThemeContext = createContext(themes);

// Create Provider
export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>;
};
