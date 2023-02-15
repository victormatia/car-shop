import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(newCar: ICar) {
    super(
      newCar.id,
      newCar.model,
      newCar.year,
      newCar.color,
      newCar.status || false,
      newCar.buyValue,
    );
 
    this.doorsQty = newCar.doorsQty;
    this.seatsQty = newCar.seatsQty;
  }
}

export default Car;
