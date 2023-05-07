import productsSchema from "../models/productsSchema.js";

class ProductsMongooseDao {
  async find(filter, query) {
    console.log("productsMongooseDao query\n", query);
    let list = await productsSchema.paginate(filter, query);
    list.payload = list.docs.map((product) => ({
      id: product._id.toString(),
      title: product.title,
      description: product.description,
      price: product.price,
      thumbnail: product.thumbnail,
      code: product.code,
      stock: product.stock,
      stat: product.stat,
    }));
    list.docs = undefined;
    return list;
  }

  async getOne(id) {
    let product = await productsSchema.find({ _id: id });
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
    return product;
  }

  async updateOne(id, data) {
    const success = await productsSchema.updateOne({ _id: id }, data);
    return success.matchedCount;
  }

  async deleteOne(id) {
    let product = await productsSchema.find({ _id: id });
    product[0].stat = false;
    return productsSchema.updateOne({ _id: id }, product[0]);
  }

  async findCode(productCode) {
    const product = await productsSchema.find({ code: productCode });
    return product;
  }
}

export default ProductsMongooseDao;
