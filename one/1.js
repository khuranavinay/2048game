var script=(function()
{
	function scrolltoy(y)
	{
		var myinterval=setInterval(scroll,1);
		function scroll()
		{
			var diff=scrollY-y,z=20;
			if(y>scrollY)
			{
					scrollTo(scrollX,scrollY+z);
			}
			else
			{
					scrollTo(scrollX,scrollY-z);
			}
			if(diff<=20 && diff>=-20 || scrollY+window.innerHeight==document.documentElement.offsetHeight)
			{
				clearInterval(myinterval);
			}
		}
	}
	function myfunc(event)
	{
		event.preventDefault();
		var target=event.currentTarget;
		target=target.getAttribute("href");
		target=target.slice(1);
		target=document.getElementById(target);
		var y=target.offsetTop;
		scrolltoy(y);
	}
	return{
		init : function myscript()
		{
			var el;
			el=document.querySelector("main > a");
			var list=document.querySelectorAll("li a");
			for(var i=0;i<list.length;i++)
			{
				list[i].addEventListener("click",myfunc);
			}
			el.addEventListener("click",myfunc);	
		}	
	};
})();
