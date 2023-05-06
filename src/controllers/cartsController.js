import cartsManager from "../managers/cartsManagers.js";

export const list = async (req, res) => {
  const manager = new cartsManager();
  const carts = await manager.list();
  res.send({ status: `success`, carts });
};

export const getOne = async (req, res) => {
  const manager = new cartsManager();
  const carts = await manager.getOne(req.params.id);
  res.send({ status: `success`, carts });
};

export const deleteOne = async (req, res) => {};

export const create = async (req, res) => {
  const manager = new cartsManager();
  const carts = await manager.create(req.body);
  res.send({ status: `success`, carts });
};

export const updateOne = async (req, res) => {
  const manager = new cartsManager();
  const carts = await manager.updateOne(
    req.body.carts.id,
    req.body.carts.products
  );
  res.send({ status: "success", carts });
};
