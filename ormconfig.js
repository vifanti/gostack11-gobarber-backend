require('dotenv/config');

module.exports = [
  {
    url: process.env.DATABASE_URL,
    type: 'postgres',
    // host: 'localhost',
    // port: 5434,
    // username: 'postgres',
    // password: 'docker',
    // database: 'gostack_gobarber',
    // ssl: ,
    entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
    migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
    cli: {
      migrationsDir: './src/shared/infra/typeorm/migrations',
    },
  },
  {
    name: 'mongo',
    type: 'mongodb',
    host: 'localhost',
    port: 27018,
    database: 'gostack_gobarber',
    useUnifiedTopology: true,
    entities: ['./src/modules/**/infra/typeorm/schemas/*.ts'],
  },
];
