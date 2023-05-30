window.addEventListener("load", function () {
  const sliderMain = document.querySelector(".testimonial-main");
  const sliderItems = document.querySelectorAll(".slide-list");
  const prevTestimonial = document.querySelector(".testimonial-prev");
  const nextTestimonial = document.querySelector(".testimonial-next");
  const sliderItemWidth = sliderItems[0].offsetWidth;
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
  }
});
