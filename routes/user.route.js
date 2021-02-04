/* 

Here is the first endpoint that the request hits.
In order to add a new route, just follow the following style:

router.[METHOD]("[ENDPOINT]", [NAME_OF_THE_CONTROLLER].[NAME_OF_THE_FUNCTION])


*/

const router = require("express").Router();
const userController = require("../controllers/user.controller.js");

router.get("/", userController.getUsers); // get all users

router.post("/", userController.addUser); // add a new user

router.get("/:_id", userController.getUserById); // returns one user by id

router.put("/:_id", userController.updateUserById); // return the updated user

router.delete("/:_id", userController.deleteUserById); // return the deletes user

module.exports = router;
