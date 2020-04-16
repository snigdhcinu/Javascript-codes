var arr=new Array(100);
for(let i=1;i<=100;i++)
	{
		arr[i-1]=i;
	}
for(let i=0;i<100;i++)
	{
		if (arr[i]%3===0) 
		{
			if(arr[i]%5===0)
			{
				console.log(++i+' says fizzBuzz');
			}
			else
			{
				console.log(++i+' says fizz');
			}
		}
		if(arr[i]%5===0)
		{
		 	console.log(++i+" says buzz");
		
		}
	}