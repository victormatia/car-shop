import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  constructor(private _model: MotorcycleODM) {
    this._model = _model;
  }

  public async createMotorcyle(newMotorcycle: IMotorcycle): Promise<Motorcycle> {
    const addedMotorcycle = await this._model.createMotorcycle(newMotorcycle);

    return new Motorcycle(addedMotorcycle);
  }
}

export default MotorcycleService;
