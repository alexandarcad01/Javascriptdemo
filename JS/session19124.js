function GetResultFun(){
  
  
  // for of loop with array


var listofnames=["karthick", "ravi", "Raju", "Ramu"];


console.log("length of array listofnames .. ", listofnames.length);
console.log(listofnames[0]);
console.log(listofnames[1]);
console.table(listofnames);


for(let a=0;a<listofnames.length;a++)
{
    console.log(listofnames[a]); // a==0 : 
}

console.log("output from for OF");
for (let name of listofnames)
{

    console.log(name);
}



for(let a=0;a<listofnames.length;a++)
{
    console.log(listofnames[a]); // a==0 : 
    if(a==2){
        break;
    }
   
}

// for in loop with objects

var listofcars={name:"bmw", price:"1c", mdate:"2020"}

console.log(listofcars);
console.table(listofcars);
console.clear();

for (let property in listofcars){
    console.log(property + " : " + listofcars[property]);
}

var text="welcome to welcome javascript program organized by brightskills and brightskills welcomes you once again";
     console.log(text);
     console.log(text.length);
     console.log(text.indexOf("welcome"));
     console.log(text.indexOf("welcome", 10));
     console.log(text.lastIndexOf("welcome"));
     console.log(text.search("welcome"));
     let arr=text.search(/welcome/);
     console.log(arr);
     let arr1=text.match(/welcome/);
     console.log(arr1);
     let arr11=text.match(/welcome/gi);
     console.log(arr11);
     
     console.log(text.slice(19,29));

     // date usage
   
   let today= new Date();
   
   console.log(today);
   
   console.log(today.toDateString());
   console.log(today.toLocaleDateString());
   console.log(today.toISOString());
   console.log(today.toLocaleString());
   console.log(today.toString());
   console.log(today.toTimeString());
   console.log(today.toUTCString());
   console.log(today.getFullYear());
   console.log(today.getDate());
   console.log(today.getHours());
   console.log(today.getMilliseconds());
   console.log(today.getSeconds());
   
   var month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   console.log(month[today.getMonth()]);

   console.log(today.getMonth());
   
   let dob=new Date("2001-07-07");
   console.log(dob);
   
   
   let age =today.getFullYear()-dob.getFullYear();
   console.log(age);
   
     }
   
GetResultFun();