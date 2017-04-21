var money=0;
var money2=0;
var money3=0;
var rbprice=10;
var rbscale=1;
var rbnext=rbscale+1;
var rbupgrades=0;
var rprice=100;
var rscale=1;
var rnext=2*(rscale+1);
var rupgrades=0;
var interval=setInterval(function(){rAuto()}, 500/rscale);
var x=1;
var offCool=true;
var time=60;
var tinterval;
var cprice=1000;
var cscale=1;
var cnext=cscale+1;
var cupgrades=0;
var rate=0;

document.getElementById("score").innerHTML="$"+money;
document.getElementById("rubberbandlevel").innerHTML="Rubber Band&emsp;&emsp;level: "+rbupgrades+"<br>&emsp;&emsp;$"+rbscale+" per click <br>&emsp;&emsp;Cost: $"+rbprice*rbscale+"<br>&emsp;&emsp;Next Upgrade: $"+rbnext +"/click";
document.getElementById("ramnek").innerHTML="Ramnek&emsp;&emsp;level: "+rupgrades+"<br>&emsp;&emsp;$"+rscale*2+" per second<br>&emsp;&emsp;Cost: $"+rprice*rscale+"<br>&emsp;&emsp;Next Upgrade: $"+rnext+"/sec";
document.getElementById("howBoost").innerHTML="Boost<br>&emsp;x"+x;
document.getElementById("cooldownred").innerHTML="Cooldown Reduction&emsp;&emsp;level: "+rupgrades+"<br>&emsp;&emsp;"+Math.ceil(60/cscale)+" sec <br>&emsp;&emsp;Cost: $"+cprice*cscale+"<br>&emsp;&emsp;Next Upgrade: "+Math.ceil(60/cnext) +"sec";

function animation() {
    money+=rbscale;
    money2+=rbscale;
    document.getElementById("score").innerHTML="$"+money;
    fade(pineapple);
    grow(pineapple);
}

function perSec() {
		setWidth();
    setInterval(function(){hi()}, 1000);
    text("score: "+score,0, 0);
}

function setWidth() {
		document.getElementById("pineapple").width = "250";
    document.getElementById("boost").width = "150";
    document.getElementById("pineapple2").width = "250";
}
     
function rubberband() {
	if(money>=rbprice*rbscale) {
    rbprice*=rbscale/x;
  	money-=rbprice*x;
    rbupgrades++;
    rbscale+=x*(1+Math.floor(rbupgrades/4));
    rbnext=rbscale+x*(1+Math.floor(rbupgrades/4));
    if(rbscale%4==0) {
    	rbnext+=x;
    }
  }
  document.getElementById("score").innerHTML="$"+money;
  document.getElementById("rubberbandlevel").innerHTML="Rubber Band&emsp;&emsp;level: "+rbupgrades+"<br>&emsp;&emsp;$"+rbscale+" per click <br>&emsp;&emsp;Cost: $"+rbprice*rbscale+"<br>&emsp;&emsp;Next Upgrade: $"+rbnext +"/click";
}

function ramnek() {
	if(money>=rprice*rscale) {
		clearInterval(interval);
  	rprice*=rscale/x;
    money-=rprice*x;
    rupgrades++;
    rscale+=x*(1+Math.floor(rbupgrades/4));
    rnext=2*(rscale+x*(1+Math.floor(rupgrades/4)));
    if(rscale%4==0) {
    	rnext+=2*x;
    }
    interval=setInterval(function(){rAuto()}, 500/rscale);
  }
  document.getElementById("score").innerHTML="$"+money;
  document.getElementById("ramnek").innerHTML="Ramnek&emsp;&emsp;level: "+rupgrades+"<br>&emsp;&emsp;$"+rscale*2+" per second<br>&emsp;&emsp;Cost: $"+rprice*rscale+"<br>&emsp;&emsp;Next Upgrade: $"+rnext+"/sec";
}

function rAuto() {
	money++;
  money2++;
  document.getElementById("score").innerHTML="$"+money;
}
          
function fade(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            op=1;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 14);
}

function grow(element) {
    var w = 250;
    var timer = setInterval(function () {
        if (w >= 325){
            clearInterval(timer);
            w=250;
            document.getElementById("pineapple").width="250";
        }
        element.width = w;
        w += 2;
    },1);
}


function boost() {
	if(offCool==true) {
		x=Math.floor(Math.random()*5+2);
		rbscale*=x;
  	rscale*=x;
  	rbprice/=x;
  	rprice/=x;
  	rbnext*=x;
  	rnext*=x;
  	clearInterval(interval);
  	interval=setInterval(function(){rAuto()}, 500/rscale);
  	document.getElementById("score").innerHTML="$"+money;
		document.getElementById("rubberbandlevel").innerHTML="Rubber Band&emsp;&emsp;level: "+rbupgrades+"<br>&emsp;&emsp;$"+rbscale+" per click <br>&emsp;&emsp;Cost: $"+rbprice*rbscale+"<br>&emsp;&emsp;Next Upgrade: $"+rbnext +"/click";
		document.getElementById("ramnek").innerHTML="Ramnek&emsp;&emsp;level: "+rupgrades+"<br>&emsp;&emsp;$"+rscale*2+" per second<br>&emsp;&emsp;Cost: $"+rprice*rscale+"<br>&emsp;&emsp;Next Upgrade: $"+rnext+"/sec";
		document.getElementById("howBoost").innerHTML="Boost<br>&emsp;x"+x;
  	setTimeout("boostEnd()", 10000);
  	offCool=false;
  	document.getElementById("boost").style.filter = "hue-rotate(150deg)";
  	document.getElementById("howBoost").style.filter = "hue-rotate(150deg)";
    time=Math.ceil(60/cscale);
  }
}

function boostEnd() {
  document.getElementById("boost").style.filter = "grayscale(100%)";
  document.getElementById("howBoost").style.filter = "grayscale(100%)";
  rbscale/=x;
  rscale/=x;
  rbprice*=x;
  rprice*=x;
  rbnext/=x;
  rnext/=x;
  x=1;
  clearInterval(interval);
  interval=setInterval(function(){rAuto()}, 500/rscale);
  document.getElementById("score").innerHTML="$"+money;
	document.getElementById("rubberbandlevel").innerHTML="Rubber Band&emsp;&emsp;level: "+rbupgrades+"<br>&emsp;&emsp;$"+rbscale+" per click <br>&emsp;&emsp;Cost: $"+rbprice*rbscale+"<br>&emsp;&emsp;Next Upgrade: $"+rbnext +"/click";
	document.getElementById("ramnek").innerHTML="Ramnek&emsp;&emsp;level: "+rupgrades+"<br>&emsp;&emsp;$"+rscale*2+" per second<br>&emsp;&emsp;Cost: $"+rprice*rscale+"<br>&emsp;&emsp;Next Upgrade: $"+rnext+"/sec";
  setTimeout("cooldown()", Math.ceil(61000/cscale));
	document.getElementById("howBoost").innerHTML="Boost<br>&emsp;x"+x;
  time=Math.ceil(60/cscale);
  if(time<0) {
  	time=0;
  }
  clearInterval(tinterval);
  tinterval=setInterval(function(){timer()}, 1000);
}

function cooldown() {
	offCool=true;
	document.getElementById("boost").style.filter = "grayscale(0%)";
  document.getElementById("howBoost").style.filter = "grayscale(0%)";
}

function timer() {
	document.getElementById("timer").innerHTML=time;
  if (time>Math.ceil(60/cscale)) {
  	time=Math.ceil(60/cscale);
  }
  if(time>0) {
  	time--;
  }
}
     
function cooldownred() {
	if(money>=cprice*cscale) {
  	money-=cprice*cscale;
    cscale++;
    cnext=cscale+1;
    cupgrades++;
  }
  document.getElementById("score").innerHTML="$"+money;
  document.getElementById("cooldownred").innerHTML="Cooldown Reduction&emsp;&emsp;level: "+cupgrades+" <br>&emsp;&emsp;"+Math.ceil(60/cscale)+" sec <br>&emsp;&emsp;Cost: $"+cprice*cscale+"<br>&emsp;&emsp;Next Upgrade: "+Math.ceil(60/cnext) +"sec";
}


function hi() {
	rate=money2-money3;
  money3=money2;
	document.getElementById("rate").innerHTML="$"+rate+" per second";
}
 
function preventZoomCall(e) {
   e.addEventListener('touchstart', preventZoom);
}

function preventZoom(e) {
  var t2 = e.timeStamp;
  var t1 = e.currentTarget.dataset.lastTouch || t2;
  var dt = t2 - t1;
  var fingers = e.touches.length;
  e.currentTarget.dataset.lastTouch = t2;

  if (!dt || dt > 500 || fingers > 1) return; // not double-tap

  e.preventDefault();
  e.target.click();
}