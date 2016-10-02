//Counter

var button=document.getElementById("counter");


var ctr=0;

button.onclick=function(){
    ctr=ctr+1;
    var count=document.getElementById("count");
    count.InnerHTML=ctr.toString();
};