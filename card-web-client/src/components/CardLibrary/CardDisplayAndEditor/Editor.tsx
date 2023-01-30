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
      inputType: 'select',
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
        <div className='row input-group col-12'>
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
  const { selected } = useContext(SelectedCardContext);

  //radio, checkbox, select, input
  // const [valForInput, setValForInput] = useState<
  //   string | number | string[] | CardTypeEnum | undefined
  // >('');

  // useEffect(() => {}, [selected, valueName]);

  return (
    <>
      <label htmlFor={`${inputInfo.valueName}Input`} className='form-label'>
        {inputInfo.labelText}
      </label>
      <input
        type='text'
        className='form-control'
        id={`${inputInfo.valueName}Input`}
        // value={valForInput}
      />
    </>
  );
};

export default Editor;
