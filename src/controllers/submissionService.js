
async function pingRequest (req,res){
    console.log(this.testService);
    const response=await this.TestService.pingCheck();
    res.send({data:response});
}
async function createSubmission(req,res){
    const response=await this.SubmissionService.addSubmission(req.body);
    return response.status(201).json({
        error:{},
        data:response,
        success:true,
        message:"Created Submission Successfully"
    });
}
module.exports={
    pingRequest,
    createSubmission


};