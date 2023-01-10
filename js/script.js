'use strict';

window.addEventListener('load', windowLoad);

function windowLoad() {
	document.body.classList.add('loaded');

	if (document.querySelector('.main-slider')) {
		new Swiper('.main-slider', {
			loop: true,
			speed: 2000,
			effect: 'fade',
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.bullets__items',
				type: 'bullets',
				clickable: true,
			},
			autheight: 'auto',
		});
	}

	document.addEventListener('click', documentClick);
	function documentClick(e) {
		const targetItem = e.target;
		if (targetItem.closest('.icon-menu')) {
			document.documentElement.classList.toggle('menu__open');
		}
	}
}
