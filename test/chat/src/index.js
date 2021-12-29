import {getElement} from './element.js';
import color from './color';
import {sendMess} from "./chat.js";
// Zmiana kolorku UWU======================================================================================================
const colorInput = getElement("kolor");
colorInput.addEventListener('input', color.colorChange);
const textInput = getElement('kolor2');
textInput.addEventListener('input', color.textColor);

// Zmiana kolorku UWU Koniec===============================================================================================
// Wiadomości pogjump======================================================================================================
const sendEnter = getElement('yes');
sendEnter.addEventListener('submit', sendMess);
const sendButton = getElement('send');
sendButton.addEventListener('click', sendMess);







// Wiadomości pogjump koniec==================================================================================================

//Notatki=====================================================================================================================
//!!!Do zrobienia!!!
//
//konta ustawianie nicku w sumie tylko narazie
//konta na 🍪 imo .... kolorek też by można było zrobić na 🍪 xd https://www.w3schools.com/js/js_cookies.asp
//wyświetlanie nicku przy wiadomości 
//Możliwość korzystania w więcej niż 1 osobe XD
//postawienie na jakimś googlu czy amazonie 
//
//
//!!!Może kiedyś ale raczej na 100% nie XD!!!
//
//połączenie z bazą danych *stałe wiadomości
//Konta jakieś logowanie np loginem i hasłem albo po prostu googlem
//zmiana avatara 
//Wyswietlanie avatara przy nicku
//możliwość wysyłania plików na czat
// dostosowanie do telefonu 
//Udzwiekowienie XD 
//aktywni urzytkownicy obok czatu 