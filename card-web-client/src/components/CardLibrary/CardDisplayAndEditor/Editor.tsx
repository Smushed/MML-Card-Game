import { FC, useContext } from 'react';
import { SelectedCardContext } from '..';
import { doesHaveField } from '../../../functions/CardFieldChecker';

const Editor = () => {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitting form');
  };

  return (
    <div className='col-8 col-md-6'>
      <h2>Editor Window</h2>
      <form onSubmit={submitForm}>
        <div className='row input-group col-12'>
          <InputFieldForCard valueName='name' labelText='Name' />

          <InputFieldForCard valueName='level' labelText='Level' />

          <InputFieldForCard valueName='description' labelText='Description' />

          <InputFieldForCard valueName='type' labelText='Type' />

          <InputFieldForCard
            valueName='equipmentSlots'
            labelText='Equipment Slots'
          />

          <InputFieldForCard
            valueName='equipmentSlot'
            labelText='Equipment Slot'
          />

          <InputFieldForCard valueName='effect' labelText='Effect' />

          <InputFieldForCard valueName='bonus' labelText='Bonus' />

          <InputFieldForCard valueName='abilities' labelText='Abilities' />

          <InputFieldForCard valueName='monsterType' labelText='Monster Type' />

          <InputFieldForCard valueName='exhaust' labelText='Exhaust' />

          <InputFieldForCard valueName='onUse' labelText='On Use' />
        </div>
      </form>
    </div>
  );
};

interface IInputFieldForCard {
  valueName: string;
  labelText: string;
}

const InputFieldForCard: FC<IInputFieldForCard> = ({
  valueName,
  labelText,
}) => {
  const selectedCard = useContext(SelectedCardContext);
  return (
    <>
      {doesHaveField(selectedCard.selected, valueName) && (
        <>
          <label htmlFor={`${valueName}Input`} className='form-label'>
            {labelText}
          </label>
          <input
            type='text'
            className='form-control'
            id={`${valueName}Input`}
          />
        </>
      )}
    </>
  );
};

export default Editor;
