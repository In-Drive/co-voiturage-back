export const config = {
  db: {
    type: 'postgres',
    synchronize: false,
    logging: false,
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'username',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'test',
    extra: {
      connectionLimit: 5,
    },
    autoLoadEntities: true,
  },
};
