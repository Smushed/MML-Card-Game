import { FC, useContext } from 'react';
import Modal, { Styles } from 'react-modal';
import { ModalContext } from '../../App';

interface IModalWindow {
  children: JSX.Element;
}

const ModalWindow: FC<IModalWindow> = ({ children }) => {
  const { modalOpen, setModalOpen } = useContext(ModalContext);

  const closeModal = () => {
    setModalOpen(false);
  };

  const { overlay, content } = Modal.defaultStyles;

  const customStyles: Styles = {
    overlay: { ...overlay, backgroundColor: 'rgba(70, 70, 70, 0.75)' },
    content: {
      ...content,
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal isOpen={modalOpen} onRequestClose={closeModal} style={customStyles}>
      {/* This is controlled by state on the App Level
          Done this way to dynamically change the modal widow while keeping on the top level of the app */}
      {children}
      <div className='row mt-4'>
        <div className='col-12 text-center'>
          <button className='btn btn-warning' onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWindow;
