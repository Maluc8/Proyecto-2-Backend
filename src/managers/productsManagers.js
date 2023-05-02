//import { error } from "console";
import productsMongooseDao from "../daos/productsMongooseDao.js";

class productsManager {
  constructor() {
    this.productsDao = new productsMongooseDao();
  }

  async find() {
    return this.productsDao.find();
  }

  async getOne(data) {
    //console.log("ProductsManager getOne", data);
    return this.productsDao.getOne(data);
  }

  async create(data) {
    //console.log("ProductManager create/n", data);
    let exist = await this.productsDao.findCode(data.code);
    //console.log("productsManagers create\nExiste? ", exist.length);
    if (!exist.length) {
      const product = await this.productsDao.create(data);
      //console.log("productsManagers create\n", product);
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
