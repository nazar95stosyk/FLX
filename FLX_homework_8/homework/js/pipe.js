function addOne(x){
    return x+1;
}
function pipe(num){


for(let i=0;i<arguments.length;i++){
    num=arguments[i](num);
}
return num;
}
pipe(1,addOne);
pipe(1,addOne,addOne);
  
