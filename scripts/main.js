// THEME TOGGLE
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
  document.documentElement.style.setProperty("color-scheme", theme);
};

updateThemeOnHtmlEl({theme: currentThemeSetting});

// target the button using the data attribute we added earlier
const button = document.querySelector("[data-theme-toggle]");

button.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  // update the button text
  const newCta = newTheme === "dark" ? "Change to light theme" : "Change to dark theme";
  button.setAttribute("aria-label", newCta);

  // update theme attribute on HTML to switch theme in CSS
  updateThemeOnHtmlEl({theme: newTheme});

  // update in local storage
  localStorage.setItem("theme", newTheme);

  // update the currentThemeSetting in memory
  currentThemeSetting = newTheme;
});

// INTERSECTION OBSERVER FOR DIFFERENT SECTIONS

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      switch (entry.target.id) {
        case "about-me":
          

        case "projects-container":

        case "resume-container":
      };
    };
  });
};


const observerOptions = {
  root: null,
  threshold: 0.5,
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

const aboutMeElement = document.getElementById('about-me');
const projectsElement = document.getElementById('projects-container');
const resumeElement = document.getElementById('resume-container');


observer.observe(aboutMeElement);
observer.observe(projectsElement);
observer.observe(resumeElement);