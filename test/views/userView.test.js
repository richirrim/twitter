const UserView = require('../../app/views/userView')
// const UserService = require('../../app/services/userServices')

describe('UserView class', () => {
  it('1) Devuelve un error al intentar crear un nuevo user con un payload null.', () => {
    const payload = null
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/payload no existe/)
  })
  it('2) Devuelve un error cuando se crea un nuevo user con algúna de sus propiedades invalidas.', () => {
    const payload = {
      id: 1,
      username: null
    }
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/necesita tener un valor valido/)
  })
  it('3) Devuelve un error cuando se crea un nuevo user y algúna de sus propiedades obligatorias no existe.', () => {
    const payload = {
      username: 'ObitoUchiha'
    }
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/Se esperaba dos paramatros y solo se recibio uno/)
  })
  it('4) Valida que se pueda crear un objeto user apartir de un payload.', () => {
    const payload = {
      id: 1,
      username: 'ObitoUchiha'
    }
    const result = UserView.createUser(payload)
    expect(result.id).toBe(1)
    expect(result.username).toBe('ObitoUchiha')
  })
})
