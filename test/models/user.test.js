const User = require('../../app/models/user')

describe('Test Suite Dummy Description', () => {
  test("'Case 1 Dummy", () => {
    const result = 1 + 2
    expect(result).toBe(3)
  })
})

describe('User class', () => {
  it('1) Crea un nuevo objeto', () => {
    const rich = new User(1, 'ryszardriich', '🇲🇽 Content Creator 🖥️ Frontend Dev. | Streamer Afiliado💜Twitch: http://twitch.tv/ryszardriich 🎨 Diseño Cositas | Porfolio: http://behance.net/ryszardriich')

    expect(rich.id).toBe(1)
    expect(rich.username).toBe('ryszardriich')
    expect(rich.bio).toBe('🇲🇽 Content Creator 🖥️ Frontend Dev. | Streamer Afiliado💜Twitch: http://twitch.tv/ryszardriich 🎨 Diseño Cositas | Porfolio: http://behance.net/ryszardriich')
  })
})

describe('Getters', () => {
  it('2) getters añadidos', () => {
    const rich = new User(1, 'ryszardriich', '🇲🇽 Content Creator 🖥️ Frontend Dev. | Streamer Afiliado💜Twitch: http://twitch.tv/ryszardriich 🎨 Diseño Cositas | Porfolio: http://behance.net/ryszardriich')

    expect(rich.getUsername).toBe('ryszardriich')
    expect(rich.getBio).toBe('🇲🇽 Content Creator 🖥️ Frontend Dev. | Streamer Afiliado💜Twitch: http://twitch.tv/ryszardriich 🎨 Diseño Cositas | Porfolio: http://behance.net/ryszardriich')
    expect(rich.getDateCreated).toBe(new Date().toLocaleDateString())
    expect(rich.getLastUpdated).toBe(new Date().toLocaleDateString())
  })
})

describe('Setters', () => {
  it('3) setters añadidos', () => {
    const rich = new User(1, 'ryszardriich', '🇲🇽 Content Creator 🖥️ Frontend Dev. | Streamer Afiliado💜Twitch: http://twitch.tv/ryszardriich 🎨 Diseño Cositas | Porfolio: http://behance.net/ryszardriich')

    rich.setUsername = 'richirrim'
    expect(rich.getUsername).toBe('richirrim')
    rich.setBio = 'Content Creator 🖥️ Frontend Developer'
    expect(rich.getBio).toBe('Content Creator 🖥️ Frontend Developer')
  })
})
