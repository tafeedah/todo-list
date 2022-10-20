var date = new Date();
var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
var current_time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
var date_time = current_date+" "+current_time;
document.getElementById("p1").innerHTML = date_time;