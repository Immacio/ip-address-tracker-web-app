/* Environment Variables */

const Config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  baseUrl: process.env.REACT_APP_BASE_URL,
  apiKey: process.env.REACT_APP_API_KEY,
};

export default Config;
