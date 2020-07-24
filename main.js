Array_name=[];
function f_submit(){
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var name3=document.getElementById("name3").value;
    var name4=document.getElementById("name4").value;
    var name5=document.getElementById("name5").value;
    Array_name.push(name1);
    Array_name.push(name2);
    Array_name.push(name3);
    Array_name.push(name4);
    Array_name.push(name5);
    document.getElementById("name_display").innerHTML=Array_name;
    document.getElementById("submit1").style.display="none";
    document.getElementById("sort1").style.display="inline-block";
}
function f_sort(){
    Array_name.sort();
    document.getElementById("name_display").innerHTML=Array_name;
}