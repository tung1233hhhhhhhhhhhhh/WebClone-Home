window.addEventListener("load", function () {
  const sliderMain = document.querySelector(".testimonial-wrapper");
  const sliderItems = document.querySelectorAll(".slide-list");
  const prevTestimonial = document.querySelector(".testimonial-prev");
  const nextTestimonial = document.querySelector(".testimonial-next");
  //   const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderItemWidth = 1329;
  const sliderLength = sliderItems.length;
  let postionX = 0;
  let index = 0;
  nextTestimonial.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  prevTestimonial.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  function handleChangeSlide(direction) {
    index = Math.max(Math.min(index + direction, sliderLength - 1), 0);
    postionX = -index * sliderItemWidth;
    sliderMain.style.transform = `translateX(${postionX}px)`;
    if (index === 0) {
      prevTestimonial.style.color = "#858585";
      nextTestimonial.style.color = "white";
    } else if (index === sliderLength - 1) {
      prevTestimonial.style.color = "white";
      nextTestimonial.style.color = "#858585";
    } else {
      prevTestimonial.style.color = "white";
      nextTestimonial.style.color = "white";
    }
  }
});

window.addEventListener("load", function () {
  const tiprev = document.querySelector(".ti-angle-left");
  const sliderMain = document.querySelector(".wrapper-residence");
  const sliderItems = document.querySelectorAll(".box-slide");
  const prevResidence = document.querySelector(".btn-prev");
  const nextResidence = document.querySelector(".btn-next");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  // const sliderItemWidth = 442;
  const sliderLength = sliderItems.length - 2;
  let postionX = 0;
  let index = 0;

  nextResidence.addEventListener("click", function () {
    handleChangeSlide(1);
    console.log(sliderItemWidth);
  });
  prevResidence.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  function handleChangeSlide(direction) {
    index = Math.max(Math.min(index + direction, sliderLength - 1), 0);
    postionX = -index * sliderItemWidth;
    sliderMain.style.transform = `translateX(${postionX}px)`;
    if (index === 0) {
      prevResidence.style.border = "1px solid #858585";
      tiprev.style.color = "#858585";
      nextResidence.style.border = "1px solid white";
      nextResidence.style.color = "white";
    } else if (index === sliderLength - 1) {
      prevResidence.style.border = "1px solid white";
      tiprev.style.color = "white";
      nextResidence.style.border = "1px solid #858585";
      nextResidence.style.color = "#858585";
    } else {
      prevResidence.style.border = "1px solid white";
      tiprev.style.color = "white";
      nextResidence.style.border = "1px solid white";
      nextResidence.style.color = "white";
    }
  }
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

const navbarchild = document.querySelector(".pages-nav-list");
const tablist = document.querySelector(".form-pages");
let resuil = "none";
navbarchild.addEventListener("click", () => {
  if (resuil === "none") {
    tablist.style.display = "block";
    resuil = "block";
  } else if (resuil === "block") {
    tablist.style.display = "none";
    resuil = "none";
  }
});
