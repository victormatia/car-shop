import { model, Model, models, Schema } from 'mongoose';
import IMotocycle from '../Interfaces/IMotocycle';

class MotocycleODM {
  private _schema: Schema;
  private _model: Model<IMotocycle>;

  constructor() {
    this._schema = new Schema<IMotocycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });

    this._model = models.Motocycle || model('Motocycle', this._schema);
  }

  public async createMotocycle(motocycle: IMotocycle): Promise<IMotocycle> {
    const newMotocycle = await this._model.create(motocycle);

    return newMotocycle;
  }
}

export default MotocycleODM;
