const SubmitBTN = document.getElementById("SubmitBtn")
let PassStrength = document.getElementById("Strength")
let suggestedPass = document.getElementById("suggested")
const passwordCheckers = {
    symbols:["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";","'",'"',",","<",">",".","?","/"],
    numbers:["1","2","3","4","5","6","7","8","9","0"],
    Capital:[
        "A","B","C","D","E",
        "F","G","H","I","J",
        "K","L","M","N","O",
        "P","Q","R","S","T",
        "U","V","W","X","Y",
        "Z"
    ]
}
SubmitBTN.addEventListener("click",function(){
    PasswordChecker()
    RandomPassword()
})

function PasswordChecker(thePassword,strength){
    strength = "weak";
    thePassword = document.getElementById("passwordInput")
    if(thePassword.value === ""){
        window.alert("Please Enter Your Password")
    }
    for(let i = 0; i < passwordCheckers[`Capital`].length; i++){
       if(thePassword.value.includes(passwordCheckers[`Capital`][i])
               ||thePassword.value.includes(passwordCheckers[`numbers`][i])
               ||thePassword.value.includes(passwordCheckers[`symbols`][i]))
        {
            strength = "Strong"
        }
        
        
    }
    document.getElementById("Strength").textContent = strength
    console.log(strength)
}
const randomWordsWithNumbers = ["Bird32@", "Dog#$", "Cat%&", "Fish^&", "Horse*$","2goat*","2dog*","2cat*","3fish*","2bird*","2horse*","3pig*","i3ow*","2chicken*","5sheep*","3panda*",]
function RandomPassword(RandomPass){
    RandomPass = randomWordsWithNumbers[Math.floor(Math.random() * randomWordsWithNumbers.length)]
    suggestedPass.textContent = RandomPass
    
}