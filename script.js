function makeid(l) {
  // write down your code here
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let text="";
	for(let i=0; i<l; i++){
		text+= characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return text;
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));

