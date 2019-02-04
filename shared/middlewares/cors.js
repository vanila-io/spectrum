// @flow
import cors from 'cors';
require('now-env');

export const corsOptions = {
  origin:
    process.env.NODE_ENV === 'production' && !process.env.FORCE_DEV
      ? [
          `https://${process.env.PROD_DOMAIN}`,
          `https://alpha.${process.env.PROD_DOMAIN}`,
          `https://admin.${process.env.PROD_DOMAIN}`,
          `https://hyperion.workers.${process.env.PROD_DOMAIN}`,
          `https://hyperion.alpha.${process.env.PROD_DOMAIN}`,
          process.env.NOW_URL,
        ].filter(Boolean)
      : [/localhost/],
  credentials: true,
};

export default cors(corsOptions);
