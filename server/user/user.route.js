module.exports = app => {
  app.get("/api/v1/user", (req, res, next) => {
    res.json({ teste: "teste" });
  });
};
