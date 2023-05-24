const auth = (req, res, next) => {
  if (req.session.user.email) {
    return next();
  }
  return res.status(401).send({ message: "Error de autorizacion." });
};

export default auth;
