async function v1Route(fastify,options){
    fastify.register(require('./submissionRoutes'),{prefix:'/submissions'});
    
}
module.exports=v1Route;