import useCounter from 'patterns/custom-hooks/useCounter';

const Button = () => {
  const [count, addCount] = useCounter();
  return (
    <button type="button" onClick={addCount}>
      click {count} times
    </button>
  );
};

const Hover = () => {
  const [count, addCount] = useCounter();
  return <div onMouseEnter={addCount}>hover {count} times</div>;
};

const DemoCustomHooks = (): JSX.Element => {
  return (
    <>
      <Button />
      <Hover />
    </>
  );
};

export default DemoCustomHooks;
