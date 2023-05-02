import productsSchema from "../models/productsSchema.js";

class ProductsMongooseDao {
  async find() {
    //    console.log("productsMongooseDao find/n");
    let list = await productsSchema.find({ stat: true });
    list = list.map((product) => ({
      id: product._id.toString(),
      title: product.title,
      description: product.description,
      price: product.price,
      thumbnail: product.thumbnail,
      code: product.code,
      stock: product.stock,
      stat: product.stat,
    }));
    //console.log(list[0]);
    return list;
  }

  async getOne(id) {
    let product = await productsSchema.find({ _id: id });
    console.log("productMongooseDao getOne\n", product);
    product = product.map((product) => ({
      id: product._id.toString(),
      title: product.title,
      description: product.description,
      price: product.price,
      thumbnail: product.thumbnail,
      code: product.code,
      stock: product.stock,
      stat: product.stat,
    }));
    return product;
  }

  async create(data) {
    //    console.log("productsMongooseDao create/n", data);
    let product = await productsSchema.create(data);
    product = {
      id: product._id.toString(),
      title: product.title,
      description: product.description,
      price: product.price,
      thumbnail: product.thumbnail,
      code: product.code,
      stock: product.stock,
      stat: product.stat,
    };
    console.log("productMongooseDao create\n", product);
    return product;
  }

  async updateOne(id, data) {
    //console.log("productsMongooseDao updateOne antes\n", id, "\n", data);
    const success = await productsSchema.updateOne({ _id: id }, data);
    //console.log("productsMongooseDao updateOne despues\n", success);
    return success.matchedCount;
  }

  async deleteOne(id) {
    let product = await productsSchema.find({ _id: id });
    product[0].stat = false;
    console.log("productsMongooseDao deleteOne\n", product);
    return productsSchema.updateOne({ _id: id }, product[0]);
  }

  async findCode(productCode) {
    const product = await productsSchema.find({ code: productCode });
    return product;
  }
}

export default ProductsMongooseDao;
