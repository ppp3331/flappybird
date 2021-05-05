var up=document.getElementById("uppipe");
var down=document.getElementById("downpipe");
var fbird= document.getElementById("bird");
var jumping=true;
var gamestart=false;
var gameend=true;
var score=0;

//gets rid of "click to start" message
if (gamestart==false)
{
    document.addEventListener("click",()=> {
    document.getElementById("p").innerHTML="";
    gamestart=true;
    gameend=false;
});
}

//generates random pipes
document.addEventListener("click", jump);
up.addEventListener('animationiteration', ()=> {
    let random= ((Math.random()*300)+20);
    let diff = 340-random;
    downpipe.style.height=diff + "px";
    uppipe.style.height= random + "px";
});

//makes the bird jump
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

//makes the bird fall, checks if game end
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

//checks if the bird hits the pipe
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

//check if the bird pass the pipes
function pass()
{   
    let top =parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    let up =parseInt(window.getComputedStyle(uppipe).getPropertyValue("height"));
    let down =parseInt(window.getComputedStyle(downpipe).getPropertyValue("height"));
    let left =parseInt(window.getComputedStyle(uppipe).getPropertyValue("left"));
    if ((left<=250&&left>=130&&top>up)&&(left<=250&&left>=130&&(top+40)<500-down))
    {
        return true;
    }
    else{
        return false;
    }
    
}

//calculates score
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
