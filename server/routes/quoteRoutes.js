import { Router } from 'express';
import { submitEstimate } from '../controllers/quoteController.js';
import { validate } from '../middleware/validate.js';
import { estimateSchema } from '../utils/validators.js';

const router = Router();

/**
 * POST /api/quote & POST /api/estimate
 * Validates request payload against Zod estimateSchema.
 */
router.post('/', validate(estimateSchema), submitEstimate);

export default router;
