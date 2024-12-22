/**
 * BEGIN HIDE ELEMENT BEHIND CONTATO
 */

/**
 * getting items from document
 */
const contactMeLink = document.querySelector(
  ".nav-menu__itens__contact-me-link"
);
const arrayNavItens = document
  .querySelector(".nav-menu__itens")
  .getElementsByTagName("li");

const transitionValue = "all .5s";

/**
 * Utility function to hide itens
 * Behind contato button
 */
contactMeLink.addEventListener("mouseenter", () => {
  contactMeLink.style.zIndex = "10";
  arrayNavItens[0].style.transform = "translateX(320px)";
  arrayNavItens[0].style.transition = transitionValue;
  arrayNavItens[2].style.transform = "translateX(240px)";
  arrayNavItens[2].style.transition = transitionValue;
  arrayNavItens[6].style.transform = "translateX(115px)";
  arrayNavItens[6].style.transition = transitionValue;
  arrayNavItens[6].style.fontSize = "17px";
  contactMeLink.style.transform = "scale(1.09)";
});

/**
 * Utility function to back itens
 * To yout default position in html
 */
contactMeLink.addEventListener("mouseleave", () => {
  arrayNavItens[0].style.transform = "translateX(0px)";
  arrayNavItens[0].style.transition = transitionValue;
  arrayNavItens[2].style.transform = "translateX(0px)";
  arrayNavItens[2].style.transition = transitionValue;
  arrayNavItens[6].style.transform = "translateX(0px)";
  arrayNavItens[6].style.transition = transitionValue;
  arrayNavItens[6].style.fontSize = "14pt";
  contactMeLink.style.transform = "scale(1)";
});

/**
 * END HIDE ELEMENT BEHIND CONTATO
 */


/**
 * BEGIN THEME CHANGER SCRIPT
 */

/**
 * Utility function to calculate the current theme setting.
 * Look for a local storage value.
 * Fall back to system setting.
 * Fall back to light mode.
 */
function defineSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

/**
 * Utility function to update the button text and aria-label.
 */
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "Change to light theme" : "Change to dark theme";
  const iconChoose = isDark
    ? "assets/images/icons/sun.svg"
    : "assets/images/icons/moon.svg";

  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.classList.add("hidden");

  setTimeout(() => {
    buttonEl.src = iconChoose;
    buttonEl.classList.remove("hidden");
  }, 400);
}

/**
 * Utility function to update the theme setting on the html tag
 */
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

/**
 * On page load:
 */

/**
 * 1. Grab what we need from the DOM and system settings on page load
 */
const buttonToggleTheme = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * 2. Work out the current site settings
 */
let currentThemeSetting = defineSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

/**
 * 3. Update the theme setting and button text accoridng to current settings
 */
updateButton({
  buttonEl: buttonToggleTheme,
  isDark: currentThemeSetting === "dark",
});
updateThemeOnHtmlEl({ theme: currentThemeSetting });

/**
 * 4. Add an event listener to toggle the theme
 */
buttonToggleTheme.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: buttonToggleTheme, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});

/**
 * END THEME CHANGER SCRIPT
 */


/**
 * START BACK-START BUTTON
 */

/**
 * this listener show or hide
 * arrow to go to the top of the page
 */
document.addEventListener("scroll", () => {
  let position = window.scrollY;
  const AFTER_BANNER_POSITION = 600;
  const backStartIcon = document.querySelector(".back-start-icon__container");

  if (position >= AFTER_BANNER_POSITION) {
    backStartIcon.style.visibility = "visible";
    backStartIcon.style.opacity = "1";
  } else {
    backStartIcon.style.visibility = "hidden";
    backStartIcon.style.opacity = "0";
  }
});

/**
 * END BACK-START BUTTON
 */


/**
 * START SIDE BAR MENU
 */

/**
 * this toggle show or hide sidemenu
 */

const btCloseSMenu = document.querySelector(".side-menu__bt-close");
const sideMenuContainer = document.querySelector(".side-menu__container");
const btOpenSMenu = document.querySelector(".nav-menu__open-side-bar");
const pageinBg = document.querySelector(".page-in-bg");

btOpenSMenu.addEventListener("click", () => {
  sideMenuContainer.style.transform = "translateX(0%)";
  pageinBg.style.display = "block";

});

btCloseSMenu.addEventListener("click", () => {
  sideMenuContainer.style.transform = "translateX(100%)";
  pageinBg.style.display = "none";
});

/**
 * this toggle show or hide submenus
 */

const sideMenuProjetos = document.querySelector(".side-menu__projetos-list");
const sideMenuContatos = document.querySelector(".side-menu__contato-list");

sideMenuProjetos.addEventListener("click", () => {
  sideBarShowSubmenu(sideMenuProjetos);
});

sideMenuContatos.addEventListener("click", () => {
  sideBarShowSubmenu(sideMenuContatos);
});

function sideBarShowSubmenu(elemento) {
  //take ul child element
  const ulChild = elemento.children[2];
  const imgChild = elemento.children[1];

  // toggle hide class and icon rotation
  if (ulChild.className == "hide") {
    ulChild.className = "";
    imgChild.className = "side-menu__triangle-expand toggle-up";
  } else {
    ulChild.className = "hide";
    imgChild.className = "side-menu__triangle-expand toggle-down";
  }
}

/**
 * END SIDE BAR MENU
 */
