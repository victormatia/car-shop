import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';
import ObjectId from '../Middlewares/isValidObjetcId';
import CarODM from '../Models/CarODM';
import MotorcycleODM from '../Models/MotorcycleODM';
import CarService from '../Services/CarService';
import MotorcycleService from '../Services/MotorcycleService';

const route = Router();

// route for cars
route.post('/cars', new CarController(new CarService(new CarODM())).createCar);

route.get('/cars', new CarController(new CarService(new CarODM())).getAllCars);

route.get(
  '/cars/:id',
  ObjectId.validate,
  new CarController(new CarService(new CarODM())).getCarById,
);

route.put(
  '/cars/:id',
  ObjectId.validate,
  new CarController(new CarService(new CarODM())).updateACar,
);

// route for motorcycles
route.post(
  '/motorcycles',
  new MotorcycleController(new MotorcycleService(new MotorcycleODM())).createMotorcycle,
);

export default route;
