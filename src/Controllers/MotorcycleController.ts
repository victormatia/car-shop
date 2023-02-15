import { RequestHandler } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  constructor(private _service: MotorcycleService) {
    this._service = _service;
  }

  public createMotorcycle: RequestHandler = async (req, res) => {
    const addedMotorcycle = await this._service.createMotorcyle({ ...req.body });

    res.status(201).json(addedMotorcycle);
  };
}

export default MotorcycleController;
