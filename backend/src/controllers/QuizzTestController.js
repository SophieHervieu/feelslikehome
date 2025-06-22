const models = require("../models");

const testAnswers = async (req, res) => {
  const answers = req.body; // { questionId1: answerId1, questionId2: answerId2, ... }

  if (!answers || typeof answers !== "object") {
    return res.status(400).json({ error: "Aucune réponse reçue ou format invalide." });
  }

  try {
    const [rows] = await models.quizz_result.getAllResultsWithAnswers();

    const results = rows.map((r) => ({
      ...r,
      answer_ids: r.answer_ids ? r.answer_ids.split(',').map(Number) : [],
    }));

    const counts = {};
    for (const answerId of Object.values(answers)) {
      const matchingResult = results.find((result) =>
        result.answer_ids.includes(answerId)
      );
      if (matchingResult) {
        counts[matchingResult.id_quizz_result] =
          (counts[matchingResult.id_quizz_result] || 0) + 1;
      }
    }

    let maxId = null;
    let maxCount = 0;
    for (const [key, value] of Object.entries(counts)) {
      if (value > maxCount) {
        maxCount = value;
        maxId = parseInt(key);
      }
    }

    const finalResult = results.find((r) => r.id_quizz_result === maxId);

    if (!finalResult) {
      return res.status(404).json({ error: "Aucun résultat correspondant." });
    }

    res.status(200).json({
      message: "Résultat calculé avec succès",
      result: {
        id: finalResult.id_quizz_result,
        title: finalResult.result_title,
        text: finalResult.result_text,
        image: finalResult.image_url,
      },
    });

  } catch (err) {
    console.error("Erreur lors du calcul du résultat :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

module.exports = {
  testAnswers,
};
