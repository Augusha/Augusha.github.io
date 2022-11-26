document.addEventListener("DOMContentLoaded", () => showTab(0));
let rtl = document.getElementById("rtl");

let rtr = document.getElementById("rtr");

let rbr = document.getElementById("rbr");

let rbl = document.getElementById("rbl");

let textBlock = document.querySelector("textarea");

let ttl = document.getElementById("ttl");

let ttr = document.getElementById("ttr");

let tbr = document.getElementById("tbr");

let tbl = document.getElementById("tbl");

let tsize = document.getElementById("tsize");

let block = document.getElementById("block");

let displayParam = document.querySelector(".display_param");

let displayBlock = document.querySelector(".container_display");

const sizeValue = document.querySelector(".size_value");

const sizeText = document.querySelector(".size_text");

rtl.addEventListener("input", generate);

rtr.addEventListener("input", generate);

rbr.addEventListener("input", generate);

rbl.addEventListener("input", generate);

displayParam.addEventListener("change", (e) => {
  displayBlock.style.display = displayParam.value;
  displayParam.nextElementSibling.display = `display: ${displayParam.value};`;
});

sizeValue.addEventListener("change", (e) => {
  sizeText.style.fontSize = `${sizeValue.value}px`;
  sizeValue.nextElementSibling.fontSize = `font-size: ${sizeValue.value}px;`;
});

function generate(e) {
  ttl.value = +rtl.value;
  ttr.value = +rtr.value;
  tbr.value = +rbr.value;
  tbl.value = +rbl.value;

  let result =
    ttl.value +
    "px " +
    ttr.value +
    "px " +
    tbr.value +
    "px " +
    tbl.value +
    "px";

  block.style.borderRadius = result;
  textBlock.value = "border-radius: " + result + ";";
}

document.querySelector(".tab-header").addEventListener("click", (e) => {
  if (!e.target.classList.contains("tab-h")) return;

  showTab(e.target.dataset.tab);
});

function showTab(index) {
  let indexTab = index;

  let tabsWithHeader = document.querySelectorAll(".tab-h");

  let tabWithContents = document.querySelectorAll(".tabContent");

  for (let i = 0; i < tabsWithHeader.length; i++) {
    tabsWithHeader[i].classList.remove("active");

    if (i == indexTab) tabWithContents[i].style.display = "block";
    else tabWithContents[i].style.display = "none";
  }
  tabsWithHeader[indexTab].classList.add("active");
}
