/**
 * Simply appends line to page, moved out to reduce code in class file
 * 
 * @param {array of num} coords that are calculated earlier
 * @param {num} rowX x pos of row in companies table (left map menu)
 * @param {num} rowY y pos of row
 * @param {num} markerX x of marker that represend company location
 * @param {num} markerY
 * @param {num} width width of the line
 * @param {num} angle angle of line's rotation
 */
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

