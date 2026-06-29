let testExecutionSummary:{
  suiteName: String
  totalTests: number
  passedTests: number
  failedTests: number
  executionTime: string
}={
  suiteName: 'Test Report',
  totalTests: 5,
  passedTests: 4,
  failedTests: 1,
  executionTime: '10 minutes'  
};
console.log(testExecutionSummary.suiteName)
console.log(testExecutionSummary.totalTests)
console.log(testExecutionSummary.passedTests)
console.log(testExecutionSummary.failedTests)
console.log(testExecutionSummary.executionTime)

//calculate pass percentage
const passPercentage = (testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100;
console.log('Pass Percentage:', passPercentage + '%');

//Print execution status
const executionStatus = testExecutionSummary.failedTests === 0 ? 'Passed' : 'Failed';
console.log('Execution Status:', executionStatus);

if (testExecutionSummary.failedTests === 0) {
  console.log('Execution Successful');
} else {
  console.log('Execution Completed with Failures');
}
