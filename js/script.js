
// Попап

let popupLinks = document.querySelectorAll('.popup__link');

let unlock = true;
const timeout = 800;


for(let popupLink of popupLinks){
	popupLink.addEventListener('click', function(e) {
		let popupName = popupLink.getAttribute('href').replace('#', '');
		let curentPopup = document.getElementById(popupName);
		popupOpen(curentPopup);
		e.preventDefault();
	})
}

let popupCloseIcons = document.querySelectorAll('.close-popup');
for(let popupCloseIcon of popupCloseIcons){
	popupCloseIcon.addEventListener('click', function(e) {
		popupClose(this.closest('.popup'));
		e.preventDefault();
	})
}

function popupOpen(curentPopup) {
	if(curentPopup && unlock){
		const popupActive = document.querySelector('.popup.open');
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function(e) {
			if(!e.target.closest('.popup__content')){
				popupClose(e.target.closest('.popup'));
			};
		})
	}
}

function popupClose(popupActive) {
	popupActive.classList.remove('open');
}

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();


// Движение Элемента инопланетянин

let windowW = document.documentElement.clientWidth; // узнали ширину окна браузера
let flyGirl = document.querySelector('.publish__image-2');
window.addEventListener('scroll', function() {
	flyGirl.style.top = -330 + window.pageYOffset/6 + 'px';
	flyGirl.style.right = window.pageYOffset/5 + 'px';
	// var windowW = document.documentElement.clientWidth; // узнали ширину окна браузера
	if (windowW <= 950) {
		flyGirl.style.top = -670 + window.pageYOffset/6 + 'px';
	}
	if(windowW <= 850){
		flyGirl.style.top = -610 + window.pageYOffset/6 + 'px';
		flyGirl.style.right = window.pageYOffset/5 + 'px';
	}
	if(windowW <= 650){
		flyGirl.style.top = -570 + window.pageYOffset/6 + 'px';
	}
	if(windowW <= 480){
		flyGirl.style.top = -570 + window.pageYOffset/4 + 'px';
		flyGirl.style.right =  window.pageYOffset/8 + 'px';
	}
});


// Движение монет
let coins = document.querySelectorAll('.payouts__coin');

window.addEventListener('scroll', moveCoins)

function moveCoins(e) {
	coins.forEach(function(elem) {
		elem.style.right = window.pageYOffset/2 + 'px';
		if(windowW <= 1200){
			elem.style.right = window.pageYOffset/3 + 'px';
		}
		if(windowW <= 990){
			elem.style.right = window.pageYOffset/2 + 'px';
		}
		if(windowW <= 950){
			elem.style.right = window.pageYOffset/4 + 'px';
		}
		if(windowW <= 650){
			elem.style.right = window.pageYOffset/3 + 'px';
		}
	});
}

// Прогрессбар

let clientHeight =  document.documentElement.clientHeight;
let circleTwo = document.querySelector('.circle__box-2');
let circleThree = document.querySelector('.circle__box-3');
let progress = document.querySelector('.how__line-load');
window.addEventListener('scroll', progressBar);
function progressBar() {
	
	let per = clientHeight*0.1  - progress.getBoundingClientRect().top*0.1;
	if(per >= 30){
		circleTwo.classList.add('circle__active');
	}else{
		circleTwo.classList.remove('circle__active');
	}
	if(per >= 75){
		circleThree.classList.add('circle__active');
	}else{
		circleThree.classList.remove('circle__active');
	}
	progress.style.width = per + 15 + '%';
}