import { useState, useContext } from 'react';
import { SelectedCardContext } from '..';
import { checkAndReturnVal } from '../../../functions/CardFieldChecker';
import Editor from './Editor';

import { createGenericMonster } from '../../../models/Creature/Monster';

const CardDisplayAndEditor = () => {
  const [editing, setEditing] = useState<boolean>(false);

  const selectedCard = useContext(SelectedCardContext);

  return (
    <div className='col-8 col-md-6'>
      <CardDisplay />
      {editing && <Editor />}
      <div className='row mt-4'>
        <div className=' d-flex col-12'>
          <button className='btn btn-info' onClick={() => setEditing(true)}>
            Edit
          </button>
          <button
            className='btn btn-success ms-4'
            onClick={() => {
              selectedCard.setSelected(createGenericMonster());
              setEditing(true);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const CardDisplay = () => {
  const selectedCard = useContext(SelectedCardContext);
  return (
    <div className='row'>
      <div className='col-12'>
        <h1>Card Display</h1>
        <div className='row'>
          <div className='col-12'>
            <h3>{checkAndReturnVal(selectedCard.selected, 'name')}</h3>
          </div>
          <div className='col-12'>
            {checkAndReturnVal(selectedCard.selected, 'level')}
          </div>
          <div className='col-12'>
            {checkAndReturnVal(selectedCard.selected, 'type')}
          </div>
          <div className='col-12'>
            {checkAndReturnVal(selectedCard.selected, 'description')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDisplayAndEditor;
