import productsMongooseDao from "../daos/productsMongooseDao.js";

class productsManager {
  constructor() {
    this.productsDao = new productsMongooseDao();
  }

  async find(filter, query) {
    return this.productsDao.find(filter, query);
  }

  async getOne(data) {
    return this.productsDao.getOne(data);
  }

  async create(data) {
    let exist = await this.productsDao.findCode(data.code);
    if (!exist.length) {
      const product = await this.productsDao.create(data);
      return product;
    } else {
      return false;
    }
  }

  async updateOne(id, data) {
    const success = await this.productsDao.updateOne(id, data);
    console.log("productsManager updateOne\n", success);
    return success;
  }

  async deleteOne(id) {
    return this.productsDao.deleteOne(id);
  }
}
export default productsManager;
