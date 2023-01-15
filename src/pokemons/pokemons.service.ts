import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon, PokemonDocument } from 'src/schemas/pokemon.schema';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectModel(Pokemon.name) private pokemonModel: Model<PokemonDocument>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    return new this.pokemonModel(createPokemonDto).save();
  }

  async findAll() {
    return this.pokemonModel.find();
  }

  async findOne(id: string) {
    return this.pokemonModel.findOne({ id });
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonModel.updateOne(
      { id },
      { $set: { ...updatePokemonDto } },
    );
  }

  async remove(id: string) {
    return this.pokemonModel.deleteOne({ id });
  }
}
