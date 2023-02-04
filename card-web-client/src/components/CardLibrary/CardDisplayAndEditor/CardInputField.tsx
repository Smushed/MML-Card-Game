import EquipmentSlotEnum, {
  EquipmentSlotEnumArray,
} from '../../../models/Enum/EquipmentSlotEnum';
import { SelectedCardContext } from '..';
import { FC, useContext } from 'react';
import { CardInputFields } from './Editor';
import toast from 'react-hot-toast';
import { CardTypeEnumArray } from '../../../models/Enum/CardTypeEnum';
import { ModalContext } from '../../../App';

interface ICardInputField {
  inputInfo: CardInputFields;
}

const CardTypeSelect: FC<ICardInputField> = ({ inputInfo }) => {
  const { selected, setSelected } = useContext(SelectedCardContext);

  const updateCardType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected({
      ...selected,
      type: e.target.value,
    } as typeof selected);
  };

  return (
    <select
      className='form-select'
      id={inputInfo.valueName}
      onChange={(e) => updateCardType(e)}
      value={selected.type}
    >
      {CardTypeEnumArray.map((type) => {
        return (
          <option key={type} value={type}>
            {type}
          </option>
        );
      })}
    </select>
  );
};

const EquipmentSlotInput: FC<ICardInputField> = ({ inputInfo }) => {
  const { selected, setSelected } = useContext(SelectedCardContext);
  const slots = selected as any;

  const updateEquipmentSlot = (
    e: React.ChangeEvent<HTMLSelectElement>,
    i: number
  ) => {
    const newSlots = slots.equipmentSlots;
    newSlots[i] = e.target.value as EquipmentSlotEnum;
    setSelected({ ...selected, equipmentSlots: newSlots } as typeof selected);
  };

  const addRemoveEquipmentSlot = (addOrRemove: string) => {
    let updatedSlots;
    switch (addOrRemove) {
      case 'add':
        updatedSlots = slots.equipmentSlots;
        updatedSlots.push(EquipmentSlotEnum.Head);
        setSelected({
          ...selected,
          equipmentSlots: updatedSlots,
        } as typeof selected);
        break;
      case 'remove':
        updatedSlots = slots.equipmentSlots;
        updatedSlots.pop();
        setSelected({
          ...selected,
          equipmentSlots: updatedSlots,
        } as typeof selected);
        break;
    }
  };

  return (
    <>
      <div className='row'>
        {slots.equipmentSlots.map((slot: EquipmentSlotEnum, i: number) => (
          <div className='col-6' key={i}>
            <div className='row'>
              <div className='col-2'>{i + 1}</div>
              <div className='col-8'>
                <select
                  className='form-select'
                  id={inputInfo.valueName}
                  value={slot}
                  onChange={(e) => {
                    updateEquipmentSlot(e, i);
                  }}
                >
                  {EquipmentSlotEnumArray.map((slot) => (
                    <option value={slot} key={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='row'>
        <div className='d-flex col-12 justify-content-evenly mt-2'>
          <button
            className='btn btn-primary'
            onClick={() => addRemoveEquipmentSlot('add')}
          >
            Add Slot
          </button>
          <button
            className='btn btn-warning'
            onClick={() => addRemoveEquipmentSlot('remove')}
          >
            Remove Slot
          </button>
        </div>
      </div>
    </>
  );
};

const MonsterTypeSelect: FC = () => {
  const { selected, setSelected } = useContext(SelectedCardContext);
  const { modalOpen, setModalOpen } = useContext(ModalContext);
  return (
    <>
      <div className='row'>
        <div className='col-12'>
          <select></select>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <button
            className='btn btn-primary mt-2'
            onClick={() => setModalOpen(true)}
          >
            Add Type
          </button>
        </div>
      </div>
    </>
  );
};

const CardInputField: FC<ICardInputField> = ({ inputInfo }) => {
  const { selected, setSelected } = useContext(SelectedCardContext);

  //To iterate through the selected card's equipment slots without worrying if they have key
  //We do the check in the switch statement below

  const renderInput = () => {
    switch (inputInfo.inputType) {
      case 'select':
        return (
          <select className='form-select' id={inputInfo.valueName}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        );
      case 'text':
        return (
          <input
            type={inputInfo.inputType}
            className='form-control'
            id={inputInfo.valueName}
            value={selected[inputInfo.valueName as keyof typeof selected]}
            onChange={(e) => {
              updateField(e);
            }}
          />
        );
      case 'number':
        return (
          <input
            type={inputInfo.inputType}
            className='form-control'
            id={inputInfo.valueName}
            value={selected[inputInfo.valueName as keyof typeof selected]}
            onChange={(e) => {
              updateField(e);
            }}
          />
        );
      case 'checkbox':
        return (
          <input
            type='checkbox'
            className='form-check-input'
            id={inputInfo.valueName}
            // value={selected[inputInfo.valueName as keyof typeof selected]}
            onChange={(e) => {
              updateField(e);
            }}
          />
        );
      case 'radio':
        return (
          <input
            type='radio'
            className='form-check-input'
            id={inputInfo.valueName}
            // value={selected[inputInfo.valueName as keyof typeof selected]}
            onChange={(e) => {
              updateField(e);
            }}
          />
        );
      case 'equipmentSlots':
        return <EquipmentSlotInput inputInfo={inputInfo} />;
      case 'cardType':
        return <CardTypeSelect inputInfo={inputInfo} />;
      case 'monsterType':
        return <MonsterTypeSelect />;
      default:
        return <></>;
    }
  };

  const inputIsValid = (checkField: string, valueToCheck: string): boolean => {
    //Level checking
    if (checkField === 'level') {
      if (valueToCheck !== '') {
        const convertedValue = parseInt(valueToCheck);
        if (convertedValue <= 0) {
          toast.error('Level cannot be less than 1');
          return false;
        } else if (convertedValue > 9) {
          toast.error('Level cannot be greater than 9');
          return false;
        }
      }
    }
    return true;
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputIsValid(e.target.id, e.target.value)) {
      return;
    }
    setSelected({
      ...selected,
      [e.target.id]: e.target.value,
    } as typeof selected);
  };

  return (
    <div className='col-6 rounded-1 mt-2 mb-2 text-center'>
      <label htmlFor={`${inputInfo.valueName}Input`}>
        <small>{inputInfo.labelText}</small>
      </label>
      {renderInput()}
    </div>
  );
};

export default CardInputField;
