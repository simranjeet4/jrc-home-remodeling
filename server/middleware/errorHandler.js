/**
 * Global error handler middleware.
 * Catches errors thrown in route handlers and returns a clean JSON response.
 */
export function errorHandler(err, _req, res, _next) {
  console.error('[Error]', err.message);

  // Zod validation errors
  if (err.name === 'ZodError' || err.issues || err.errors) {
    const issues = err.issues || err.errors || [];
    return res.status(400).json({
      error: 'Validation failed',
      details: issues.map((e) => ({
        field: Array.isArray(e.path) ? e.path.join('.') : String(e.path || ''),
        message: e.message,
      })),
    });
  }

  // Generic server error
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || 'Internal server error',
  });
}
