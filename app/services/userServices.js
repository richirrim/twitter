const User = require('../../app/models/user')

class UserService {
  static create (id, username) {
    return new User(id, username, 'Escribe un poco sobre ti:3.')
  }

  static updateUsername (objectUser, newUsername) {
    objectUser.username = newUsername
  }

  static getInfo (objectUser) {
    return Object.values(objectUser).slice(0, 3)
  }

  static getAllUsernames (usersList) {
    return usersList.map(user => user.username)
  }
}

module.exports = UserService
