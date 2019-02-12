function reverse_a_number(n){
	n = n + "";
	return parseInt(n.split("").reverse().join("")) * Math.sign(n);
}
reverse_a_number(-456);
reverse_a_number(100000);
reverse_a_number(123);