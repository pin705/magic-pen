module.exports = {
  apps: [
    {
      name: 'Dyrt',
      script: '.output/server/index.mjs',
      watch: true,
      exec_mode: 'cluster', // fork or cluster
      instances: 'max', // Or a number of instances
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
