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

// toggle audio transcript
const showHideButtons = document.querySelectorAll(".toggle-transcript");

showHideButtons.forEach((button) => {
  if (button.dataset.target) {
    button.addEventListener("click", () => {
      const transcriptElement = document.getElementById(button.dataset.target);
      button.innerHTML = "Hide Transcript";
      if (transcriptElement.classList.contains("section--hidden")) {
        button.innerHTML = "Hide Transcript";
      } else {
        button.innerHTML = "Show Transcript";
      }
      transcriptElement.classList.toggle("section--hidden");
      button.blur();
    });
  }
});

// Tab navigation
const tabNavigationButtons = document.querySelectorAll(".tab__button");
tabNavigationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabNavigationButtons.forEach((btn) => {
      btn.classList.toggle("tab__button--active", false);

      let target = document.getElementById(btn.dataset.target);
      target.classList.toggle("tab__content--hidden", true);
    });

    button.classList.toggle("tab__button--active", true);

    let target = document.getElementById(button.dataset.target);
    target.classList.toggle("tab__content--hidden", false);
  });
});
