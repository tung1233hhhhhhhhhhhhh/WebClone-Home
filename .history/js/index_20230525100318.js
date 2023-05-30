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
    console.log(index);
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
    } else {
      prevTestimonial.style.color = "white";
    }
  }
});
