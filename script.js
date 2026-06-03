// COUNTER ANIMATION

function animateValue(id, start, end, duration) {

  const obj = document.getElementById(id);

  if (!obj) return;

  let range = end - start;
  let current = start;

  let increment = end > start ? 1 : -1;

  let stepTime = Math.abs(
    Math.floor(duration / range)
  );

  let timer = setInterval(() => {

    current += increment;

    if(id === "accuracy"){
      obj.textContent = current + "%";
    }
    else{
      obj.textContent = current + "+";
    }

    if(current === end){
      clearInterval(timer);
    }

  }, stepTime);
}

animateValue("clients", 0, 5000, 2000);
animateValue("returns", 0, 12000, 2500);
animateValue("accuracy", 0, 99, 3000);


// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background =
      "rgba(15,23,42,0.95)";

    navbar.style.backdropFilter =
      "blur(10px)";

    navbar.style.position = "sticky";

    navbar.style.top = "0";

    navbar.style.zIndex = "1000";

  }

});


// BUTTON CLICK EFFECT

const buttons = document.querySelectorAll(
  ".primary-btn, .secondary-btn, .nav-btn"
);

buttons.forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform =
      "scale(0.96)";

    setTimeout(() => {

      button.style.transform =
        "scale(1)";

    }, 150);

  });

});


// FADE-IN ANIMATION

const observer = new IntersectionObserver(
(entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";

      entry.target.style.transform =
        "translateY(0px)";

    }

  });

},
{
  threshold: 0.1
}
);

const sections = document.querySelectorAll(
".services,.about,.why-us,.testimonials,.contact,.stats"
);

sections.forEach(section => {

  section.style.opacity = "0";

  section.style.transform =
    "translateY(40px)";

  section.style.transition =
    "all 0.8s ease";

  observer.observe(section);

});


// CONTACT FORM

const form = document.querySelector("form");

if(form){

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
      "Thank you! Your message has been received. We will contact you soon."
    );

    form.reset();

  });

}
