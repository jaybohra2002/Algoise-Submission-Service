const fastifyPlugin=require('fastify-plugin');
const servicePlugin=require('./services/servicePlugin');
const repositoryPlugin=require('./repository/repositoryPlugin')
async function app(fastify,options){
    fastify.register(require('@fastify/cors'));
    fastify.register(repositoryPlugin);
    //fastify.register(require('./routes/testRoutes'),{prefix:'/test'});
    fastify.register(servicePlugin);
    fastify.register(require('./routes/api/apiRoutes'));
}
module.exports=fastifyPlugin(app);