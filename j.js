var startBTN=document.getElementById('startbtn');
var stopBTN=document.getElementById('stopbtn');
var resetBTN=document.getElementById('resetbtn');
var Txt = document.getElementById("txt");
var Txtmin=document.getElementById("txtmin");
var Txthr=document.getElementById('txthr');
var repeater;

startBTN.addEventListener('click',()=>{
   
    repeater=setInterval(()=>{
        var Text=Number(Txt.innerHTML)+1;
        var Textmin=Number(Txtmin.innerHTML)+1;
        var Texthr=Number(Txthr.innerHTML)+1;
        if(Text<=9){
        Txt.innerHTML ="0" + Text;
        }
        else{
        Txt.innerHTML = Text;
        }
        if(Text==60){Txt.innerHTML="00";
        if(Textmin<=9)
        {Txtmin.innerHTML= "0" + Textmin;
        }else{Txtmin.innerHTML=Textmin}
        }
        if(Textmin==60 && Text==60){Txtmin.innerHTML="00";
        if(Texthr<=9){Txthr.innerHTML="0"+Texthr}else{Txthr.innerHTML=Texthr}}
        if(Texthr==24 && Textmin==60 && Text ==60){
        Txthr.innerHTML="00";
        Txtmin.innerHTML="00";
        Txt.innerHTML="00";}
    },1000);
    startBTN.disabled = true;
    stopBTN.disabled = false;
});
stopBTN.addEventListener('click', () => {
    clearInterval(repeater);
    stopBTN.disabled = true;
    startBTN.disabled = false;

});
resetBTN.addEventListener('click', () => {
    Txthr.innerHTML="00";
    Txtmin.innerHTML="00";
    Txt.innerHTML="00";
    clearInterval(repeater);
    startBTN.disabled = false;
    stopBTN.disabled = false;

});