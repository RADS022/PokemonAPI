import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PokemonDocument = HydratedDocument<Pokemon>;

@Schema()
export class Pokemon {
  @Prop()
  id: string;
  @Prop()
  name: string;
  @Prop()
  hp: string;
  @Prop()
  types: [];
  @Prop()
  abilities: [
    {
      name: 'Damage Swap';
      text: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.";
      type: 'Pokémon Power';
    },
  ];
  @Prop()
  attacks: [
    {
      name: string;
      cost: [];
      convertedEnergyCost: number;
      damage: number;
      text: string;
    },
  ];
  @Prop()
  weaknesses: [
    {
      type: string;
      value: string;
    },
  ];
  @Prop()
  retreatCost: [];
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
