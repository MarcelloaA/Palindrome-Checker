const user_input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

// check if user input is blank
const checkBlankInput = () => {
    return user_input.value.trim() === "";
}

// remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn to lower case
const adjustedUserInput = (input) => {
    return input.replace(/[^0-9a-z]/gi, '').toLowerCase();
};

// check if palindrome
const isPalindrome = (input) => {
    const userInput = adjustedUserInput(input);
    const userInputReverse = userInput.split('').reverse().join('');
    return userInput === userInputReverse;
}

// update result
const updatedResult = () => {
    const inputValue = user_input.value;
    if (isPalindrome(inputValue)) {
        result.textContent = `${inputValue} is a palindrome.`;
    } else {
        result.textContent = `${inputValue} is not a palindrome.`;
    }
}

// button event listener
button.addEventListener("click", () => {
    // check if input is blank
    if (checkBlankInput()) {
        alert("Please input a value");
    } else {
        updatedResult();
    }
});

