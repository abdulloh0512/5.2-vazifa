//Sabzi
const price = document.getElementById("card_price");
const kg = document.getElementById("kg");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
//Guruch
const price1 = document.getElementById("card_price1");
const kg1 = document.getElementById("kg1");
const plus1 = document.getElementById("plus1");
const minus1 = document.getElementById("minus1");
// Piyoz
const price2 = document.getElementById("card_price2");
const kg2 = document.getElementById("kg2");
const plus2 = document.getElementById("plus2");
const minus2 = document.getElementById("minus2");
// Go'sht
const price3 = document.getElementById("card_price3");
const kg3 = document.getElementById("kg3");
const plus3 = document.getElementById("plus3");
const minus3 = document.getElementById("minus3");
// Kartoshka
const price4 = document.getElementById("card_price4");
const kg4 = document.getElementById("kg4");
const plus4 = document.getElementById("plus4");
const minus4 = document.getElementById("minus4");
let count = 1;

// Sabzi
plus.addEventListener('click', function() {
    if(Number(kg.textContent) >= 1) {
        count++;
        kg.textContent = count;
        price.textContent = 4000 * count;
    } else if(Number(kg.textContent <= 0)) {
        alert("Siz minimal 1kg sotib olishingiz kerak");
    }
});

minus.addEventListener('click', function() {
    if(Number(kg.textContent) >= 2) {
        count--;
        kg.textContent = count;
        price.textContent = 4000 * count;
    } else if(Number(kg.textContent <= 1)) {
        alert("Siz minimal 1kg sotib olishingiz kerak.");
    }
});
// Guruch
plus1.addEventListener('click', function() {
    if(Number(kg1.textContent) >= 1) {
        count++;
        kg1.textContent = count;
        price1.textContent = 25000 * count;
    } else if(Number(kg1.textContent <= 0)) {
        alert("Siz minimal 1kg sotib olishingiz kerak");
    }
});

minus1.addEventListener('click', function() {
    if(Number(kg1.textContent) >= 2) {
        count--;
        kg1.textContent = count;
        price1.textContent = 25000 * count;
    } else if(Number(kg1.textContent <= 1)) {
        alert("Siz minimal 1kg sotib olishingiz kerak.");
    }
});

//Piyoz
plus2.addEventListener('click', function() {
    if(Number(kg2.textContent) >= 1) {
        count++;
        kg2.textContent = count;
        price2.textContent = 5000 * count;
    } else if(Number(kg2.textContent <= 0)) {
        alert("Siz minimal 1kg sotib olishingiz kerak");
    }
});

minus2.addEventListener('click', function() {
    if(Number(kg2.textContent) >= 2) {
        count--;
        kg2.textContent = count;
        price2.textContent = 5000 * count;
    } else if(Number(kg2.textContent <= 1)) {
        alert("Siz minimal 1kg sotib olishingiz kerak.");
    }
});

// Go'sht
plus3.addEventListener('click', function() {
    if(Number(kg3.textContent) >= 1) {
        count++;
        kg3.textContent = count;
        price3.textContent = 80000 * count;
    } else if(Number(kg3.textContent <= 0)) {
        alert("Siz minimal 1kg sotib olishingiz kerak");
    }
});

minus3.addEventListener('click', function() {
    if(Number(kg3.textContent) >= 2) {
        count--;
        kg3.textContent = count;
        price3.textContent = 80000 * count;
    } else if(Number(kg3.textContent <= 1)) {
        alert("Siz minimal 1kg sotib olishingiz kerak.");
    }
});

// Kartoshka
plus4.addEventListener('click', function() {
    if(Number(kg4.textContent) >= 1) {
        count++;
        kg4.textContent = count;
        price4.textContent = 6000 * count;
    } else if(Number(kg4.textContent <= 0)) {
        alert("Siz minimal 1kg sotib olishingiz kerak");
    }
});

minus4.addEventListener('click', function() {
    if(Number(kg4.textContent) >= 2) {
        count--;
        kg4.textContent = count;
        price4.textContent = 6000 * count;
    } else if(Number(kg4.textContent <= 1)) {
        alert("Siz minimal 1kg sotib olishingiz kerak.");
    }
});






