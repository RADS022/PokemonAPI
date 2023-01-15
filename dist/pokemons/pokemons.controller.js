"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonsControler = void 0;
const common_1 = require("@nestjs/common");
const pokemons_service_1 = require("./pokemons.service");
const create_pokemon_dto_1 = require("./dto/create-pokemon.dto");
const update_pokemon_dto_1 = require("./dto/update-pokemon.dto");
const schema_validate_1 = require("../schemas/schema-validate");
let PokemonsControler = class PokemonsControler {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
    }
    create(CreatePokemonDto) {
        if (schema_validate_1.validationSchema.validate(CreatePokemonDto).error) {
            return schema_validate_1.validationSchema.validate(CreatePokemonDto).error.message;
        }
        else {
            this.pokemonService.create(CreatePokemonDto);
            return 'Pokemon criado com sucesso';
        }
    }
    findAll() {
        return this.pokemonService.findAll();
    }
    findOne(id) {
        return this.pokemonService.findOne(id);
    }
    update(id, UpdatePokemonDto) {
        return this.pokemonService.update(id, UpdatePokemonDto);
    }
    remove(id) {
        return this.pokemonService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pokemon_dto_1.CreatePokemonDto]),
    __metadata("design:returntype", void 0)
], PokemonsControler.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PokemonsControler.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PokemonsControler.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pokemon_dto_1.UpdatePokemonDto]),
    __metadata("design:returntype", void 0)
], PokemonsControler.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PokemonsControler.prototype, "remove", null);
PokemonsControler = __decorate([
    (0, common_1.Controller)('pokemons'),
    __metadata("design:paramtypes", [pokemons_service_1.PokemonsService])
], PokemonsControler);
exports.PokemonsControler = PokemonsControler;
//# sourceMappingURL=pokemons.controller.js.map