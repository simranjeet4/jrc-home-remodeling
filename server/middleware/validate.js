import { contactSchema } from '../utils/validators.js';

/**
 * Middleware to validate request body against a Zod schema.
 * @param {import('zod').ZodSchema} schema
 */
export function validate(schema) {
  return (req, _res, next) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      next(err);
    }
  };
}
