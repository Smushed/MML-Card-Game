import { FC, useContext, useEffect, useState } from 'react';
import { SelectedCardContext } from '..';
import { doesHaveField } from '../../../functions/CardFieldChecker';

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
      inputType: 'checkbox',
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
    console.log('submitting form');
  };

  return (
    <div className='col-8 col-md-6'>
      <h2>Editor Window</h2>
      <form onSubmit={submitForm}>
        <div className='row col-12'>
          {possibleInputFields.map(
            (field) =>
              doesHaveField(selected, field.valueName) && (
                <InputFieldForCard inputInfo={field} />
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
  const [InputBox, setInputBox] = useState(<></>);

  useEffect(() => {
    renderInput();
  }, [inputInfo]);

  const renderInput = () => {
    switch (inputInfo.inputType) {
      case 'select':
        setInputBox(
          <select className='form-select' id={`${inputInfo.valueName}`}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        );
        break;
      case 'text':
        setInputBox(
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
        break;
      case 'number':
        setInputBox(
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
        break;
      case 'checkbox':
        setInputBox(
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
        break;
      case 'radio':
        setInputBox(
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
        break;
      default:
        setInputBox(<div>butt</div>);
        break;
    }
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected({
      ...selected,
      [e.target.id]: e.target.value,
    } as typeof selected);
  };

  return (
    <div className='row input-group'>
      <div className='col-12'>
        <div className='mb-2'>
          <label htmlFor={`${inputInfo.valueName}Input`}>
            <small>{inputInfo.labelText}</small>
          </label>
          {InputBox}
        </div>
      </div>
    </div>
  );
};

export default Editor;
