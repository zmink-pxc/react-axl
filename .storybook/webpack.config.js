const path = require('path');
const sass = require('sass');

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

  // Configure sass-loader to use 'sass' instead of 'node-sass' and support @bit imports
  // This function recursively updates sass-loader configurations
  const updateSassLoader = (useArray) => {
    if (!Array.isArray(useArray)) return;
    useArray.forEach(loader => {
      if (typeof loader === 'string' && loader.includes('sass-loader')) {
        // Convert string loader to object format
        const index = useArray.indexOf(loader);
        useArray[index] = {
          loader: loader,
          options: {
            implementation: sass,
            sassOptions: {
              includePaths: [path.resolve(__dirname, '../src/styles')],
              importer: [
                function(url) {
                  if (url === '@bit/zmink.axioline._axioline') {
                    return {
                      file: path.resolve(__dirname, '../src/styles/_axioline.scss')
                    };
                  }
                  return null;
                }
              ]
            }
          }
        };
      } else if (typeof loader === 'object' && loader.loader && loader.loader.includes('sass-loader')) {
        const existingImporter = loader.options?.sassOptions?.importer || [];
        loader.options = {
          ...(loader.options || {}),
          implementation: sass,
          sassOptions: {
            ...(loader.options?.sassOptions || {}),
            includePaths: [
              ...(loader.options?.sassOptions?.includePaths || []),
              path.resolve(__dirname, '../src/styles')
            ],
            importer: [
              ...(Array.isArray(existingImporter) ? existingImporter : [existingImporter]).filter(Boolean),
              function(url) {
                if (url === '@bit/zmink.axioline._axioline') {
                  return {
                    file: path.resolve(__dirname, '../src/styles/_axioline.scss')
                  };
                }
                return null;
              }
            ]
          }
        };
      }
    });
  };

  const rules = config.module.rules;
  rules.forEach(rule => {
    // Handle direct rules with use array
    if (rule.test && rule.test.toString().includes('scss') && rule.use) {
      updateSassLoader(rule.use);
    }
    // Handle oneOf rules (used by react-scripts)
    if (rule.oneOf) {
      rule.oneOf.forEach(oneOfRule => {
        if (oneOfRule.test && oneOfRule.test.toString().includes('scss') && oneOfRule.use) {
          updateSassLoader(oneOfRule.use);
        }
      });
    }
  });

  // Ensure .jsx is in extensions for module resolution (prioritize .jsx before .js)
  const existingExtensions = config.resolve.extensions || [];
  let extensions = existingExtensions;
  if (!existingExtensions.includes('.jsx')) {
    // Insert .jsx before .js if .js exists, otherwise prepend
    const jsIndex = existingExtensions.indexOf('.js');
    if (jsIndex >= 0) {
      extensions = [...existingExtensions.slice(0, jsIndex), '.jsx', ...existingExtensions.slice(jsIndex)];
    } else {
      extensions = ['.jsx', ...existingExtensions];
    }
  }

  // Merge resolve config carefully to preserve all existing options
  const existingAlias = config.resolve?.alias || {};
  
  config.resolve = {
    ...config.resolve,
    extensions: extensions,
    alias: {
      // Add path aliases
      ...existingAlias,
      "@assets":      path.resolve(__dirname,"../src/assets"),
      "@controllers": path.resolve(__dirname,"../src/components/Controllers"),
      "@core":        path.resolve(__dirname,"../src/components/Core"),
      "@modules":     path.resolve(__dirname,"../src/components/Modules"),
      "@utils":       path.resolve(__dirname,"../src/components/Utils"),
      "@":            path.resolve(__dirname,"../src/components"),
      "@styles":      path.resolve(__dirname,"../src/styles"),
      "@se":          path.resolve(__dirname,"../src/components/Modules/SmartElements")
    },
    modules: config.resolve.modules || ['node_modules']
  }

  // Return the altered config
  return config;
};
