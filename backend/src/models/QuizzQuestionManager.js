const AbstractManager = require('./AbstractManager')

class QuizzQuestionManager extends AbstractManager {
    constructor() {
        super({ table: 'quizz_question' });

        this.fields = `
          id_quizz_question,
          question_text
        `;
    }

    getAllQuestions() {
        return this.database.query("SELECT ${this.fields} FROM quizz_question");
    }

    getResponsesByQuestionId(id) {
        return this.database.query(
          "SELECT id_quizz_answer_choice, image_url, id_quizz_result, id_quizz_question FROM quizz_answer_choice WHERE id_quizz_question = ?",
          [id]
        );
    }

    getAllQuestionsWithResponses() {
        return this.database.query(`
          SELECT q.id_quizz_question, q.question_text, a.id_quizz_answer_choice, a.image_url, a.id_quizz_result
          FROM quizz_question q
          LEFT JOIN quizz_answer_choice a ON q.id_quizz_question = a.id_quizz_question
          ORDER BY q.id_quizz_question, a.id_quizz_answer_choice
        `);
      }
      
}

module.exports = QuizzQuestionManager