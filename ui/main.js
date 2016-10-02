//Counter

var button=getElementById("counter");

var count=getElementById("count");

var ctr=0;

button.onclick=function(){
    ctr=ctr+1;
    count.InnerHTML=ctr;
};