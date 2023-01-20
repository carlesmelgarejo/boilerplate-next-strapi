export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'boilerplate-db'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'boilerPlate2023'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});