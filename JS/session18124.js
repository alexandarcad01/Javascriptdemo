function GetResultFun(){

    var firstname=document.getElementById("firstname").value;
    console.log(firstname);
   
    firstname=Number(firstname);

    // while loop

    while(firstname<20) // 12<20
    
    {
        console.log("firstname"+ firstname+ " is smaller than 20 "); //printed
        firstname++; // increased
        //console.log("input "+ x + " is smaller than 20 "); // print
        
    }

// do while loop
    do{
        console.log("input in do while for  "+ firstname + " is smaller than 20 "); 
        firstname++;
    }
    while(firstname<0)

// for loop



//for (stat1; state2;state3l)
//   for(var a=0; a < 20; a++)  {
//     console.log("input in for loop  "+ a + " is smaller than 20 "); 
//   }
for(firstname;firstname <30; firstname++){
    console.log("input in for loop  "+ firstname + " is smaller than 20 "); 
}

}