import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Type localhost:3000/pokemons to start';
  }
}
