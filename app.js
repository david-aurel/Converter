// select everything
let kmInput = document.querySelector("#km"),
    milesInput = document.querySelector("#miles");


// event listeners
kmInput.addEventListener('keyup', function(value) {
    kmToMiles(kmInput.value);
});

milesInput.addEventListener('keyup', function(value) {
    milesToKm(milesInput.value);
});


// km to miles
function kmToMiles(km) {
    milesInput.value = (km / 1.609).toFixed(2);
}
// miles to km
function milesToKm(miles) {
    kmInput.value = (miles * 1.609).toFixed(2);
}