import { Router } from 'express';
import CarController from '../Controllers/CarController';
import CarODM from '../Models/CarODM';
import CarService from '../Services/CarService';

const route = Router();

route.post('/', new CarController(new CarService(new CarODM())).createCar);

export default route;
