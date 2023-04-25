import joi from "joi";

export const cadastromodel = joi.object({
  nome: joi.string().required(),
  email: joi.string().email().required(),
  senha: joi.string().required(),
});

export const loginmodel = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().required(),
  });
  