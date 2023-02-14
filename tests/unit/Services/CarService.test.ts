import { expect } from 'chai';
import { Model } from 'mongoose';
import { stub } from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarODM from '../../../src/Models/CarODM';
import CarService from '../../../src/Services/CarService';

describe('Casos de testes de CarService', function () {
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
});