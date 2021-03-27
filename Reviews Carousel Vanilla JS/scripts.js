reviews ={
    1:{
    id:1,
    profile_img:"1.png",
    name:"María Arriaga",
    job:"Desarrolladora de software",
    review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi facilis aut minima inventore? Explicabo tenetur esse quia officia rem molestiae eius. Alias ducimus expedita corrupti labore, culpa consequuntur deserunt quisquam?"
    },
    2:{
    id:2,
    profile_img:"2.png",
    name:"Ivan Pavlov",
    job:"Community Manager",
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus similique hic in cumque, esse tempore atque, veritatis eaque amet at optio molestiae autem sunt corporis earum commodi reiciendis cum quaerat."
    },
    3:{
    id:3,    
    profile_img:"3.png",
    name:"Burrus Skinner",
    job:"Radical Conductist",
    review:"This services is amazing! Congratulations!"
    }
}

const profile_img = document.getElementById('profile_img');
const button_right = document.getElementById('right');
const button_left = document.getElementById('left');
const profile_name = document.getElementById('name');
const profile_job = document.getElementById('job');
const profile_review = document.getElementById('review');
const new_review = document.getElementById('new_review');
const container = document.getElementById('container');
new_review__form = document.getElementById('new_review__form');

let actual_review=1;
const mostrarReview = (id) =>{
    profile_img.setAttribute('src', reviews[id].profile_img);
    profile_name.textContent=reviews[id].name;
    profile_job.textContent=reviews[id].job;
    profile_review.textContent=reviews[id].review;
}
mostrarReview(actual_review);

button_right.addEventListener('click', ()=>{
    if (actual_review<(Object.keys(reviews).length)) mostrarReview(actual_review+=1);
    else mostrarReview(actual_review=1);        
})

button_left.addEventListener('click', ()=>{
    if(actual_review>1) mostrarReview(actual_review-=1); 
    else mostrarReview(Object.keys(reviews).length);        
})


new_review.addEventListener('click', ()=>{
//FORM DE CARGA DE DATOS
new_review__form.classList.remove('invisible');
container.classList.add('transparent');
})

new_review__form.addEventListener('submit', (e)=>{
    e.preventDefault();
    new_review__form.classList.add('invisible');
    container.classList.remove('transparent');
    
    new_id=Object.keys(reviews).length+1;
    reviews[new_id]=
    {
        id: new_id,
        profile_img:"https://picsum.photos/200", // random img generator
        name:new_review__form.new_name.value,
        job:new_review__form.new_job.value,
        review:new_review__form.textarea.value
    }
    
})

