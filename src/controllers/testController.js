
async function pingRequest (req,res){
    console.log(this.testService);
    const response=await this.TestService.pingCheck();
    res.send({data:response});
}
module.exports={pingRequest};