import cartsMongooseDao from "../daos/cartsMongooseDao.js";

class cartsManager {
  constructor() {
    this.cartsDao = new cartsMongooseDao();
  }

  async list() {
    const carts = await this.cartsDao.find();
    return carts;
  }

  async getOne(id) {
    let cart = await this.cartsDao.getOne(id);
    return cart;
  }

  async create(data) {
    const cart = await this.cartsDao.create(data);
    return cart;
  }

  async updateOne(id, data) {
    const cart = await this.cartsDao.updateOne(id, data);
    return cart;
  }

  async deleteOne(id) {
    return this.cartsDao.deleteOne(id);
  }
}
export default cartsManager;
