module.exports = {
  pool: { min: 2, max: 10 },
  client: "pg",
  connection: process.env.DATABASE_URL ?? "postgres://postgres@localhost:7132/duco",
  migrations: {
    tableName: "knex_migrations_duco",
  },
};
