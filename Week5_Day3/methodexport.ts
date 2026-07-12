import { methodaccessmodifier } from "./method";

class methodexport extends methodaccessmodifier{

multiply(){
console.log(this.mul(5,5));

}
}

const calc1 = new methodexport();
calc1.multiply()