module.exports = {
    apps: [
      {
        name: '3cx-middleware',
        script: 'index.js',
        instances: 'max',
        exec_mode: 'cluster',
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  