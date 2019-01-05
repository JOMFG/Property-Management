import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator/check";

export function postProperty(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  return res.json({});
}

export { validator as propertyValidator } from "../models/property";
