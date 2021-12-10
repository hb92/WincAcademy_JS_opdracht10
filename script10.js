//Deel1: Hey Kiddo

//fucntion that checks
const checkAge = function (age) {
    return age >= 18;
};

//function that greets
const greetPerson = function (age) {
    const adultAge = checkAge(age);
    if (adultAge === true) {
        return console.log("Hello There");
    } else return console.log ("Hey Kiddo")
};

console.log(greetPerson(6));
console.log(greetPerson(18));
console.log(greetPerson(50));

//Deel 2: VAT calculations

//vat1

const calculateVat = function (basePrice, vatPer) {
    return basePrice * (vatPer / 100);
};

const totalPrice = function (basePrice, vatPer) {
    const vat = calculateVat (basePrice, vatPer);
    return basePrice + vat;
};

console.log(totalPrice(20,6));
console.log(totalPrice(100,21));

//vat2

const calculateBasePrice = function(priceTotal, perVat) {
    const basePrice = priceTotal / ((100 + perVat) / 100);
    return basePrice;
};

const calculatePriceVat = function(priceTotal, perVat) {
    const basePrice = calculateBasePrice(priceTotal, perVat);
    const VAT = priceTotal - basePrice;
    return [basePrice, VAT];
};

console.log(calculatePriceVat(1400, 21)); 
console.log(calculatePriceVat(100, 6));