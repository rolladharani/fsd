function fun1()
{
    return new Promise(function(resolved){
    setTimeout(function(){
        resolved();

    },1000)
})
}
function fun2()
{
    return new Promise(function(resolved){
    setTimeout(function(){
        resolved();

    },1000)
})
}
function fun3()
{
    return new Promise(function(resolved){
    setTimeout(function(){
        resolved();

    },1000)
})
}
fun1().then(function()
{
    console.log("Fun1-completed");
    fun2().then(function(){
        console.log("Fun2-completed");
        fun3().then(function()
    {
        console.log("Fun3-completed");

    })

    })
})