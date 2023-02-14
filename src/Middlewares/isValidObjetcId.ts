import { RequestHandler } from 'express';
import { isValidObjectId } from 'mongoose';

abstract class ObjectId {
  static validate: RequestHandler = (req, res, next) => {
    const { id } = req.params;
    const isValid = isValidObjectId(id);  

    if (isValid) return next();

    res.status(422).json({ message: 'Invalid mongo id' });
  };
}

export default ObjectId;
