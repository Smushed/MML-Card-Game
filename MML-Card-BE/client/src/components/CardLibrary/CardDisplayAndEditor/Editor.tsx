import { FC, useContext } from 'react';
import { SelectedCardContext } from '..';
import {
  copyPropertyValues,
  doesHaveField,
} from '../../../functions/CardFieldChecker';
import CardInputField from './CardInputField';
import CardTypeEnum, {
  CardTypeEnumArray,
} from '../../../models/Enum/CardTypeEnum';
import {
  Hero,
  Monster,
  Equipment,
  Barricade,
  Battlefield,
  Event,
  Effect,
  createGenericCard,
} from '../../../models';
import { enumFromValue } from '../../../models/Enum/genericEnumTools';

type CardInputFields = {
  valueName: string;
  labelText: string;
  inputType: string;
};

const CardTypeSelect: FC = () => {
  const { selected, setSelected } = useContext(SelectedCardContext);

  const updateCardType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cardTypeEnum = enumFromValue(e.target.value, CardTypeEnum);
    if (cardTypeEnum === selected.cardType) return;
    let newCard:
      | Hero
      | Monster
      | Equipment
      | Barricade
      | Battlefield
      | Event
      | Effect;
    switch (cardTypeEnum) {
      case 'Hero':
        newCard = createGenericCard.hero();
        break;
      case 'Monster':
        newCard = createGenericCard.monster();
        break;
      case 'Equipment':
        newCard = createGenericCard.equipment();
        break;
      case 'Barricade':
        newCard = createGenericCard.barricade();
        break;
      case 'Battlefield':
        newCard = createGenericCard.battlefield();
        break;
      case 'Event':
        newCard = createGenericCard.event();
        break;
      case 'Effect':
        newCard = createGenericCard.effect();
        break;
      default:
        return;
    }
    copyPropertyValues(selected, newCard);
    const selectedCopy = { ...selected } as typeof selected;
    selectedCopy.cardType = cardTypeEnum;
    setSelected(newCard);
  };

  return (
    <select
      className='form-select'
      id='cardTypeSelect'
      onChange={(e) => updateCardType(e)}
      value={selected.cardType}
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

const Editor: FC = () => {
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
        <CardTypeSelect />
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
