function mouseOver() {
    document.getElementById("ez").style.display = "block";
    }
function mouseOut() {
    document.getElementById("ez").style.display = "none";
    }

function transizione() {
    document.getElementById("foglio").style.opacity = "100%";
}

// menu a destra //
function mappadestra() {
    var click = document.getElementById("robodestra");
    if (click.style.gridTemplateRows === "53px 0px 25px"){
        document.getElementById("robodestra").style.gridTemplateRows = "53px 540px 25px";
        document.getElementById("schemolo").style.display = "block"; 
        document.getElementById("freccetta").style.transform = "rotate(180deg)"; 
    }
    else {
        document.getElementById("robodestra").style.gridTemplateRows = "53px 0px 25px";
        document.getElementById("schemolo").style.display = "none";
        document.getElementById("freccetta").style.transform = "rotate(0deg)";  
    }
}


function str() {
    document.getElementById("struttura").style.display = "block";
    document.getElementById("posizione").style.display = "none";
    document.getElementById("propieta").style.display = "none";
    document.getElementById("freccia").style.display = "flex";
    setTimeout(() => {  oppai(); }, 50);
}

function pos() {
    document.getElementById("struttura").style.display = "none";
    document.getElementById("posizione").style.display = "block";
    document.getElementById("propieta").style.display = "none";
    document.getElementById("freccia").style.display = "flex";
    setTimeout(() => {  oppai(); }, 50);
}

function pro() {
    document.getElementById("struttura").style.display = "none";
    document.getElementById("posizione").style.display = "none";
    document.getElementById("propieta").style.display = "block";
    document.getElementById("freccia").style.display = "flex";
    setTimeout(() => {  oppai(); }, 50);
}

function frecciola() {
    document.getElementById("struttura").style.display = "none";
    document.getElementById("posizione").style.display = "none";
    document.getElementById("propieta").style.display = "none";
    document.getElementById("freccia").style.display = "none";
    setTimeout(() => {  oppai(); }, 50);
}

function oppai() {
    document.getElementById("freccia").style.transform = "rotate(0deg)";
}

function momenta() {
    
    setTimeout(() => {  frecciola(); }, 750);
    document.getElementById("freccia").style.transform = "rotate(180deg)";

}

// secondario // 

function com() {
    document.getElementById("composti").style.display = "block";
    document.getElementById("suddivisione").style.display = "none";
    document.getElementById("dettaglio").style.display = "none";
    document.getElementById("freccio").style.display = "flex";
    setTimeout(() => {  oppa(); }, 50);
}

function sud() {
    document.getElementById("composti").style.display = "none";
    document.getElementById("suddivisione").style.display = "block";
    document.getElementById("dettaglio").style.display = "none";
    document.getElementById("freccio").style.display = "flex";
    setTimeout(() => {  oppa(); }, 50);
}

function det() {
    document.getElementById("composti").style.display = "none";
    document.getElementById("suddivisione").style.display = "none";
    document.getElementById("dettaglio").style.display = "block";
    document.getElementById("freccio").style.display = "flex";
    setTimeout(() => {  oppa(); }, 50);
}

function freccio() {
    document.getElementById("composti").style.display = "none";
    document.getElementById("suddivisione").style.display = "none";
    document.getElementById("dettaglio").style.display = "none";
    document.getElementById("freccio").style.display = "none";
    setTimeout(() => {  oppa(); }, 50);
}

function oppa() {
    document.getElementById("freccio").style.transform = "rotate(0deg)";
}

function momento() {
    
    setTimeout(() => {  freccio(); }, 750);
    document.getElementById("freccio").style.transform = "rotate(180deg)";

}