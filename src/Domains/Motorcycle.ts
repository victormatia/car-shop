import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(newMotorcycle: IMotorcycle) {
    super(
      newMotorcycle.id,
      newMotorcycle.model,
      newMotorcycle.year,
      newMotorcycle.color,
      newMotorcycle.status || false,
      newMotorcycle.buyValue,
    );
    this.category = newMotorcycle.category;
    this.engineCapacity = newMotorcycle.engineCapacity;
  } 
}

export default Motorcycle;
