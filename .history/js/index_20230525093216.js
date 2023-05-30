const prevTestimonial = document.querySelector(".testimonial-prev");
const nextTestimonial = document.querySelector(".testimonial-next");

prevTestimonial.addEventListener("click", () => {
  handleChangeSlide(-1);
});

nextTestimonial.addEventListener("click", () => {
  handleChangeSlide(1);
});

function handleChangeSlide(direction) {}
