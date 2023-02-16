import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import CardBase from '../../models/CardBase';
import SelectWindow from './SelectWindow';

import './CardLibrary.css';
import CardDisplayAndEditor from './CardDisplayAndEditor';
import {
  Hero,
  Monster,
  Barricade,
  Battlefield,
  Equipment,
  Event,
  Effect,
  createGenericCard,
} from '../../models';

const genericCard = createGenericCard.monster();

const CardContext = createContext<CardBase[]>([]);
const SelectedCardContext = createContext<{
  selected:
    | CardBase
    | Hero
    | Monster
    | Equipment
    | Barricade
    | Battlefield
    | Event
    | Effect;
  setSelected: React.Dispatch<
    React.SetStateAction<
      | CardBase
      | Hero
      | Monster
      | Equipment
      | Barricade
      | Battlefield
      | Event
      | Effect
    >
  >;
}>({ selected: genericCard, setSelected: () => {} });

const CardLibrary = () => {
  const [cards, setCards] = useState<CardBase[]>([]);
  const [selectedCard, setSelectedCard] = useState<
    | CardBase
    | Hero
    | Monster
    | Equipment
    | Barricade
    | Battlefield
    | Event
    | Effect
  >(genericCard);

  useEffect(() => {
    pullAllCards();
  }, []);

  const pullAllCards = async () => {
    try {
      const { data } = await axios.get('/api/card/all');
      setCards(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <CardContext.Provider value={cards}>
        <SelectedCardContext.Provider
          value={{ selected: selectedCard, setSelected: setSelectedCard }}
        >
          <div className='d-flex row justify-content-evenly'>
            <SelectWindow />
            <CardDisplayAndEditor />
          </div>
        </SelectedCardContext.Provider>
      </CardContext.Provider>
    </>
  );
};

export { CardContext, SelectedCardContext };
export default CardLibrary;
