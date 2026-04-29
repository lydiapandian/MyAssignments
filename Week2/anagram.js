function stringLength(str){
    let str1 = str.trim();
    let strArray = str1.split(" ");
    let len = strArray[strArray.length - 1].length;
    console.log(`Length of the last word is ${len}`);
}

stringLength( "Hello World" );
stringLength( "   fly me   to   the moon  " );

function isAnagram(str1,str2){

    let sortStr1 = str1.trim().toLowerCase().split('').sort().join('');
    let sortStr2 = str2.trim().toLowerCase().split('').sort().join('');
    
    if (sortStr1 === sortStr2){
        return "True";
    }else {
        return "False";
    }
        
    
}

console.log(isAnagram("listen","silent"));

console.log(isAnagram("Hello","World"));