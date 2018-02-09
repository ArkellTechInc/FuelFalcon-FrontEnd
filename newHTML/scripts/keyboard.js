var currentForm;
var currentPage;
var valueForm;

function onLoad(page){
	currentPage = page;
	if(page == 2){
		currentForm = document.getElementById("fuelAmountForm").elements["fuelAmount"];
		valueForm = document.forms["value"];
	}
	if(page == 3){
		currentForm = document.getElementById("machineIDForm").elements["machineID"];
		valueForm = document.forms["machineID"];
	}
	if(page == 4){
		currentForm = document.getElementById("employeeIDForm").elements["employeeID"];
		valueForm = document.forms["employeeID"];
	}
}

function tapDec() {
	validateAndTap(".");
}
function tapZero() {
	validateAndTap("0");
}
function tapOne() {
	validateAndTap("1");
}
function tapTwo() {
	validateAndTap("2");
}
function tapThree() {
	validateAndTap("3");
}
function tapFour() {
	validateAndTap("4");
}
function tapFive() {
	validateAndTap("5");
}
function tapSix() {
	validateAndTap("6");
}
function tapSeven() {
	validateAndTap("7");
}
function tapEight() {
	validateAndTap("8");
}
function tapNine() {
	validateAndTap("9");
}
function tapBack() {
	currentForm.value = currentForm.value.substr(0, currentForm.value.length - 1);
	if(currentPage==2){
		displayValid(validateNotEmpty(currentForm.value));
	} else {
		displayValid(false);
	}
}
function tapClear() {
	currentForm.value = "";
	displayValid(false);
}
function tapEnter() {
	/* save it somewhere and advance*/
	if(currentPage == 2){
		validater = validateNotEmpty(currentForm.value);
	} else {
		validater = currentForm.value != "";
	}
	
	if (validater){
		valueForm.submit();
	} else {
		//ya funked up
		displayInvalid(true);
	}

}

function validateAndTap(character) {
	switch (currentPage) {
		case 2: //fuel amount
			if(validateLitres(character)){
				currentForm.value += character;
				displayValid(validateNotEmpty(currentForm.value));
			}
			break;
		case 3: //machineID
			if(validateMachineID(character)){
				currentForm.value += character;
				displayValid(false);
			}
			break;
		case 4: //employeeID
			if(validateEmployeeID(character)){
				currentForm.value += character;
				displayValid(false);
			}
			break;
	}
}

function validateLitres(character) {
	//number, max 2 decies
	//there will be some max
	return /^\d{1,3}([.]\d{0,2})?$/.test(currentForm.value + character);
}

function validateMachineID(character) {
	//can be whatever the fuck
	return /^\d{1,3}$/.test(currentForm.value + character);
}

function validateEmployeeID(character) {
	//gotta be 3 number digits
	return /^\d{1,3}$/.test(currentForm.value + character);
}

function validateNotEmpty(str) {
	return (str != "" && parseFloat(str) > 0);
}

function displayValid(valid) {
	if(valid){
		currentForm.style.backgroundImage = "url('images/checkMark.png')";
	} else {
		currentForm.style.backgroundImage = "none";
	}
}

function displayInvalid(valid) {
	if(valid){
		currentForm.style.backgroundImage = "url('images/xMark.png')";
	} else {
		currentForm.style.backgroundImage = "none";
	}
}