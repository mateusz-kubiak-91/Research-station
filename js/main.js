const yesBtn = document.querySelector('.yesBtn');
const noBtn = document.querySelector('.noBtn');
const startBtn = document.querySelector('.startBtn');
const pictureNPC = document.querySelector('.pictureNPC');
const questionToPlayer = document.querySelector('.questionToPlayer');

let welcomDisplay = document.querySelector('div.welcome')
let containerDisplay = document.querySelector('div.container')
let financeBar = document.querySelector('.financeBar'); 
let moraleBar = document.querySelector('.moraleBar');
let researchBar = document.querySelector('.researchBar');

const npcTable = [
    {npc: "Lider Naukowców", table: [
        {context: "Nasze testy przynoszą rezultaty, Potrzebujemy jednak większych nakładów finansowych. Możemy na to liczyć?",
        financeYes: -20, 
        moraleYes: 5, 
        progresYes: 10, 
        financeNo: 0, 
        moraleNo: -10, 
        progresNo: 0},
        {context: "Pracujemy już drugi weekend z rzędu, potrzebujemy odpoczynku. Rządamy dwóch dni wolnego!", 
        financeYes: 0, 
        moraleYes: 15, 
        progresYes: -5, 
        financeNo: 0, 
        moraleNo: -15, 
        progresNo: 5},
        {context: "Wpadliśmy na pomysł który pomoże nam zrozumieć ostatnie wyniki badań. Czy mamy przeprowadzić dodatkowe testy? ", 
        financeYes: -5, 
        moraleYes: 0, 
        progresYes: 15, 
        financeNo: 0, 
        moraleNo: 0, 
        progresNo: -5},
        {context: "Reaktor! Musimy natychmiast go wyłączyć zanim wybuchnie!", 
        financeYes: -20, 
        moraleYes: 15, 
        progresYes: -20, 
        financeNo: 0, 
        moraleNo: -20, 
        progresNo: -40}]},  
    {npc: "Szef ochrony", table: [
        {context: "Znaleźliśmy przerwane ogroszenie od wschodu stacji badawczej. Czy mam zwiększyć ochronę?", 
        financeYes: -5, 
        moraleYes: 10, 
        progresYes: 0, 
        financeNo: 0, 
        moraleNo: -5, 
        progresNo: 0},
        {context: "Jeden z pracowników poinformował mnie że kto stoi za drobnymi kradzieżami w naszej placówce. Czy mam się tym zająć?", 
        financeYes: 0, 
        moraleYes: 15, 
        progresYes: 0, 
        financeNo: 0, 
        moraleNo: -10, 
        progresNo: 0}]},
    {npc: "Lekarz", table: [
        {context: "Martwie się o zdrowie naszych naukowców, stanowczo za dużo pracują. Pozwól mi zbadać chociaż cześć z nich.", 
        financeYes: -5, 
        moraleYes: 10, 
        progresYes: 0, 
        financeNo: 0, 
        moraleNo: -5, 
        progresNo: 0},
        {context: "Mamy epidemie grypy nazakładzie. Sugeruje odizolowaćc chorych.", 
        financeYes: 0, 
        moraleYes: 10, 
        progresYes: -5, 
        financeNo: 0, 
        moraleNo: -10, 
        progresNo: 0}]},
    {npc: "Inżynier", table: [
        {context: "Konstrukcja którą zleciliście wykonać jest trudna w wykonaniu. Potrzebuje więcej ludzi aby zakończyć budowę w terminie", 
        financeYes: -10, 
        moraleYes: 5, 
        progresYes: 0, 
        financeNo: 0, 
        moraleNo: -10, 
        progresNo: 0},
        {context: "We współpracy z naukowcami naprawiliśmy nieużywany sprzęt, jeśli go uruchomimy przyspieszymy z pracami nad   projektem", 
        financeYes: -5, 
        moraleYes: 5, 
        progresYes: 10, 
        financeNo: 0, 
        moraleNo: -5, 
        progresNo: 0},
        {context: "Przysłano nam nowe narzędzie, potrzebuje tylko twojego podpisu na fakturze i ruszamy dalej z budową", 
        financeYes: -10, 
        moraleYes: 0, 
        progresYes: 10, 
        financeNo: 0, 
        moraleNo: -10, 
        progresNo: 0}]},
    {npc: "Kucharz", table: [
        {context: "Zaczyna brakować kilku składników. Wydaje mi się że ktoś podjada po nocach… Czy mogę zamówić kolejną dostawe jedzenia wczesniej? ", 
        financeYes: -10, 
        moraleYes: 5, 
        progresYes: 0, 
        financeNo: 0, 
        moraleNo: -15, 
        progresNo: 0},
        {context: "Z dzisiejszą dostawą dostaliśmy nieco więcej towaru niż zwykle. Może urządzimy impreze dla pracowników?", 
        financeYes: -5, 
        moraleYes: 20, 
        progresYes: 0, 
        financeNo: 0, 
        moraleNo: -10, 
        progresNo: 0}]},
    {npc: "Fundator", table: [
        {context: "Zarząd wyraził chęć dofinansowania projektu. Wystarczy jedynie podpisać zgodę na wprowadzenie zmodyfikowanego genetycznie jedzenia dla personelu. ", 
        financeYes: 20, 
        moraleYes: -10, 
        progresYes: 0, 
        financeNo: 0, 
        moraleNo: 10, 
        progresNo: 0},
        {context: "Zarząd nie jest zadowolony z progresu, musimy przyspieszyć. Wydaj polecenie wykonania nadgodzin.     Potrzebujemy wyników. ", 
        financeYes: 0, 
        moraleYes: -15, 
        progresYes: 10, 
        financeNo: 0, 
        moraleNo: 10, 
        progresNo: -10},
        {context: "Zarząd chce wybrac się z wizytą na stację badawczą. Czy termin za dwa dni jest odpowiedni?", 
        financeYes: 0, 
        moraleYes: -10, 
        progresYes: 0, 
        financeNo: 0, 
        moraleNo: 5, 
        progresNo: 0}]},
    {npc: "Specjalista IT", table: [
        {context: "Zaistniała potrzeba kalibracji sprzętu badawczego, mój zespół może się tym zajać", 
        financeYes: -5, 
        moraleYes: 0, 
        progresYes: 5, 
        financeNo: 0, 
        moraleNo: -5, 
        progresNo: 0},
        {context: "Ktoś próbował włamać się do naszych serwerów! Na szczęscie powstrzymaliśmy ten atak. Proponuje zwiększyć     nakłady na obronę przed cyber atakami", 
        financeYes: -10, 
        moraleYes: 5, 
        progresYes: 0, 
        financeNo: 0, 
        moraleNo: -10, 
        progresNo: 0},
        {context: "Wykonaliśmy kilka usprawnień które pomogą naukowcą w ich badaniach, wystarczy prosta aktualizacja systemu.   Czy wyrażasz na to zgodę? ", 
        financeYes: 0, 
        moraleYes: 5, 
        progresYes: 15, 
        financeNo: 0, 
        moraleNo: -10, 
        progresNo: 0}]}];

const randomTable = function() {
    let randomChoise = npcTable[Math.floor(Math.random() * npcTable.length)];
    let table = randomChoise.table;
    let npc = randomChoise.npc;
    let question = table[Math.floor(Math.random() * table.length)].context;    
    let financeYes = table[Math.floor(Math.random() * table.length)].financeYes;    
    let moraleYes = table[Math.floor(Math.random() * table.length)].moraleYes;    
    let progresYes = table[Math.floor(Math.random() * table.length)].progresYes;    
    let financeNo = table[Math.floor(Math.random() * table.length)].financeNo;    
    let moraleNo = table[Math.floor(Math.random() * table.length)].moraleNo;    
    let progresNo = table[Math.floor(Math.random() * table.length)].progresNo;  

    return [npc, question, financeYes, moraleYes, progresYes, financeNo, moraleNo, progresNo]
}
      
    pictureNPC.textContent = randomTable()[0];
    questionToPlayer.textContent = randomTable()[1];

    
// startBtn.addEventListener('click', () => {
//     welcomDisplay.style.display = 'none'
//     containerDisplay.style.display = 'grid'
//     randomTable()
//     pictureNPC.textContent = randomTable()[0];
//     questionToPlayer.textContent = randomTable()[1];
// });

yesBtn.addEventListener('click', () => {
    randomTable();

    pictureNPC.textContent = randomTable()[0];
    questionToPlayer.textContent = randomTable()[1];

    // warunek dodający wartości na paskach
    if (financeBar.style.width.length == 3) {
        financeBar.style.width = `${parseInt(financeBar.style.width.slice(-3,2)) + (randomTable()[2])}%`
    } else {
        financeBar.style.width = `${parseInt(financeBar.style.width.slice(-2,1)) + (randomTable()[2])}%`
    }

    if (moraleBar.style.width.length == 3) {
        moraleBar.style.width = `${parseInt(moraleBar.style.width.slice(-3,2)) + (randomTable()[3])}%`
    } else {
        moraleBar.style.width = `${parseInt(moraleBar.style.width.slice(-2,1)) + (randomTable()[3])}%`
    }

    if (researchBar.style.width.length == 3) {
        researchBar.style.width = `${parseInt(researchBar.style.width.slice(-3,2)) + (randomTable()[4])}%`
    } else {
        researchBar.style.width = `${parseInt(researchBar.style.width.slice(-2,1)) + (randomTable()[4])}%`
    }

    // warunek zagrorzenia
    if (parseInt(financeBar.style.width.slice(-2,1)) && parseInt(financeBar.style.width.slice(-2,1)) && parseInt(researchBar.style.width.slice(-2,1)) >= 9) {
        
    }

    // warunek przegranej


    // warunek zwycięstwa
});

noBtn.addEventListener('click', () => {

});