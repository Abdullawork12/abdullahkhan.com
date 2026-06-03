```javascript
// EMAIL JS

emailjs.init("YOUR_PUBLIC_KEY");

const form = document.getElementById("quoteForm");

form.addEventListener("submit", function(e){

e.preventDefault();

emailjs.send(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
{
name: document.getElementById("name").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
service: document.getElementById("service").value,
message: document.getElementById("message").value
}
)

.then(() => {

alert(
"Thank you! Your request has been submitted successfully."
);

form.reset();

})

.catch(() => {

alert(
"Something went wrong. Please try again."
);

});

});

// SCROLL ANIMATION

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});

document
.querySelectorAll(".card,.glass-box,.contact-box")
.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".8s";

observer.observe(el);

});
```
