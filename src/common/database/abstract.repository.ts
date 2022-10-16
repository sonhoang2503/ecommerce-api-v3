import { Model, FilterQuery, Document, UpdateQuery } from 'mongoose';

// T extends Document cus create new doc required _id in type.
export abstract class Repository<T extends Document> {
  constructor(private model: Model<T>) {}

  async find(filterQuery: FilterQuery<T>): Promise<T[] | null> {
    return this.model.find(filterQuery);
  }

  async findOne(
    filterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    return this.model.findOne(filterQuery, { ...projection });
  }

  async create(createData: unknown): Promise<T | null> {
    const doc = new this.model(createData);
    return await doc.save();
  }

  async update(
    filterQuery: FilterQuery<T>,
    updateData: UpdateQuery<T>,
  ): Promise<T | null> {
    return this.model.findOneAndUpdate(filterQuery, updateData, { new: true });
  }

  async delete(filterQuery: FilterQuery<T>): Promise<null> {
    return await this.model.findOneAndDelete(filterQuery);
  }

  async deleteMany(filterQuery: FilterQuery<T>) {
    return await this.model.deleteMany(filterQuery);
  }
}
