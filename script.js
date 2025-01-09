function makeid(l) {
  // write down your code here
	let text="";
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for(let i=0; i<1; i++){
		text+= l.length;
	}
	return text;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

