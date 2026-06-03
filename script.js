document
.getElementById("quoteForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Thank you for contacting Taxsphere. Our team will reach out shortly."
);

this.reset();

});
