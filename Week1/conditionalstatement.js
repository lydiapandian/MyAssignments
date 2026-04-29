function launchBrowser(browser) {
  let browserName = browser
  if (browserName === "chrome") {
    console.log("Chrome browser...");
  } else {
    console.log(browserName + " browser...");
  }
}
launchBrowser("chrome");
// Function runTests using switch case
function runTests(testType) {
    let test = testType
  switch (test) {
    case "smoke":
      console.log("Running Smoke Tests...");
      break;
    case "sanity":
      console.log("Running Sanity Tests...");
      break;
    case "regression":
      console.log("Running Regression Tests...");
      break;
    default:
      console.log("No test type specified");
      break;
  }
}runTests("smoke");