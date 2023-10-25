const { prisma } = require(".prisma/client");
const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUsers
} = require("../../controllers/UsersControllers/usersControllers");

router.get("/", async (req, res) => {
  try {
    const allUsers = await getUsers();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/newuser", async (req, res) => {
  try {
    const user = await createUsers(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
