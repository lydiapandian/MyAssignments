let num;

function numberType(num){
    if(num > 0){
        return num+ " is a Positive Number";
    }else if(num < 0){
        return num+ " is a Negative Number";
    }else {
        return "Given Number is Zero";
    }
}

console.log(numberType(-2));