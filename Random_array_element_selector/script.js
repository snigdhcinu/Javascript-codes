function choose()
	{
		var array= ["Ram","Shyam","Sita","Gita","Praveen","Sahu","Shahid"];
		var pick=Math.random();
		console.log(pick);
		pick*=array.length;
		console.log(pick);
		pick=Math.floor(pick);
		console.log(pick);
		document.write(array[pick]);
	}