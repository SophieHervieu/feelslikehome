const models = require("../models");

const browse = (req, res) => {
  const { title } = req.query;
  const cleanTitle = title && title.trim() !== "" ? title.trim() : null;

  models.article
    .getAllArticles(cleanTitle)
    .then(([rows]) => res.send(rows))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.article
    .findById(req.params.id)
    .then(([rows]) => {
      if (!rows[0]) res.sendStatus(404);
      else res.send(rows[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
    const article = req.body;
  
    models.article
      .addArticle(article)
      .then(([result]) => {
        res.status(201).json({ id: result.insertId, ...article });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
};

const edit = (req, res) => {
  const article = req.body;
  article.id = parseInt(req.params.id, 10);

  models.article
    .updateArticle(article)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.article
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
};
