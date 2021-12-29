import {getElement} from './element.js';
ws = new WebSocket('ws://localhost:4000');
ws.onopen = () => {
    console.log('Web Socket Client Connected');
    ws.send('Hi this is web client');
};

ws.onmessage = (messageWS) => {
    console.log(messageWS);
    const { messages , user }  = JSON.parse(messageWS.data);
    createDiv(messages,user);
};


const createSpan = (text,classes='') => {
	const span = document.createElement('span');
	if(classes !== '') span.classList.add(classes);
	span.innerHTML = `${text}`;
	return span;
};
const addToDiv = (...elements) => {
	const div = document.createElement('div');
	elements.forEach((element) => {
		div.appendChild(element);
	});
	div.classList.add("dymek");
	return div;
};
const createDiv = (text,user) => {
	getElement('wiadomosci').appendChild(addToDiv(createSpan(`${user}: `,'user'),createSpan(text)));
};

const sendMessageToServer = (text,username) => {
    ws.send(JSON.stringify({messages: text,user : username}));
};

export const sendMess = (event) => {
	event.preventDefault();
	const text =getElement('textinput').value;
	const user =getElement('nick').value;
	text === '' || user ===''? alert("💡 | Najpierw wprowadz wiadomosc nickname") : sendMessageToServer(text,user);
	getElement('textinput').value = '';
};
