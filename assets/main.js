// Task1 
 let a=5;
 let b=6;
 let c=11;

 console.log(c-5,c-6);
 console.log(a+1,b-1);


 //Task 2

 function carInfo (carMarka,carModel,year)
 {
   return  carMarka  + ' ' + carModel +' ' + year
      
 }

 function carDistance(distance)
 {
    let road=5;
    let volume=1
    return distance * road/volume;
 }

function checkInfo ()

{
    let result=`Maşın adı : ${carInfo("Porsche",'Cayenne','2022')}  Məsafə:70L benzinle ${carDistance('70') } KM  gedir`

    console.log(result);
}

checkInfo();



// Task 3

let login="IngressAcademy";
let passwordLogin="Ingress12345";

let userName=prompt ("Adınızı daxil edin");
let password =prompt("Sifrenizi daxil edin");

if (login==userName && passwordLogin==password)
{
    alert(`${login} has been logged-in successfully` )
}

else
{
    alert("Access denied")
}
