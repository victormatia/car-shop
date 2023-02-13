import { RequestHandler } from 'express';
import CarService from '../Services/CarService';

class CarController {
  constructor(private _service: CarService) {
    this._service = _service;
  }

  public createCar: RequestHandler = async (req, res) => {
    const addedCar = await this._service.createCar({ ...req.body });

    res.status(201).json(addedCar);
  };
}

export default CarController;