const models = require("../models");

const getAllQuestions = (req, res) => {
    models.quizz_question
      .getAllQuestions()
      .then(([rows]) => res.json(rows))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
};

const getResponsesByQuestionId = (req, res) => {
    models.quizz_question
      .getResponsesByQuestionId(req.params.id)
      .then(([rows]) => res.json(rows))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
};

const getAllQuestionsWithResponses = (req, res) => {
    models.quizz_question
      .getAllQuestionsWithResponses()
      .then(([rows]) => {
        const questionsMap = new Map();
  
        rows.forEach((row) => {
          const questionId = row.id_quizz_question;
  
          if (!questionsMap.has(questionId)) {
            questionsMap.set(questionId, {
              id: questionId,
              question_text: row.question_text,
              responses: [],
            });
          }
  
          if (row.id_quizz_answer_choice) {
            questionsMap.get(questionId).responses.push({
              id: row.id_quizz_answer_choice,
              image_url: row.image_url,
              id_quizz_result: row.id_quizz_result,
            });
          }
        });
  
        const structuredQuestions = Array.from(questionsMap.values());
        res.json(structuredQuestions);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
};
  

module.exports = {
    getAllQuestions,
    getResponsesByQuestionId,
    getAllQuestionsWithResponses,
  };