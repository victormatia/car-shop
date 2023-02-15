import Motocycle from '../Domains/Motocycle';
import IMotocycle from '../Interfaces/IMotocycle';
import MotocycleODM from '../Models/MotocycleODM';

class MotocycleService {
  constructor(private _model: MotocycleODM) {
    this._model = _model;
  }

  public async createMotocyle(newMotocycle: IMotocycle): Promise<Motocycle> {
    const addedMotocycle = await this._model.createMotocycle(newMotocycle);

    return new Motocycle(addedMotocycle);
  }
}

export default MotocycleService;
