class Browser{
    browserType(){
        console.log('browserType')
    }
    browserVersion(){
        console.log('browserVersion')

    }
}
class Chrome extends Browser{
    launchBrowser(){
        console.log('launch Chrome Browser')
    }
}
const Chromeobj = new Chrome()
Chromeobj.browserType()
Chromeobj.browserVersion()
Chromeobj.launchBrowser()

class Edge extends Browser{
    launchBrowser(){
        console.log('launch Edge Browser')
    }
}
const Edgeobj = new Edge()
Edgeobj.browserType()
Edgeobj.browserVersion()
Edgeobj.launchBrowser()
