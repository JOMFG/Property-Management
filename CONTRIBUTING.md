# Contribution Guide

## Migrations

In order to make a new migration, simply run `npm run migrate:create <migration_name>`.

This will generate a new migration file based on `cli/template.js`. 

### Applying Migrations

In order to apply new migrations, simply run `npm run migrate:up`.

### Rolling back Migrations

In order to rollback new migrations, simply run `npm run migrate:down <migration_name>`.

