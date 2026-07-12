export class methodaccessmodifier{

public add(a: number, b: number): number {
return a + b;
}
private sub(a: number, b: number): number {
return a - b;
}
protected mul(a: number, b: number): number {
return a * b;
}
public get readonly(){
    return this.sub
}
}
const calc = new methodaccessmodifier();
console.log(calc.add(5,2))
console.log(calc.readonly(5,2))

