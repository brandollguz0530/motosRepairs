const { Router } = require("express");
const {
  getAllRepairs,
  getRepairsById,
  createRepairs,
  upDateRepairs,
  deleteRepairs,
} = require("../controller/repairs.controller");

const repairsRouter = Router();

repairsRouter.route("/").get(getAllRepairs).post(createRepairs);

repairsRouter
  .route("/:id")
  .get(getRepairsById)
  .patch(upDateRepairs)
  .delete(deleteRepairs);

module.exports = repairsRouter;
