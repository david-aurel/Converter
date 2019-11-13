// select everything
let dropdown           = document.getElementById("dropdown"),
    input              = document.getElementById("input"),
    output             = document.getElementById("output"),
    outputDisplay      = document.getElementById("outputDisplay")
    

//function for the calculations of the results
function calculation(input, dropdown) {
    //look at dropdown
    switch(dropdown.value) {
        //make cases
        case "km":
            //do calculation for each case
            return output.value = (input.value / 1.609).toFixed(2)
        break
        case "miles":
            return output.value = (input * 1.609).toFixed(2)
            outputDisplay.value = "km"
        break
        case "liter":
            return  output.value = (input * 4.227).toFixed(2)
            outputDisplay.value = "cups"
        break
        case "cups":
            return output.value = (input / 4.227).toFixed(2)
                outputDisplay.value = "liter"
        break
        case "F":
            return output.value = ((input * (9/5)) + 32).toFixed(0)
            outputDisplay.value = "˚C"
        break
        case "C":
            return output.value = ((input / (9/5)) + 32).toFixed(0)
            outputDisplay.value = "˚F"
        break
        case "euro":
            return output.value = (input * 1.11504).toFixed(2)
            outputDisplay.value = "dollar"
        break
        case "dollar":
            return output.value = (input / 1.11504).toFixed(2)
            outputDisplay.value = "euro"
        break
    }
}

//function for setting the correct unit
function setUnit (dropdown) {
    switch (dropdown) {
        case "km":
            //set right unit to outputDisplay
            return outputDisplay.value = "miles"
        case "miles":
            //set right unit to outputDisplay
            return outputDisplay.value = "km"
        case "liter":
            //set right unit to outputDisplay
            return outputDisplay.value = "cups"
        case "cups":
            //set right unit to outputDisplay
            return outputDisplay.value = "liter"
        case "C":
            //set right unit to outputDisplay
            return outputDisplay.value = "F"
        case "F":
            //set right unit to outputDisplay
            return outputDisplay.value = "C"
        case "euro":
            //set right unit to outputDisplay
            return outputDisplay.value = "dollar"
        case "dollar":
            //set right unit to outputDisplay
            return outputDisplay.value = "euro"
    }
}

// eventlistener
    input.addEventListener("keyup", function(value) {
        calculation(input.value, dropdown.value)
        setUnit(dropdown.value)
    }) 



