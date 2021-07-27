// https://frontendmasters.com/courses/react-typescript/
import { THEME, ThemeContext } from 'patterns/context/theme-context';
import { useContext, useState } from 'react';

const DemoContext = (): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState<THEME>(THEME.LIGHT);
  const themes = useContext(ThemeContext);

  const handleClick = () => {
    setCurrentTheme(prevTheme => (prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  };

  return (
    <main
      style={{
        ...themes[currentTheme],
      }}
    >
      <h1>DemoContext</h1>
      <p>最基本的 Context</p>
      <button type="button" onClick={handleClick}>
        Change Theme
      </button>
    </main>
  );
};

export default DemoContext;
