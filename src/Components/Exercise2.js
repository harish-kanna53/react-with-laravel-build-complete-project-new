import { getSuggestedQuery } from "@testing-library/react";

function Exercise2() {
    let user = {
        name:"hatrish",
        age:45,
        gender:'male',
        ismarried:true,
    
        address: {
            long:`12673.34.43`,
            latt:`123.324.546`
        },
        person:["uncle","cousine","dimple"],
    }
    console.log(user);
    
    let price=100;
    console.log(price === 100);
    console.log(price !== 100);
    
    console.log(price == '100');
    console.log(price != 100);

    // console.log(
  //   number % 3 ===0 && number % 5 === 0 ? 'FizzBuzz' :
  //   number % 3 ===0 ? 'Fizz' :number % 5 === 0? 'Buzz' : 'nothing'
  // );

  // for(let i =1 ; i <= 5; i++){
  //   console.log("FizzBuzz",i);
  // }
      
  //     for(let i =5 ; i <= 1; i--)
  //     {
  //     console.log("Buzzfizz",i);

  //     }
   
// for in loop
  // let obj = {
  //   name:'harish',
  //   age:45,
  // }
  // for(let i in obj)
  // {
  //   console.log(i,obj[i]);
  // }

  // let numbers=[1,2,3,4,45,6];
  // for (let index in numbers){
  //   console.log(index,numbers[index]);
  // }
  // for (let index of numbers){
  //   console.log(index);
  // }

//   Forloop study 
//for(let i=1;i<=3;i++){
    //   for(let j=1;j<=3;j++){
    //     console.log(i,j);
    //   }
    // }


  //Strings in react Part 1
  // let con ='my country is my india';
  // console.log(con);
  // console.log(typeof con);
  // console.log(con[4]);
  // console.log(con.charAt(2));
  // console.log(con.toLocaleUpperCase());
  // console.log(con.includes('is'));
  // console.log(con.startsWith('my'));
  // console.log(con.search('my'));
  // console.log(con.indexOf('my'));
  // console.log(con.lastIndexOf("my"));

  let conste = `hi my name is harish and 'm learning react course online`;
// // console.log(conste);
// let temp=[1,2,3,4,5];
// console.log(typeof temp.toString());
// console.log(temp.toString()); 

// //String concatination with lagecy method
// let h1='Hi My name';
// let h2 ='is harish';
// let h3=`'m doing my react course`;
// let h= h1.concat(" "+h2+" "+h3);
// let ha = h1 + " "+h2+" "+h3;
// console.log(ha);
//output :"Hi My name is harish 'm doing my react course";

// //with is split method we can get the data into arrays
// console.log(conste.split(" "));
{/*output
['hi', 'my', 'name', 'is', 'harish', 'and', "'m", 'learning', 'react', 'course', 'online']
*/}
{/*Slice method where we can get the specifice data from the
string variable*/}
// console.log(conste.slice(0,14));
// console.log(conste.slice(-60,-1));
// //output "Hi My name is"
// console.log(conste.substring(0,4))
// console.log(conste.substr(0,90))

// let conste = 'hi my name is harish and "i\'m learning react course online."\n how are you?"';
  // console.log(conste);
  {/*
    hi my name is harish and "i'm learning react course online."
    how are you?"*/}

  
//   //String Immutable
  {/*
  we can reassign the declared string data but we cannot modifie already declared string variable 
  data
*/}
//   var mesg='Vijay Ragavn';
//   mesg = mesg+' How are you';
//   console.log(mesg);

///JAvaScript objects Part 1
//javascript object
  {/*
instead of declaring multiple variable we can
declare single on=bject and have all the varible inside the object */}
// let Name ='harish';
// let age =45;
// let address='india';
// const user ={
//     name:"kanna",
//     age:45,
//     address:'india',
//     //1-asd-876*&& harish
//   }
//   console.log(user);
//   //Add Properties in object
//   user.emailid="abc@efg.com";
//   user['mobile']='8098733341';
  
//   //update Properties in object
//   user['age']=54;
//   user.name ='harish';
//   user["address"]='india, tamil nadu';
  
//   //delete props in obj
//   //we should use delete keyword seperatly without dot notation
//   delete user.age;
//   console.log(user);
  
//   //declare a property with special characters or with space indents 
//   //by the below method we can achive
//   user['1-asd-876*&& harish'] = 'jyacgfkjygfdt';
//   let key = '324#@$ kjbhj -i84u2';
//   user[key]='harish';
//   console.log(user); 

// //object method &n this Keyword
// const user = {
//     name:"kanna",
//     age:45,
//     address:'india',
//     friends:['jicin','mathevis','raju'],
//     selectColor:null,
//     calculateAge:function()  {
//       console.log(user.age);
//       //here if we wanted to access the property in the parent object
//       //By using thois keyword we can achive that
//       console.log(`I'm ${this.name} learning course here`); 
//     },
//   };
//   user.calculateAge();

// //Travers object
// const user={
//     name:'kanna',
//     age:45,
//     isMarried:false,
//     Phone:'8098733341-99',
//     Gender:"M",
//     email:"asd@sad.com",
//   }
//   //one way
//   for(const key in user){
//     console.log(key,user[key]) 
//   }

//   //Another Way
//   console.log(Object.keys(user));
//   console.log(Object.values(user));
//   // with tis entries will get all the date in the object
//   // including the  objecct
//   for (let item of Object.entries(user)){
//     console.log(item)
//   }



//Exercice Travesrsing
  // const salary = {
  //   steev:50000,
  //   mark:20000,
  //   jhon:60000,
  //   mathiev:78000,
  // };
  // let Sum_ = 0;

  // // for(let val in salary){
  // //   console.log(val,salary[val]);
  // //   Sum_ = Sum_+salary[val];
  // //   console.log(Sum_);
  // // }

  // console.log(Object.values(salary));

  // for (let val of Object.values(salary) ){
  //   Sum_ += val;
    
  // }
  // console.log(Sum_);


  {/*  object Destructering 
//   by this techniqe we can able to access allther object 
//   properties associated with the main object
// without using dotnotation*/}
//   const bookUsers={
//     name:'harish',age:67,
//     favoBook:{
//       author:'mark',
//       title:'Good Time will come soon',
//     },
//     publish:{
//       date1:'11/11/2020',
//       company:'xxx',
//     },
//   };

//   const {name,age,favoBook,publish} = bookUsers;
//   const{author,title} = favoBook;
//   const{date1,company} = publish;

  
//   console.log(bookUsers);
//   console.log(name);
//   console.log(age);
//   console.log(author);
//   console.log(title);
//   console.log(date1);
//   console.log(company);

{/*cloning an object*/}
  // const objToClone={
  //   name:'harish',
  //   age:45,
  //   salary:{
  //     mark:20000,
  //     steev:50000,
  //     jhon:60000,
  //     mathiev:78000,
  //   } 
  // };

  // //manually we can add each properties
  // //ths method may difficult if ther is 40 properties
  // //this may take time and code will be duplicated
  // const{name,age,salary}=objToClone;
  // const {mark,jhon,mathiev}=salary;
  //  console.log(objToClone);
  // const clonedObj = {};
  // clonedObj.name = name; 
  // clonedObj.age = age;

  // //using for loop we can do
  // for(let val in objToClone)
  // {
  //   // console.log(val,objToClone[val]);
  //    clonedObj[val] = objToClone[val];
  //   // console.log(clonedObj);
  // }

  // //by assignenment we can clone the one object to another

  // const clonnedObject = Object.assign({},objToClone);
  // console.log(clonnedObject);

  // //console.log(clonedObj);


  // //Math object
  // console.log(Math.PI);
  // console.log(Math.random());
  // console.log(Math.sqrt(64));
//============================================================

  //Json Object
  // const userData={
  //   name:'harish',
  //   age:45,
  //   salary:{
  //         mark:20000,
  //         steev:50000,
  //         jhon:60000,
  //         mathiev:78000, 
  //       },
  // };
  // const jsonReturned =JSON.stringify(userData);
  // console.log(`JSON.parse(jsonReturned)`);
  // console.log(jsonReturned);

  // //function declaration
  // function dosome(name,age) {
  //   const message12 = `I'm ${name} and ${age} old;`;
  //   console.log(message12);
    
  // }
  // //function call
  // dosome("prop",56);

  //   console.log(calc(10));

//   function calc(num1,num2=10,num3=10){
//     let sum = num1/num2+num3;
//     return sum; 
//   }
  
// //function Expression
//   var sumFunExpression=function(num1,num2){
//     let sum=num1*num2;
//     return sum;
//   }
//   console.log(sumFunExpression(20,40));
// }
//============================================================

// //ArrowFunction
// var funExpArrow = (num1=9,num2) => num1+num2 ;
// console.log(funExpArrow(90,100));

// //REST Operators in REaact
  // function multipluu(...args){
  //   console.log(args);
  //   let m=1;
  //   for (let w of args){
  //     m = w*m;
  //   }
  //   return m;
  // }
  // console.log(multipluu(1,2,3,4,5));
//============================================================

  // //Arrays in javascript
  // let friends=["harish",'mathiev','jicin','gokul'];
  // console.log(friends);
  // console.log(friends[1]);
  // console.log(friends[3]);

  // let friends =[11,12,13,14,15];
  // friends.unshift(1,2,3,4,5);
  // friends.push(4,5);
  // friends.pop(11,12,13,14)
  // friends.splice(3,0,123,124,125);
  // friends.pop();
  // friends.shift()
  // console.log(friends);
//============================================================

  //Iterating Array by using muliple methods
  // const doctors=[
  //   {name:"harish",age:45},
  //   {name:"mukesh",age:56},
  //   {name:"janna",age:67},
  //   {name:"kanna",age:78},
  // ];
  //Find the object in the array
  // const findres = doctors.find(function(doctor) {
  //   return doctor.name === "kanna";
  // });
  // console.log(findres);

// const n_umbvv = [1,23,4,5,6,7];
//using for Loop which will iterat the values & print
// for(let i=0;i<n_umbvv.length;i++){
//   console.log(i,n_umbvv[i]);
// }

//for in loop which will return both the value & key as
// we declared
// for (let val in n_umbvv){
//   console.log(val,n_umbvv[val]);
// }

//Foreach Loop will direct get from the dot nomtation and
// where we can have the function expression and it will return some 
//data withboth key & value
// n_umbvv.forEach(function(num,index){
// console.log(num,index);
// });

//Sorting & reversing the Array
  // const numberzzs=[1,9,4,7,3,6,2,8,5];
  // numberzzs.sort().reverse();
  // // numberzzs.reverse();
  // console.log(numberzzs);
//============================================================
  
  // //Revers or sort --function expression has written to sort
  // // the data in the array object
  // const doctors=[
  //     {name:"harish",age:78},
  //     {name:"mukesh",age:23},
  //     {name:"janna",age:90},
  //     {name:"kanna",age:18},
  //   ];
  //   doctors.sort(function(d1,d2){
  //      if(d1.age>d2.age) return +1;
  //      if(d1.age===d2.age) return 0;
  //      if(d1.age<d2.age) return -1;
  //   }).reverse();
  //   console.log(doctors);

//   //array check
//   // every
//   const numberzzs=[1,9,4,7,3,6,2,8,5];
//   const result1 = numberzzs.every(function(n1) {
//     return n1<-2;
//   });
//   const result = numberzzs.some(function(n1) {
//     return n1<-2;
//   });
//   console.log(result,result1);
//============================================================

//Spread operator
{/*1)with spread operator we can fetch all the array data in a single value
  withou iterating it.
  2) with the spread operator we can copy onearray to another without iterating
  3) we can concatinate both arrays by using the spread operator.
*/}
// const numberzzs=[1,9,4,7,3,6,2,8,5];
  // console.log(...numberzzs);
  // console.log(numberzzs);
  // console.log(numberzzs[0],numberzzs[1],numberzzs[2]);
  // const copied_array =[...numberzzs];
  // console.log(copied_array);
  

  //Spread operator applied on 2 variables
  // const copyto2=[23,24,25,26,27];
  // const copy2Array = [...numberzzs,...copyto2];
  // console.log(copy2Array); 
//============================================================

  {/** Join array by using join method
*/}
  // 
  // let number=[1,9,4,7,3,6,2,8,5];
  // let joinArray =number.join('-');
  // console.log(number);// [1, 9, 4, 7, 3, 6, 2, 8, 5]
  // console.log(joinArray);//1-9-4-7-3-6-2-8-5

  //By using PredefineFunctions Split and Joiin
  // let stringArray ="Hi My name Is harish";
  // let convertedString = stringArray.split(" ");
  // console.log(convertedString.join('-'));
//============================================================

  //ES6 Filtering,REDUCE methods an array
  //Mapping an array
  // let num = [1,2,3,4];
  //  let cloneArray = [];
  // for(let val of num){
  //   cloneArray.push( val * 2 );
  // } 
  // console.log(cloneArray);

  //map functionn with arrow function
  // const mapclone = num.map((num) =>  num * 2)
  // console.log(mapclone);

//   //mapp Function
//   const doctorsobj = [
//     {name:"harish",age:45},
//     {name:"sundar",age:34},
//     {name:"janny",age:25},
//     {name:"kanna",age:60}    
//   ]
// //by using map method we are iterating the values from the array
//   const arrowMapp = doctorsobj.map((doctor) => doctor.age)
//   console.log(arrowMapp);

//Legacey method to filter data by using for loop functions
let num = [1,2,3,4,5,6,7,8];
let emptynumArray =[];

// for (let val of num){
//   if(val %2 === 1)
//   emptynumArray.push(val)
// }
// console.log(emptynumArray);

//instead of using for loop we can use filter predefine function
// const arrayfilter = num.filter((num)=> {
//   return num % 2 === 0;
// })
// console.log(arrayfilter);
//============================================================

//REDUCE Methods in array
{/** 
1)method executes a reducer function for array element.
2) method does not execute the function for empty array elements.
3) method does not change the original array. */}
// let sum =0;
// const ReducArray =num.reduce((num,sum) => {
//   return sum+num;
// },9)
// console.log(ReducArray);
//============================================================
// 

//ES6 Array Objecrt Destructering

//   function Greetings(user){
//     const {name,age,gender,ismarried,address} = user;
//     const{long,latt}=address;
//     console.log(`My name ${name},'m ${age} old,${gender}
//     my address long:${long} & latt:${latt}`)
//   }
//   const user = {
//     name:"hatrish",
//     age:45,
//     gender:'male',
//     ismarried:true,
//     address: {
//         long:`12673.34.43`,
//         latt:`123.324.546`
//     },
// }
// Greetings(user);

// //Array DEstructering
// let array1 =[1,2,3,4,5,6];
// console.log(array1)
// let [a,b,c,d,e,f] =[1,2,3,4,5,6];
// console.log(a,b,c,d,e,f)
//============================================================
//Data Structure Set
{/**1)A Set has no keys. keys() returns the same as values().
This makes Sets compatible with Maps.
2)new Set()	Creates a new Set,
add()	Adds a new element to the Set
delete()	Removes an element from a Set */}

// let dataSete =new Set();
// dataSete.add(100);dataSete.add(200);dataSete.add(300);
// dataSete.add(400);dataSete.add(200);dataSete.add(500);
// console.log(dataSete);
// dataSete.delete(200);
// console.log(dataSete.size);
// console.log(dataSete);

//random method
// for(let ret of dataSete){
//   console.log(ret);
// }

//can iterate the values in the array using foreach
// dataSete.forEach((val)=> console.log(val))

//it will crear the entaier array
// dataSete.clear();
// console.log(dataSete)
//============================================================

// //Map objects
  // let mapx = new Map();
  // mapx.set("Mang0","manga");
  // mapx.set("Banana","Valaipala");
  // mapx.set("Score",100);

  // console.log(mapx);

  // for(let noting in mapx)
  // {
  //   console.log(noting)
  // }
  // console.log(mapx.has('mang0'));
  // console.log(mapx.delete("Mang0"));
  // console.log(mapx.keys());

//   const vo  = new WeakSet();
//   const obj1={};
//   const obj2={};
//   vo.add(obj1);
//   vo.add(obj2);
//   vo.set(obj1,123456);
//   console.log(vo);
//============================================================

//module Padd Start
  // const addNumber = (num1,num2) => num1+num2;
  // console.log(addNumber(10,50));

  //PAD Start , pad end
//   let minut='4';
//   let hour='5';
//   console.log(minut.padStart(9,'0'));
//   console.log(hour.padEnd(30,'OCP'))
//============================================================

//   let leng = '     Hi Harish    ';
//  console.log(leng.length);
//  //leng = leng.trim();
//  console.log(leng.trimEnd());
//============================================================
  //Try catch finally Error handling 
//   let a=8;
//   let b=7;
//   function divd(a,b) {
//     if(b===0){
//        throw new SyntaxError("parameter should n ot be null")
//     }
//     return a/b;
//   }
// try{
//   console.log(divd(4,0))
// }
// catch(e) { 
//   console.log("what is the error");
//   // throw new SyntaxError("do nothing")
// }
// finally{console.log( "it is working");}

//=================================================
//Arrow Functions
// var fruit = (f) => f;
//  console.log(fruit(('nothing')).toUpperCase());

// var fun =(n,m) => n*n*m;
// console.log(fun(9,10))

}

export default Exercise2;