class StringBuilder{
    getValue(){

     },
    padEnd(str){

     },
    padStart(str){

     },
    padBoth(str){ 

    },
 
}




const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
