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

  public getAllCars: RequestHandler = async (_req, res) => {
    const allCars = await this._service.getAllCars();

    res.status(200).json(allCars);
  };

  public getCarById: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { message, result } = await this._service.getCarById(id);

    if (message) return res.status(404).json({ message });

    res.status(200).json(result);
  };

  public updateACar: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const { result, message } = await this._service.updateACar(id, body);

    if (message) return res.status(404).json({ message });

    res.status(200).json(result);
  };
}

export default CarController;