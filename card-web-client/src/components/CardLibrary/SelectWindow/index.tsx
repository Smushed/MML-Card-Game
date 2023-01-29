import { FC, useContext } from 'react';
import { CardContext } from '..';
import ListItem from './ListItem';

interface ISelectWindow {
  setSelectedCard: Function;
}

const SelectWindow: FC<ISelectWindow> = ({ setSelectedCard }) => {
  const cards = useContext(CardContext);
  return (
    <div className='col-md-5 p-4 m-4 border border-dark rounded-1'>
      Select Window
      {cards.map((card) => (
        <ListItem card={card} setSelectedCard={setSelectedCard} />
      ))}
    </div>
  );
};

export default SelectWindow;
