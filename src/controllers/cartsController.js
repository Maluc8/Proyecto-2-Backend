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

export const deleteOneProduct = async (req, res) => {
  console.log("cartsController deleteOneProduct req.param", req.params);
  const { cid, pid } = req.params;
  console.log(
    "cartsController deleteOneProduct cartID\n",
    cid,
    "\nproductId\n",
    pid
  );
  const manager = new cartsManager();
  const cart = await manager.getOne({ _id: cid });
  let newProducts = cart.products.filter((product) => product.id != pid);
  console.log(
    "cartsController deleteOneProduct cart.products\n",
    cart.products
  );
  const newCart = await manager.updateOne(cid, newProducts);
  res.send({ status: "succes", cart });
};
