
let x=0;
let y=0;
let bool=true;
let count=0;
    document.querySelectorAll("button")[1].addEventListener("mouseover",move);
function move(){
    if(count==6){
        this.style.opacity="0";
        alert("Aya mchi n.......k");  
    } 

    count++;

    if(bool){
        x+=80;
        y+=80;
        bool=false;
    }
        else{
        x-=80;
        y-=80;
        bool=true;
        }

    this.style.transform=`translate(${x}px,${y}px)`;
    
}
    

document.querySelectorAll("button")[0].addEventListener("click",display);
function display(){
alert("thank U chekam");
} 





