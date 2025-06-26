const companyCardTemplate = document.querySelector("[company-card-template]");
const companyCardContainer = document.querySelector("[company-card-parent]");
var companiesData

function createDescription(data, coords) {
	const cardPopupTemplate = document.querySelector("[card-popup-template]");
	const cardPopup = cardPopupTemplate.content.cloneNode(true).children[0];

	if (window.scrollY > 150) {cardPopup.remove()}
	else {
		const cardImg = cardPopup.querySelector("[card-popup-img]");
		const cardName = cardPopup.querySelector("[card-popup-name]");
		const cardLocation = cardPopup.querySelector("[card-popup-location]")
		const cardDesc = cardPopup.querySelector("[card-popup-desc]")
		const cardLink = cardPopup.querySelector("[card-popup-link]");

		cardImg.style.backgroundImage = `url('${data.img}')`;
		cardName.textContent = data.name;
		cardLocation.textContent = data.location;
		cardDesc.textContent = data.description;
	
		cardLink.href = data.link;
		if (data.link == "/") {
		cardLink.classList.add("disabled");
		}

		document.body.appendChild(cardPopup);

		let x, y = 0;

		if ((coords[1]+(cardPopup.offsetHeight)) > window.screen.height-55) {
		y = coords[1] - cardPopup.offsetHeight*1.3;
		} else y = coords[1] + cardPopup.offsetHeight/4

		
		if (coords[0] + cardPopup.offsetWidth > window.screen.width-55) {
		x = window.screen.width - cardPopup.offsetWidth*1.15;
		} else x = coords[0];

		cardPopup.style.cssText = `
		left: ${x}px;
		top: ${y}px;`;
	}
}


function drawLine(divXY, markerXY) {
	let width = (markerXY.x + (markerXY.width - 7) - divXY.right);
	let height = (markerXY.y + (Math.sqrt(markerXY.height) + 5) - divXY.bottom);

	let angle = Math.atan2((height),(width))*(180/Math.PI);
	width = width / Math.cos(Math.abs(angle) * Math.PI / 180);
	const line = document.createElement('div');
	line.style.cssText = `
		left:${divXY.right}px;
		top: ${divXY.bottom-2+window.scrollY}px;
		min-width: ${width}px !important;
		-moz-transform:rotate(${angle}deg);
		-webkit-transform:rotate(${angle}deg); 
		-o-transform:rotate(${angle}deg);
		-ms-transform:rotate(${angle}deg);
		transform:rotate(${angle}deg);
	`;
	line.classList.add("company-list__line")
	document.body.appendChild(line);

	return {
		0: markerXY.x,
		1: markerXY.y+window.scrollY
	} 
}

function wrapperScroll(currentCard, marker) {
	let card = currentCard
	const drawedLines = document.querySelectorAll(".company-list__line")
	let divXY = card.getBoundingClientRect();
	let markerXY = marker.getBoundingClientRect();
	let containerXY = companyCardContainer.getBoundingClientRect()  
	let divTopY = divXY.bottom-2+window.scrollY
	let containerTopY = containerXY.bottom
	let containerBottomY = containerXY.top


	if (drawedLines.length != 0) {
		const drawedCards = document.querySelectorAll(".card-popup-container")
		const drawedLines = document.querySelectorAll(".company-list__line")
		drawedLines.forEach(el => {el.remove();});
	
		if (divTopY > containerTopY || divTopY < containerBottomY) {
			const currentCard = document.querySelector(".companylist__card.activated");
			if (currentCard) currentCard.classList.remove("activated"); 
		
			[...drawedLines, ...drawedCards].forEach(el => el.remove());
		} else coords = drawLine(divXY, markerXY);
	}
}

function documentScroll(index, currentCard, marker) {
	let card = currentCard 
	const drawedLines = document.querySelectorAll(".company-list__line")
	const drawedCards = document.querySelectorAll(".card-popup-container")

	if (window.scrollY > 150) {
		[...drawedLines, ...drawedCards].forEach(el => el.remove());
	} else {
		[...drawedLines, ...drawedCards].forEach(el => el.remove());
		
		const currentCard = document.querySelector(".companylist__card.activated");
		const companyList = document.querySelector(".companylist.active");
		if (currentCard && companyList) {
			const divXY = card.getBoundingClientRect();
			const markerXY = marker.getBoundingClientRect();
			coords = drawLine(divXY, markerXY);
			createDescription(companiesData[index], coords);
		}
	}
}

async function draw() {
	companiesData.map(data => {
		const card = companyCardTemplate.content.cloneNode(true).children[0];
		const cardName = card.querySelector("[company-client-label]");
		cardName.textContent = data.name;   
		const cardLocation = card.querySelector("[company-client-location]");
		cardLocation.textContent = data.location;         
		companyCardContainer.append(card);
	})

	const companyCards = document.querySelectorAll(".companylist__card")
	let currentCard
	let marker
	let isWorking = false

	companyCards.forEach((card, index) => {
	card.addEventListener("click", () => {
		const drawedLines = document.querySelectorAll(".company-list__line");
		const drawedCards = document.querySelectorAll(".card-popup-container");
		[...drawedCards, ...drawedLines].forEach(el => {el.remove()});

		companyCards.forEach(companyCard => {
		if (companyCard != card) companyCard.classList.remove("activated");
		if (card.classList.contains("activated")) isWorking = true
		else isWorking = false
		})
		card.classList.toggle("activated");
		if (!isWorking) {
			currentCard = card;
			const cardName = card.querySelector("[company-client-label]");
			let name = cardName.textContent;    

			const mrk = companiesData.find(object => object.name === name)?.marker;
			marker = document.getElementById(`${mrk}`);
			if (!marker) console.log("Marker with matching company name not found")
			else {
				const divXY = card.getBoundingClientRect();
				const markerXY = marker.getBoundingClientRect();
				coords = drawLine(divXY, markerXY);
				createDescription(companiesData[index], coords);

				let wrapper = document.querySelector(".companylist__body-wrapper"); 

				wrapper.addEventListener("scroll", () => {wrapperScroll(currentCard, marker)});
				document.addEventListener("scroll", () => {documentScroll(index, currentCard, marker)});
			}}
		});
	});
}

fetch("/src/data/evolution_db.json")
    .then(res => res.json())
    .then(data => {companiesData = data['companies']; draw();})

