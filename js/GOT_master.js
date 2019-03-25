(() => {
	console.log('fired');

	// variable stack
	// grab the shields at the bottom of the page
	const 	shields 	= document.querySelectorAll('.sigil-container'),
			lightbox 	= document.querySelector('.lightbox'),
			video		= document.querySelector('video'),
			closeLB		= document.querySelector('.lightbox-close'),
			banners		= document.querySelector('#houseImages')

	function showLightbox() {
		// grab the right video source
		// debugger;
		let targetHouse = this.className.split(" ")[1]


		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `videos/House-${targetSrc}.mp4`;


		lightbox.classList.add('show-lightbox');

		video.load();
		video.play();
	}

	function hideLightbox() {
		lightbox.classList.remove('show-lightbox');
		// rewind the video to the beginning
		// and also pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanner() {
		const offSet = 600;

		totalOffest = this.dataset.offset * offSet// + "px";
		//banners.style.right = totalOffest;
		TweenMax.to(banners, 0.8, { right: totalOffest });
	}

	shields.forEach(shield => shield.addEventListener('click', animateBanner));

	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();