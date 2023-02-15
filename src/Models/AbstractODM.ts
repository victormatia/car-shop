import { model, Model, models, Schema } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;

  constructor(protected schema: Schema, protected modelName: string) {
    this.modelName = modelName;
    this.schema = schema;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
}

export default AbstractODM;
