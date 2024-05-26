const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("vis");
    }
  });
});

const hiddenElementsR = document.querySelectorAll(".nonvisR");
hiddenElementsR.forEach((el) => observer.observe(el));
const hiddenElementsL = document.querySelectorAll(".nonvisL");
hiddenElementsL.forEach((el) => observer.observe(el));
const hiddenElementsC = document.querySelectorAll(".nonvisC");
hiddenElementsC.forEach((el) => observer.observe(el));
