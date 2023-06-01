var bigCircle = $('.big-circle');
var circle = $('.s-icons');
var socials = $('.social-divs');
var sisuBTN = $('.su-si-btn');
var siSection= $('.sign-in-section');
var suIntro = $('.su-intro');
var socials1 = $('.social-divs1');
var sisuBTN1 = $('.su-si-btn1');
var siSection1= $('.sign-in-section1');
var suIntro1 = $('.su-intro1');
var leftSection= $('.left-section');
var leftSection1= $('.left-section1');
var svgs = $(".svgs");
var iconL1 = document.getElementById("iconL1");
var iconL2 = document.getElementById("iconL2");
var inputs = $(".inputs");
var inputs1 = $(".inputs1");
var siText = $(".siText");
var siText1 = $(".siText1");

{   //fuctions for the three icons
;;socials[0].onmouseover=function() {
;;;circle[0].style.bottom = "2vh";
};socials[0].onmouseout=function() {
;;;circle[0].style.bottom = "0vh";};

;;socials[1].onmouseover=function() {
;;;circle[1].style.bottom = "2vh";
};socials[1].onmouseout=function() {
;;;circle[1].style.bottom = "0vh";};

;;socials[2].onmouseover=function() {
;;;circle[2].style.bottom = "2vh";
};socials[2].onmouseout=function() {
;;;circle[2].style.bottom = "0vh";};
}
{   //fuctions for the three icons
    ;;socials1[0].onmouseover=function() {
    ;;;circle[3].style.bottom = "2vh";
    };socials1[0].onmouseout=function() {
    ;;;circle[3].style.bottom = "0vh";};
    
    ;;socials1[1].onmouseover=function() {
    ;;;circle[4].style.bottom = "2vh";
    };socials1[1].onmouseout=function() {
    ;;;circle[4].style.bottom = "0vh";};
    
    ;;socials1[2].onmouseover=function() {
    ;;;circle[5].style.bottom = "2vh";
    };socials1[2].onmouseout=function() {
    ;;;circle[5].style.bottom = "0vh";};
    }


sisuBTN[0].onclick = function(){
    document.body.classList.add("sides");
    document.title = "Create an Account";
    bigCircle[0].style.left = "55vw";
    siSection[0].style.zIndex = "-2";
    siSection[0].style.opacity = "0";
    siSection[0].style.pointerEvents = "none";
    siSection[0].style.userSelect = "none";
    siSection[0].style.right = "50vw";
    suIntro[0].style.opacity = "0";
    //leftSection[0].style.zIndex = "-100000";
    leftSection[0].style.left = "50vw";
    siSection1[0].style.left = "0vw";
    leftSection1[0].style.left = "50vw";
    siSection1[0].style.opacity = "1";
    leftSection1[0].style.zIndex = "11";
    suIntro1[0].style.visibility = "visible";
    siSection1[0].style.pointerEvents = "all";
    siSection1[0].style.userSelect = "auto";
    svgs[0].style.transition = "0.4s ease";
    svgs[1].style.transition = "0.8s ease";
    svgs[0].style.transitionDelay = "0ms";
    svgs[1].style.transitionDelay = "0.8s";
    svgs[0].style.opacity = "0";
    svgs[1].style.opacity = "1";
}


sisuBTN1[0].onclick = function(){
    document.body.classList.remove("sides");
    document.title = "Sign In";
    bigCircle[0].style.left = "-105vw";
    siSection[0].style.zIndex = "0";
    siSection[0].style.opacity = "1";
    siSection[0].style.pointerEvents = "all";
    siSection[0].style.userSelect = "auto";
    siSection[0].style.right = "0vw";
    suIntro[0].style.opacity = "1";
    leftSection[0].style.left = "0vw";
    siSection1[0].style.left = "0vw";
    leftSection1[0].style.left = "50vw";
    siSection1[0].style.opacity = "1";
    leftSection1[0].style.zIndex = "-11";
    svgs[1].style.transition = "0.4s ease";
    svgs[0].style.transition = "0.8s ease";
    svgs[1].style.transitionDelay = "0ms";
    svgs[0].style.transitionDelay = "0.8s";
    suIntro1[0].style.visibility = "hidden";

    siSection1[0].style.opacity = "0";
    siSection1[0].style.pointerEvents = "none";
    siSection1[0].style.userSelect = "none";

    svgs[0].style.opacity = "1";
    svgs[1].style.opacity = "0";
}



iconL2.onclick = function(){
    if (inputs[1].type === "password") {
        inputs[1].type = "text";
        iconL1.style.opacity = "1";
        iconL2.style.opacity = "0";
        console.log(inputs[1].type)
    }else{
        inputs[1].type = "password";
        iconL1.style.opacity = "0";
        iconL2.style.opacity = "1";
    }
}

var mArea = $(".m-area");
var exit = $(".exit");
var blurs = $(".blur");
var vertNav = $(".vert-nav");

mArea[0].onclick = function(){
    blurs[0].style.opacity = "1";
    blurs[0].style.pointerEvents = "all";
    vertNav[0].style.right = "0";
}
exit[0].onclick = function(){
    blurs[0].style.opacity = "0";
    blurs[0].style.pointerEvents = "none";
    vertNav[0].style.right = "-30%";
}
blurs[0].onclick = function(){
    blurs[0].style.opacity = "0";
    blurs[0].style.pointerEvents = "none";
    vertNav[0].style.right = "-30%";
}