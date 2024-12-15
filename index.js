function one(a,b) {
    console.log("one")
    return a+b + two(b,a)
}
function two(a,b) {
    console.log("two")
    return a*b
}
one (10,30)


function one(a,b) {
    console.log("one")
    return a+b + two(b,a)
}
function two(a,b) {
    console.log("two")
    return a*b
}
two(12,40) + one (12,40)


function one(a,b) {
    console.log("one")
    return a+b + two(b,a) 
    // 12+40=52  + 480  = 532
}
function two(a,b) {
    console.log("two")
    return a*b // 480
}
console.log(two(12,40) + one (12,40))
// 480      +  532 =  1012

//              10,30,32
function funOne(a, b, c) {
    console.log("One");
    return funThree(a + 10) + funThree(a + b + c);
}                 // 10+10 =20       
                 //   30              30+30+32=72
                 //         30+82=112                   82
//              10 , 30
function funTwo(a, b) {
    console.log("Two");      // 112
    return funThree(funOne(a, 32, b));
    //                      122
}
function funThree(a) {
    console.log("Three");
    return a + 10;
}//        20+10=30
    //     72+10=82
        // 112+10=122
console.log(funTwo(10, 30));// 122
/* Two
   one
   Three
   Three
   Three
   122      */

Callbacks in javascript
      -----------------------
    The function defination which is passed as argument to another function or 
     method or constructor parameter is known as callbacks      Mainly callbacks are used in asynchronous operations , array methods ,
     promises and events
     Callbacks can be in form of named functions , arrow functions and anonymous
      functions






//Syn : 
//                     function functionName(parameter){
//                            // statements
//                             parameter([arguments]);
//                      }
//                      functionName(anotherFunctionDefination);


function sayHi(callback) { // goodbye
    console.log("Hi");
    console.log(callback);  // goodbye
    callback();    // Bye
}
function goodbye() {
    console.log("Bye");
}
sayHi(goodbye);  // defination
// function calling








function x(callback1, callback2) {
    console.log(callback1, callback2);
    callback1();
    callback2();
}
function y() {
    console.log("Y Function");
}
function z() {
    console.log("Z Function");
}
x(y, z);





//function
function greet(name, kumar){
    console.log("Hi" + " " + name);
    kumar(name);
}
//callback function
function call(x){
    console.log(`${x} callback function1`);
}
//passing function as a argument
greet("Rishi", call);



function nameOf(a, callback) {
    console.log(`${a} is here`);
    callback("sowbaghya");
}

function city(b) {
    console.log(b)
}
nameOf("chinni", city);


function name(a, callback) {
    console.log(a + " is here");
    console.log(callback("sowbaghya"));
}

function city(b) {
    return b;
}
name("chinni", city);



function nameOf(a, callback) {
    console.log(a + " is here");
    callback("sowbaghya");
}

function city(b) {
    return b;
}

nameOf("chinni", console.log(city));



function nameOf(a, callback) {
    console.log(`${a} is here`);
    console.log(callback("sowbaghya"));
}
function city(b) {
    return b;
}
nameOf("chinni", console.log(city));


function name(a,callback){
    console.log(`${a} is here`)
    console.log(callback("sowbaghya"))
}
function city(b){
     return b
}
name("chinni",city)



function operation(a, b, addCallback, multiplyCallback) {
  console.log("Addition:", addCallback(a, b));
  console.log("Multiplication:", multiplyCallback(a, b));
}
  
function add(x, y) {
  return x + y;
}
  
function multiply(x, y) {
  return x * y;
}
operation(5, 3, add, multiply);




function taskOne(callback) {
    console.log("Task One");
    callback();
}
  
function taskTwo(callback) {
    console.log("Task Two");
    callback();
}
  
function taskThree() {
    console.log("Task Three");
}
  
  // Nested callback execution
taskOne(() => {
taskTwo(() => {
taskThree();
});
});