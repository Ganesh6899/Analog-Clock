window.onload=displayTime;

var monthArr=["January","February","March","April","May","June","July","August","September","October","November","December"];
var dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function displayTime() {

    var d=new Date();
    var date=d.getDate();
    var day=dayArr[d.getDay()];
    var month=monthArr[d.getMonth()];
    var year=d.getFullYear();
    var h=d.getHours();
    var H=h;
    var m=d.getMinutes();
    var M=m;
    var s=d.getSeconds();
    var S=s;
    var mer;

if(h==0&&m==0&&s==0)
    mer="Midnight";
else if(h==12&&m==0&&s==0)
    mer="Noon";
else if(h<12)
    mer="AM";
else
    mer="PM";

if(h==0)
h=12;
else if(h>0&&h<10)
h="0"+h;
else if(h>12&&h<22)
h="0"+(h-12);
else if(h>21)
h=h-12;

if(m<10)
m="0"+m;

if(s<10)
s="0"+s;

var canv=document.getElementById("myClock");
var pi=Math.PI;
canv.width=600;
canv.height=600;
var ctx=canv.getContext("2d");
ctx.arc(300,300,250,0,2*pi);
ctx.fillStyle="black";
ctx.fill();
ctx.arc(300,300,250,0,2*pi);
ctx.lineWidth=2;
ctx.strokeStyle="white";
ctx.stroke();

for(var a=pi/2,b=12,r=215;a<pi*5/2;a+=pi/6,b--) {
    ctx.font="55px times new roman";
    ctx.fillStyle="White";
    ctx.textAlign="center";
    ctx.fillText(b,300+r*Math.cos(a),300-r*Math.sin(a)+15);
}

ctx.font="20px Cascadia Code";
ctx.fillStyle="white";
ctx.textAlign="center";
ctx.fillText(day,300,190);
ctx.fillText(date+" "+month+" "+year,300,220);
ctx.fillText(h+":"+m+":"+s+" "+mer,300,420);


ctx.beginPath();
ctx.moveTo(300,300);
ctx.arc(300,300,8,0,2*pi);
ctx.fillStyle="red";
ctx.closePath();
ctx.fill();

ctx.beginPath();
r1=8;
r2=150;
a1=pi/2-2*pi/43200*(H*3600+M*60+S);
ctx.moveTo(300+r1*Math.cos(a1),300-r1*Math.sin(a1));
ctx.lineTo(300+r2*Math.cos(a1),300-r2*Math.sin(a1));
ctx.lineWidth=3;
ctx.strokeStyle="yellow";
ctx.closePath();
ctx.stroke();

ctx.beginPath();
R1=8;
R2=180;
a2=pi/2-2*pi/3600*(M*60+S);
ctx.moveTo(300+R1*Math.cos(a2),300-R1*Math.sin(a2));
ctx.lineTo(300+R2*Math.cos(a2),300-R2*Math.sin(a2));
ctx.lineWidth=3;
ctx.strokeStyle="white";
ctx.closePath();
ctx.stroke();

ctx.beginPath();
q=180;
a3=pi/2-2*pi/60*(S);
ctx.moveTo(300,300);
ctx.lineTo(300+q*Math.cos(a3),300-q*Math.sin(a3));
ctx.lineWidth=2;
ctx.strokeStyle="#cc080b";
ctx.closePath();
ctx.stroke();

setTimeout(displayTime,500);

}