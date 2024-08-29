async function v1Route(fastify,options){
    fastify.register(require('./test/testRoutes'),{prefix:'/test'});
}
module.exports=v1Route;