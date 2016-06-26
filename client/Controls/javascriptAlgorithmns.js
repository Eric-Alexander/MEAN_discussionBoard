function iSum(num){
	var sum = 0;
	for (var i = 0; i <=num; i++){
		sum+=i;
		i++;
	}
	return sum+num
}

// debug(iSum(5))

function rSum(num){
	var sum= 0;
	for(var i = 0; i <= num; i++){
		sum+=1
		i++
		rSum(i);
	}
	return sum
}
debug(rSum(4))