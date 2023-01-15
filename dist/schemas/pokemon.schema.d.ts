/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument } from 'mongoose';
export type PokemonDocument = HydratedDocument<Pokemon>;
export declare class Pokemon {
    id: string;
    name: string;
    hp: string;
    types: [];
    abilities: [
        {
            name: 'Damage Swap';
            text: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.";
            type: 'Pokémon Power';
        }
    ];
    attacks: [
        {
            name: string;
            cost: [];
            convertedEnergyCost: number;
            damage: number;
            text: string;
        }
    ];
    weaknesses: [
        {
            type: string;
            value: string;
        }
    ];
    retreatCost: [];
}
export declare const PokemonSchema: import("mongoose").Schema<Pokemon, import("mongoose").Model<Pokemon, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pokemon>;
