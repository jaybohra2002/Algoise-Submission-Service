const fastify= require('fastify')({logger:true });
const serverConfig=require('./config/serverConfig');
const connectDb=require('./config/dbConfig');
const app=require('./app');
fastify.register(app);

fastify.listen({port:serverConfig.PORT},async (err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    await connectDb();
    console.log(`Server running on port ${serverConfig.PORT}`);
});

