import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import CardBase, { createGenericCardBase } from '../../models/CardBase';
import SelectWindow from './SelectWindow';

import './CardLibrary.css';
import CardDisplay from './CardDisplay';

const genericCard = createGenericCardBase();

const CardContext = createContext<CardBase[]>([]);
const SelectedCardContext = createContext<CardBase>(genericCard);

const CardLibrary = () => {
  const [cards, setCards] = useState<CardBase[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardBase>(genericCard);

  useEffect(() => {
    pullAllCards();
  }, []);

  const pullAllCards = async () => {
    try {
      const { data } = await axios.get('/card/all');
      setCards(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <CardContext.Provider value={cards}>
        <SelectedCardContext.Provider value={selectedCard}>
          <div className='d-flex row justify-content-evenly'>
            <SelectWindow setSelectedCard={setSelectedCard} />
            <CardDisplay setSelectedCard={setSelectedCard} />
          </div>
        </SelectedCardContext.Provider>
      </CardContext.Provider>
    </>
  );
};

export { CardContext, SelectedCardContext };
export default CardLibrary;
