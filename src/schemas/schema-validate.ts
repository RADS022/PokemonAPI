import * as Joi from '@hapi/joi';

export const validationSchema = Joi.object().keys({
  id: Joi.required(),
  name: Joi.string().required(),
  hp: Joi.number().required(),
  types: Joi.array().required(),

  abilities: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required(),
        text: Joi.string().required(),
        type: Joi.string().required(),
      }),
    )
    .required(),
  attacks: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required(),
        cost: Joi.array().required(),
        convertedEnergyCost: Joi.number().required(),
        damage: Joi.number().required(),
        text: Joi.string().required(),
      }),
    )
    .required(),

  weaknesses: Joi.array()
    .items(
      Joi.object({
        type: Joi.string().required(),
        value: Joi.string().required(),
      }),
    )
    .required(),

  retreatCost: Joi.array().required(),
});
