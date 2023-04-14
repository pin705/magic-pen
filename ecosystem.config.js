module.exports = {
  apps: [
    {
      name: 'Dytr',
      script: '.output/server/index.mjs',
      watch: true,
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
        OPEN_AI_API_KEY: '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',
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
