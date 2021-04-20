
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
