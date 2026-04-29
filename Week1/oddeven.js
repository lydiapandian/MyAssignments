let a;

function isOddOrEven(a){

    // Conditional statement to check if the number is divisible by 2    
    if((a%2)===0){
        return a+ " is Even Number";
    }
    else{
        return a+ " is Odd Number";
    }
}

console.log(isOddOrEven(3));