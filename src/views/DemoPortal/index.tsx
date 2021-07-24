import './index.css';

import { useState } from 'react';

import Modal from './Modal';

// use the Modal component in DemoPortal
const DemoPortal = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    setShowModal(true);
  };
  const handleHide = () => {
    setShowModal(false);
  };

  return (
    <>
      <button type="button" onClick={handleShow}>
        Show Modal
      </button>

      {showModal && (
        <Modal>
          <div className="modal">
            <div>
              With a portal, we can render content into a different part of the DOM, as if
              it were any other React child.
            </div>
            This is being rendered inside the #modal-container div.
            <button type="button" onClick={handleHide}>
              Hide modal
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};
export default DemoPortal;
