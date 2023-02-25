import EquipmentSlotEnum, {
  EquipmentSlotEnumArray,
} from '../../../../models/Enum/EquipmentSlotEnum';
import { SelectedCardContext } from '../..';
import { FC, useContext } from 'react';
import { ICardInputField } from '../CardInputField';

const EquipmentSlotInput: FC<ICardInputField> = ({ inputInfo }) => {
  const { selected, setSelected } = useContext(SelectedCardContext);
  const slots = selected as any;

  const updateEquipmentSlot = (
    e: React.ChangeEvent<HTMLSelectElement>,
    i: number
  ) => {
    const newSlots = slots.equipmentSlots;
    newSlots[i] = e.target.value as EquipmentSlotEnum;
    setSelected({ ...selected, equipmentSlots: newSlots } as typeof selected);
  };

  const addRemoveEquipmentSlot = (addOrRemove: string) => {
    let updatedSlots;
    switch (addOrRemove) {
      case 'add':
        updatedSlots = slots.equipmentSlots;
        updatedSlots.push(EquipmentSlotEnum.Head);
        setSelected({
          ...selected,
          equipmentSlots: updatedSlots,
        } as typeof selected);
        break;
      case 'remove':
        updatedSlots = slots.equipmentSlots;
        updatedSlots.pop();
        setSelected({
          ...selected,
          equipmentSlots: updatedSlots,
        } as typeof selected);
        break;
    }
  };

  return (
    <>
      <div className='row'>
        {slots.equipmentSlots.map((slot: EquipmentSlotEnum, i: number) => (
          <div className='col-6' key={i}>
            <div className='row'>
              <div className='col-2'>{i + 1}</div>
              <div className='col-8'>
                <select
                  className='form-select'
                  id={inputInfo.valueName}
                  value={slot}
                  onChange={(e) => {
                    updateEquipmentSlot(e, i);
                  }}
                >
                  {EquipmentSlotEnumArray.map((slot) => (
                    <option value={slot} key={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='row'>
        <div className='d-flex col-12 justify-content-evenly mt-2'>
          <button
            className='btn btn-primary'
            onClick={() => addRemoveEquipmentSlot('add')}
          >
            Add Slot
          </button>
          <button
            className='btn btn-warning'
            onClick={() => addRemoveEquipmentSlot('remove')}
          >
            Remove Slot
          </button>
        </div>
      </div>
    </>
  );
};

export default EquipmentSlotInput;
