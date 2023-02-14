import { useContext } from 'react';
import { SelectedCardContext } from '..';
import { doesHaveField } from '../../../functions/CardFieldChecker';
import CardInputField from './CardInputField';

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
    { valueName: 'cardType', labelText: 'Card Type', inputType: 'cardType' },
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
    { valueName: 'abilities', labelText: 'Abilities', inputType: 'TODO' },
    {
      valueName: 'monsterType',
      labelText: 'Monster Type',
      inputType: 'monsterType',
    },
    { valueName: 'exhaust', labelText: 'Exhaust', inputType: 'TODO' },
    { valueName: 'onUse', labelText: 'On Use', inputType: 'TODO' },
  ];

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='row'>
      <div className='col-12'>
        <h2>Editor Window</h2>
        <form onSubmit={submitForm} className='row'>
          {possibleInputFields.map(
            (field) =>
              doesHaveField(selected, field.valueName) && (
                <CardInputField inputInfo={field} key={field.valueName} />
              )
          )}
        </form>
      </div>
    </div>
  );
};

export type { CardInputFields };

export default Editor;
