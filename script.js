var up=document.getElementById("uppipe");
var down=document.getElementById("downpipe");
var fbird= document.getElementById("bird");
var jumping=true;
var gamestart=false;
var gameend=true;
var score=0;
if (gamestart==false)
{
    document.addEventListener("click",()=> {
    document.getElementById("p").innerHTML="";
    gamestart=true;
    gameend=false;
});
}
document.addEventListener("click", jump);
up.addEventListener('animationiteration', ()=> {
    let random= ((Math.random()*300)+20);
    let diff = 340-random;
    downpipe.style.height=diff + "px";
    uppipe.style.height= random + "px";
});

function jump(){
    let top = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (top>0)
    {
        fbird.style.top = (top-60)+"px";
        jumping=false;
        
    }
    else{
        jumping=false;
    }
    
}

setInterval(function(){
    let top =parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (jumping==false)
    {
        fbird.style.top = (top+2)+"px";
    }
   
    if(gameend==false){
    if (collapse()==true)
    {
        gameend=true;
        gamestart=false;
        setTimeout(function(){alert("Game End!\nYour score:"+score);
        fbird.style.top=200+"px";
        score=0;
        document.getElementById("score").innerHTML=score;},15);
        jumping=true;
        document.getElementById("p").innerHTML="Click to Start!";
        
    }
}},10);


function collapse()
{
    let top =parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    let up =parseInt(window.getComputedStyle(uppipe).getPropertyValue("height"));
    let down =parseInt(window.getComputedStyle(downpipe).getPropertyValue("height"));
    let left =parseInt(window.getComputedStyle(uppipe).getPropertyValue("left"));
    if (top>500)
    {
        return true;
    }
    else if (left<=250&&left>=130&&top<=up)
    {
        return true;
    }
    else if ((left<=250&&left>=130&&(top+40)>=500-down))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function pass()
{   
    let top =parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    let up =parseInt(window.getComputedStyle(uppipe).getPropertyValue("height"));
    let down =parseInt(window.getComputedStyle(downpipe).getPropertyValue("height"));
    let left =parseInt(window.getComputedStyle(uppipe).getPropertyValue("left"));
    if ((left<=250&&left>=150&&top>up)&&(left<=250&&left>=150&&(top+40)<500-down))
    {
        return true;
    }
    else{
        return false;
    }
    
}
setInterval(function(){
    if (gamestart==true)
    {
    if (pass()==true)
    {
        score++;
        document.getElementById("score").innerHTML=score;
    }
}
},200);
