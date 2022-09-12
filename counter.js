let add= document.getElementById('increament');
let remove=document.getElementById('decreament');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click',function(){
    integer += 1;
    int.innerHTML=integer;
})

remove.addEventListener('click',function(){
    integer -= 1;
    if(integer < 0){
        integer = 0;
    }
    int.innerHTML = integer;
})