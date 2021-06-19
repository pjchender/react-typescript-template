import Counter from 'patterns/render-props/Counter';

const DemoRenderProps = (): JSX.Element => {
  return (
    <>
      <Counter
        render={({ count, addCount }) => (
          <button type="button" onClick={addCount}>
            click {count} times
          </button>
        )}
      />

      <Counter
        render={({ count, addCount }) => (
          <div onMouseEnter={addCount}>hover {count} times</div>
        )}
      />
    </>
  );
};

export default DemoRenderProps;
