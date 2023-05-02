import cartsSchema from "../models/cartsSchema.js";

class CartsMongooseDao {
  async find() {}

  async getOne(id) {}

  async create(data) {}

  async updateOne(id, data) {}

  async deleteOne(id) {
    return cartsSchema.deleteOne({ _id: id });
  }
}

export default CartsMongooseDao;
