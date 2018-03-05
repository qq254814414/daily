//使用RequireJS定义模块,指定依赖  
define('test',[],function(){  
    return {  
        roll:function(){  
             start();
        }  
    };  
});

function start(){
    var wrap = document.getElementById("wrap");
    var next = document.getElementById("arrow_right");
    var prev = document.getElementById("arrow_left");
    next.onclick = function () {
        right_pic();
    }
    prev.onclick = function () {
        lift_pic();
    }

    function right_pic() {
        var newLeft;
        if (wrap.style.left === "-3600px") {
            newLeft = -1200;
        } else {
            newLeft = parseInt(wrap.style.left) - 600;
        }
        wrap.style.left = newLeft + "px";
        index++;
        if (index > 4) {
            index = 0;
        }
        showCurrentDot();
    }

    function lift_pic() {
        var newLeft;
        if (wrap.style.left === "0px") {
            newLeft = -2400;
        } else {
            newLeft = parseInt(wrap.style.left) + 600;
        }
        wrap.style.left = newLeft + "px";
        index--;
        if (index < 0) {
            index = 4;
        }
        showCurrentDot();
    }

    var timer = null;

    function autoPlay() {
        timer = setInterval(function () {
            right_pic();
        }, 2000);
    }

    autoPlay();

    var container = document.querySelector(".container");
    container.onmouseenter = function () {
        clearInterval(timer);
    }
    container.onmouseleave = function () {
        autoPlay();
    }
    var index = 0;
    var dots = document.getElementsByTagName("span");

    function showCurrentDot() {
        for (var i = 0, len = dots.length; i < len; i++) {
            dots[i].className = "t";
        }
        dots[index].className = "on";
    }

    for (var i = 0, len = dots.length; i < len; i++) {
        (function (i) {
            dots[i].onclick = function () {
                if (i == 0) {
                    wrap.style.left = -600 + "px";
                }
                if (i == 1) {
                    wrap.style.left = -1200 + "px";
                }
                if (i == 2) {
                    wrap.style.left = -1800 + "px";
                }
                if (i == 3) {
                    wrap.style.left = -2400 + "px";
                }
                if (i == 4) {
                    wrap.style.left = -3000 + "px";
                }
            /*
     var dis = index - i;
       if(index == 4 && parseInt(wrap.style.left)!==-3000){
            dis = dis - 5;
       }
      if(index == 0 && parseInt(wrap.style.left)!== -600){
            dis = 5 + dis;
        }
       wrap.style.left = (parseInt(wrap.style.left) + dis * 600)+"px";
       */
       index = i;

       showCurrentDot();
   }
})
        (i);
    }
}