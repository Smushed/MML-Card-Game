import { FC, useEffect, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import Modal, { Styles } from 'react-modal';

import axios from 'axios';
import MonsterType from '../../../../models/Creature/MonsterType';
import { SelectedCardContext } from '../..';
import { Monster } from '../../../../models';

interface IModalWindow {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IAddMonsterTypeForm {
  pullMonsterTypes: Function;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IMonsterTypeCheckboxes {
  monsterTypes: MonsterType[];
}

const AddMonsterTypeForm: FC<IAddMonsterTypeForm> = ({
  pullMonsterTypes,
  setModalOpen,
}) => {
  const [monsterTypeInput, setMonsterTypeInput] = useState<string>('');

  const submitType = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (monsterTypeInput === '') {
      toast.error('Monster Type cannot be empty');
      return;
    }
    axios
      .post('/api/monsterType', { monsterType: monsterTypeInput })
      .then((res) => {
        toast.success(monsterTypeInput + ' added to DB');
        pullMonsterTypes();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonsterTypeInput(e.target.value);
  };

  return (
    <div className='monsterTypeModalInput'>
      {/* This is controlled by state on the App Level
          Done this way to dynamically change the modal widow while keeping on the top level of the app */}
      <div className='row'>
        <div className='col-12'>
          <form
            className='form-group text-center'
            onSubmit={(e) => {
              submitType(e);
            }}
          >
            <div className='row justify-content-center'>
              <label htmlFor='monsterType'>Add New Monster Type</label>
              <div className='col-6'>
                <input
                  type='text'
                  className='form-control mt-2'
                  id='monsterType'
                  value={monsterTypeInput}
                  onChange={(e) => updateField(e)}
                />
              </div>
              <div className='col-3'>
                <input
                  className='btn btn-primary m-2'
                  type='submit'
                  value='Submit to DB'
                />
              </div>
              <div className='col-3'>
                <button
                  className='btn btn-warning m-2'
                  onClick={(e) => {
                    e.preventDefault();
                    setModalOpen(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const MonsterTypeCheckboxes: FC<IMonsterTypeCheckboxes> = ({
  monsterTypes,
}) => {
  const { selected, setSelected } = useContext(SelectedCardContext);
  const [selectedMonster, setSelectedMonster] = useState<Monster>(
    selected as Monster
  );

  useEffect(() => {
    setSelectedMonster(selected as Monster);
  }, [selected]);

  const updateMonsterType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTypeArray = [...selectedMonster.monsterType];
    const doesHaveType = newTypeArray.includes(e.currentTarget.value);
    if (doesHaveType) {
      const index = newTypeArray.indexOf(e.currentTarget.value);
      newTypeArray.splice(index, 1);
    } else {
      newTypeArray.push(e.currentTarget.value);
    }
    const selectedCopy = { ...selectedMonster, monsterType: newTypeArray };
    setSelected({ ...selectedCopy } as Monster);
  };

  return (
    <div className='row mb-5'>
      <div className='col-12'>
        <div className='row'>
          <h3 className='text-center'>Select Monster Types</h3>
          {monsterTypes.map((type, i) => (
            <div className='form-check col-3' key={i}>
              <input
                className='form-check-input mousePointer'
                type='checkbox'
                value={type.monsterType}
                id={type.monsterType}
                checked={selectedMonster.monsterType.includes(type.monsterType)}
                onChange={(e) => updateMonsterType(e)}
              />
              <label
                className='form-check-label mousePointer'
                htmlFor={type.monsterType}
              >
                {type.monsterType}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ModalWindow: FC<IModalWindow> = ({ modalOpen, setModalOpen }) => {
  const { overlay, content } = Modal.defaultStyles;
  const [monsterTypes, setMonsterTypes] = useState<MonsterType[]>([]);

  useEffect(() => {
    pullMonsterTypes();
  }, []);

  const pullMonsterTypes = () => {
    axios
      .get('/api/monsterType')
      .then((res) => {
        setMonsterTypes(res.data as MonsterType[]);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

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
      height: '700px',
      width: '700px',
    },
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal isOpen={modalOpen} onRequestClose={closeModal} style={customStyles}>
      <MonsterTypeCheckboxes monsterTypes={monsterTypes} />
      <AddMonsterTypeForm
        pullMonsterTypes={pullMonsterTypes}
        setModalOpen={setModalOpen}
      />
    </Modal>
  );
};

const MonsterTypeSelect = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { selected, setSelected } = useContext(SelectedCardContext);
  const [selectedMonster, setSelectedMonster] = useState<Monster>(
    selected as Monster
  );

  useEffect(() => {
    setSelectedMonster(selected as Monster);
  }, [selected]);

  const openMonsterTypeModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className='row'>
        {selectedMonster.monsterType.map((type, i) => (
          <div className='col-3 border m-2'>{type}</div>
        ))}
      </div>
      <div className='row'>
        <div className='col-12'>
          <button
            className='btn btn-primary mt-2'
            onClick={() => openMonsterTypeModal()}
          >
            Add Type
          </button>
        </div>
      </div>
      <ModalWindow modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
};

export default MonsterTypeSelect;
