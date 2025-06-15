const AbstractManager = require('./AbstractManager')

class UserManager extends AbstractManager {
  constructor() {
    super({ table: 'users' })
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (username, email, password, profile_picture, quizz_result, created_at, updated_at) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.username,
        user.email,
        user.password,
        user.profile_picture,
        user.quizz_result,
        user.created_at,
        user.updated_at,
      ]
    )
  }

  async addOne(user) {
    try {
      const [result] = await this.database.query(
        `insert into ${this.table} (password, email) values (?, ?)`,
        [user.password, user.email]
      )
      return { id: result.insertId, email: user.email }
    } catch (erreur) {
      console.error(erreur)
      throw new Error("Erreur lors de l'insertion de l'utilisateur")
    }
  }

  async findByEmail(email) {
    try {
      const [user] = await this.database.query(
        `select * from ${this.table} where email = ?`,
        [email]
      )
      return user
    } catch (error) {
      console.error(error)
    }
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set username= ?, profile_picture= ?, quizz_result= ? where id = ?`,
      [
        user.username,
        user.profile_picture,
        user.quizz_result,
        user.id,
      ]
    )
  }

  changePassword(user) {
    return this.database.query(
      `update ${this.table} set password = ? where id = ?`,
      [user.password, user.id]
    )
  }

  changeEmail(user) {
    return this.database.query(
      `update ${this.table} set email = ? where id = ?`,
      [user.email, user.id]
    )
  }
}

module.exports = UserManager