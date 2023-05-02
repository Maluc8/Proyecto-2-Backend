import cartsManager from "../managers/cartsManagers.js";

export const list = async (req, res) => {
  const manager = new cartsManager();
  const carts = await manager.find();
  res.send({ status: `success`, carts });
};

export const deleteOne = async (req, res) => {};

export const getOne = async (req, res) => {};

export const save = async (req, res) => {};

export const update = async (req, res) => {};
