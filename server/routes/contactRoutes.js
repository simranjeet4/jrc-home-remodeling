import { Router } from 'express';
import { submitContact, submitSubscribe } from '../controllers/contactController.js';
import { validate } from '../middleware/validate.js';
import { contactSchema, subscribeSchema } from '../utils/validators.js';

const router = Router();

/**
 * POST /api/contact
 * Accepts contact form submissions.
 */
router.post('/', validate(contactSchema), submitContact);

/**
 * POST /api/contact/subscribe
 * Accepts newsletter subscriptions from the footer.
 */
router.post('/subscribe', validate(subscribeSchema), submitSubscribe);

export default router;
