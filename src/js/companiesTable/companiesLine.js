export function appendLine(coords) {
	const line = document.createElement('div');
	line.style.cssText = `
		left:${coords.rowX}px;
		top: ${coords.rowY}px;
		min-width: ${coords.width}px !important;
		-moz-transform:rotate(${coords.angle}deg);
		-webkit-transform:rotate(${coords.angle}deg); 
		-o-transform:rotate(${coords.angle}deg);
		-ms-transform:rotate(${coords.angle}deg);
		transform:rotate(${coords.angle}deg);
	`;
	line.classList.add("company-list__line")
	document.body.appendChild(line);
}

