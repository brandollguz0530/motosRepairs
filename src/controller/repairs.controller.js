const Repair = require("../models/repairs.model");
const User = require("../models/user.model");

exports.getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll({ where: { status: "pending" } });
    res.json({
      message: "todas las reparaciones",
      data: repairs,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getRepairsById = async (req, res) => {
  try {
    const { id } = req.params;
    const repairId = await Repair.findOne({ where: { id: id } });
    if (!repairId) {
      return res.json({
        message: "Esta reparacion no a sido axicnada ",
      });
    }

    res.json({
      message: `la reparacion # ${id}  a trabajar🎉 `,
      data: repairId,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createRepairs = async (req, res) => {
  try {
    const { date, idUser } = req.body;

    const userSerch = await User.findOne({ where: { id: idUser } });

    if (!userSerch) {
      return res.json({
        message: "El usuario enviado no existe 😢",
      });
    }
    const newRepair = await Repair.create({ date, idUser });

    res.json({
      message: "Usuario creado correctamente 😁",
      data: newRepair,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.upDateRepairs = async (req, res) => {
  try {
    const { id } = req.params;
    const repairId = await Repair.findOne({ where: { id: id } });
    if (!repairId) {
      return res.json({
        message: "no se completo esta reparacion 😢",
      });
    }

    const repairUpDated = await repairId.update({ status: "completed" });

    res.json({
      message: "Reparaciones actualizadas 👌",
      data: repairUpDated,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteRepairs = async (req, res) => {
  try {
    const { id } = req.params;
    const repairId = await Repair.findOne({ where: { id: id } });
    if (!repairId) {
      return res.json({
        message:
          "no existe esta reparacion traeme mas motos para que si exista 😎😁🤣",
      });
    }

    if (repairId.status === "completed") {
      return res.json({
        message: "Esta reparacion ya esta completada no se puede cancelar 😒",
      });
    }

    await repairId.update({ status: "cancelled" });
    res.json({
      message: "La reparacion fue cancelada exitosamente 👌",
    });
  } catch (err) {
    console.log(err);
  }
};
