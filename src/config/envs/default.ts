export const config = {
  db: {
    entities: [`${__dirname}/../../entity/**/*.{js,ts}`],
  },
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
};
