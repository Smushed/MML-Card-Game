import { Hero, Monster } from './Creature';
import { Barricade, Battlefield, Effect, Equipment, Event } from './Useable';

import { createGenericHero } from './Creature/Hero';
import { createGenericMonster } from './Creature/Monster';
import { createGenericBarricade } from './Useable/Barricade';
import { createGenericBattlefield } from './Useable/Battlefield';
import { createGenericEffect } from './Useable/Effect';
import { createGenericEquipment } from './Useable/Equipment';
import { createGenericEvent } from './Useable/Event';

const createGenericCard = {
  hero: createGenericHero,
  monster: createGenericMonster,
  barricade: createGenericBarricade,
  battlefield: createGenericBattlefield,
  effect: createGenericEffect,
  equipment: createGenericEquipment,
  event: createGenericEvent,
};

export {
  Hero,
  Monster,
  Barricade,
  Battlefield,
  Effect,
  Equipment,
  Event,
  createGenericCard,
};
