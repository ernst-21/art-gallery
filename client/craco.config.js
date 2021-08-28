const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#0B0B09',
              '@link-color': '#1890ff'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
