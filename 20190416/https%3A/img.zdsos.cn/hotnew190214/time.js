function checkTime(i){if(i<10)
{i="0"+i}
return i}
var d=new Date()
var year=d.getFullYear()
var month=d.getMonth()+1
var day=d.getDate()+0
var hour=d.getHours()-3
var min=d.getMinutes()+6
if(day>1){day=day-1;}
if(hour<1){hour=0;}
if(min<1){min=1;}
var sec=d.getSeconds()
var time=year+"年"+month+"月"+day+"日 "+checkTime(hour)+":"+checkTime(min)+":18"
console.log(time)
document.getElementById("time").innerHTML=time;var myDate=new Date();myDate.getYear();myDate.getFullYear();myDate.getMonth();myDate.getDate();