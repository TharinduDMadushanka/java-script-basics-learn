let student ={
    name : "Saman",
    age : 18,  //peperties

    sayHi : function(){ // methods
        console.log("Say hii");
    }
}

student.sayHi();
console.log(student.name);
console.log(student.age);

student.age = 20;
console.log(student.age);

student.sayHello=function(){
    console.log("Hello");
}
student.sayHello();

student.address="Galle";
console.log(student.address);