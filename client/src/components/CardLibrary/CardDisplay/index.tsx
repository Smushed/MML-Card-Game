import { useContext } from 'react';
import { SelectedCardContext } from '..';
import {
  checkAndReturnVal,
  checkAndReturnNum,
} from '../../../functions/CardFieldChecker';
import Placeholder from '../../../constants/logos/200x200.jpg';
import StarSVG from '../../../constants/logos/star.svg';

const CardDisplay = () => {
  const selectedCard = useContext(SelectedCardContext);

  const levelStars = () => {
    let starDisplay: JSX.Element[] = [];
    for (
      let i = 0;
      i < checkAndReturnNum(selectedCard.selected, 'level');
      i++
    ) {
      starDisplay.push(
        <img src={StarSVG} alt='Placeholder' width={20} height={20} />
      );
    }
    return starDisplay;
  };

  return (
    <div className=' mt-3 row border rounded-1'>
      <div className='col-12'>
        <div className='row'>
          <div className='col-12 mt-1'>
            <h3>
              {checkAndReturnVal(selectedCard.selected, 'name').toUpperCase()}
            </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>{levelStars()}</div>
        </div>
        <div className='row text-center'>
          <div className='col-12'>
            <img src={Placeholder} alt='Placeholder' />
          </div>
        </div>
        <div className='row'>
          <div className='col-2'>
            {checkAndReturnVal(selectedCard.selected, 'faction')}
          </div>
          <div className='col-10'>
            {checkAndReturnVal(selectedCard.selected, 'cardType')}
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            {checkAndReturnVal(selectedCard.selected, 'description')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
