/*==================== MENU SHOW Y HIDDEN ====================*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */
const navBtn = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");
const navMenu = document.querySelector(".nav__menu");
if (navBtn) {
  navBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*==================== ACCORDION SKILLS ====================*/
const skillContent = document.querySelectorAll(".skill__content");
skillList = document.querySelectorAll(".skill__list");

function toggleList() {
  this.classList.toggle("show-skill");
}

skillContent.forEach((n) => {
  n.addEventListener("click", () => {
    if (n.className === "skill__content show-skill") {
      n.className = "skill__content";
    } else {
      for (var i = 0; i < skillContent.length; i++) {
        skillContent[i].className = "skill__content";
      }
      n.classList.add("show-skill");
    }
  });
});
/*==================== QUALIFICATION TABS ====================*/
const qualificationContent = document.querySelectorAll(
  ".qualification__content"
);
const qualificationButton = document.querySelectorAll(".qualification__button");
function activeContent(tabName) {
  qualificationContent.forEach((n) => {
    n.classList.remove("active");
  });
  const currentTab = document.querySelector(tabName);
  currentTab.classList.add("active");
}
qualificationButton.forEach((n) => {
  n.addEventListener("click", function () {
    qualificationButton.forEach((ele) => {
      ele.classList.remove("qualification__button-active");
    });
    n.classList.add("qualification__button-active");
  });
});
/*==================== SERVICES MODAL ====================*/
const activeModal = document.querySelectorAll(".service__button-arrow");
const offModal = document.querySelectorAll(".out-modal");
const modal = document.querySelectorAll(".modal");
function openModal(itemIndex) {
  modal[itemIndex - 1].classList.add("modal-show");
}
function outModal(itemIndex) {
  modal[itemIndex - 1].classList.remove("modal-show");
}
/*==================== PORTFOLIO SWIPER  ====================*/

var slideTestimonialIndex = 1;
showTestimoniaSlides((slideTestimonialIndex = 1));
function plusSlides(n) {
  showTestimoniaSlides((slideTestimonialIndex += n));
}

function showTestimoniaSlides(n) {
  var i;
  var testimonialSlides = document.getElementsByClassName(
    "testimonial__item swiper-slide"
  );
  console.log(testimonialSlides);
  if (n > testimonialSlides.length) {
    slideTestimonialIndex = 1;
  }
  if (n < 1) {
    slideTestimonialIndex = testimonialSlides.length;
  }
  for (i = 0; i < testimonialSlides.length; i++) {
    testimonialSlides[i].style.display = "none";
  }
  testimonialSlides[slideTestimonialIndex - 1].style.display = "block";
}

var slidePortfolioIndex = 1;
showPortfolioSlides((slidePortfolioIndex = 1));
function plusPortfolioSlides(n) {
  showPortfolioSlides((slidePortfolioIndex += n));
}
function showPortfolioSlides(n) {
  var i;
  var portfolioSlides = document.getElementsByClassName(
    "portfolio__item swiper-slide"
  );
  console.log(portfolioSlides);
  if (n > portfolioSlides.length) {
    slidePortfolioIndex = 1;
  }
  if (n < 1) {
    slidePortfolioIndex = portfolioSlides.length;
  }
  for (i = 0; i < portfolioSlides.length; i++) {
    portfolioSlides[i].style.display = "none";
  }
  portfolioSlides[slidePortfolioIndex - 1].style.display = "block";
}
setInterval(() => plusPortfolioSlides(1), 5000);
/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((n) => {
  n.addEventListener("click", function () {
    navLink.forEach((ele) => {
      ele.classList.remove("active-link");
    });
    n.classList.add("active-link");
  });
});

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/
const scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", function () {
  scrollTop.classList.toggle("show-scroll-top", window.pageYOffset > 500);
});

/*==================== DARK LIGHT THEME ====================*/
const changeTheme = document.querySelector(".change-theme");
const body = document.querySelector("body");
changeTheme.addEventListener("click", function () {
  changeTheme.classList.toggle("sun-light");
  body.classList.toggle("dark-body");
});
/*==================== FOOTER ====================*/
function activeNavLink(n) {
  navLink.forEach((ele) => {
    ele.classList.remove("active-link");
  });
  navLink[n].classList.add("active-link");
}
