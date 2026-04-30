const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-pxtorem': {
      mediaQuery: true,
      minPixelValue: 0,
      propList: ['*'],
      replace: true,
      rootValue: 16,
      selectorBlackList: ['.no-rem']
    }
  }
};

export default config;
