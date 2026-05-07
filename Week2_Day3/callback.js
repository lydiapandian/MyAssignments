let browser = "Chrome";
function checkBrowserVersion(callback){
setTimeout(()=>{
 },2000)
callback(browser)
}
function browserversion(browser){
console.log("Browser version is:", browser)
}
checkBrowserVersion(browserversion)