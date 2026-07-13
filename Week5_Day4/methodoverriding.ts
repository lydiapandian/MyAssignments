class BROWSER{
browserVersion(){
    console.log("The browser version is: 1.0.0")
}
}

class CHROME extends BROWSER{
    browserVersion(){
    console.log("The browser version is: 2.0.0")
}
}

const browserversion = new CHROME()
browserversion.browserVersion()