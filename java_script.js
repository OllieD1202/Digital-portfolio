//when login button pressed we want to check that the inputed username and password is the same as what are is
//once it is put correct, i want it to have a hyperlink to rick roll
let usernameBox = document.getElementById("username");
let passwordBox = document.getElementById("password");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function() {
    console.log(usernameBox.value);
    console.log(passwordBox.value);

    if (usernameBox.value === "OllieD1202" && passwordBox.value === "1234") {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
})