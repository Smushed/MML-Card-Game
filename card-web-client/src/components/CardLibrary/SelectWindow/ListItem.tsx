import { FC } from 'react';
import { motion } from 'framer-motion';
import CardBase from '../../../models/CardBase';

interface IListItem {
  card: CardBase;
  setSelectedCard: Function;
}

const ListItem: FC<IListItem> = ({ card, setSelectedCard }) => {
  return (
    <motion.div
      className='mt-1 p-2 ps-4 border border-dark rounded-1 mousePointer'
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.25 },
        backgroundColor: '#F8F8F8',
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setSelectedCard(card)}
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
