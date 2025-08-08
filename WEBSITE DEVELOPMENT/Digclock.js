var time=600;
var TimeInter=setInterval(function()
{
    time=time-1;
    // console.log(parseInt(time/60),":",time%60);
    document.getElementsByClassName("min")[0].innerText=parseInt(time/60);
    document.getElementsByClassName("sec")[0].innerText=time%60;

},1000)
if(time==0)
{
    clearInterval(TimeInter);
}