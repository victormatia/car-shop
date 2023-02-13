import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  constructor(private _model: CarODM) {
    this._model = _model;
  }

  public async createCar(newCar: ICar) {
    const addedCar = await this._model.createCar(newCar);

    return new Car(addedCar);
  }
}

export default CarService;
