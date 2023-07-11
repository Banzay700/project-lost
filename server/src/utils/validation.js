/**
 * @desc Error mapping
 */
const errorResponse = (schemaErrors) => {
  const errors = schemaErrors.map(({ path, message }) => ({ name: path[0], message }));

  return {
    status: 'error',
    errors
  };
};


/**
 * @desc Validation middleware
 * @param schema {object} - Joi validation schema
 */
const validateSchema = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, {
    abortEarly: false,
    allowUnknown: false
  });

  if (error?.isJoi) {
    res.status(400).json(errorResponse(error.details));
  } else {
    next();
  }
};

export default validateSchema;