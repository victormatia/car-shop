import { Router } from 'express';
import CarController from '../Controllers/CarController';
import ObjectId from '../Middlewares/isValidObjetcId';
import CarODM from '../Models/CarODM';
import CarService from '../Services/CarService';

const route = Router();

route.post('/', new CarController(new CarService(new CarODM())).createCar);
route.get('/', new CarController(new CarService(new CarODM())).getAllCars);
route.get('/:id', ObjectId.validate, new CarController(new CarService(new CarODM())).getCarById);

export default route;
