import { useCallback, useState } from 'react';

const useCounter = (): [number, () => void] => {
  const [count, setCount] = useState(0);

  const addCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return [count, addCount];
};

export default useCounter;
