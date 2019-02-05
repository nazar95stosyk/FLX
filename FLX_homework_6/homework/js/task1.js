function QuadraticEq(){
    const a = parseFloat(prompt("Enter A value :",""));
    const b = parseFloat(prompt("Enter B value :",""));
    const c = parseFloat(prompt("Enter C value :",""));

    if(a ===0 || isNaN(a) || isNaN(b) || isNaN(c)){
        return "Invalid input data";
    }
    if(!isFinite(a) || !isFinite(b) || !isFinite(c)){
        return "Invalid input data";
    }
    
    let res;
    const discr=(b*b)-(4*a*c);

    if (discr===0){
        const x = (-b)/(2*a);
        res = `x = ${x}`;
    }
    if(discr>0){
        const x1=((-1)*b+Math.sqrt(discr))/(2*a);
        const x2=((-1)*b-Math.sqrt(discr))/(2*a);
        res = `x1 = ${x1} and x2 = ${x2}`;
    }
    if(discr<0){
        return "no solution";
    }
    return res;    
}
alert (QuadraticEq());