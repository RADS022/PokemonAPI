import { Module } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { PokemonsControler } from './pokemons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from 'src/schemas/pokemon.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pokemon.name, schema: PokemonSchema }]),
  ],
  controllers: [PokemonsControler],
  providers: [PokemonsService],
})
export class PokemonsModule {}
