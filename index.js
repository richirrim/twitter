const User = require('./app/models/user')

const rich = new User(1, 'ryszardriich', '🇲🇽 Content Creator 🖥️ Frontend Dev. | Streamer Afiliado💜Twitch: http://twitch.tv/ryszardriich 🎨 Diseño Cositas | Porfolio: http://behance.net/ryszardriich')

rich.setUsername = 'richirrim'
console.log(rich.getUsername)
