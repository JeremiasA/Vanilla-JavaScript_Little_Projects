const items = document.querySelectorAll('.items');
const menu_button = document.getElementById('menu_button');
const list = document.getElementById('list');
const menu = document.getElementById('menu');


menu_button.addEventListener('click',()=>{
    if (menu.classList[1]=='menu_movil'){
        menu.classList.replace('menu_movil', 'invisible');
    }else{
        menu.classList.replace('invisible', 'menu_movil');
    }
});

window.addEventListener('resize',()=>{
    if(window.innerWidth<=500){
    menu.classList.add('invisible')  
    menu_button.classList.remove('invisible');            
}
else{
    menu.classList.remove('menu_movil','invisible')              
    menu_button.classList.add('invisible');            

    }
})