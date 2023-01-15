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

// toggle menu
const menu = document.querySelector(".humberger-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("humberger-menu--open");
  const target = document.getElementById(menu.dataset.target);
  target.classList.toggle("nav--show");
});

// check quiz
const quizForm = document.getElementById("quiz-form");
quizForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const ans1 = quizForm.elements["q1"].value;
  const ans2 = quizForm.elements["q2"].value;

  const choiceDiv1 = document.getElementById(`q1-${ans1}`)?.parentNode;
  const choiceDiv2 = document.getElementById(`q2-${ans2}`)?.parentNode;

  if (ans1 == "C") {
    choiceDiv1?.classList.toggle("quiz__choice--correct", true);
  } else {
    choiceDiv1?.classList.toggle("quiz__choice--wrong", true);
  }

  if (ans2 == "D") {
    choiceDiv2?.classList.toggle("quiz__choice--correct", true);
  } else {
    choiceDiv2?.classList.toggle("quiz__choice--wrong", true);
  }
});

// validate login
const loginForm = document.getElementById("login-form");
loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const passwordField = loginForm.elements["password"];

  if (passwordField.value.length < 6) {
    const message = document.querySelector(".message");
    message.innerHTML = "Password must be atleast 6 characters long.";
    message.classList.toggle("message--error", true);
  } else {
    window.location.href = "index.html";
  }
});
