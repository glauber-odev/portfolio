// PROJECTS DATA
const projectsData = [
  {
    id: 0,
    title: "BuzzFeed",
    image: "buzzfeddCloneMiniature.png",
    respositoryLink: "https://github.com/glauber-odev/projeto-buzzfeed",
    deployLink: "https://buzzfeed-angular-glauber.vercel.app/",
    technologies: ["Angular", "HTML", "CSS", "JavaScript"],
    description:
      "O Angular BuzzFeed Game é uma aplicação web que utiliza o framework <strong>Angular, HTML, CSS e JavaScript</strong>. O objetivo é fornecer uma experiência divertida para os usuários. Consiste em uma série de perguntas que abordam aspectos da vida e personalidade do usuário. Com base nas respostas, o sistema calcula qual personagem do BuzzFeed mais se assemelha ao perfil do usuário.",
  },
  {
    id: 1,
    title: "Olimpo Training",
    image: "olimpoTrainingMiniature.png",
    respositoryLink:
      "https://github.com/Organizacao-do-projeto/Olimpo_Training",
    deployLink: "https://olimpo-training.ct.ws/Olimpo_Training/",
    technologies: ["PHP", "MySql", "HTML", "CSS", "JavaScript"],
    description:
      "Projeto voltado a academias proporcionando uma plataforma de suporte tanto para personal trainers como para alunos. <strong>Back-end</strong> foi feito utilizando <strong>banco de dados relacional, PHP</strong>. Nela é possível fazer fichas de treino, gerar PDF e consultar detalhes de cada exercício físico.",
  },
  {
    id: 2,
    title: "Landing Page Curso de Programação",
    image: "programming-course.png",
    respositoryLink: "https://github.com/glauber-odev/programming-course-site",
    deployLink: "https://glauber-odev.github.io/programming-course-site/",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A landing page do curso de programação Full-Stack Web Master é projetada para atrair e converter visitantes em alunos, destacando o aprendizado de <strong>HTML, CSS e JavaScript</strong>. Com uma estrutura clara e visualmente atraente, ela apresenta os benefícios do curso, depoimentos de alunos. O foco é fornecer informações práticas e garantir que o usuário se sinta confiante para iniciar sua jornada de aprendizado.",
  },
  {
    id: 3,
    title: "Plyastation Store Clone",
    image: "psn_store_clone_minature.png",
    respositoryLink: "https://github.com/glauber-odev/store",
    deployLink: "https://playstation-store-glauber.vercel.app/",
    technologies: ["Angular", "HTML", "CSS", "JavaScript"],
    description:
      "Playstation Store Clone é um projeto de clone utilizando componentes do <strong>Angular</strong> e propriedades avançadas de CSS. A idéia é componentizar ao máximo as partes da página para diminuir o acoplamento entre os componentes",
  },
  {
    id: 4,
    title: "The Last Of Us Course Serie Page",
    image: "theLastofUsMiniature.png",
    respositoryLink:
      "https://github.com/glauber-odev/landing_page_the_last_of_us",
    deployLink: "https://landing-page-the-last-of-us.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "Este projeto é uma landing page com o estilo de sites de streaming de filmes utilizando o tridente básico do desenvolvimento web: <strong>HTML, CSS e JavaScript</strong>. O tema foi a série lançada do jogo The Last of Us, feito com ajuda dos conhecimentos em desenvolvimento web fornecidos pela Kenzie Academy. Meu primeiro projeto Web.",
  },
];
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
  CV_ELEMENT.href = DRIVE_DONWLOAD_URL;
}

const linkCv = document.querySelector(".whoami__links__cv");
const footerlinkCv = document.querySelector(".footer__links__professional__cv");
defineUrlDriveDownload(linkCv);
defineUrlDriveDownload(footerlinkCv);
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
const sliderView = document.querySelector(".slider");
const carouselProjectDetails = document.querySelector(
  ".carousel__project-details"
);

/**
 * Utility function to change completely
 * carousel view to all project desciption view.
 * This function use toggle to change views
 */
btcarouselToggleView.addEventListener("click", () => {
  changeCarouselView();
});

function changeCarouselView() {
  btcarouselToggleView.classList.toggle("carousel__bt-toggle-view__toggle-up");
  btcarouselToggleView
    .querySelectorAll("div")[0]
    .classList.toggle("carousel__bt-toggle-view__circle__toggle-up");
  sliderView.classList.toggle("carousel__hidde-view");
  carouselProjectDetails.classList.toggle("carousel__hidde-view");
}

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
const slideDetails = document.querySelector(".slide-details");
const slidesDiv = document.querySelector(".slides");

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
  changeCarouselSlideDetails(counterCarousel - 1);

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
  changeCarouselSlideDetails(counterCarousel - 1);
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
  changeCarouselSlideDetails(counterCarousel - 1);
}

/**
 * Utility function to change the project slide
 * Details.
 */
function changeCarouselSlideDetails(id) {
  slideDetails.querySelector("h1").innerHTML = projectsData[id].title;
  slideDetails.querySelector("p").innerHTML = projectsData[id].description;

  //reformatt content to don't overflow the element
  slideDetails.querySelector("p").innerHTML = truncateText(84);
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
    truncated = element.substr(0, maxLength) + "...";
  }
  return truncated;
}

document.querySelector(".slide-detail__description").innerText =
  truncateText(84);

/**
 * CAROUSEL START SECOND VIEW
 */

let carouselProjectDetailsCard = document.createElement("div");
carouselProjectDetailsCard.classList.add("carousel__project-details__card");

/**
 * Utility function to iterate projects data
 * including description, title, image, etc.
 * and add at the document.
 */
function fillCaorouselProjectDetails() {
  for (let i = 0; i <= projectsData.length - 1; i++) {
    carouselProjectDetails.appendChild(getProjectCard(i));
  }
}
fillCaorouselProjectDetails();

/**
 * Utility function to fill div card wrapper with
 * project data. it recives the projects id and fetch its
 * informations. One div present with image in left position
 * other in right position consecutivelly and return to add
 * at the DOM.
 */
function getProjectCard(id) {
  let projectData = projectsData[id];
  let cardWrapper;
  let projectCard = document.createElement("div");
  projectCard.classList.add("carousel__project-details__card");
  projectCard.id = "project-n-" + id;

  if (id % 2 == 0) {
    cardWrapper = `
                <div class="carousel__project-details__card__wrapper centralize">
                  ${
                    getProjectCardsectionPreviewImg(projectData) +
                    getProjectCardsectionDescription(projectData, false)
                  }
                  <hr class="carousel__project-details__card__line_divisory" />
                </div>`;
  } else {
    cardWrapper = `
                <div class="carousel__project-details__card__wrapper centralize">
                  ${
                    getProjectCardsectionDescription(projectData, true) +
                    getProjectCardsectionPreviewImg(projectData)
                  }
                  <hr class="carousel__project-details__card__line_divisory" />
                </div>`;
  }
  projectCard.innerHTML = cardWrapper;

  return projectCard;
}

/**
 * Utility function to fill img atributes
 */
function getProjectCardsectionPreviewImg(projectData) {
  let sectionPreviewImage;

  sectionPreviewImage = `
              <div class="carousel__project-details__card__preview">
                <img
                  src="assets/images/projects/${projectData.image}"
                  alt="Preview Image"
                />
              </div>`;

  return sectionPreviewImage;
}

/**
 * Utility function to fill details project atributes.
 * Notice that technologies is a vector and the for is
 * used to iterate and concat every items.
 */
function getProjectCardsectionDescription(projectData, odd) {
  let sectionCardContent;
  let concatTehnologies = "";
  let justifyItemsRight = [
    "carousel__project-details__card__content-right",
    "carousel__project-details__card__content__link-wrapper-right",
  ];
  if (!odd) {
    justifyItemsRight = "";
  }

  for (technology of projectData.technologies) {
    concatTehnologies += technology + " • ";
  }
  concatTehnologies = concatTehnologies.trim();

  sectionCardContent = `
              <div class="carousel__project-details__card__content ${justifyItemsRight[0]}">
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
                  class="carousel__project-details__card__content__link-wrapper ${justifyItemsRight[1]}"
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
 * CAROUSEL END SECOND VIEW
 */

/**
 * END CAROUSEL
 */

/**
 * BEGIN CONTACT
 */
const btcontactEmail = document.querySelector(".contact__output__email__image");

btcontactEmail.addEventListener("click", () => {
  copyMailAdress();
});
/**
 * END CONTACT
 */
