// Select elements
const passwordInput = document.getElementById("generatedPassword");
const generatePasswordButton = document.getElementById(
  "generatePasswordButton"
);

// Password settings
const passwordLength = 16;
const allCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
  "abcdefghijklmnopqrstuvwxyz" +
  "1234567890" +
  "!@#$%&*";

// Event listener for generating password
generatePasswordButton.addEventListener("click", () => {
  let password = "";
  for (let i = 1; i <= passwordLength; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordInput.value = password;
});

// Function to copy the generated password
function copyGeneratedPassword() {
  passwordInput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
