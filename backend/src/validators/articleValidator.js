const Joi = require("joi");

const articleSchema = Joi.object({
  title: Joi.string().min(5).max(100).required(),
  content: Joi.string().min(20).required(),
  id_users: Joi.number().integer().required(),
  image: Joi.string().optional().allow(null),
  affiliate_links: Joi.string().uri().allow(null, '').optional(),
  image: Joi.string().allow(null).optional(),
});

const validateArticle = (req, res, next) => {
    const dataToValidate = {
        ...req.body,
        image: req.file ? req.file.filename : req.body.image || null,
      };

    const { error } = articleSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    req.validatedArticle = dataToValidate;

    next();
};

module.exports = { validateArticle };