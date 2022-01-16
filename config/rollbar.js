const isProd = process.env.NODE_ENV === 'production';

export default () => ({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  enabled: isProd,
  payload: {
    environment: isProd ? 'production' : 'development',
  },
});
