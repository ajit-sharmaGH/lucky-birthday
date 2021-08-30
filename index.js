const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")
const hintButton = document.querySelector("#hint-button")


function compareValues(sum, luckyNumber) {
    // console.log(sum,luckyNumber)
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Your birthday is lucky🤓!! Moj krdi🤩||";
        hintButton.style.display = "none";

    } else {
        outputBox.innerText = "Birthday is not lucky,,,🤒🤒!!";




        showHint(
            "Hint");





    }



}

function showmsg() {
    {
        hintButton.innerText = "The sum of digits of your birthday should be divided by your lucky number ||";
    }
}
// checkNumberButton.addEventListener('click',function getValues(){
//   console.log(typeof dateOfBirth.value);

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (luckyNumber.value && dob) {
        compareValues(sum, luckyNumber.value)
    } else {
        outputBox.innerText = "Please enter both the fields, don't be advance 😏!!";
        hintButton.style.display = "none";
    }
}

// function showmsg() {

// }


// function hideshowHint() {

// }

function showHint(mg) {
    hintButton.style.display = "block";
    hintButton.innerText = mg;
}



function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;


}
checkNumberButton.addEventListener('click', checkBirthDateIsLucky)

hintButton.addEventListener('click', showmsg)


// "2012-12-01"