/**
 * SQL to initialize the leads table in PostgreSQL.
 * Run once against your database to create the schema.
 *
 * Usage:
 *   psql -d jrc_remodeling -f server/config/schema.sql
 */

CREATE TABLE IF NOT EXISTS leads (
  id            SERIAL PRIMARY KEY,
  first_name    VARCHAR(100) NOT NULL,
  last_name     VARCHAR(100) NOT NULL,
  email         VARCHAR(255) NOT NULL,
  phone         VARCHAR(30) NOT NULL,
  zip_code      VARCHAR(10) NOT NULL,
  service       VARCHAR(100) NOT NULL,
  message       TEXT,
  sms_consent_transactional BOOLEAN DEFAULT FALSE,
  sms_consent_promotional   BOOLEAN DEFAULT FALSE,
  created_at    TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
