const wall = document.querySelectorAll('div');
const apply = document.getElementById('apply');
const reset = document.getElementById('reset');
const wallid = document.getElementById('wall_id');
const wall_color = document.getElementById('wall_color');


apply.addEventListener('click', ()=>{
    for(let i = 0; i<wall.length; i++){
        if(wall[i].id == wallid.value){
            wall[i].style.background = wall_color.value;
        }
    }
    
})

reset.addEventListener('click', ()=>{
    for(let i = 0; i<wall.length; i++){
        wall[i].style.background = 'transparent';
    }
})