function RegisterForm(){

                var firstname=document.getElementById("tbfname").value;
                document.getElementById("fname").innerHTML=firstname;
                console.log(firstname);

                var Lastname=document.getElementById("tblname").value;
                document.getElementById("lname").innerHTML=Lastname;
                console.log(Lastname);

                var username=document.getElementById("tbuname").value;
                document.getElementById("uname").innerHTML=username;
                console.log(username);

                var password=document.getElementById("tbpassword").value;
                document.getElementById("password").innerHTML=password;
                 console.log(password);

                var confirmpassword=document.getElementById("tbconfirmpassword").value;
                document.getElementById("confirmpassword").innerHTML=confirmpassword;
                console.log(confirmpassword);


                var email=document.getElementById("tbemail").value;
                document.getElementById("email").innerHTML=email;
                console.log(email);
                
                var Phoneno=document.getElementById("tbphoneno").value;
                document.getElementById("phoneno").innerHTML=Phoneno;
                console.log(Phoneno);
            
                var accounttype=document.getElementById("tbaccounttype").value;
                document.getElementById("accounttype").innerHTML=accounttype;
                console.log(accounttype);
            }