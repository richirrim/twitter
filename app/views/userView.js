const UserService = require('../services/userServices')

class UserView {
  static createUser (payload) {
    if (!payload) return { error: 'payload no existe' } // guard
    for (const atributte in payload) {
      if (!payload[atributte]) return { error: 'necesita tener un valor valido' }
    }
    if (!('id' in payload && 'username' in payload)) return { error: 'Se esperaba dos paramatros y solo se recibio uno' }

    /* eslint-disable new-cap */
    return UserService.create(payload.id, payload.username)
  }
}

module.exports = UserView
