//Counter

var button=document.getElementById("counter");

var count=document.getElementById("count");

var ctr=0;

button.onclick=function(){
    ctr=ctr+1;
    count.InnerHTML=ctr;
};