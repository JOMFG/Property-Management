import { Property, saveProperty, findProperty } from "./../models/property";
import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator/check";

export function postProperty(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const property = req.body as Property;

  return saveProperty(property)
    .then(property => {
      return res.json({
        property
      });
    })
    .catch(next);
}

export function getProperty(req: Request, res: Response, next: NextFunction) {
  return findProperty(req.params.propertyId)
    .then(property => {
      return res.json({
        property
      });
    })
    .catch(next);
}

export { validator as propertyValidator } from "../models/property";
