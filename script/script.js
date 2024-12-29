// PROJECTS DATA
const projectsData = [
  {
    "id" : 0,
    "title" : "Olimpo Training",
    "image" : "programming-course.png",
    "respositoryLink" : "https://github.com/Organizacao-do-projeto/Olimpo_Training",
    "deployLink" : "https://olimpo-training.ct.ws/Olimpo_Training/",
    "technologies" : ["HTML","CSS","JavaScript"],
    "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque facilis accusamus fugit recusandae, aspernatur dolor! Unde earum ipsum sapiente illo distinctio cum temporibus impedit natus? Vitae harum magnam eos velit.",
  },
  {
    "id" : 0,
    "title" : "Olimpo Training",
    "image" : "programming-course.png",
    "respositoryLink" : "https://github.com/Organizacao-do-projeto/Olimpo_Training",
    "deployLink" : "https://olimpo-training.ct.ws/Olimpo_Training/",
    "technologies" : ["HTML","CSS","JavaScript"],
    "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque facilis accusamus fugit recusandae, aspernatur dolor! Unde earum ipsum sapiente illo distinctio cum temporibus impedit natus? Vitae harum magnam eos velit.",
  },
  {
    "id" : 0,
    "title" : "Olimpo Training",
    "image" : "programming-course.png",
    "respositoryLink" : "https://github.com/Organizacao-do-projeto/Olimpo_Training",
    "deployLink" : "https://olimpo-training.ct.ws/Olimpo_Training/",
    "technologies" : ["HTML","CSS","JavaScript"],
    "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque facilis accusamus fugit recusandae, aspernatur dolor! Unde earum ipsum sapiente illo distinctio cum temporibus impedit natus? Vitae harum magnam eos velit.",
  }
]
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
  arrayNavItens[7].style.transform = "translateX(115px)";
  arrayNavItens[7].style.transition = transitionValue;
  arrayNavItens[7].style.fontSize = "17px";
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
  arrayNavItens[7].style.transform = "translateX(0px)";
  arrayNavItens[7].style.transition = transitionValue;
  arrayNavItens[7].style.fontSize = "14pt";
  contactMeLink.style.transform = "scale(1)";
});

/**
 * END HIDE ELEMENT BEHIND CONTATO
 */

/**
 * START COPY MAIL ADRESS
 */
/**
 * Utility function to copy to clipboard the email address
 * & show a message;
 */
function copyMailAdress() {
  const content = "glauber.vieira.ofi@gmail.com";
  const copiedMessage = "Email copiado!";

  const unsecuredCopyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  };

  /**
   * Try to copy using security function.
   * If this is not HTTPS, use older unsecurity method
   */
  if (window.isSecureContext && navigator.clipboard) {
    navigator.clipboard.writeText(content);
  } else {
    unsecuredCopyToClipboard(content);
  }

  showMessage();
}
/**
 * START COPY MAIL ADRESS
 */

function showMessage() {
  const modalElement = document.querySelector(".modalMessage");

  modalElement.style.transform = "translateY(0%)";
  modalElement.style.visibility = "visible";

  setTimeout(() => {
    modalElement.style.transform = "translateY(300%)";
  }, 3000);
}

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

/**
 * START CHANGE CV DOWNLOAD LINK
 */

/**
 * Utility function to change href atributo
 * From the downaload CV button using a google drive
 * download link. It shows how to build the url
 */

//  1. Take file share url from drive
//  2. Format this whit the download pattern
//  base url: https://drive.google.com/uc
//  parameters: export=download&id=ID_FROM_YOUR_SHARED_URL
// link example: https://drive.google.com/uc?export=download&id=1Q5R0WIPMyTEFx59Mp3bIVKfI_rQpbl5_

function defineUrlDriveDownload(CV_ELEMENT) {
  const DRIVE_DOWNLOAD_BASE_URL =
    "https://drive.google.com/uc?export=download&";
  const DRIVE_FILE_ID = "1Q5R0WIPMyTEFx59Mp3bIVKfI_rQpbl5_";

  const DRIVE_DONWLOAD_URL = DRIVE_DOWNLOAD_BASE_URL + "id=" + DRIVE_FILE_ID;
  console.log(DRIVE_DONWLOAD_URL);
  CV_ELEMENT.href = DRIVE_DONWLOAD_URL;
}

const linkCv = document.querySelector(".whoami__links__cv");
defineUrlDriveDownload(linkCv);
/**
 * START CHANGE CV DOWNLOAD LINK
 */

/**
 * START CAROUSEL
 */

// Toggle View Button
const btcarouselToggleView = document.querySelector(
  ".carousel__bt-toggle-view"
);
const sliderView = document.querySelector('.slider');
const carouselProjectDetails = document.querySelector('.carousel__project-details');

/**
 * Utility function to change completely
 * carousel view to all project desciption view.
 * This function use toggle to change views
 */
btcarouselToggleView.addEventListener("click", () => {
  changeCarouselView();
});

function changeCarouselView(){
  btcarouselToggleView.classList.toggle("carousel__bt-toggle-view__toggle-up");
  btcarouselToggleView
    .querySelectorAll("div")[0]
    .classList.toggle("carousel__bt-toggle-view__circle__toggle-up");
  sliderView.classList.toggle('carousel__hidde-view');
  carouselProjectDetails.classList.toggle('carousel__hidde-view');
}

// carousel__project-details__card__content_right

/** 1. finalize the count
 * clearInterval(interval)
 * 2. reset the interval variable
 * interval
 * 3. take the value of the new checked as the value of counterCarousel
 * counterCarousel = functionGetElement()
 * 4. reassign the function as the value of interval
 * interval = setInterval(...)
 */

let counterCarousel = 1;
const firstRadioCarousel = document.getElementById("radio1");
const navigationCarousel = document.querySelector(".navigation");
const sideMoveButtonsCarousel = document.querySelectorAll(".side-move-button");

// start counter automatically
let interval = setInterval(() => {
  go2NextImgCarousel();
}, 5000);

/**
 * Utility function to restart carousel by the
 * clicked position. Parent element, take son
 * element that has been clicked and send to restart.
 */
navigationCarousel.addEventListener("click", (e) => {
  stopCarousel();
  restartCarousel(e.target.value);
});

/**
 * Utility function to restart carousel by the
 * back position
 */
sideMoveButtonsCarousel[0].addEventListener("click", () => {
  stopCarousel();
  restartCarousel(sideMoveButtonsCarousel[0].value, "back");
});

/**
 * Utility function to restart carousel by the
 * foward position
 */
sideMoveButtonsCarousel[1].addEventListener("click", () => {
  stopCarousel();
  restartCarousel(sideMoveButtonsCarousel[1].value, "forward");
});

/**
 * Utility function to stop carousel count.
 * This code let interval function unable;
 */
function stopCarousel() {
  clearInterval(interval);
  interval = null;
}

/**
 * Utility function to restart carousel count.
 * This code give interval variable function value
 */
function restartCarousel(startValue, way) {
  // verify imediatelly change view to new position
  if (way == "forward") {
    go2NextImgCarousel();
  } else if (way == "back") {
    go2BackImgCarousel();
  }

  // new start value carousel
  counterCarousel = startValue;

  interval = setInterval(() => {
    go2NextImgCarousel();
  }, 5000);
}

/**
 * Utility function to go to the next image.
 * In case of try to go after last node value
 * Back to start image value list.
 * Update forward and backward buttons value to new value
 */
function go2NextImgCarousel() {
  counterCarousel++;
  const LAST_IMAGE_POSITION = 4;
  const FIRST_IMAGE_POSITION = 1;

  // verify if is higher than list size
  if (counterCarousel > LAST_IMAGE_POSITION) {
    // go to the first
    counterCarousel = FIRST_IMAGE_POSITION;
  }

  // next arrow verfication
  if (counterCarousel == LAST_IMAGE_POSITION) {
    // point to first node element
    sideMoveButtonsCarousel[1].value = FIRST_IMAGE_POSITION;
  } else {
    sideMoveButtonsCarousel[1].value = counterCarousel + 1;
  }

  // backward arrow verfication
  if (counterCarousel == 1) {
    // point to last node element
    sideMoveButtonsCarousel[0].value = LAST_IMAGE_POSITION;
  } else {
    sideMoveButtonsCarousel[0].value = counterCarousel - 1;
  }

  // here change de view of image
  document.getElementById("radio" + counterCarousel).checked = true;
}

/**
 * Utility function to go to the back image.
 * In case of try to go before first node value
 * Back to the last image value list.
 * Update forward and backward buttons value to new value
 */
function go2BackImgCarousel() {
  counterCarousel--;
  const LAST_IMAGE_POSITION = 4;
  const FIRST_IMAGE_POSITION = 1;

  // verify if is minor than list size
  if (counterCarousel < FIRST_IMAGE_POSITION) {
    // go to the first
    counterCarousel = LAST_IMAGE_POSITION;
  }

  // back arrow verfication
  if (counterCarousel == FIRST_IMAGE_POSITION) {
    // point to last node element
    sideMoveButtonsCarousel[0].value = LAST_IMAGE_POSITION;
  } else {
    sideMoveButtonsCarousel[0].value = counterCarousel - 1;
  }

  // backward arrow verfication
  if (counterCarousel == 4) {
    // point to first node element
    sideMoveButtonsCarousel[1].value = FIRST_IMAGE_POSITION;
  } else {
    sideMoveButtonsCarousel[1].value = counterCarousel + 1;
  }

  // here change de view of image
  document.getElementById("radio" + counterCarousel).checked = true;
}

/**
 * Utility function
 * truncate size of text description forcing
 * to resize and put a know more message
 */

function truncateText(maxLength) {
  let element = document.querySelector(".slide-detail__description").innerText;
  let truncated;

  if (element.length > maxLength) {
    truncated = element.substr(0, maxLength) + "...Saiba mais";
  }
  return truncated;
}

document.querySelector(".slide-detail__description").innerText =
  truncateText(87);


/**
 * CAROUSEL START SECOND VIEW
 */

  // carousel__project-details__card__content__link-wrapper-right
  // carousel__project-details__card__content-right

  //carouselProjectDetails

  let carouselProjectDetailsCard = document.createElement('div')
  carouselProjectDetailsCard.classList.add('carousel__project-details__card')

  let contentCarouselProjectDetailsCard = `
          <!-- --- CARD DIV ---- -->
          <div class="carousel__project-details__card">
            <!-- no par mostra o código o texto alinhado à direita e a imagem à direita -->
            <div class="carousel__project-details__card__wrapper centralize">
              <div class="carousel__project-details__card__preview">
                <img
                  src="assets/images/projects/programming-course.png"
                  alt="Preview Image"
                />
              </div>
              <div class="carousel__project-details__card__content">
                <h1>Olimpo Training</h1>
                <p
                  class="carousel__project-details__card__content__description"
                >
                  Lorem, ipsum dolor sit amet
                  <strong> consectetur adipisicing elit.</strong> Atque facilis
                  accusamus fugit recusandae, aspernatur dolor! Unde earum ipsum
                  sapiente illo distinctio cum temporibus impedit natus? Vitae
                  harum magnam eos velit.
                </p>
                <p
                  class="carousel__project-details__card__content__technologies"
                >
                  <strong>HTML CSS JavaScript</strong>
                </p>
                <div
                  class="carousel__project-details__card__content__link-wrapper"
                >
                  <a
                    href=""
                    class="carousel__project-details__card__content__deploy-link centralize"
                  >
                    <span>Visualizar</span>
                    <img
                      src="assets/images/icons/visibility-eye.svg"
                      alt="Visualizar"
                      title="visualizar"
                    />
                  </a>
                  <a
                    href=""
                    class="carousel__project-details__card__content__repository-link centralize"
                  >
                    <span>Repositório</span>
                    <img
                      src="assets/images/logos/github-mark.svg"
                      alt="repositório"
                      title="respositório"
                    />
                  </a>
                </div>
              </div>
              <hr class="carousel__project-details__card__line_divisory" />
            </div>
          </div>
          <!-- --- FIM CARD DIV ---- -->`;

          carouselProjectDetailsCard.innerHTML = contentCarouselProjectDetailsCard

          // TODO: separar as duas visualizações e fazer uma função para retornar na ordem
            for(let i = 0; i <= 10; i++){

              // carouselProjectDetails.appendChild(carouselProjectDetailsCard);
              carouselProjectDetails.appendChild(getProjectCard(i));

            }

            function getProjectCard(id){

              let projectData = projectsData[id];
              let cardWrapper;
              let projectCard = document.createElement('div');
              projectCard.classList.add("carousel__project-details__card")

              if(id % 2 == 0){    
                cardWrapper = `
                <div class="carousel__project-details__card__wrapper centralize">
                  ${getProjectCardsectionPreviewImg(projectData) + getProjectCardsectionDescription(projectData)}
                  <hr class="carousel__project-details__card__line_divisory" />
                </div>`;            
              } else {
                cardWrapper = `
                <div class="carousel__project-details__card__wrapper centralize">
                  ${getProjectCardsectionDescription(projectData) + getProjectCardsectionPreviewImg(projectData)}
                  <hr class="carousel__project-details__card__line_divisory" />
                </div>`;
              }
              projectCard.innerHTML = cardWrapper;

              return projectCard;

            }

            function getProjectCardsectionPreviewImg(projectData) {

              let sectionPreviewImage;

              sectionPreviewImage = `
              <div class="carousel__project-details__card__preview">
                <img
                  src="assets/images/projects/${projectData.image}"
                  alt="Preview Image"
                />
              </div>`
              
              return sectionPreviewImage;

            }

            function getProjectCardsectionDescription(projectData) {

              let sectionCardContent;
              
              let concatTehnologies = '';
              for( technology of projectData.technologies){
                concatTehnologies += technology+" ";
              }
              concatTehnologies = concatTehnologies.trim();

              sectionCardContent = `
              <div class="carousel__project-details__card__content">
                <h1>${projectData.title}</h1>
                <p
                  class="carousel__project-details__card__content__description"
                >
                  ${projectData.description}
                </p>
                <p
                  class="carousel__project-details__card__content__technologies"
                >
                  <strong>${concatTehnologies}
                  </strong>
                </p>
                <div
                  class="carousel__project-details__card__content__link-wrapper"
                >
                  <a
                    href="${projectData.deployLink}" target="_blank"
                    class="carousel__project-details__card__content__deploy-link centralize"
                  >
                    <span>Visualizar</span>
                    <img
                      src="assets/images/icons/visibility-eye.svg"
                      alt="Visualizar"
                      title="visualizar"
                    />
                  </a>
                  <a
                    href="${projectData.respositoryLink}" target="_blank"
                    class="carousel__project-details__card__content__repository-link centralize"
                  >
                    <span>Repositório</span>
                    <img
                      src="assets/images/logos/github-mark.svg"
                      alt="repositório"
                      title="respositório"
                    />
                  </a>
                </div>
              </div>
              `;

              return sectionCardContent;

            }

/**
 * CAROUSEL ENE SECOND VIEW
 */

/**
 * END CAROUSEL
 */
