const models = require("../models");
const { articleSchema } = require("../validators/articleValidator");

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
    const article = {
      title: req.body.title,
      content: req.body.content,
      id_users: parseInt(req.body.id_users, 10),
      image: req.file ? req.file.filename : null,
      affiliate_links: req.body.affiliate_links || null,
    }

    const { error } = articleSchema.validate(article);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    models.article
      .addArticle(article)
      .then((result) => {
        res.status(201).json({ id_article: result.insertId, ...article });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
};

const edit = (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID invalide' });
  }

  const article = {
    id_article: id,
    title: req.body.title,
    content: req.body.content,
    id_users: parseInt(req.body.id_users, 10),
    image: req.file ? req.file.filename : req.body.existingImage || null,
  }

  const { error } = articleSchema.validate(article);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  models.article
    .updateArticle(article)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((err) => {
      console.error('Erreur lors de la modification de l’article :', err);
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
