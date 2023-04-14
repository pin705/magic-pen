module.exports = {
  apps: [
    {
      name: 'Dyrt',
      script: '.output/server/index.mjs',
      watch: true,
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
        // OPEN_AI_API_KEY: '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',
        MONGO_URL: 'mongodb+srv://cuongnd:jBtjX9WYuM4WGzdZ@cluster0.ptgdomn.mongodb.net/master-pen',
        FEEDBACK_URL: 'https://dytr.canny.io/feedback',
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: 'production',
        OPEN_AI_API_KEY: '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',
        MONGO_URL: 'mongodb+srv://cuongnd:jBtjX9WYuM4WGzdZ@cluster0.ptgdomn.mongodb.net/master-pen',
        FEEDBACK_URL: 'https://dytr.canny.io/feedback',
      },
    },
  ],
}
