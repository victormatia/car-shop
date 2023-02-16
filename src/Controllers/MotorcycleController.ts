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

  public getAllMotorcycles: RequestHandler = async (_req, res) => {
    const allMotorcycles = await this._service.getAllMotorcycles();

    res.status(200).json(allMotorcycles);
  };

  public getMotorcycleById: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { message, result } = await this._service.getMotorcycleById(id);

    if (message) return res.status(404).json({ message });

    res.status(200).json(result);
  };

  public updateMotorcycle: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const { result, message } = await this._service.updateMotorcycle(id, body);

    if (message) return res.status(404).json({ message });

    res.status(200).json(result);
  };
}

export default MotorcycleController;
