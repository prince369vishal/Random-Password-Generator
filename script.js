const passwordBox = document.getElementById("password");
const length =16;

const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM"
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm"
const numeber = "1234567890"
const symbol = "~!@#$%^&*()_+|}{:>?<"
allChars = upperCase + lowerCase + numeber + symbol

function createPassword(){
  let password ="";
  while(length>password.length){
    password += allChars[Math.floor(Math.random()*allChars.length)]
  }
  passwordBox.value = password;

  // password += upperCase[Math.floor(Math.random()*upperCase.length)]
  // password += upperCase[Math.floor(Math.random()*lowerCase.length)]
  // password += upperCase[Math.floor(Math.random()*numeber.length)]
  // password += upperCase[Math.floor(Math.random()*symbol.length)]

}

function copyPassword(){
  passwordBox.select();
  document.execCommand("copy");
}

