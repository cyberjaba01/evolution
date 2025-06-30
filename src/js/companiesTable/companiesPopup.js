/**
 * Clones card's template from html
 * Populates data from given object
 * Calculates position where card should be appended to page
 * Checks if there's collision with screen borders
 * Sets the left and top css properties to calculated values
 * 
 * @param {object} data is an object with properties describing current company
 * @param {number} markerX is a number representing X coordinate of the marker
 * @param {number} markerY same but Y position
 */
export function appendPopup(data, markerX, markerY) {
	const popupTemplate = document.querySelector("[card-popup-template]");
	const cardPopup = popupTemplate.content.cloneNode(true).children[0];
	const cardImg = cardPopup.querySelector("[card-popup-img]");
	const cardName = cardPopup.querySelector("[card-popup-name]");
	const cardLocation = cardPopup.querySelector("[card-popup-location]")
	const cardDesc = cardPopup.querySelector("[card-popup-desc]")
	const cardLink = cardPopup.querySelector("[card-popup-link]");
	
	// values for calculation, found by practice
	const ADDITIONAL_SPACE = 55;
	const Y_OFFSET = 1.3;
	const X_OFFSET = 1.15;

	const screenHeight = window.screen.height;
	const screenWidth = window.screen.width;
	const cardHeight = cardPopup.offsetHeight;
	const cardWidth = cardPopup.offsetWidth;

	// populating data
	cardImg.style.backgroundImage = `url('${data.data.image}')`;
	cardName.textContent = data.data.name;
	cardLocation.textContent = data.data.location;
	cardDesc.textContent = data.data.desc;
	cardLink.href = data.data.link;

	// checks if property link in data object equals "/"" makes button gray
	if (data.data.link == "/") {
		cardLink.classList.add("disabled");
	}

	document.body.appendChild(cardPopup);

	let x = 0, y = 0;

	// checks if there is a collision with border screen by Y
	if ((markerY+(cardHeight)) > screenHeight - ADDITIONAL_SPACE) {
	y = markerY - cardHeight * Y_OFFSET;
	} else y = markerY + cardHeight / 4

	// by X
	if (markerX + cardWidth > screenWidth - ADDITIONAL_SPACE) {
	x = screenWidth - cardWidth * X_OFFSET;
	} else x = markerX;

	// assign calculated values to created object
	cardPopup.style.left = `${x}px;`;
	cardPopup.style.top = `${y}px;`;
}
