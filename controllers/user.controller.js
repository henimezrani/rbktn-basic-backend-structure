 /* 

The controller layer is where the logic part of your application is going to be implemented
if you have authentication for example, here is where you are going to hash, compare and so on...

In order to add a new controller, just follow the following style:

  async [NAME_OF_THE_FUNCTION](req, res, next) {
    try {
      const [VARIABLE] = await [NAME_OF_THE_SERVICE].[NAME_OF_THE_SERVICE_FUNCTION]()
      res.send([VARIABLE])
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  },


*/

const userService = require("../services/user.service.js")

module.exports = {
  async getUsers(req, res, next) {
    try {
      const users = await userService.getUsers()
      res.send(users)
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  },

  async getUserById(req, res, next) {
    try {
      const user = await userService.getUserById(req.params)
      res.send(user)
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  },

  async addUser(req, res, next) {
    try {
      const user = await userService.addUser(req.body)
      res.send(user)
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  },

  async updateUserById(req, res, next) {
    try {
      const user = await userService.updateUserById(req.params, req.body)
      res.send(user)
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  },

  async deleteUserById(req, res, next) {
    try {
      const user = await userService.deleteUserById(req.params)
      res.send(user)
    }
    catch(error) {
      // handle error
      res.send("error")
    }
  }
}