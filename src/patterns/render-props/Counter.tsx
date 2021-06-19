import { useState } from 'react';

interface Props {
  render: ({ count, addCount }: { count: number; addCount: () => void }) => JSX.Element;
}

const Counter = ({ render }: Props): JSX.Element => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      {render({
        count,
        addCount,
      })}
    </div>
  );
};

export default Counter;
