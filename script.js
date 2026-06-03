// MOBILE MENU
function toggleMenu(){
document.querySelector("nav ul").classList.toggle("active");
}

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{
const update=()=>{
const target=+counter.getAttribute("data-target");
const count=+counter.innerText;
const inc=target/100;

if(count<target){
counter.innerText=Math.ceil(count+inc);
setTimeout(update,20);
}else{
counter.innerText=target;
}
}
update();
});
