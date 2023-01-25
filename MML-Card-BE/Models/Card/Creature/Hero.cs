﻿using MML_Card_BE.Models.Enum;
using MML_Card_BE.Models.Card.Creature.Interfaces;
using MML_Card_BE.Models.Card.Useable;

namespace MML_Card_BE.Models.Card.Creature
{
    public class Hero : IHero
    {
        public string? _id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public CardType TypeOfCard { get; set; }

        public int Level { get; set; }
        public string[] CreatureType { get; set; } //This will come from the DB. Need to have a them in there
        public Equipment[] EquippedItems { get; set; }
        public EquipmentSlot[] EquipmentSlots { get; set; }
        public Effect[] Effect { get; set; }
        public Ability[] Abilities { get; set; }
        public Func<string> Exhaust { get; set; }
    }
}