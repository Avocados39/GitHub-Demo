function thisDoesntWork (){
	var count = 0;
	for(var day = 1; day < 8; day++){
		count = count + 1;
		if(day == 1){
			console.log('Monday');
		}
		if(day == 2){
			console.log('Tuesday');
		}
		if(day == 3){
			console.log("Wednesday");
		}
		if(day == 4){
			console.log('Thursday');
		}
		else if(day > 4){
			console.log('WEEKEND!');
		}
	}
	return count;
}