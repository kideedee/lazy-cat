## ADDED Requirements

### Requirement: Database connection with environment variable

The system SHALL connect to PostgreSQL database using `DATABASE_URL` environment variable. When `DATABASE_URL` is not set, the database client SHALL be `null` and all database operations SHALL gracefully return empty/default values.

#### Scenario: Valid DATABASE_URL configured

- **WHEN** `DATABASE_URL` environment variable is set with valid Supabase connection string
- **THEN** `db` export from `db/index.ts` SHALL be a valid Drizzle client instance

#### Scenario: DATABASE_URL not configured

- **WHEN** `DATABASE_URL` environment variable is not set
- **THEN** `db` export from `db/index.ts` SHALL be `null`
- **AND** queries SHALL return empty arrays or default values without throwing errors

### Requirement: Connection singleton for development

The system SHALL use a singleton pattern to prevent multiple database connections during Next.js hot reload in development mode.

#### Scenario: Hot reload preserves connection

- **WHEN** Next.js triggers hot reload during development
- **THEN** the same database connection instance SHALL be reused
- **AND** no new connections SHALL be created

#### Scenario: Production creates single instance

- **WHEN** application runs in production mode
- **THEN** exactly one database connection instance SHALL be created

### Requirement: Session pooler compatibility

The database connection string MUST use Supabase Session pooler (port 5432) to support Drizzle ORM transactions.

#### Scenario: Transaction operations work

- **WHEN** code uses `db.transaction()` for atomic operations
- **THEN** transaction SHALL complete successfully without connection errors

### Requirement: Database schema migration

The system SHALL support migrating database schema from `db/schema.ts` to PostgreSQL using Drizzle Kit.

#### Scenario: Run migrations on empty database

- **WHEN** `pnpm db:init` is executed against empty Supabase database
- **THEN** all tables defined in `db/schema.ts` SHALL be created: `stats`, `books`, `movies`
- **AND** all enums SHALL be created: `type` enum with values `blog`, `snippet`
