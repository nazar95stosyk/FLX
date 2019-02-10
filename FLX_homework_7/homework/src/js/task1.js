const login = prompt(`Enter your login, please:`);

if(login === ' ' || login === null ){
 alert(`Canceled.`);
}
if(login.length<4){
    alert(`I don't know any users having name length less than 4 symbols.`);
}
if (login === 'User'){
 let pass = prompt(`Enter your password, please`);
 
if(pass === ' ' || pass === null){
    alert(`Canceled.`);
}
if(pass ==='UserPass'){
let currentHour1 = new Date().getHours();


if (currentHour1<20){
    alert(`Good day, dear User!`);
} else {
    alert(`Good evening, dear User!`);
}
} else {
  alert('Wrong password');
}
} 
if (login === 'Admin'){
    let pass = prompt(`Enter your password, please`);
    
   if(pass === ' ' || pass === null){
       alert(`Canceled.`);
   }
   if(pass ==='RootPass'){
   let currentHour2 = new Date().getHours();
   
   
   if (currentHour2<20){
       alert(`Good day, dear Admin!`);
   } else {
       alert(`Good evening, dear Admin!`);
     }
   } else {
     alert('Wrong password');
    }   
   } else {
       alert(`I don't know you`);
}