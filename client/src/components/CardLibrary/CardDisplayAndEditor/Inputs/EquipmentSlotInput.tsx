import EquipmentSlotEnum, {
  EquipmentSlotEnumArray,
} from '../../../../models/Enum/EquipmentSlotEnum';
import { SelectedCardContext } from '../..';
import { FC, useContext, useEffect, useState } from 'react';
import { ICardInputField } from '../CardInputField';
import { Equipment } from '../../../../models';

interface ISingleEquipmentSlotInput {
  htmlId: string;
  slot: EquipmentSlotEnum;
  updateEquipmentSlot: Function;
  equipIndex: number;
}

const SingleEquipmentSlotInput: FC<ISingleEquipmentSlotInput> = ({
  htmlId,
  slot,
  updateEquipmentSlot,
  equipIndex,
}) => {
  return (
    <select
      className='form-select'
      id={htmlId}
      value={slot}
      onChange={(e) => updateEquipmentSlot(e, equipIndex)}
    >
      {EquipmentSlotEnumArray.map((slot) => (
        <option value={slot} key={slot}>
          {slot}
        </option>
      ))}
    </select>
  );
};

const EquipmentSlotForEquipCard: FC<ICardInputField> = ({ inputInfo }) => {
  const { selected, setSelected } = useContext(SelectedCardContext);
  const [selectedEquipment, setSelectedEquipment] = useState(
    selected as Equipment
  );
  useEffect(() => {
    setSelectedEquipment(selected as Equipment);
  }, [selected]);

  const updateSlot = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectedEquipment.equipmentSlot = e.target.value;
    console.log({ selectedEquipment });
    setSelected({
      ...selectedEquipment,
      slot: e.target.value as EquipmentSlotEnum,
    } as typeof selected);
  };
  return (
    <SingleEquipmentSlotInput
      htmlId={inputInfo.valueName}
      slot={selectedEquipment.slot}
      updateEquipmentSlot={updateSlot}
      equipIndex={0}
    />
  );
};

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
                <SingleEquipmentSlotInput
                  htmlId={inputInfo.valueName}
                  slot={slot}
                  updateEquipmentSlot={updateEquipmentSlot}
                  equipIndex={i}
                />
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

export {
  SingleEquipmentSlotInput,
  EquipmentSlotInput,
  EquipmentSlotForEquipCard,
};
