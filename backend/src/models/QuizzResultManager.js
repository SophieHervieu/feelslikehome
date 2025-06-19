const AbstractManager = require('./AbstractManager')

class QuizzResultManager extends AbstractManager {
    constructor() {
        super({ table: 'quizz_result' })
    }

    getAllResultsWithAnswers() {
        return this.database.query(`
            SELECT qr.id_quizz_result, qr.result_title, qr.result_text, qr.image_url,
                   GROUP_CONCAT(qac.id_quizz_answer_choice) AS answer_ids
            FROM quizz_result qr
            LEFT JOIN quizz_answer_choice qac ON qac.id_quizz_result = qr.id_quizz_result
            GROUP BY qr.id_quizz_result
        `);
    }

    getAllResults() {
        return this.database.query("SELECT * FROM quizz_result");
    }

    getResultById(id) {
        return this.database.query(
          "SELECT * FROM quizz_result WHERE id_quizz_result = ?",
          [id]
        );
    }
}

module.exports = QuizzResultManager