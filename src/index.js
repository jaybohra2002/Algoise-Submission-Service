const fastify= require('fastify')({logger:true });

const app=require('./app');
fastify.register(app);
const PORT=3000;
fastify.listen({port:PORT},(err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server running on port ${PORT}`);
});

