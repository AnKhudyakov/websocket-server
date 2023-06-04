import { body } from "express-validator";

export const validateMiddlewareReg = [
  body("name", "Name must be from 1 to 15 chars").isLength({
    min: 1,
    max: 15,
  }),
];