const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
//   npm 
  // Make whatever fine-grained changes you need
  // config.module.rules.push({
  //   test: /\.scss$/,
  //   use: ['style-loader', 'css-loader', 'sass-loader'],
  //   include: path.resolve(__dirname, '../'),
  // });

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      "@assets":      path.resolve(__dirname,"../src/assets"),
      "@controllers": path.resolve(__dirname,"../src/components/Controllers"),
      "@core":        path.resolve(__dirname,"../src/components/Core"),
      "@modules":     path.resolve(__dirname,"../src/components/Modules"),
      "@utils":       path.resolve(__dirname,"../src/components/Utils"),
      "@":            path.resolve(__dirname,"../src/components"),
      "@styles":      path.resolve(__dirname,"../src/styles")
    }
  }

  // Return the altered config
  return config;
};