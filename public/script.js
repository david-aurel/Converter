// select everything
let e           = document.getElementById("dropdown"),
    userSelect  = e.options[e.selectedIndex].value,
    input       = document.getElementById("input"
    
    console.log(input.value)

//functions for the calculations of the results
function kmToMiles(km) {
    milesInput.value = (km / 1.609).toFixed(2)
}
function milesToKm(miles) {
    kmInput.value = (miles * 1.609).toFixed(2)
}
function literToCups(liter) {
    cupsInput.value = (liter * 4.227).toFixed(2)
}
function cupsToLiters(cups) {
    literInput.value = (cups / 4.227).toFixed(2)
}
function celsiusToFahrenheit(celsius) {
    fahrenheitInput.value = ((celsius * (9/5)) + 32).toFixed(0)
}
function fahrenheitToCelsius(fahrenheit) {
    celsiusInput.value = ((fahrenheit - 32) * (5/9)).toFixed(1)
} 
function euroToDollar(euro) {
    dollarInput.value = (euro * 1.11504).toFixed(2)
}
function dollarToEuro(dollar) {
    euroInput.value = (dollar * 0.89683).toFixed(2)
} 


// function to make eventlistener
function makeEventListener(input, convertFunction) {
    input.addEventListener("keyup", function(value) {
        convertFunction(input.value)
    })    
}    

// function pass in the right arguments into the eventListener function
function makeEventlistenerArguments(input, calculation) {
    for (let i = 0; i < selector.length; i++) {
        makeEventListener(input[i], calculation[i])
    }    
}    

//call function to pass in arguments to make eventListener
makeEventlistenerArguments(selector, calculation)



