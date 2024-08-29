const fastifyPlugin=require('fastify-plugin');
const servicePlugin=require('./services/servicePlugin');
async function app(fastify,options){
    fastify.register(require('@fastify/cors'));
    //fastify.register(require('./routes/testRoutes'),{prefix:'/test'});
    fastify.register(servicePlugin);
    fastify.register(require('./routes/api/apiRoutes'));
}
module.exports=fastifyPlugin(app);