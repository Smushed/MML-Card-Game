import { useContext } from 'react';
import { CardContext } from '..';
import ListItem from './ListItem';

const SelectWindow = () => {
  const cards = useContext(CardContext);
  return (
    <div className='col-md-5 p-4 m-4 border border-dark rounded-1'>
      Select Window
      {cards.map((card) => (
        <ListItem card={card} key={card._id} />
      ))}
    </div>
  );
};

export default SelectWindow;
