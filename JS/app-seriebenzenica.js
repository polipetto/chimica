function mouseOver() {
    document.getElementById("ez").style.display = "block";
    }
function mouseOut() {
    document.getElementById("ez").style.display = "none";
    }

function transizione() {
    document.getElementById("foglio").style.opacity = "100%";
}

function nom() {
    document.getElementById("nomenclatura").style.display = "block";
    document.getElementById("struttura").style.display = "none";
    document.getElementById("delocalizzazione").style.display = "none";
    document.getElementById("aromaticità").style.display = "none";
    document.getElementById("propietà").style.display = "none";
    document.getElementById("freccia").style.display = "flex";
    setTimeout(() => {  oppai(); }, 50);
}

function str() {
    document.getElementById("nomenclatura").style.display = "none";
    document.getElementById("struttura").style.display = "block";
    document.getElementById("delocalizzazione").style.display = "none";
    document.getElementById("aromaticità").style.display = "none";
    document.getElementById("propietà").style.display = "none";
    document.getElementById("freccia").style.display = "flex";
    setTimeout(() => {  oppai(); }, 50);
}

function del() {
    document.getElementById("nomenclatura").style.display = "none";
    document.getElementById("struttura").style.display = "none";
    document.getElementById("delocalizzazione").style.display = "block";
    document.getElementById("aromaticità").style.display = "none";
    document.getElementById("propietà").style.display = "none";
    document.getElementById("freccia").style.display = "flex";
    setTimeout(() => {  oppai(); }, 50);
}

function aro() {
    document.getElementById("nomenclatura").style.display = "none";
    document.getElementById("struttura").style.display = "none";
    document.getElementById("delocalizzazione").style.display = "none";
    document.getElementById("aromaticità").style.display = "block";
    document.getElementById("propietà").style.display = "none";
    document.getElementById("freccia").style.display = "flex";
    setTimeout(() => {  oppai(); }, 50);
}

function pro() {
    document.getElementById("nomenclatura").style.display = "none";
    document.getElementById("struttura").style.display = "none";
    document.getElementById("delocalizzazione").style.display = "none";
    document.getElementById("aromaticità").style.display = "none";
    document.getElementById("propietà").style.display = "block";
    document.getElementById("freccia").style.display = "flex";
    setTimeout(() => {  oppai(); }, 50);
}

function frecciola() {
    document.getElementById("nomenclatura").style.display = "none";
    document.getElementById("struttura").style.display = "none";
    document.getElementById("delocalizzazione").style.display = "none";
    document.getElementById("aromaticità").style.display = "none";
    document.getElementById("propietà").style.display = "none";
    document.getElementById("freccia").style.display = "none";
    setTimeout(() => {  oppai(); }, 50);
}

function oppai() {
    document.getElementById("freccia").style.transform = "rotate(0deg)";
}

function momento() {
    
    setTimeout(() => {  frecciola(); }, 750);
    document.getElementById("freccia").style.transform = "rotate(180deg)";

}