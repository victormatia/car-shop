import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IServiceReturn from '../Interfaces/IServiceReturn';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  constructor(private _model: MotorcycleODM) {
    this._model = _model;
  }

  public async createMotorcyle(newMotorcycle: IMotorcycle): Promise<Motorcycle> {
    const addedMotorcycle = await this._model.createMotorcycle(newMotorcycle);

    return new Motorcycle(addedMotorcycle);
  }

  public async getAllMotorcycles(): Promise<Motorcycle[]> {
    const allMotorcycles = await this._model.getAllMotorcycles();

    return allMotorcycles.map((motorcycle) => new Motorcycle(motorcycle));
  }

  public async getMotorcycleById(id: string): Promise<IServiceReturn> {
    const motorcycle = await this._model.getMotorcycleById(id);

    if (motorcycle) return { result: new Motorcycle(motorcycle) };

    return { message: 'Motorcycle not found' };
  }
}

export default MotorcycleService;
