const UserService = require('../../app/services/userServices')
const User = require('../../app/models/user')

describe('userServices class', () => {
  it('1) Crea un nuevo user usando userServices class.', () => {
    const obito = UserService.create(1, 'obitoUchiha')

    expect(obito.id).toBe(1)
    expect(obito.username).toBe('obitoUchiha')
    expect(obito.bio).not.toBeUndefined()
  })
  it('2) Obtiene una lista con la info de un user.', () => {
    const kakashi = new User(1, 'kakashiHatake', 'Soy el colmillo blanco de la Hoja.')
    const userInfoList = UserService.getInfo(kakashi)

    expect(userInfoList).toEqual([1, 'kakashiHatake', 'Soy el colmillo blanco de la Hoja.'])
  })
  it('3) Actualiza el username.', () => {
    const kakashi = new User(1, 'kakashiHatake', 'Soy el colmillo blanco de la Hoja.')
    UserService.updateUsername(kakashi, 'kakashiElDelOjoSharingan')

    expect(kakashi.username).toBe('kakashiElDelOjoSharingan')
  })
  it('4) Obtiene una lista con todos los usernames de los usuarios existentes.', () => {
    const obito = UserService.create(1, 'SoyObito')
    const shisui = UserService.create(2, 'NoSoyShisui')
    const maitoGay = UserService.create(3, 'LaBestiaVerde')

    const usernamesList = UserService.getAllUsernames([obito, shisui, maitoGay])

    // expect(usernameList).toEqual(['SoyObito', 'NoSoyShisui', 'LaBestiaVerde'])
    expect(usernamesList).toContain('SoyObito')
    expect(usernamesList).toContain('NoSoyShisui')
    expect(usernamesList).toContain('LaBestiaVerde')
  })
})
