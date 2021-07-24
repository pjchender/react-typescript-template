import { ReactNode, ReactPortal, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps): ReactPortal => {
  // STEP 1： 建立一個 div
  const el = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    // STEP 2: 找到 #modal-root
    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
      // eslint-disable-next-line no-console
      console.error('Modal: modal-root not found');
      return undefined;
    }

    // STEP 3: 把 div 放到 #modal-root
    modalRoot.appendChild(el.current);

    return () => {
      // STEP 5: 將 #modal-root 中的 div 移除
      // eslint-disable-next-line react-hooks/exhaustive-deps
      modalRoot.removeChild(el.current);
    };
  }, []);

  // STEP 4: 將 children 的內容放到 div (el.current) 中
  return ReactDOM.createPortal(children, el.current);
};

export default Modal;
