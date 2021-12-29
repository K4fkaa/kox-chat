import {getElement} from './element.js';
const colorChange = (event) => {
	const color = getElement('kolor').value;
	document.getElementsByName('1').forEach((colorto) => {
	colorto.setAttribute("style",`background-color:${color}`);
	});
}
const textColor = (event) => {
	const color = getElement('kolor2').value;
	document.getElementsByName('2').forEach((colorto) => {
	colorto.setAttribute("style",`color:${color}`);
	});
}
const colors = new Map();
export default {
current: colors,
textColor,
colorChange
};