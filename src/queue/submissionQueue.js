const { Queue } =require("bullmq") ;

const redisConnection =require( "../config/redisConfig");

export default new Queue("SubmissionQueue", { connection: redisConnection });
