//-----Destructuring_Array
//-----Example-01
let user = ['Naim',27,'Dhaka'];
let [name,age,city] = user;
console.log(user);
console.log(name);

//-----Example-02
let user = ['Naim',24,'Dhaka'];
let [name,age=25,city] = user;   //Default Value Set
console.log(user);
console.log(name);
console.log(age);
console.log(city);


//-----Example-03 //Nested Array Create
let user = ['Naim',24,'Dhaka',["Male",30000]];
let [name,age,city,[gender,salary]] = user;   //Default Value Set
console.log(user);
console.log(name);
console.log(age);
console.log(city);
console.log(gender);
console.log(salary);


//-----Example-04      //Rest Operator
let user = ['Naim',24,'Dhaka'];
let [name,...args] = user;   //--Rest Operator Use (...args)-->This is rest operator

//----Output
console.log(name);
console.log(args);


//-----Example-05     //Function use
function user([name,age,city]){
    console.log(name);
    console.log(age);
    console.log(city);
};
user(["Santo",25,"Jessore"])



//-----Example-06     //----Function with Return Value  
function user(){
    return ["Banta",25,"Dhaka"];
};
let [name,age,city] = user();
console.log(name);
console.log(age);
console.log(city);







