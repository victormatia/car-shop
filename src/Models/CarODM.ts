import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async createCar(car: ICar): Promise<ICar> {
    const newCar = await this.model.create(car);

    return newCar;
  }

  public async getAllCars(): Promise<ICar[]> {
    const allCars = await this.model.find();

    return allCars;
  }

  public async getCarById(id: string): Promise<ICar | null> {
    const car = await this.model.findById(id);

    return car;
  }

  public async updateACar(id: string, updatedInfoOfCar: ICar) {
    const updatedCar = await this.model.updateOne({ id }, {
      $set: { ...updatedInfoOfCar },
    });

    return updatedCar;
  }
}

export default CarODM;
