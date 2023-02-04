import { Toaster } from 'react-hot-toast';
import './App.css';
import CardLibrary from './components/CardLibrary';
import Modal from 'react-modal';
import { createContext, useState } from 'react';
import ModalWindow from './components/ModalWindow';

Modal.setAppElement('#root');

const ModalContext = createContext<{
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({ modalOpen: false, setModalOpen: () => {} });

const ModalContentContext = createContext<{
  modalContent: JSX.Element;
  setModalContent: React.Dispatch<React.SetStateAction<JSX.Element>>;
}>({ modalContent: <></>, setModalContent: () => {} });

const App = () => {
  const [modalOpenState, setIsModalOpenState] = useState<boolean>(false);
  const [modalContentState, setModalContentState] = useState<JSX.Element>(
    <></>
  );
  return (
    <ModalContext.Provider
      value={{ modalOpen: modalOpenState, setModalOpen: setIsModalOpenState }}
    >
      <ModalContentContext.Provider
        value={{
          modalContent: modalContentState,
          setModalContent: setModalContentState,
        }}
      >
        <div className='container-fluid'>
          <ModalWindow children={modalContentState} />
          <Toaster />
          <CardLibrary />
        </div>
      </ModalContentContext.Provider>
    </ModalContext.Provider>
  );
};

export { ModalContext };

export default App;
