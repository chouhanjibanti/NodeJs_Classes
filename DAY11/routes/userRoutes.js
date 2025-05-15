const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.getUser);
router.get("/add", (req, res) => res.render("addUser"));
router.post("/add", userController.addUser);
router.get("/edit/:id", userController.editUser);
router.get("/delete/:id",userController.deleteUser)
router.post("/edit/:id", userController.updateUser);

module.exports = router;


// request :-
