function calcWidth(){
    var rightHossz 
    var pageWidth = document.body.clientWidth 

    rightHossz = pageWidth / 2;
    
    var rightHosszString 
    rightHosszString = rightHossz.toString() +"px"
    var rightErtek = getComputedStyle(document.querySelector('#jobb-sav')).right;
    //getComputedStyle(rightErtek).right = rightHossz;
    console.log(rightHossz);
    console.log( pageWidth);
    console.log( rightHosszString);
    console.log( rightErtek=rightHosszString);
    //console.log(getComputedStyle(document.querySelector('#jobb-sav')).right = rightHossz);
}
calcWidth()
window.addEventListener("resize", calcWidth())