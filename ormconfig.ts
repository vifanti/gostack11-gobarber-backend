require('dotenv/config');

module.exports = {
  url: process.env.DATABASE_URL,
  type: 'postgres',
  // host: 'localhost',
  // port: 5434,
  // username: 'postgres',
  // password: 'docker',
  // database: 'gostack_gobarber',
  // ssl: ,
  entities: ['./src/models/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
