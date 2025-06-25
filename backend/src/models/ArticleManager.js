const AbstractManager = require('./AbstractManager')

class ArticleManager extends AbstractManager {
    constructor() {
        super({ table: 'article' });

        this.fields = `
            id_article,
            title,
            content,
            image,
            affiliate_links,
            id_users,
            created_at,
            updated_at
            `;
    }

    addArticle(article) {
        return this.database.query(
          `INSERT INTO ${this.table} (title, content, image, affiliate_links, created_at, updated_at, id_users) 
          VALUES (?, ?, ?, ?, NOW(), NOW(), ?)`,
          [
            article.title,
            article.content,
            article.image,
            article.affiliate_links,
            article.id_users
          ]
        );
    }

    updateArticle(article) {
        return this.database.query(
          `UPDATE ${this.table} SET title = ?, content = ?, image = ?, id_users = ?, updated_at = NOW() WHERE id_article = ?`,
          [article.title, article.content, article.image, article.id_users, article.id_article]
        );
    }

    getAllArticles(title) {
        if (title) {
            return this.database.query(
                `SELECT ${this.fields} FROM ${this.table} WHERE title LIKE ? ORDER BY created_at DESC`,
                [`%${title}%`]
            );
        }
        
        return this.database.query(`SELECT ${this.fields} FROM ${this.table} ORDER BY created_at DESC`);
    }

    findById(id) {
        return this.database.query(`SELECT ${this.fields} FROM ${this.table} WHERE id_article = ?`, [id]);
    }

    delete(id) {
        return this.database.query(`DELETE FROM ${this.table} WHERE id_article = ?`, [id]);
    }
      
      
      
}

module.exports = ArticleManager