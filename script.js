function firstChar(text) {
  // your code here
	for(let i of text){
		if(i!=' ') return i
	}
	return ""
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
