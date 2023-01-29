import { FC, useEffect, useContext } from 'react';
import { SelectedCardContext } from '..';

import { createGenericMonster } from '../../../models/Creature/Monster';
import CardType from '../../../models/Enum/CardTypeEnum';

interface ICardDisplay {
  setSelectedCard: Function;
}

const CardDisplay: FC<ICardDisplay> = ({ setSelectedCard }) => {
  useEffect(() => {}, []);

  const selectedCard = useContext(SelectedCardContext);

  return (
    <div className='col-8 col-md-6'>
      Card Display
      <div className='row'>
        <div className=' d-flex col-12 justify-content-center'>
          <button className='btn btn-info'>Edit</button>
          <button
            className='btn btn-success ms-4'
            onClick={() => {
              setSelectedCard(createGenericMonster());
            }}
          >
            Add
          </button>
        </div>
        <div className='row'>
          <div className='col-12'>{selectedCard.name}</div>
          <div className='col-12'>{selectedCard.type}</div>
          <div className='col-12'>{selectedCard.description}</div>
        </div>
      </div>
      <button className='btn btn-primary'>What the hell</button>
    </div>
  );
};

export default CardDisplay;
