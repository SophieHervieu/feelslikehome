const AbstractManager = require('./AbstractManager')

class UserManager extends AbstractManager {
  constructor() {
    super({ table: 'users' });
  }

  async insert(user) {
    try {
      const [result] = await this.database.query(
        `INSERT INTO ${this.table} (username, email, password, profile_picture, quizz_result, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
        [
          user.username,
          user.email,
          user.password,
          user.profile_picture,
          user.quizz_result,
        ]
      );
      return { id: result.insertId, email: user.email };
    } catch (err) {
      console.error(err);
      throw new Error("Erreur lors de l'insertion de l'utilisateur");
    }
  }

  async findByEmail(email) {
    const [user] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return user;
  }

  async findById(id) {
    const [user] = await this.database.query(
      `SELECT id, username, email, profile_picture, quizz_result FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return user;
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table}
       SET username = ?, email = ?, profile_picture = ?, quizz_result = ?
       WHERE id = ?`,
      [user.username, user.email, user.profile_picture, user.quizz_result, user.id]
    );
  }

  changePassword(user) {
    return this.database.query(
      `UPDATE ${this.table} SET password = ? WHERE id = ?`,
      [user.password, user.id]
    );
  }

  changeEmail(user) {
    return this.database.query(
      `UPDATE ${this.table} SET email = ? WHERE id = ?`,
      [user.email, user.id]
    );
  }
}

module.exports = UserManager