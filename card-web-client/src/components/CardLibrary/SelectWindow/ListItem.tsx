import { FC, useContext } from 'react';
import { motion } from 'framer-motion';
import CardBase from '../../../models/CardBase';
import { SelectedCardContext } from '..';

interface IListItem {
  card: CardBase;
}

const ListItem: FC<IListItem> = ({ card }) => {
  const { setSelected } = useContext(SelectedCardContext);
  return (
    <motion.div
      className='mt-1 p-2 ps-4 border border-dark rounded-1 mousePointer'
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.25 },
        backgroundColor: '#F8F8F8',
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setSelected(card)}
    >
      <div className='row'>
        <div className='col-4'>
          {card.name} - {card.type}
        </div>
        <div className='col-8'>{card.description}</div>
      </div>
    </motion.div>
  );
};

export default ListItem;
