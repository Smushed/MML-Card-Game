import { useState, useContext, useEffect } from 'react';
import { SelectedCardContext } from '..';
import Editor from '../CardEditor';
import CardDisplay from '../CardDisplay';

import { createGenericMonster } from '../../../models/Creature/Monster';

const CardDisplayAndEditor = () => {
  const [editing, setEditing] = useState<boolean>(false);

  const selectedCard = useContext(SelectedCardContext);

  useEffect(() => {
    clickEdit();
  }, []);

  const clickEdit = () => {
    selectedCard.setSelected(createGenericMonster());
    setEditing(!editing);
  };

  const clickAdd = () => {
    //TODO add card to database
  };

  return (
    <div className='row'>
      <div className='col-4'>
        <CardDisplay />
      </div>
      <div className='col-8'>{editing && <Editor />}</div>
      <div className='row mt-4'>
        <div className=' d-flex col-12'>
          <button className='btn btn-info' onClick={clickEdit}>
            Edit
          </button>
          <button className='btn btn-success ms-4' onClick={clickAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDisplayAndEditor;
