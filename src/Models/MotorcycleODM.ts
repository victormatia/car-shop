import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  public async createMotorcycle(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    const newMotorcycle = await this.model.create(motorcycle);

    return newMotorcycle;
  }

  public async getAllMotorcycles(): Promise<IMotorcycle[]> {
    const allMotorcycles = await this.model.find();

    return allMotorcycles;
  }

  public async getMotorcycleById(id: string): Promise<IMotorcycle | null> {
    const motorcycle = await this.model.findById(id);

    return motorcycle;
  }
}

export default MotorcycleODM;
