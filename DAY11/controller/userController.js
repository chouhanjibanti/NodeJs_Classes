const User = require("../models/User");

// add new user
exports.addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.redirect("/")
  } catch (error) {
    res.status(500).send("Error adding user");
  }
};

// display all the user
exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.render("index", { users });
  } catch (error) {
    res.status(500).send("Error adding user");
  }
};

// edit a user
exports.editUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("editUser", { user });
  } catch (error) {
    res.status(500).send("error fetching user for edit");
  }
};

// update user
exports.updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    await User.findByIdAndUpdate(req.params.id, { name, email });
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Error updating user");
  }
};


// delete 
exports.deleteUser = async (req,res) =>{
   try {
     const user = await User.findByIdAndDelete(req.params.id)
     res.redirect("/");
   } catch (error) {
         res.status(500).send("error delete user for edit");
   }
}





