function slider()
{
    var delay=8000;
    var i=1; 
    var picList=document.querySelectorAll('#picslider li');
    picList[0].style.opacity=1;
    var myinterval=setInterval(change,delay);
    var el=document.getElementById('picslider');
    el.height=picList[1].height;
    function change()
    {
        if(i==picList.length)
        {
            i=0;
        }
        picList[i].style.opacity=1;
        if(i!=0)
        {
            picList[i-1].style.opacity=0;
        }
        else picList[picList.length-1].style.opacity=0;
        i++;
    }    
}