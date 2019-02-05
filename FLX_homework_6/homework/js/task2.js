function PriceDiscount(){
    const money=parseFloat(prompt("Enter amount of money from 0 to 9999999 :",""));
    const amount=parseFloat(prompt("Enter the discount from 0 to 99 :",""));

    if( money > 9999999 || money<0 || isNaN(money) || !isFinite(money)){
        return "Invalid input data";
    }
    if(amount>99 || amount<0 || isNaN(amount) || !isFinite(amount)){
        return "Invalid input data";
    }    
    
    const saved = (money / 100) * amount;
    const discountedPrice = money - saved;    
    return `
    Price without discount: ${+money.toFixed(2)} 
    Discount: ${+amount.toFixed(2)}%
    Price with discount: ${+discountedPrice.toFixed(2)}
    Saved: ${+saved.toFixed(2)}`
    
}
alert(PriceDiscount());