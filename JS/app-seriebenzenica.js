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

// menu a destra //
function mappadestra() {
    var click = document.getElementById("robodestra");
    if (click.style.gridTemplateRows === "53px 0px 25px"){
        document.getElementById("robodestra").style.gridTemplateRows = "53px 540px 25px";
        document.getElementById("schemolo").style.display = "block"; 
        document.getElementById("robodestra").style.gridTemplateColumns = "893.61px 66.39px";
        document.getElementById("freccetta").style.transform = "rotate(180deg)"; 
    }
    else {
        document.getElementById("robodestra").style.gridTemplateRows = "53px 0px 25px";
        document.getElementById("schemolo").style.display = "none";
        document.getElementById("robodestra").style.gridTemplateColumns = "0 66.39px";
        document.getElementById("freccetta").style.transform = "rotate(0deg)";  
    }
}

function zoom() {
    if (document.getElementById("zoom").style.filter === "invert(100%)"){
        document.getElementById("gigantifica").style.width = "300px";
        document.getElementById("zoom").style.filter = "invert(0%)";       
    }
    else {
        document.getElementById("gigantifica").style.width = "95%";
        document.getElementById("zoom").style.filter = "invert(100%)";    
    }
}