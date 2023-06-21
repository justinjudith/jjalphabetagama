const BASEURL =
  process.env.NEXT_PUBLIC_MODE === 'dev'
    ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
    : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

export default BASEURL;
