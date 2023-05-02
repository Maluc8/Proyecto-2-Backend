import productsManager from "../managers/productsManagers.js";

export const list = async (req, res) => {
  let products;
  try {
    const manager = new productsManager();
    products = await manager.find();
  } catch (e) {
    console.error(e);
    res.send({ status: `error` });
    return;
  }
  res.send({ status: `success`, products });
};

export const deleteOne = async (req, res) => {
  try {
    const manager = new productsManager();
    //Aca estael problema?
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
    //console.log("productsController getOne\n", req.params.id);
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
  //console.log("Dentro de productsController Save");
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
    //console.log("productsController update\n", id, "\n", data);
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
