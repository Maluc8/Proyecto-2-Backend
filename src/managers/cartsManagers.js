import cartsMongooseDao from "../daos/cartsMongooseDao.js";

class cartsManager {
  constructor() {
    this.cartsDao = new cartsMongooseDao();
  }

  async list() {
    return this.cartsDao.find();
  }

  async getOne(id) {
    return this.cartsDao.getOne(id);
  }

  async create(data) {
    const cart = await this.cartsDao.create(data);

    //Le falta logica de negocio
    return cart;
  }

  async updateOne(id, data) {
    return this.cartsDao.updateOne(id, data);
  }

  async deleteOne(id) {
    return this.cartsDao.deleteOne(id);
  }
}
export default cartsManager;
