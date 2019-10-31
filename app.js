// select everything
let kmInput     = document.querySelector("#km"),
    milesInput  = document.querySelector("#miles"),
    literInput  = document.querySelector("#liter"),
    cupsInput   = document.querySelector("#cups");


// event listeners
kmInput.addEventListener('keyup', function(value) {
    kmToMiles(kmInput.value);
});

milesInput.addEventListener('keyup', function(value) {
    milesToKm(milesInput.value);
});

literInput.addEventListener('keyup', function(value) {
    literToCups(literInput.value);
});

cupsInput.addEventListener('keyup', function(value) {
    cupsToLiters(cupsInput.value);
});


// km to miles
function kmToMiles(km) {
    milesInput.value = (km / 1.609).toFixed(2);
};
// miles to km
function milesToKm(miles) {
    kmInput.value = (miles * 1.609).toFixed(2);
};
// liter to cups
function literToCups(liter) {
    cupsInput.value = (liter * 4.227).toFixed(2);
};
// cups to liter
function cupsToLiters(cups) {
    literInput.value = (cups / 4.227).toFixed(2);
};

