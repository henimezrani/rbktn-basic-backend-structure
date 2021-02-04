/* 

This is the very last layer to interact with the database.
It is an abstract layer that just returns a promise to perform a specific task on the model.

Since this layer is a class, you need to inject the model that you will work on in the constructor and use it
using the keyword 'this'

In order to add a new service, just follow the following style:

  [NAME_OF_THE_FUNCTION]([PAYLOAD]) {
    return this.[NAME_OF_THE_MODEL].[DB_METHOD]();
  }


*/

module.exports = new (class UserService {
  constructor() {
    this.user = require("../models/user.model.js");
  }

  getUsers() {
    return this.user.find();
  }

  getUserById({ _id }) {
    return this.user.findOne({ _id });
  }

  addUser(payload) {
    return this.user.create(payload);
  }

  updateUserById({ _id }, payload) {
    return this.user.findOneAndUpdate({ _id }, payload, {
      new: true
    });
  }

  deleteUserById({ _id }) {
    return this.user.findOneAndDelete({ _id });
  }
})();
