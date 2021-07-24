import { useCallback, useRef } from 'react';

const DemoCallbackRef = (): JSX.Element => {
  // STEP 2: 建立一個保存 node 的 ref
  const nodeRef = useRef<HTMLInputElement | null>(null);

  // STEP 1: 使用 callback + ref 取得 node
  const setTextInput = useCallback((node: HTMLInputElement) => {
    // eslint-disable-next-line no-console
    console.log('[DemoCallbackRef] useCallback', { node });

    // STEP 3: 將 node 設定給 nodeRef，便可將此 ref 保存下來
    nodeRef.current = node;
  }, []);

  // STEP 4: 使用剛剛保存下來的 ref
  const handleClick = useCallback(() => {
    if (nodeRef.current) {
      nodeRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input ref={setTextInput} type="text" />
      <button type="button" onClick={handleClick}>
        Focus the input
      </button>
    </div>
  );
};

export default DemoCallbackRef;
