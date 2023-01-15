import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { validationSchema } from 'src/schemas/schema-validate';

@Controller('pokemons')
export class PokemonsControler {
  constructor(private readonly pokemonService: PokemonsService) {}

  @Post()
  create(@Body() CreatePokemonDto: CreatePokemonDto) {
    if (validationSchema.validate(CreatePokemonDto).error) {
      return validationSchema.validate(CreatePokemonDto).error.message;
    } else {
      this.pokemonService.create(CreatePokemonDto);
      return 'Pokemon criado com sucesso';
    }
  }

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(id, UpdatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(id);
  }
}
