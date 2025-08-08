function fun()
{
    var rows=document.getElementById("rows").value;
    var cols=document.getElementById("columns").value;
    var result=document.getElementById("res");

    let table="<table>";
    for(let i=0;i<rows;i++)
    {
        table+="<tr>";
        for(let j=0;j<cols;j++)
        {
            table+="<td></td>";
        }
        table+="</tr>";
    }
    table+="</table>";

    result.innerHTML=table;
    


}

