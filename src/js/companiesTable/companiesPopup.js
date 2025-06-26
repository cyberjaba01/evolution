export function appendPopup(data, markerX, markerY) {
	const popupTemplate = document.querySelector("[card-popup-template]");
	const cardPopup = popupTemplate.content.cloneNode(true).children[0];
	
	const cardImg = cardPopup.querySelector("[card-popup-img]");
	const cardName = cardPopup.querySelector("[card-popup-name]");
	const cardLocation = cardPopup.querySelector("[card-popup-location]")
	const cardDesc = cardPopup.querySelector("[card-popup-desc]")
	const cardLink = cardPopup.querySelector("[card-popup-link]");


	cardImg.style.backgroundImage = `url('${data.data.image}')`;
	cardName.textContent = data.data.name;
	cardLocation.textContent = data.data.location;
	cardDesc.textContent = data.data.desc;
	cardLink.href = data.data.link;

	if (data.data.link == "/") {
		cardLink.classList.add("disabled");
	}

	document.body.appendChild(cardPopup);

	let x, y = 0;

	if ((markerY+(cardPopup.offsetHeight)) > window.screen.height-55) {
	y = markerY - cardPopup.offsetHeight*1.3;
	} else y = markerY + cardPopup.offsetHeight/4

	if (markerX + cardPopup.offsetWidth > window.screen.width-55) {
	x = window.screen.width - cardPopup.offsetWidth*1.15;
	} else x = markerX;

	cardPopup.style.cssText = `
	left: ${x}px;
	top: ${y}px;`;
}
