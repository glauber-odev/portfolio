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
    const iconChoose = isDark ? "assets/images/sun.svg" : "assets/images/moon.svg";

    buttonEl.setAttribute("aria-label", newCta);
    buttonEl.classList.add("hidden");

    setTimeout(( )=>{

        buttonEl.src = iconChoose;
        buttonEl.classList.remove("hidden");

    }, 400)
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
  let currentThemeSetting = defineSettingAsThemeString({ localStorageTheme, systemSettingDark });
  
  /**
  * 3. Update the theme setting and button text accoridng to current settings
  */
  updateButton({ buttonEl: buttonToggleTheme, isDark: currentThemeSetting === "dark" });
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