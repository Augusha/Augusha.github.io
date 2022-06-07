//кнопка меню в header
function HeadMenuf() {
	let element = document.querySelector("header > ul");
	element.classList.toggle("menuOpen");
	element.classList.toggle("menuClose");
	let element2 = document.querySelector("header");
	element2.classList.toggle("headerClose");
	element2.classList.toggle("headerOpen");
}
let headMenu = document.querySelector("header .menu");
headMenu.onclick = HeadMenuf;



//меняет цвет у header
//код нужен полностью весь
var element = document.querySelector("header");
var element2 = document.querySelectorAll("header > div");
if (window.pageYOffset >= 30) {
	element.style.backgroundColor = "rgba("+0+","+0+","+0+",0.3)";
	for (let elem of element2) {
	   elem.style.color = "black";
	}
}

window.addEventListener("scroll", function() {
	var element = document.querySelector("header");
	if (window.pageYOffset >= 30) {
	   element.style.backgroundColor = "rgba("+0+","+0+","+0+",0.3)";
	} else {
	   element.style.backgroundColor = "";
	}
});

//карусель our-services

