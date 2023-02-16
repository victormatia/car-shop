import { expect } from 'chai';
import { Model } from 'mongoose';
import { stub, restore } from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarODM from '../../../src/Models/CarODM';
import CarService from '../../../src/Services/CarService';

describe('Casos de testes de CarService', function () {
  afterEach(restore);

  it('Verifica se é possível adicionar um novo carro ao banco de dados', async function () {
    // Arrange
    const input: ICar = {
      model: 'Mareuuuu',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const output = new Car({
      model: 'Mareuuuu',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
      id: '63ebdc573f9ad2a53703c7a1',
    });

    stub(Model, 'create').resolves(output);

    // Act
    const service = new CarService(new CarODM());
    const result = await service.createCar(input);

    // Assertion
    expect(result).to.be.deep.equal(output);
  });

  it(
    'Verifica se é possível listar todos os carros cadastrados no banco de dados',
    async function () {
    // Arrange
      const output = [
        new Car({
          model: 'Mareuuuu',
          year: 2002,
          color: 'Black',
          status: true,
          buyValue: 15.99,
          doorsQty: 4,
          seatsQty: 5,
          id: '63ebdc573f9ad2a53703c7a1',
        }),
        new Car({
          model: 'Ford Mustang',
          year: 1978,
          color: 'Black',
          status: true,
          buyValue: 23.00,
          doorsQty: 2,
          seatsQty: 4,
          id: '63ebdc573f9ad2a53703c7a1',
        }),
      ];

      stub(Model, 'find').resolves(output);

      // Act
      const service = new CarService(new CarODM());
      const result = await service.getAllCars();

      // Assertion
      expect(result).to.be.deep.equal(output);
    },
  );

  it(
    'Verifica se é possível listar um carro que foi cadastrado no banco de dados',
    async function () {
    // Arrange

      const output = new Car({
        model: 'Ford Mustang',
        year: 1978,
        color: 'Black',
        status: true,
        buyValue: 23.00,
        doorsQty: 2,
        seatsQty: 4,
        id: '63ebdc573f9ad2a53703c7a1',
      });

      stub(Model, 'findById').resolves(output);

      // Act
      const service = new CarService(new CarODM());
      const { result } = await service.getCarById('63ed8088c3d4c3bdfd688d85');

      // Assertion
      expect(result).to.be.deep.equal(output);
    },
  );
});