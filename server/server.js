import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import contactRoutes from './routes/contactRoutes.js';
import quoteRoutes from './routes/quoteRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 5000;

// ---------------------
// Middleware
// ---------------------

// Security headers
app.use(helmet());

// CORS — allow frontend origin
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

// Body parsing with 10kb safety threshold
app.use(express.json({ limit: '10kb' }));

// General rate limiting — 100 requests per 15 min per IP
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
});
app.use('/api', generalLimiter);

// Dedicated stricter form rate limiting — 25 submissions per 15 min per IP
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 25,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many form submissions from this network. Please wait a few minutes before trying again.' },
});

// ---------------------
// Routes
// ---------------------

app.use('/api/contact', formLimiter, contactRoutes);
app.use('/api/quote', formLimiter, quoteRoutes);
app.use('/api/estimate', formLimiter, quoteRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ---------------------
// Error handling
// ---------------------

app.use(errorHandler);

// ---------------------
// Start server
// ---------------------

app.listen(PORT, () => {
  console.log(`[JRC Server] Running on http://localhost:${PORT}`);
});

export default app;
