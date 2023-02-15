class Vehicle {
  constructor(
    protected id: string | undefined,
    protected model: string,
    protected year: number,
    protected color: string,
    protected status: boolean,
    protected buyValue: number,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
  }
}

export default Vehicle;
