import { SelectedCardContext } from '..';
import { FC, useContext } from 'react';
import { CardInputFields } from './Editor';
import toast from 'react-hot-toast';
import MonsterTypeSelect from './Inputs/MonsterTypeSelect';
import {
  EquipmentSlotForEquipCard,
  EquipmentSlotInput,
} from './Inputs/EquipmentSlotInput';

interface ICardInputField {
  inputInfo: CardInputFields;
}

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
      case 'equipmentSlot':
        return <EquipmentSlotForEquipCard inputInfo={inputInfo} />;
      case 'equipmentSlots':
        return <EquipmentSlotInput inputInfo={inputInfo} />;
      case 'cardType':
        return (
          <input
            className='form-control'
            disabled
            id={inputInfo.valueName}
            value={selected.cardType}
          />
        );
      case 'monsterType':
        return <MonsterTypeSelect />;
      case 'TODO':
        return (
          <input
            className='form-control'
            disabled
            id={inputInfo.valueName}
            value='Not yet implemented'
          />
        );
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

export type { ICardInputField };
export default CardInputField;
