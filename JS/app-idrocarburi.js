

function animazione() {

	const logo = document.querySelectorAll("#logo path");

	for(let i = 0; i<logo.length; i++){
		console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
		
	}
}

var yuppi = document.getElementById("logo")
window.onscroll = function() {
    console.log("asshole") 
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("logo").style.width = "800px";
        document.getElementById("wow").style.marginBottom = "0";
		document.getElementById("foglio").style.opacity = "100%";
        document.getElementById("path-31-outside-1").style.fill = "white";
        document.getElementById("rosso1").style.fill = "#00C999";
        document.getElementById("rosso2").style.fill = "#00C999";
        document.getElementById("rosso3").style.fill = "#00C999";
        document.getElementById("rosso4").style.fill = "#00C999";
        document.getElementById("rosso5").style.fill = "#00C999";
        document.getElementById("rosso6").style.fill = "#00C999";
        document.getElementById("verde1").style.fill = "#FD3C65";
        document.getElementById("verde2").style.fill = "#FD3C65";
        document.getElementById("verde3").style.fill = "#FD3C65";
        document.getElementById("verde4").style.fill = "#FD3C65";
        document.getElementById("verde5").style.fill = "#FD3C65";
        document.getElementById("verde6").style.fill = "#FD3C65";       
    } 
    else {
        document.getElementById("logo").style.width = "1400px";
        document.getElementById("wow").style.marginBottom = "20%";
		document.getElementById("foglio").style.opacity = "0%";
        document.getElementById("path-31-outside-1").style.fill = "black";
        document.getElementById("rosso1").style.fill = "#FD3C65";
        document.getElementById("rosso2").style.fill = "#FD3C65";
        document.getElementById("rosso3").style.fill = "#FD3C65";
        document.getElementById("rosso4").style.fill = "#FD3C65";
        document.getElementById("rosso5").style.fill = "#FD3C65";
        document.getElementById("rosso6").style.fill = "#FD3C65";
        document.getElementById("verde1").style.fill = "#00C999";
        document.getElementById("verde2").style.fill = "#00C999";
        document.getElementById("verde3").style.fill = "#00C999";
        document.getElementById("verde4").style.fill = "#00C999";
        document.getElementById("verde5").style.fill = "#00C999";
        document.getElementById("verde6").style.fill = "#00C999";
    }
}


function mouseOver() {
    document.getElementById("ez").style.display = "block";
    }
function mouseOut() {
    document.getElementById("ez").style.display = "none";
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

