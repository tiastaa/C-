let field=document.getElementById("field");
    for(let i=0; i<100; i++){
        let exel=document.createElement('div');
        field.appendChild(exel);
        exel.classList.add("exel");
    }
    
    
    
    let exel= document.getElementsByClassName("exel");
    let x=1; 
    let y=10;
    for(let i=0 ; i<100; i++){
    if(x==11){
        x=1;
        y--;
    }
    exel[i].setAttribute('x', x);
    exel[i].setAttribute('y', y);
    x++;
    
    }
    function createSnake(){
        let x=Math.round(Math.random()*(7-3)+3);
        let y=Math.round(Math.random()*(7-1)+1);
        return [x,y];
    }
    let cordinatesSnakeHead=createSnake();
    let snakeHead=[document.querySelector('[x="'+ cordinatesSnakeHead[0] +'"][y= "'+ cordinatesSnakeHead[1] +'"]') , 
    document.querySelector('[x="'+ (cordinatesSnakeHead[0]-1) +'"][y="'+ cordinatesSnakeHead[1] +'"]') , 
    document.querySelector('[x="'+ (cordinatesSnakeHead[0]-2) +'"][y="'+ cordinatesSnakeHead[1] +'"]')];
    snakeHead[0].classList.add("snakehad");
    snakeHead[1].classList.add("snakebody");
    snakeHead[2].classList.add("snakebody");
    function createApple(){
        let x=Math.round(Math.random()*(10-1)+1);
        let y=Math.round(Math.random()*(10-1)+1);
        while(snakeHead.indexOf(document.querySelector('[x="'+ x +'"][y= "'+ y +'"]'))!=-1){
                 x=Math.round(Math.random()*(10-1)+1);
                 y=Math.round(Math.random()*(10-1)+1);
        }
    
        return [x,y];
    }
    let cordinatesaApple=createApple();
    let apple=document.querySelector('[x="'+ cordinatesaApple[0] +'"][y= "'+ cordinatesaApple[1] +'"]') ;
    
    apple.classList.add("apple");

document.getElementById("startbutton").onclick=()=>{
   let interval =window.setInterval( function(){
        newHeadPosition=document.querySelector('[x="'+ (parseInt(snakeHead[0].getAttribute("x"))+1) +'"][y= "'+ (parseInt(snakeHead[0].getAttribute('y'))) +'"]');
        newHeadPosition.classList.add("snakehad");
        snakeHead[0].classList.remove("snakehad");
        snakeHead[0].classList.add("snakebody");
        snakeHead.unshift(newHeadPosition); 
        snakeHead[snakeHead.length-1].classList.remove("snakebody")
        snakeHead.pop();
        } , 500) ; 
    
    
        function movesOfSnake(event){
            try{
        if(event.key=='ArrowLeft' || event.key=='a'  ){
            if(!(parseInt(snakeHead[0].getAttribute("y"))==parseInt(snakeHead[1].getAttribute("y")) && parseInt(snakeHead[0].getAttribute("x"))-parseInt(snakeHead[1].getAttribute('x'))==1)){
                clearInterval(interval);
                let newHeadPosition=document.querySelector('[x="'+ (snakeHead[0].getAttribute("x")-1) +'"][y= "'+ (parseInt(snakeHead[0].getAttribute('y'))) +'"]');
                newHeadPosition.classList.add("snakehad");
                snakeHead[0].classList.remove("snakehad");
                snakeHead[0].classList.add("snakebody");
                snakeHead.unshift(newHeadPosition); 
                if(newHeadPosition!=apple){
                    snakeHead[snakeHead.length-1].classList.remove("snakebody")
                    snakeHead.pop();
                }
    
                else{
                    apple.classList.remove("apple");
                     cordinatesaApple=createApple();
                     apple=document.querySelector('[x="'+ cordinatesaApple[0] +'"][y= "'+ cordinatesaApple[1] +'"]') ;
                     apple.classList.add("apple");
                }
                try{
                    interval =window.setInterval( function(){
                newHeadPosition=document.querySelector('[x="'+ (snakeHead[0].getAttribute("x")-1) +'"][y= "'+ (parseInt(snakeHead[0].getAttribute('y'))) +'"]');
                newHeadPosition.classList.add("snakehad");
                snakeHead[0].classList.remove("snakehad");
                snakeHead[0].classList.add("snakebody");
                snakeHead.unshift(newHeadPosition); 
                if(newHeadPosition!=apple){
                    snakeHead[snakeHead.length-1].classList.remove("snakebody")
                    snakeHead.pop();
                }
    
                else{
                    apple.classList.remove("apple");
                     cordinatesaApple=createApple();
                     apple=document.querySelector('[x="'+ cordinatesaApple[0] +'"][y= "'+ cordinatesaApple[1] +'"]') ;
                     apple.classList.add("apple");
                }
                } , 500) ; 
                }
                catch(err){
                    alert("сука");
                }
                 
    
                
           
            }
    
            
        }
    
                if(event.key=='ArrowUp' || event.key=='w' ){
            if(!(parseInt(snakeHead[0].getAttribute("x"))==parseInt(snakeHead[1].getAttribute("x")) && parseInt(snakeHead[0].getAttribute("y"))-parseInt(snakeHead[1].getAttribute('y'))==-1)){
                clearInterval(interval);
                    newHeadPosition=document.querySelector('[x="'+ snakeHead[0].getAttribute("x") +'"][y= "'+ (parseInt(snakeHead[0].getAttribute('y'))+1) +'"]');
    
                
                    newHeadPosition.classList.add("snakehad");
                    snakeHead[0].classList.remove("snakehad");
                    snakeHead[0].classList.add("snakebody");
                    snakeHead.unshift(newHeadPosition); 
                    if(newHeadPosition!=apple){
                        snakeHead[snakeHead.length-1].classList.remove("snakebody")
                        snakeHead.pop();
                    }
        
                    else{
                        apple.classList.remove("apple");
                         cordinatesaApple=createApple();
                         apple=document.querySelector('[x="'+ cordinatesaApple[0] +'"][y= "'+ cordinatesaApple[1] +'"]') ;
                         apple.classList.add("apple");
                    }
                     interval =window.setInterval( function(){
                        newHeadPosition=document.querySelector('[x="'+ snakeHead[0].getAttribute("x") +'"][y= "'+ (parseInt(snakeHead[0].getAttribute('y'))+1) +'"]');
                        newHeadPosition.classList.add("snakehad");
                        snakeHead[0].classList.remove("snakehad");
                        snakeHead[0].classList.add("snakebody");
                        snakeHead.unshift(newHeadPosition); 
                        if(newHeadPosition!=apple){
                            snakeHead[snakeHead.length-1].classList.remove("snakebody")
                            snakeHead.pop();
                        }
            
                        else{
                            apple.classList.remove("apple");
                             cordinatesaApple=createApple();
                             apple=document.querySelector('[x="'+ cordinatesaApple[0] +'"][y= "'+ cordinatesaApple[1] +'"]') ;
                             apple.classList.add("apple");
                        }
                        } , 500) ; 
            }
     
            
        }
    
    
        if(event.key=='ArrowDown' || event.key=='s' ){
            if(!(parseInt(snakeHead[0].getAttribute("x"))==parseInt(snakeHead[1].getAttribute("x")) && parseInt(snakeHead[0].getAttribute("y"))-parseInt(snakeHead[1].getAttribute('y'))==1)){
                clearInterval(interval);
                    newHeadPosition=document.querySelector('[x="'+ snakeHead[0].getAttribute("x") +'"][y= "'+ (parseInt(snakeHead[0].getAttribute('y'))-1) +'"]');
    
                
                    newHeadPosition.classList.add("snakehad");
                    snakeHead[0].classList.remove("snakehad");
                    snakeHead[0].classList.add("snakebody");
                    snakeHead.unshift(newHeadPosition); 
                    if(newHeadPosition!=apple){
                        snakeHead[snakeHead.length-1].classList.remove("snakebody")
                        snakeHead.pop();
                    }
        
                    else{
                        apple.classList.remove("apple");
                         cordinatesaApple=createApple();
                         apple=document.querySelector('[x="'+ cordinatesaApple[0] +'"][y= "'+ cordinatesaApple[1] +'"]') ;
                         apple.classList.add("apple");
                    }
                    interval =window.setInterval( function(){
                        newHeadPosition=document.querySelector('[x="'+ snakeHead[0].getAttribute("x") +'"][y= "'+ (parseInt(snakeHead[0].getAttribute('y'))-1) +'"]');
                        newHeadPosition.classList.add("snakehad");
                        snakeHead[0].classList.remove("snakehad");
                        snakeHead[0].classList.add("snakebody");
                        snakeHead.unshift(newHeadPosition); 
                        if(newHeadPosition!=apple){
                            snakeHead[snakeHead.length-1].classList.remove("snakebody")
                            snakeHead.pop();
                        }
            
                        else{
                            apple.classList.remove("apple");
                             cordinatesaApple=createApple();
                             apple=document.querySelector('[x="'+ cordinatesaApple[0] +'"][y= "'+ cordinatesaApple[1] +'"]') ;
                             apple.classList.add("apple");
                        }
                        } , 500) ; 
            }
     
            
        }
        if(event.key=='ArrowRight' || event.key=='d' ){
            if(!(parseInt(snakeHead[0].getAttribute("y"))==parseInt(snakeHead[1].getAttribute("y")) && parseInt(snakeHead[0].getAttribute("x"))-parseInt(snakeHead[1].getAttribute('x'))==-1)){
                clearInterval(interval);
                    newHeadPosition=document.querySelector('[x="'+ (parseInt(snakeHead[0].getAttribute("x"))+1) +'"][y= "'+ (parseInt(snakeHead[0].getAttribute('y'))) +'"]');
    
                
                    newHeadPosition.classList.add("snakehad");
                    snakeHead[0].classList.remove("snakehad");
                    snakeHead[0].classList.add("snakebody");
                    snakeHead.unshift(newHeadPosition); 
                    if(newHeadPosition!=apple){
                        snakeHead[snakeHead.length-1].classList.remove("snakebody")
                        snakeHead.pop();
                    }
        
                    else{
                        apple.classList.remove("apple");
                         cordinatesaApple=createApple();
                         apple=document.querySelector('[x="'+ cordinatesaApple[0] +'"][y= "'+ cordinatesaApple[1] +'"]') ;
                         apple.classList.add("apple");
                    }
                    interval =window.setInterval( function(){
                        newHeadPosition=document.querySelector('[x="'+ (parseInt(snakeHead[0].getAttribute("x"))+1) +'"][y= "'+ (parseInt(snakeHead[0].getAttribute('y'))) +'"]');
                        newHeadPosition.classList.add("snakehad");
                        snakeHead[0].classList.remove("snakehad");
                        snakeHead[0].classList.add("snakebody");
                        snakeHead.unshift(newHeadPosition); 
                        if(newHeadPosition!=apple){
                            snakeHead[snakeHead.length-1].classList.remove("snakebody")
                            snakeHead.pop();
                        }
            
                        else{
                            apple.classList.remove("apple");
                             cordinatesaApple=createApple();
                             apple=document.querySelector('[x="'+ cordinatesaApple[0] +'"][y= "'+ cordinatesaApple[1] +'"]') ;
                             apple.classList.add("apple");
                        }
                        } , 500) ; 
            }
            
     
            
        }
    }
    catch(err){
        alert("dead");
    }
    }
    
    document.addEventListener('keyup',  movesOfSnake);
}








