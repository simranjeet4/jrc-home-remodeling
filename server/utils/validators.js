import { z } from 'zod';

/**
 * Sanitizer helper: trims strings, removes null bytes.
 */
const cleanString = (max = 1000) =>
  z
    .string()
    .trim()
    .max(max, `Text must be under ${max} characters`)
    .transform((val) => val.replace(/\0/g, ''));

/**
 * Zod validation schema for Contact Form (/contact-us/).
 * Preserves exact reference fields: Name, Email, Phone, Address, Message, SMS checkboxes.
 */
export const contactSchema = z.object({
  name: cleanString(100).optional().default(''),
  firstName: cleanString(100).optional(),
  lastName: cleanString(100).optional(),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Please enter a valid email address')
    .max(255, 'Email is too long'),
  phone: cleanString(35).optional().default(''),
  address: cleanString(255).optional().default(''),
  zipCode: cleanString(20).optional(),
  service: cleanString(100).optional().default('General Inquiry'),
  message: cleanString(3000).optional().default(''),
  smsTransactional: z.boolean().optional().default(false),
  smsMarketing: z.boolean().optional().default(false),
  smsConsentTransactional: z.boolean().optional(),
  smsConsentPromotional: z.boolean().optional(),
  _hp_verify: z.string().optional().default(''),
});

/**
 * Zod validation schema for Estimate & Quote Forms (/kitchen-remodeling/, etc.).
 * Preserves exact reference fields: Name, Phone, Email, Schedule Date, Budget, How Soon, Address, Message.
 */
export const estimateSchema = z.object({
  name: cleanString(100).optional().default(''),
  phone: cleanString(35).optional().default(''),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Please enter a valid email address')
    .max(255, 'Email is too long'),
  scheduleDate: z
    .string({ required_error: 'Please choose a date to schedule' })
    .min(1, 'Please choose a date to schedule'),
  budget: z
    .string({ required_error: 'Please state your estimated budget' })
    .min(1, 'Please state your estimated budget')
    .max(100, 'Budget description is too long'),
  howSoon: z
    .string()
    .optional()
    .default('ASAP within a month'),
  address: z
    .string({ required_error: 'Project address is required' })
    .trim()
    .min(1, 'Project address is required')
    .max(500, 'Address is too long'),
  message: cleanString(3000).optional().default(''),
  service: cleanString(100).optional().default('Home Remodeling'),
  smsTransactional: z.boolean().optional().default(false),
  smsMarketing: z.boolean().optional().default(false),
  _hp_verify: z.string().optional().default(''),
});

/**
 * Quote schema alias for estimateSchema
 */
export const quoteSchema = estimateSchema;

/**
 * Zod validation schema for Newsletter Subscription (Footer).
 */
export const subscribeSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Please enter a valid email address')
    .max(255, 'Email is too long'),
  _hp_verify: z.string().optional().default(''),
});
