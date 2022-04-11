module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '85.10.205.173'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'my-project'),
      user: env('DATABASE_USERNAME', 'y7411109'),
      password: env('DATABASE_PASSWORD', 'y7411109'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
