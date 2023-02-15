interface IMotocycle {
  id?: string;
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
  category: 'Street' | 'Custom' | 'Trail';
  engineCapacity: number;
}

export default IMotocycle;
