import { FC, useContext } from 'react';
import Modal from 'react-modal';
import { ModalContext } from '../../App';

interface IModalWindow {
  children: JSX.Element;
}

const ModalWindow: FC<IModalWindow> = ({ children }) => {
  const { modalOpen, setModalOpen } = useContext(ModalContext);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel='Example Modal'
    >
      <button onClick={closeModal}>close</button>
      {children}
    </Modal>
  );
};

export default ModalWindow;
