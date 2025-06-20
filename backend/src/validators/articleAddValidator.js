const Joi = require("joi");

const articleSchema = Joi.object({
  title: Joi.string().min(5).max(100).required(),
  content: Joi.string().min(20).required(),
  id_users: Joi.number().integer().required(),
  image: Joi.string().optional().allow(null),
  affiliate_links: Joi.string().uri().allow(null, '').optional(),
});

module.exports = { articleSchema };