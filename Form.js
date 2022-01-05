let FName = document.getElementById("Name")
let LName = document.getElementById("LastName")
let Email = document.getElementById("Email")
let Gender = document.getElementById("Gender")
let FirstCheck = 0
let NLpattern = /[A-Z]+[a-z]{1,}/i
let Emailpattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;




function FirstName(){

console.log(FName.value)
if (FName.value.match(NLpattern)){
    console.log("Correct")
    FName.style.backgroundColor = "yellowgreen"
    FName.style.color = "white"
    
}
else{
    console.log("please type a valid name")
    FName.style.backgroundColor = "red"
    FName.style.color = "white"
    console.log(Gender.value)
}}

function LastName(){
    
    console.log(LName.value)
    if (LName.value.match(NLpattern)){
        console.log("Correct")
        LName.style.backgroundColor = "yellowgreen"
        LName.style.color = "white"
    }
    else{
        console.log("please type a valid name")
        LName.style.backgroundColor = "red"
        LName.style.color = "white"
    }}

    function Mail(){
        if(Email.value.match(Emailpattern)){
            console.log("Correct")
        Email.style.backgroundColor = "yellowgreen"
        Email.style.color = "white"
        GenderCheck()
        }
        else{
            console.log("please type a valid Email")
            Email.style.backgroundColor = "red"
            Email.style.color = "white"
        }}

        function GenderCheck(){
            if(Gender.value != "none"){
                console.log("Gender selected: " + Gender.value)
            }
            else{
                console.log("please select a gender")
               
            }}
    


    function Checker(){
        FirstName()
        if (FName.value.match(NLpattern) && LName.value.match(NLpattern) && FirstCheck == 0){
            LastName()
            FirstCheck = 1
        }
        if (FName.value.match(NLpattern) && LName.value.match(NLpattern) && Email.value.match(Emailpattern)){
            Mail()
        }
    }