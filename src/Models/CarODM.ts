import { Schema, Model, models, model } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private _schema: Schema;
  private _model: Model<ICar>;

  constructor() {
    this._schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    this._model = models.Car || model('Car', this._schema);
  }

  public async createCar(car: ICar): Promise<ICar> {
    const newCar = await this._model.create(car);

    return newCar;
  }
}

export default CarODM;
