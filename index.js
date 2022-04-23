// Write your solution in this file!
//declares variable
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'Micky';

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer (customerName) {
    bestCustomer = customerName;
}

function changeLeastFavoriteCustomer (customerName) {
    leastFavoriteCustomer = customerName;
}

