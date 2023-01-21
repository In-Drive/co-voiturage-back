export const config = {
  db: {
    type: process.env.DB_TYPE || 'postgres',
    synchronize: true,
    logging: true,
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'username',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'dev',
    extra: {
      connectionLimit: 10,
    },
    autoLoadEntities: true,
  },
  foo: 'dev-bar',
};
