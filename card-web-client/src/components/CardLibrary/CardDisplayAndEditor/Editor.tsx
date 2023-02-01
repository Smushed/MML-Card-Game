import { FC, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { SelectedCardContext } from '..';
import { doesHaveField } from '../../../functions/CardFieldChecker';
import EquipmentSlotEnum, {
  EquipmentSlotEnumArray,
} from '../../../models/Enum/EquipmentSlotEnum';

type CardInputFields = {
  valueName: string;
  labelText: string;
  inputType: string;
};

const Editor = () => {
  const { selected } = useContext(SelectedCardContext);
  const possibleInputFields: Array<CardInputFields> = [
    { valueName: 'name', labelText: 'Name', inputType: 'text' },
    { valueName: 'level', labelText: 'Level', inputType: 'number' },
    { valueName: 'description', labelText: 'Description', inputType: 'text' },
    { valueName: 'type', labelText: 'Type', inputType: 'select' },
    {
      valueName: 'equipmentSlots',
      labelText: 'Equipment Slots',
      inputType: 'equipmentSlots',
    },
    {
      valueName: 'equipmentSlot',
      labelText: 'Equipment Slot',
      inputType: 'select',
    },
    { valueName: 'effect', labelText: 'Effect', inputType: 'select' },
    { valueName: 'bonus', labelText: 'Bonus', inputType: 'number' },
    { valueName: 'abilities', labelText: 'Abilities', inputType: 'select' },
    {
      valueName: 'monsterType',
      labelText: 'Monster Type',
      inputType: 'select',
    },
    { valueName: 'exhaust', labelText: 'Exhaust', inputType: 'select' },
    { valueName: 'onUse', labelText: 'On Use', inputType: 'select' },
  ];

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='col-8 col-md-6'>
      <h2>Editor Window</h2>
      <form onSubmit={submitForm}>
        <div className='row col-12'>
          {possibleInputFields.map(
            (field) =>
              doesHaveField(selected, field.valueName) && (
                <InputFieldForCard inputInfo={field} key={field.valueName} />
              )
          )}
        </div>
      </form>
    </div>
  );
};

interface IInputFieldForCard {
  inputInfo: CardInputFields;
}

const InputFieldForCard: FC<IInputFieldForCard> = ({ inputInfo }) => {
  const { selected, setSelected } = useContext(SelectedCardContext);

  //To iterate through the selected card's equipment slots without worrying if they have key
  //We do the check in the switch statement below
  const slots = selected as any;

  const EquipmentSlotInput = () => {
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
              <select
                className='form-select'
                id={`${inputInfo.valueName}`}
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

  const renderInput = () => {
    switch (inputInfo.inputType) {
      case 'select':
        return (
          <select className='form-select' id={`${inputInfo.valueName}`}>
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
            id={`${inputInfo.valueName}`}
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
            id={`${inputInfo.valueName}`}
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
            id={`${inputInfo.valueName}`}
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
            id={`${inputInfo.valueName}`}
            // value={selected[inputInfo.valueName as keyof typeof selected]}
            onChange={(e) => {
              updateField(e);
            }}
          />
        );
      case 'equipmentSlots':
        return <EquipmentSlotInput />;
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
    <div className='row input-group border rounded-1 mt-2'>
      <div className='col-12 mb-2 text-center'>
        <label htmlFor={`${inputInfo.valueName}Input`}>
          <small>{inputInfo.labelText}</small>
        </label>
        {renderInput()}
      </div>
    </div>
  );
};

export default Editor;
