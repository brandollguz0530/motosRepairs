const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  upDateUser,
  deleteUser,
} = require("../controller/user.controllers");

const userRouter = Router();

userRouter.route("/").get(getAllUsers).post(createUser);

userRouter.route("/:id").get(getUserById).patch(upDateUser).delete(deleteUser);

module.exports = userRouter;
