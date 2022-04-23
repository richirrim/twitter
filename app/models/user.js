class User {
  constructor (id, username, bio) {
    this.id = id
    this.username = username
    this.bio = bio
    this.dateCreated = new Date().toLocaleDateString()
    this.lastUpdated = new Date().toLocaleDateString()
  }

  /**
   *  Lo que está haciendo el comment de abajo, es deshabilitar la regla
   * que nos pide que los métodos get y set se llamen igual,
   * ejemplo: set username () { ... } y get username () { ... }.
   * Pero o vaya sorpresa no lo hago así porque a la hr de llamar a dicho
   * métodos desde el file test ocurre un hermoso error. Nota: no sé, si
   * está sea la solución más correcta pero por el momento funciona.
   */
  /* eslint-disable accessor-pairs */
  set setUsername (newUsername) {
    this.username = newUsername
  }

  get getUsername () {
    return this.username
  }

  set setBio (newBio) {
    this.bio = newBio
  }

  /* eslint-disable accessor-pairs */
  get getBio () {
    return this.bio
  }

  get getDateCreated () {
    return this.dateCreated
  }

  get getLastUpdated () {
    return this.lastUpdated
  }
}

module.exports = User
