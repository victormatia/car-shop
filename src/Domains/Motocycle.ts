import IMotocycle from '../Interfaces/IMotocycle';

class Motocycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(newMotocycle: IMotocycle) {
    this.id = newMotocycle.id;
    this.model = newMotocycle.model;
    this.year = newMotocycle.year;
    this.color = newMotocycle.color;
    this.status = newMotocycle.status || false;
    this.buyValue = newMotocycle.buyValue;
    this.category = newMotocycle.category;
    this.engineCapacity = newMotocycle.engineCapacity;
  } 
}

export default Motocycle;
