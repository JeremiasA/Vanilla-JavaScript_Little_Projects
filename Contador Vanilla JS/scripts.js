const visor = document.getElementById('visor');

document.getElementById('increase').addEventListener('click', ()=>{
visor.textContent= parseInt(visor.textContent)+1;
})

document.getElementById('decrease').addEventListener('click', () =>{
visor.textContent= parseInt(visor.textContent)-1;
})

document.getElementById('clear').addEventListener('click', ()=>{
visor.textContent= 0;

})