const submissionQueue =require( "../queue/submissionQueue");

module.exports =async function (payload) {
  await submissionQueue.add("SubmissionJob", payload);
  
}
