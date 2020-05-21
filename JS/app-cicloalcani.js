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
    document.getElementById("isomeria").style.display = "none";
    document.getElementById("propieta").style.display = "none";
    document.getElementById("reazioni").style.display = "none";
    document.getElementById("freccia").style.display = "flex";
    setTimeout(() => {  oppai(); }, 50);
}

function iso() {
    document.getElementById("nomenclatura").style.display = "none";
    document.getElementById("isomeria").style.display = "block";
    document.getElementById("propieta").style.display = "none";
    document.getElementById("reazioni").style.display = "none";
    document.getElementById("freccia").style.display = "flex";
    setTimeout(() => {  oppai(); }, 50);
}

function pro() {
    document.getElementById("nomenclatura").style.display = "none";
    document.getElementById("isomeria").style.display = "none";
    document.getElementById("propieta").style.display = "block";
    document.getElementById("reazioni").style.display = "none";
    document.getElementById("freccia").style.display = "flex";
    setTimeout(() => {  oppai(); }, 50);
}

function rea() {
    document.getElementById("nomenclatura").style.display = "none";
    document.getElementById("isomeria").style.display = "none";
    document.getElementById("propieta").style.display = "none";
    document.getElementById("reazioni").style.display = "block";
    document.getElementById("freccia").style.display = "flex";
    setTimeout(() => {  oppai(); }, 50);
}

function frecciola() {
    document.getElementById("nomenclatura").style.display = "none";
    document.getElementById("isomeria").style.display = "none";
    document.getElementById("propieta").style.display = "none";
    document.getElementById("reazioni").style.display = "none";
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
