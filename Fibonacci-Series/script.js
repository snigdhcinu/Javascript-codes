var ip_num=document.getElementById('num');
function genFibonacci()
	{
		let n=ip_num.value;// The no. of digits upto which series will be printed. 
		// console.log(n)
		// console.log(typeof(n));  
		let output=[];
		// console.log(typeof(output));

// Because n is of type string, we use equal operator(==) and not identical operator(===).

		if(n==1)	  
		{
			output=[0];
			console.log(output);
			return output;
		}
		if (n==2) 
		{
			output=[0,1];
			console.log(output);
			return output;
		}
		else
		{
			output=[0,1];
			while(output.length<n)
			{
				output.push(output[output.length-1]+output[output.length-2]);
			}
		}


		console.log(output);
		return output;
	}
