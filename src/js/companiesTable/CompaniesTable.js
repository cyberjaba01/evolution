import { appendLine } from "./companiesLine.js"
import { appendPopup } from "./companiesPopup.js"

export default class CompaniesTable {
	constructor() {
		this.marker;
		this.target;
		this.coords;
		this.databaseBranch = "companies_v2";
		this.companiesData;
		this.companyData;
		this.isActive = false;
		this.wrapper;
		this.wrapperScrollhandler = null;
        this.documentScrollhandler = null;
	}

	async initializeTable() {
		
		this.wrapper = document.querySelector("[company-card-parent]");

		await this.fetchCompaniesData();
		this.createRows();

		this.wrapper.addEventListener('click', (event) => {
			if (event.target.closest(".companylist__card")) {
				this.target = event.target.closest(".companylist__card");
				this.handleRowClick()
			}
		});
	}

	async fetchCompaniesData() {
		try {
			const response = await fetch("/src/data/evolution_db.json");
			const data = await response.json();
			this.companiesData = data[this.databaseBranch];
		}
		catch (error) {throw new Error("Unseccesful connection to json", error)}

		if (!this.companiesData) throw new Error("Companies data not found or null")
	}

	createRows() {
		const fragment = document.createDocumentFragment();

		this.companiesData.forEach(companyData => {
			const companyRow = document.createElement('div');
			companyRow.classList.add("companylist__card");
			companyRow.dataset.index = companyData.id;
			companyRow.innerHTML = `
				<div class="companylist__card-info">
					<h1 company-client-label>${companyData.data.name}</h1>
					<span company-client-location>${companyData.data.location}</span>
				</div>
			`;
			fragment.appendChild(companyRow);
		})

		this.wrapper.append(fragment);
	}

	handleRowClick() {
		this.removeAll();
		if (this.isActive) return;
		
		this.companyData = this.companiesData[this.target.dataset.index - 1]

		this.target.classList.add("activated");

		this.marker = null;
		this.marker = document.querySelector(`#${this.companyData.marker}`);
		if (!this.marker) throw new Error(`Marker with name ${this.companyData.marker} doesnt exist`);

		this.markCompanyLocation();
	}

	markCompanyLocation() {
		this.getAllCoords();

		appendLine(this.coords);
		appendPopup(this.companyData, this.coords.markerX, this.coords.markerY);

		this.cleanupEventListeners();

		this.wrapperScrollhandler = () => {
			this.getAllCoords();
			this.wrapperScroll();
		};
		this.documentScrollhandler = () => {
			this.getAllCoords();
			this.documentScroll();
		};

        this.wrapper.addEventListener("scroll", this.wrapperScrollhandler);
        document.addEventListener("scroll", this.documentScrollhandler);
	}

	documentScroll() {
		[...document.querySelectorAll(".company-list__line"), 
		...document.querySelectorAll(".card-popup-container")].forEach(el => el.remove());
		
		if (window.scrollY < 150) {		
			const currentCard = document.querySelector(".companylist__card.activated");
			const companyList = document.querySelector(".companylist.active");
			if (currentCard && companyList) {
				appendLine(this.coords);
				appendPopup(this.companyData, this.coords.markerX, this.coords.markerY);
			}
		}
	}

	wrapperScroll() {
		const drawedLines = document.querySelectorAll(".company-list__line")

		let wrapperXY = this.wrapper.getBoundingClientRect()  

		let rowTopY = this.coords.rowY-2+window.scrollY

		let wrapperTopY = wrapperXY.bottom
		let wrapperBottomY = wrapperXY.top

		if (drawedLines.length != 0) {
			const drawedCards = document.querySelectorAll(".card-popup-container")
			const drawedLines = document.querySelectorAll(".company-list__line")
			drawedLines.forEach(el => {el.remove();});
		
			if (rowTopY > wrapperTopY || rowTopY < wrapperBottomY) {
				const currentCard = document.querySelector(".companylist__card.activated");
				if (currentCard) currentCard.classList.remove("activated"); 
			
				[...drawedLines, ...drawedCards].forEach(el => el.remove());
			} else appendLine(this.coords);
		}
	}

	getAllCoords() {
		let width, height, angle;

		const rowCoords = this.target.getBoundingClientRect();
		const markerCoords = this.marker.getBoundingClientRect();

		width = (markerCoords.x + (markerCoords.width - 7) - rowCoords.right);
		height = (markerCoords.y + (Math.sqrt(markerCoords.height) + 5) - rowCoords.bottom);
		angle = Math.atan2((height),(width))*(180/Math.PI);
		width = width / Math.cos(Math.abs(angle) * Math.PI / 180);

		return this.coords = {
			"rowX": rowCoords.right,
			"rowY": rowCoords.bottom-2+window.scrollY,
			"markerX": markerCoords.x,
			"markerY": markerCoords.y+window.scrollY,
			"width": width,
			"angle": angle
		}
	}

	removeAll() {
		const drawedLines = document.querySelectorAll(".company-list__line")
		const drawedCards = document.querySelectorAll(".card-popup-container")
		const activeRows = document.querySelectorAll(".companylist__card.activated")
		let isDuplicate = false;

		if (drawedLines) drawedLines.forEach(line => line.remove());
		if (drawedCards) drawedCards.forEach(card => card.remove());
		if (activeRows) {
			activeRows.forEach(activeRow => {
				if (activeRow === this.target) isDuplicate = true;
				activeRow.classList.remove("activated");
			});
		} 

		if (isDuplicate) return this.isActive = true;
		this.isActive = false;
	}

	cleanupEventListeners() {

        if (this.wrapperScrollhandler) {
            this.wrapper.removeEventListener("scroll", this.wrapperScrollhandler);
        }
        if (this.documentScrollhandler) {
            document.removeEventListener("scroll", this.documentScrollhandler);
        }
        this.wrapperScrollhandler = null;
        this.documentScrollhandler = null;

	}
}
