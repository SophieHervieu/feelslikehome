const Joi = require('joi');

const validateUser = (user) => {
  const schema = Joi.object({
    password: Joi.string()
      .min(8)
      .max(30)
      .required()
      .messages({
        'string.base': 'Le mot de passe doit être une chaîne de caractères',
        'string.empty': 'Le mot de passe est requis',
        'string.min': 'Le mot de passe doit contenir au moins 8 caractères',
        'string.max': 'Le mot de passe ne peut pas dépasser 30 caractères',
        'any.required': 'Le mot de passe est requis',
      }),

    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.email': 'L’adresse e-mail doit être valide',
        'string.empty': 'L’adresse e-mail est requise',
        'any.required': 'L’adresse e-mail est requise',
      }),
  });

  const { error } = schema.validate(user, { abortEarly: false });

  if (error) {
    const errorsMessages = error.details.map((detail) => ({
      message: detail.message,
    }));
    return { errorCount: error.details.length, errorsMessages };
  }

  return false;
};

module.exports = validateUser;
