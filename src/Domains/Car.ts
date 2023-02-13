import ICar from '../Interfaces/ICar';

class Car {
  readonly _id: string | undefined;
  readonly _model: string;
  readonly _year: number;
  readonly _color: string;
  readonly _status: boolean;
  readonly _buyValue: number;
  readonly _doorsQty: number;
  readonly _seatsQty: number;

  constructor(newCar: ICar) {
    this._id = newCar.id;
    this._model = newCar.model;
    this._year = newCar.year;
    this._color = newCar.color;
    this._status = newCar.status;
    this._buyValue = newCar.buyValue;
    this._doorsQty = newCar.doorsQty;
    this._seatsQty = newCar.seatsQty;
  }
}

export default Car;
