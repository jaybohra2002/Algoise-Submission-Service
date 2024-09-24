const { createSubmission } = require("../../../controllers/submissionService");


async function submissionRoute(fastify, options){
    fastify.post('/ping',createSubmission);
};
module.exports=submissionRoute;