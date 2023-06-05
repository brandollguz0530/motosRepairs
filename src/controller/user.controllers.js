const User = require("../models/user.model");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ where: { status: "available" } });

    res.json({
      message: "Obtener todos los usuarios",
      data: users,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id: id } });

    if (!user) {
      return res.json({
        message: ` el usuario # ${id} no existe `,
      });
    }
    res.json({
      message: " Id del usuario ",
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userSerch = await User.findOne({ where: { email: email } });
    if (userSerch) {
      return res.json({
        message: "Este correo  ya esta registrado ",
      });
    }

    const newUser = await User.create({ name, email, password, role });
    res.json({
      message: "Usuario creado correctamente 😁😎",
      data: newUser,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.upDateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await User.findOne({ where: { id: id } });
    if (!user) {
      return res.json({
        message: ` el usuario con id # ${id} no existe `,
      });
    }

    const userUpDated = await user.update({ name, email });

    res.json({
      message: "usuario actualizado exitosa mente 😉",
      data: userUpDated,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id: id } });
    if (!user) {
      return res.json({
        message: ` el usuario con el id ${id} no existe `,
      });
    }

    await user.update({ status: "deleted" });

    res.json({
      message: "Usuario eliminado con exito 👌",
    });
  } catch (err) {
    console.log(err);
  }
};
