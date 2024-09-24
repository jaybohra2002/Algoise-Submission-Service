const submissionProducer=require('../producers/submissionQueueProducer');
class SubmissionService{
    constructor(submissionRepository){
        this.submissionRepository=submissionRepository;

    }
    async  pingCheck(){
        return "pong";
    }
    async addSubmission(submissionPayload){
        const submission=await this.submissionRepository.createSubmission(submissionPayload);
        if(!submission){
            throw {message:"Not able to create Submission"};
        }
        const response =await submissionProducer(submissionPayload);
        return {queueResponse:response,submission};
    }
}
module.exports={SubmissionService};
