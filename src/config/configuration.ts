export const configuration = () => ({
  port: parseInt(process.env.PORT) || 3001,
  mongodb_uri: process.env.MONGODB_URI,
  at_secret: process.env.AT_SECRET,
  rt_secret: process.env.RT_SECRET,

  at_config: {
    secret: process.env.AT_SECRET,
    expiresIn: parseInt(process.env.AT_EXPIRES_IN),
  },
  rt_config: {
    secret: process.env.RT_SECRET,
    expiresIn: parseInt(process.env.RT_EXPIRES_IN),
  },
});
