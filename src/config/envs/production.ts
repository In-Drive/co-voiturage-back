export const config = {
  db: {
    type: process.env.DB_TYPE || 'postgres',
    synchronize: false,
    logging: false,
    replication: {
      master: {
        host: process.env.DB_HOST || 'masterHost',
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USER || 'username',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'prod',
      },
    },
    extra: {
      connectionLimit: 30,
    },
    autoLoadEntities: true,
  },
  foo: 'pro-bar',
};
