var mygame = (function()
{
	var arr = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	var score=0;
	var highScore;
	function fillRandomSpot()
	{
		var i,j,z;
		i=getRandomInt(0,3);
		j=getRandomInt(0,3);
		if( arr[i][j] === 0)
		{
			z=getRandomInt(0,100);
			if(z<=70)
			{
				arr[i][j]=2;
			}
			else
			{
				arr[i][j]=4;
			}
		}
		else fillRandomSpot();
	}
    function getRandomInt(min, max) 
    {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function made2048()
	{
		for(var i=0;i<4;i++)
		{
			for(var j=0;j<4;j++)
			{
				if(arr[i][j]==2048)
					return true;
			}
		}
		return false;
	}
	function gameIsOver()
	{
		for(var i=0;i<4;i++)
		{
			for(var j=0;j<4;j++)
			{
				if(arr[i][j]==0)
					return false;
			}
		}
		var combinePossible = false;
		combinePossible=combine(97,0);
		combinePossible=combine(100,0);
		combinePossible=combine(119,0);
		combinePossible=combine(115,0);
		if(combinePossible==false)
			return true;
	}
	function combine(direction,caller)
	{
		var combined=false;
		if(direction==100)
		{
			for(var i=0;i<4;i++)
			{
				for(var j=3;j>0;j--)
				{
					if(arr[i][j]==arr[i][j-1] && arr[i][j]!=0)
					{
						if(caller==1)
						{
							arr[i][j]*=2;
							arr[i][j-1]=0;
						}
						combined=true;
					}
				}
			}
		}
		else if(direction==97)
		{
			for(var i=0;i<4;i++)
			{
				for(var j=0;j<3;j++)
				{
					if(arr[i][j]==arr[i][j+1] && arr[i][j]!=0)
					{	
						if(caller==1)
						{
							arr[i][j]*=2;
							arr[i][j+1]=0;
						}
						combined=true;
					}
				}
			}
		}
		else if(direction==119)
		{
			for(var j=0;j<4;j++)
			{
				for(var i=0;i<3;i++)
				{
					if(arr[i][j]==arr[i+1][j] && arr[i][j]!=0)
					{
						if(caller==1)
						{
							arr[i][j]*=2;
							arr[i+1][j]=0;
						}
						combined=true;
					}
				}
			}
		}
		else if(direction==115)
		{
			for(var j=3;j>=0;j--)
			{
				for(var i=3;i>0;i--)
				{
					if(arr[i][j]==arr[i-1][j] && arr[i][j]!=0)
					{
						if(caller==1)
						{
							arr[i][j]*=2;
							arr[i-1][j]=0;
						}
						combined=true;
					}
				}
			}
		}
		return combined;
	}
	function shift(direction)
	{
		var shifted=false;
		if(direction==100)
		{
			for(var i=0;i<4;i++)
			{
				for(var j=3;j>0;j--)
				{
					if(arr[i][j]==0)
					{
						for(var k=j-1;k>=0;k--)
						{
							if(arr[i][k]!=0)
							{
								arr[i][j]=arr[i][k];
								arr[i][k]=0;
								shifted=true;
								break;
							}
						}
					}
				}
			}
		}
		else if(direction==97)
		{
			for(var i=0;i<4;i++)
			{
				for(var j=0;j<3;j++)
				{
					if(arr[i][j]==0)
					{
						for(var k=j+1;k<4;k++)
						{
							if(arr[i][k]!=0)
							{
								arr[i][j]=arr[i][k];
								arr[i][k]=0;
								shifted=true;
								break;
							}
						}
					}
				}
			}
		}
		else if(direction==119)
		{
			for(var j=0;j<4;j++)
			{
				for(var i=0;i<3;i++)
				{
					if(arr[i][j]==0)
					{
						for(var k=i+1;k<4;k++)
						{
							if(arr[k][j]!=0)
							{
								arr[i][j]=arr[k][j];
								arr[k][j]=0;
								shifted=true;
								break;
							}
						}
					}
				}
			}
		}
		else if(direction==115)
		{
			for(var j=3;j>=0;j--)
			{
				for(var i=3;i>0;i--)
				{
					if(arr[i][j]==0)
					{
						for(var k=i-1;k>=0;k--)
						{
							if(arr[k][j]!=0)
							{
								arr[i][j]=arr[k][j];
								arr[k][j]=0;
								shifted=true;
								break;
							}
						}
					}
				}
			}
		}
		return shifted;	
	}
	function updateArena()
	{
		var x=0,y=0,i;
		var L = document.documentElement.querySelectorAll(".row .box");
		for(i=0;i<L.length && x<4;i++,y++)
		{
			if(arr[x][y]==0)
			{
				L[i].setAttribute("class","box");
			}
			else if(arr[x][y]==2)
			{
				L[i].setAttribute("class","box _2");
			}
			else if(arr[x][y]==4)
			{
				L[i].setAttribute("class","box _4");
			}
			else if(arr[x][y]==8)
			{
				L[i].setAttribute("class","box _8");
			}
			else if(arr[x][y]==16)
			{
				L[i].setAttribute("class","box _16");
			}
			else if(arr[x][y]==32)
			{
				L[i].setAttribute("class","box _32")
			}
			else if(arr[x][y]==64)
			{
				L[i].setAttribute("class","box _64")
			}
			else if(arr[x][y]==128)
			{
				L[i].setAttribute("class","box _128")
			}
			else if(arr[x][y]==256)
			{
				L[i].setAttribute("class","box _256")
			}
			else if(arr[x][y]==512)
			{
				L[i].setAttribute("class","box _512")
			}
			else if(arr[x][y]==1024)
			{
				L[i].setAttribute("class","box _1024")
			}
			else if(arr[x][y]==2048)
			{
				L[i].setAttribute("class","box _2048")
			}
			if(y==3)
			{
				x++;
				y=-1;
			}
		}
	}
	function move(e)
	{
		var moved=true,
			shifted=shift(e.charCode),
			combined=combine(e.charCode,1);
		if(!shifted && !combined)
			{
				console.log("Invalid Move");
				moved=false;
			}
		shift(e.charCode);	
		if(made2048())
		{
			console.log("Congratulations,You have Won!");
			return true;
		}
		if(moved)
		{
			fillRandomSpot();
			printBoard();
			if(gameIsOver)
			{
				console.log("GAME OVER!");
			}
		}
	}
	function printBoard()
	{
		updateArena();
		for(var i=0;i<4;i++)
		{
            var string="";
            for(var j=0;j<4;j++)
			{
				string= string +" " + arr[i][j];
			}
            console.log(string);
		}
	}
	function newGame()
	{
			console.log("Game Begins!");
			fillRandomSpot();
			fillRandomSpot();
			printBoard();
        	document.addEventListener("keypress",move);
   	}
  	return{
		init:newGame()
	};
})();
