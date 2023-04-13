const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', ()=>{
let ctemp = parseFloat(celciusInput.value)
let ftemp =(ctemp*(9/5)) + 32  
let ktemp = (ctemp + 273)

fahrenheitInput.value = roundNumber(ftemp)
kelvinInput.value = roundNumber(ktemp)
})

fahrenheitInput.addEventListener('input', ()=>{
    let ftemp = parseFloat(fahrenheitInput.value)
    let ctemp =(ftemp - 32) * (5/9)  
    let ktemp = (ftemp -32) *(5/9) + 273
    
    celciusInput.value = roundNumber(ctemp)
    kelvinInput.value = roundNumber(ktemp)
})
kelvinInput.addEventListener('input', ()=>{
    let ktemp = parseFloat(kelvinInput.value)
    let ctemp = ktemp - 273
    let ftemp = (ktemp -273) *(9/5) + 32
    
    celciusInput.value = roundNumber(ctemp)
    fahrenheitInput.value = roundNumber(ftemp)
})