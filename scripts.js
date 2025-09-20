document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  
  function setActive(link) {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  }

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
     
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setActive(link);
    });
  });

  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 100; 
    navLinks.forEach(link => {
      const section = document.getElementById(link.getAttribute("href").substring(1));
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});
