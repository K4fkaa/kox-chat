// Zegar SCRIPT===========================================================================================================
Number.prototype.pad = function(n) {
    for(var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};
function updateClock() {
    var now = new Date();
    var sec = now.getSeconds(), min = now.getMinutes(), hou = now.getHours(), mo = now.getMonth(), dy = now.getDate(), yr = now.getFullYear();
    var months = [
        "Styczen",
        "Luty",
        "Marzec",
        "Kwiecien",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpien",
        "Wrzesien",
        "Pazdziernik",
        "Listopad",
        "Grudzien"
    ];
    var tags = [
        "mon",
        "d",
        "y",
        "h",
        "m",
        "s",
        "mi"
    ], corr = [
        months[mo],
        dy,
        yr,
        hou,
        min,
        sec
    ];
    for(var i = 0; i < tags.length; i++)document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}
function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}
// Zegar SCRIPT Koniec=====================================================================================================
// Zmiana kolorku UWU======================================================================================================
const colorChange = (event)=>{
    const color = document.getElementById('kolor').value;
    document.getElementsByName('1').forEach((colorto)=>{
        colorto.setAttribute("style", `background-color:${color}`);
    });
    document.get;
};
const colorInput = document.getElementById("kolor");
colorInput.addEventListener('input', colorChange);
// Zmiana kolorku UWU Koniec===============================================================================================
// Wiadomości pogjump======================================================================================================
const createDiv = (text)=>{
    const div = document.createElement('div');
    div.classList.add('dymek');
    div.innerHTML = `${text}`;
    document.getElementById('wiadomosci').appendChild(div);
};
const sendMess = (event)=>{
    event.preventDefault();
    console.log('XD');
    const text = document.getElementById('textinput').value;
    text === '' ? alert("💡 | Najpierw wprowadz wiadomosc") : createDiv(text);
    document.getElementById('textinput').value = '';
};
const sendEnter = document.getElementById('yes');
sendEnter.addEventListener('submit', sendMess);
const sendButton = document.getElementById('send');
sendButton.addEventListener('click', sendMess); // Wiadomości pogjump koniec==================================================================================================
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

//# sourceMappingURL=index.d25ee831.js.map
