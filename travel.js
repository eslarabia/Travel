// # Strict Mode
"use strict";

const addEventOneElement = function (element , type , listener) {
    if (element.length > 2) {
      for (let i of element) {
        element[i].addEventListener(type , listener);
      }
    } else {
        element.addEventListener(type , listener);
    }
}


const navbar = document.querySelector("[data-navbar]");
const service = document.querySelector("[data-service-nav]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  service.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOneElement(navToggler , "click" , toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    service.classList.remove("active");
}

addEventOneElement(service , "click" , closeNav);

const about = document.querySelector("[data-home]");
const home = document.querySelector("[data-about]");
const popular = document.querySelector("[data-popular]");
const explore = document.querySelector("[data-explore]");

const add = function () {
  about.classList.toggle("active");
  home.classList.toggle("active");
  popular.classList.toggle("active");
  explore.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOneElement(about , "click" , toggleNav);
addEventOneElement(home , "click" , toggleNav);
addEventOneElement(popular , "click" , toggleNav);
addEventOneElement(explore , "click" , toggleNav);

const remove = function () {
    about.classList.remove("active");
    home.classList.remove("active");
    explore.classList.remove("active");
    popular.classList.remove("active");
}

addEventOneElement(about , "click" , closeNav);
addEventOneElement(home , "click" , closeNav);
addEventOneElement(explore , "click" , closeNav);
addEventOneElement(popular , "click" , closeNav);


var sections = document.querySelectorAll("section[id]");

onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      let currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

let removeAllActiveClasses = function () {
  document.querySelectorAll(".links li a").forEach((el) => {
    el.classList.remove("scroll");
  });
};

let addActiveClass = function (id) {
  let selector = `.links li a[href="#${id}"]`;
  document.querySelector(selector).classList.add("scroll");
};


const header = document.querySelector("[data-container]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll" , function () {
  if (this.window.scrollY > 90) {
    header.classList.add("slide");
    backTopBtn.classList.add("slide");
  } else {
    header.classList.remove("slide");
    backTopBtn.classList.remove("slide");
  }
});