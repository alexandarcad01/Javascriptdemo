function GetResultFun(){

    var text= "welcome to welcome javascript to program organized by brightskills and brightskills welcomes to you once again    ";
    
    var output=text.toUpperCase();
    console.log(output);

    var output=text.toLowerCase();
    console.log(output);
    
    var output=text.slice(10,14);
    console.log(output);
    
    var output=text.slice(-10);
    console.log(output);
    
    var output=text.substring(0,4);
    console.log(output);

    var output=text.substring(-10);
    console.log(output);
    
    var output=text.charAt(0);
    console.log(output);
    
    var output=text.charCodeAt(0);
    console.log(output);
    
    var output=text.startsWith("w");
    console.log(output);
    
    
    var output=text.endsWith("n");
    console.log(output);
    
    var output=text.replace('welcome', 'hi');
    console.log(output);
    
    var output=text.replaceAll('welcome', 'hi');
    console.log(output);
    
    var number="5";
    number=number.padStart(5,"B");
    console.log(number);
    
    var number="5";
    number=number.padEnd(5,"B");
    console.log(number);
    
    
    //split
    
    console.table(text.split(" "));
    
    console.log(text.length);
    var text1=text.trim();
    console.log(text1.length);
    
    var namelist
    =["Alexandar", "Jayapraveen", "Kali", "Ragul", "Mani", "Harsh", "Anand", "Basheer"];   
    
    console.log(namelist);
     console.table(namelist);
    // console.table(namelist[0]);
    // console.table(namelist[1]);
    // console.table(namelist[2]);
    // console.table(namelist[3]);
    // console.table(namelist[4]);
    
    for (var a=0; a<namelist.length;a++)
    {
        console.log(namelist[a]);
    }
    
    var result=namelist.forEach(function(name1){
        console.log(name1);
    })
    console.log("arrow output");
    
    var result=namelist.forEach(name1=>console.log(name1));
    
    var namelist
    =["Alexandar", "Jayapraveen", "Kali", "Ragul", "Mani", "Harsh", "Anand", "Basheer"]; 
    var define1="m";
   
    var result=namelist.filter(name1=>name1.startsWith("A") || name1.endsWith("r") || name1.startsWith(define1));
    console.log(result);
    
    var listofnumbers=[1,2,3,4];
    var result=listofnumbers.map(number=>number*2);
    console.log(result);
    
    var result=listofnumbers.reduce((sum,number)=>sum+=1);
    console.log(result);
    
    console.log(Math.PI);
    console.log(Math.E);
    console.log(2*Math.PI*2);
    var a=4.4;
    console.log(Math.round(4.4));
    console.log(Math.floor(4.5));
    console.log(Math.ceil(4.4));
    console.log(Math.sqrt(4));
    console.log(Math.pow(4,2));
    console.log(Math.floor(Math.random()*10+1000));
    console.log(Math.abs(-4.75));
    console.log(Math.floor(-4.75));
    console.log(Math.min(20,25,35,25));
    console.log(Math.max(20,25,35,25));
    
    }
    
    GetResultFun();