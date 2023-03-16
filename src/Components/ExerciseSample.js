function ExerciseSample() {
    
  let name='harish';
  let age=45;
  let hobby='reading';

  let user ={
    name:'harish',
    age:45,
    hobby:'reading',
  }
  console.log(user.name);
  console.log(user['age']);
 
    // var proice = 250;
    // proice =300;
    // const useme ="Harish";
    // //useme ="santhy";
    // console.log(typeof proice,typeof useme);

    // let color;
    // console.log(typeof color);

    // let colorT = null;
    // console.log(typeof colorT);
    function sample(name){
      let nothing = [1,"harish",false];
      console.log(nothing[2],name);
    }
    sample("suman")
    sample("kanna")
    sample("kiran")

    function sum(num1,num2) {
      let add =num1+num2;
      console.log("sum of " + add)
      return add;
    }
    const addof2 = sum(9,8);
    console.log("add of " +addof2);

   console.log(`${30+50}`);
   alert(`${`my name 
    is kazya
    haribsjcdb`}`)
}

export default ExerciseSample;