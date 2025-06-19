const AbstractManager = require('./AbstractManager')

class ArticleManager extends AbstractManager {
    constructor() {
        super({ table: 'article' })
    }

    addArticle(article) {
        return this.database.query(
            `insert into ${this.table} (id_article, title, content, image, affiliate_links, created_at, updated_at, id_users) values (?, ?, ?, ?, ?, NOW(), NOW(), ?)`,
            [
            article.id_article,
            article.title,
            article.content,
            article.image,
            article.affiliate_links,
            article.id_users
            ]
        )
    }

    updateArticle(article) {
        return this.database.query(
          `update ${this.table} set id_article = ?, title = ?, content = ?, image = ?, updated_at = NOW() where id_article = ?`,
          [article.id_article, article.title, article.content, article.image, article.id]
        )
    }

    getAllArticles(title) {
        if (title) {
            return this.database.query(
                `SELECT * FROM ${this.table} WHERE title LIKE ? ORDER BY created_at DESC`,
                [`%${title}%`]
            );
        }
        
        return this.database.query(`SELECT * FROM ${this.table} ORDER BY created_at DESC`);
    }

    findById(id) {
        return this.database.query(`SELECT * FROM ${this.table} WHERE id_article = ?`, [id]);
    }

    delete(id) {
        return this.database.query(`DELETE FROM ${this.table} WHERE id_article = ?`, [id]);
    }
      
      
      
}

module.exports = ArticleManager