const models = require("../models");

const getAllResultsWithAnswers = (req, res) => {
  models.quizz_result
    .getAllResultsWithAnswers()
    .then(([rows]) => {
      const formatted = rows.map((result) => ({
        id_quizz_result: result.id_quizz_result,
        title: result.result_title,
        result_text: result.result_text,
        image_url: result.image_url,
        answer_ids: result.answer_ids ? result.answer_ids.split(",").map(Number) : [],
      }));

      res.json(formatted);
    })
    .catch((err) => {
      console.error("Erreur dans getAllResultsWithAnswers :", err);
      res.sendStatus(500);
    });
};

const getAllResults = (req, res) => {
  models.quizz_result
    .getAllResults()
    .then(([rows]) => res.json(rows))
    .catch((err) => {
      console.error("Erreur dans getAllResults :", err);
      res.sendStatus(500);
    });
};

const getResultById = (req, res) => {
  models.quizz_result
    .getResultById(req.params.id)
    .then(([rows]) => {
      if (rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.json(rows[0]);
      }
    })
    .catch((err) => {
      console.error("Erreur dans getResultById :", err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllResultsWithAnswers,
  getAllResults,
  getResultById,
};
