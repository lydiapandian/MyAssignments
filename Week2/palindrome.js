
function isPalindrome(str){
    let reverse = "";
    
    for(let i = str.length - 1; i >= 0; i--){
        reverse += str.charAt(i);
    }
    console.log(str + " == " + reverse);
    if(str === reverse){
        console.log(`The string \"${str}\" is Palindrome`);
    }else{
        console.log(`The string  \"${str}\" is not Palindrome`);
    }

}

isPalindrome("lydia");
isPalindrome("level");