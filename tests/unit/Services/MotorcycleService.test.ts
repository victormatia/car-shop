import { expect } from 'chai';
import { Model } from 'mongoose';
import { stub, restore } from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleODM from '../../../src/Models/MotorcycleODM';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Casos de testes de MotorcycleService', function () {
  afterEach(restore);

  it('Verifica se é possível cadastrar uma nova moto no banco de dados', async function () {
    // Arrange
    const input: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    }; 

    const output: Motorcycle = new Motorcycle(
      {
        id: '63ed4ec632db56ecaa8c8273',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30,
        category: 'Street',
        engineCapacity: 600,
      },
    );
    
    stub(Model, 'create').resolves(output);

    // Act
    const service = new MotorcycleService(new MotorcycleODM());
    const result = await service.createMotorcyle(input);

    // Assertion
    expect(result).to.be.deep.equal(output);
  });

  it(
    'Verifica se é possível listar todas as motos cadastrados no banco de dados',
    async function () {
    // Arrange

      const output = [
        new Motorcycle({
          id: '63ed8006c3d4c3bdfd688d83',
          model: 'Honda Cb 600f Hornets',
          year: 2005,
          color: 'Yellow',
          status: true,
          buyValue: 30,
          category: 'Street',
          engineCapacity: 600,
        }),
        new Motorcycle({
          id: '63ed8088c3d4c3bdfd688d85',
          model: 'Honda Bros 160',
          year: 2020,
          color: 'Black',
          status: true,
          buyValue: 15,
          category: 'Trail',
          engineCapacity: 160,
        }),
      ];

      stub(Model, 'find').resolves(output);

      // Act
      const service = new MotorcycleService(new MotorcycleODM());
      const result = await service.getAllMotorcycles();

      // Assertion
      expect(result).to.be.deep.equal(output);
    },
  );

  it(
    'Verifica se é possível listar uma moto que foi cadastrada no banco de dados',
    async function () {
    // Arrange

      const output = new Motorcycle({
        id: '63ed8088c3d4c3bdfd688d85',
        model: 'Honda Bros 160',
        year: 2020,
        color: 'Black',
        status: true,
        buyValue: 15,
        category: 'Trail',
        engineCapacity: 160,
      });

      stub(Model, 'findById').resolves(output);

      // Act
      const service = new MotorcycleService(new MotorcycleODM());
      const { result } = await service.getMotorcycleById('63ed8088c3d4c3bdfd688d85');

      // Assertion
      expect(result).to.be.deep.equal(output);
    },
  );
});