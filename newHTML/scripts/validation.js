function submitForm(){
	console.log("form submitted");
	document.getElementById("submitButton").style.backgroundImage = "url('images/submitted.png')";
	changeText(3);
}

function changeText(index){
	if(index > 0){
		document.getElementById("submitStatus").innerHTML = "RETURNING TO HOMEPAGE IN " + (index) + "...";
		setTimeout(function(){ changeText(index - 1); }, 1000);
	} else {
		window.location.href = 'fuelType.html';
	}
}