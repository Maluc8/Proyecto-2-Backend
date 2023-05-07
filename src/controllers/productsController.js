import productsManager from "../managers/productsManagers.js";

export const list = async (req, res) => {
  let products;
  let { limit, page, type, sort } = { ...req.query };
  if (type) {
    type = `{ ${type}}`;
    type = JSON.parse(type);
  } else {
    type = {};
  }
  sort = sort == "asc" ? { price: 1 } : sort == "desc" ? { price: -1 } : {};
  try {
    const manager = new productsManager();
    products = await manager.find(type, { limit, page, sort });
  } catch (e) {
    console.error(e);
    res.send({ status: `error` });
    return;
  }
  res.send({ status: `success`, response: products });
};

export const deleteOne = async (req, res) => {
  try {
    const manager = new productsManager();
    const success = await manager.deleteOne(req.body.id);
  } catch (e) {
    console.error(e);
    res.send({ status: `error` });
  } finally {
    res.send({ status: `success` });
  }
};

export const getOne = async (req, res) => {
  let products;
  try {
    const manager = new productsManager();
    products = await manager.getOne(req.params.id);
  } catch (e) {
    console.error(e);
    res.send({ status: `error` });
  } finally {
    res.send({ status: `success`, products });
  }
};

export const save = async (req, res) => {
  let products;
  try {
    const manager = new productsManager();
    products = await manager.create(req.body);
  } catch (e) {
    console.error(e);
    res.send({ status: `error` });
    return;
  }
  if (products) {
    res.send({ status: `success`, products });
  } else {
    res.send({ status: `repeated code` });
  }
};

export const update = async (req, res) => {
  let success;
  try {
    const manager = new productsManager();
    const id = req.body.id;
    const data = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      thumbnail: req.body.thumbnail,
      code: req.body.code,
      stock: req.body.stock,
      stat: req.body.stat,
    };
    success = await manager.updateOne(id, data);
  } catch (e) {
    console.error(e);
    res.send({ status: `Error` });
  } finally {
    console.log("productsController updateOne\n", success);
    if (success) {
      res.send({ status: `success` });
    } else {
      res.send({ status: `No se encontro` });
    }
  }
};
