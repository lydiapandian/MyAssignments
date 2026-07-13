class TextBox{
fill(text: string):void
fill(text: string , locator: string):void
fill(text: string,locator?: string){
if(locator){

    console.log('The text is ' + text + ' in the locator ' + locator)
}
else{
    console.log('The text is ' + text)
}
}
}

const textboxobject = new TextBox()
textboxobject.fill("Testleaf")
textboxobject.fill("Testleaf","Xpath")