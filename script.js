```js
document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // COUNTER ANIMATION
  // ==========================

  function animateValue(id, start, end, duration) {

    const obj = document.getElementById(id);

    if (!obj) return;

    let startTime = null;

    function updateCounter(timestamp) {

      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const current = Math.floor(
        progress * (end - start) + start
      );

      if (id === "accuracy") {
        obj.textContent = current + "%";
      } else {
        obj.textContent =
          current.toLocaleString() + "+";
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  animateValue("clients", 0, 5000, 2000);
  animateValue("returns", 0, 12000, 2500);
  animateValue("accuracy", 0, 99, 3000);


  // ==========================
  // NAVBAR SCROLL EFFECT
  // ==========================

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

      navbar.style.background =
        "rgba(15,23,42,0.95)";

      navbar.style.backdropFilter =
        "blur(10px)";

      navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.15)";

    } else {

      navbar.style.background =
        "transparent";

      navbar.style.backdropFilter =
        "none";

      navbar.style.boxShadow =
        "none";
    }

  });


  // ==========================
  // BUTTON CLICK EFFECT
  // ==========================

  const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .nav-btn"
  );

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      button.classList.add("clicked");

      setTimeout(() => {

        button.classList.remove("clicked");

      }, 150);

    });

  });


  // ==========================
  // FADE-IN ON SCROLL
  // ==========================

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.1
    }

  );

  const sections = document.querySelectorAll(
    ".services, .about, .why-us, .testimonials, .contact, .stats"
  );

  sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
      "translateY(40px)";

    section.style.transition =
      "all 0.8s ease";

    observer.observe(section);

  });


  // ==========================
  // CONTACT FORM
  // ==========================

  const form =
    document.querySelector(".contact form");

  if (form) {

    form.addEventListener("submit", (e) => {

      e.preventDefault();

      alert(
        "Thank you! Your message has been received. We will contact you soon."
      );

      form.reset();

    });

  }

});
```
