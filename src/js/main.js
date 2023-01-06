// move label on input focus
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  if (input.dataset.label) {
    input.addEventListener("focus", () => {
      const label = document.getElementById(input.dataset.label);
      label.classList.toggle("search__input-label--hidden", true);
    });
    input.addEventListener("focusout", () => {
      const label = document.getElementById(input.dataset.label);
      if (input.value) return;
      label.classList.toggle("search__input-label--hidden", false);
    });
  }
});

// make course cards clickable
const courses = document.querySelectorAll(".course");

courses.forEach((course) => {
  if (course.dataset.link) {
    course.addEventListener("click", () => {
      window.location.href = course.dataset.link;
    });
  }
});
