(() => {
	console.log('fired');

	// variable stack
	// grab the shields at the bottom of the page
	const 	shields 	= document.querySelectorAll('.sigil-container'),
			lightbox 	= document.querySelector('.lightbox'),
			video		= document.querySelector('video'),
			closeLB		= document.querySelector('.lightbox-close'),
			banners		= document.querySelector('#houseImages')
			housename 	= document.querySelector('.houseName'),
			houseInfo	= document.querySelector('.house-info');

	const houseData = [
		`House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`


	];

	function showLightbox() {
		// grab the right video source
		// debugger;
		let targetHouse = this.className.split(" ")[1]


		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		//change paragraph text
		housename.textContent = `House ${targetSrc}`;

		//this will only ever get you the first index in the array, which is the Stark data
		houseInfo.textContent = houseData[0];

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

	shields.forEach(shield => shield.addEventListener('click', showLightbox));

	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();