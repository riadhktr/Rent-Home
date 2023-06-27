const express = require("express");
const {
  register,
  login,
  getAllUsers,
  // createAnnonce,
  // getAnnonceById,
  // getAllAnnonce,
} = require("../controllers/user");
const { isAuth } = require("../middelwares/isAuth");
const { CreateAnnonce } = require("../controllers/annoces");

const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/list", isAuth, getAllUsers);
// userRoute.post("/addAnnonce", isAuth, createAnnonce);
// // userRoute.post("/deleteAnnonce", isAuth, DeleteAnnonce);
// userRoute.get("/annonce/:id", getAnnonceById);
// userRoute.get("/annonces", getAllAnnonce);


userRoute.post('/add',isAuth,CreateAnnonce);
module.exports = userRoute;
