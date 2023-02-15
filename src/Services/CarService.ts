import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IServiceReturn from '../Interfaces/IServiceReturn';
import CarODM from '../Models/CarODM';

class CarService {
  constructor(private _model: CarODM) {
    this._model = _model;
  }

  public async createCar(newCar: ICar): Promise<Car> {
    const addedCar = await this._model.createCar(newCar);

    return new Car(addedCar);
  }

  public async getAllCars(): Promise<Car[]> {
    const allCars = await this._model.getAllCars();

    return allCars.map((car) => new Car(car));
  }

  public async getCarById(id: string): Promise<IServiceReturn> {
    const car = await this._model.getCarById(id);

    if (car) return { result: new Car(car) };

    return { message: 'Car not found' };
  }

  public async updateACar(id: string, updatedInfoOfCar: ICar): Promise<IServiceReturn> {
    const car = await this._model.getCarById(id);

    if (!car) return { message: 'Car not found' };

    await this._model.updateACar(id, updatedInfoOfCar);

    const updatedCar = await this._model.getCarById(id);

    return { result: new Car(updatedCar as ICar) };
  }
}

export default CarService;
