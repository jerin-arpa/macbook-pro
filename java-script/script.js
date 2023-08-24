let bestPriceCost = 1299;
let memory8gbCost = 0;
let memory16gbCost = 180;
let userMemoryTaken = 0;

let ssd256GbCost = 0;
let ssd512Cost = 100;
let sss1TbCost = 180;
let userStorageTaken = 0;

let freeDeliveryCost = 0;
let paidDeliveryCost = 20;
let userDeliveryTaken = 0;


function updateTotalPrice() {
    totalPrice = bestPriceCost + userMemoryTaken + userStorageTaken + userDeliveryTaken;
    const totalElementPrice = document.getElementById('totalPrice');
    totalElementPrice.innerText = totalPrice;

    const total = document.getElementById('total');
    total.innerText = totalPrice;
}

function promoCode() {
    updateTotalPrice();
    const savingsAmount = document.getElementById('savingsAmount');
    const promoCode = savingsAmount.value;
    savingsAmount.value = '';

    if (promoCode == 'JERIN') {
        const discount = 20 * totalPrice / 100;
        totalPrice -= discount;
        console.log(totalPrice);
        total.innerText = totalPrice;
    }
    else {
        alert('Please enter a valid coupon code for 20% discount');
    }
}

const memory8Gb = document.getElementById('memory8Gb').addEventListener('click', function () {
    userMemoryTaken = memory8gbCost;

    const extraMemoryCostFor8Gb = document.getElementById('extraMemoryCost');
    extraMemoryCostFor8Gb.innerText = userMemoryTaken;
    updateTotalPrice();
});


const memory16Gb = document.getElementById('memory16Gb').addEventListener('click', function () {
    userMemoryTaken = memory16gbCost;

    const extraMemoryCostFor16Gb = document.getElementById('extraMemoryCost');
    extraMemoryCostFor16Gb.innerText = userMemoryTaken;
    updateTotalPrice();
});

const ssd256Gb = document.getElementById('ssd256Gb').addEventListener('click', function () {
    userStorageTaken = ssd256GbCost;

    const extraStorageCostFor256GbSsd = document.getElementById('extraStorageCost');
    extraStorageCostFor256GbSsd.innerText = userStorageTaken;
    updateTotalPrice();
});


const ssd512Gb = document.getElementById('ssd512Gb').addEventListener('click', function () {
    userStorageTaken = ssd512Cost;

    const extraStorageCostFor512GbSsd = document.getElementById('extraStorageCost');
    extraStorageCostFor512GbSsd.innerText = userStorageTaken;
    updateTotalPrice();
});


const ssd1Tb = document.getElementById('ssd1Tb').addEventListener('click', function () {
    userStorageTaken = sss1TbCost;

    const extraStorageCostFor1TbSsd = document.getElementById('extraStorageCost');
    extraStorageCostFor1TbSsd.innerText = userStorageTaken;
    updateTotalPrice();
});


const freeDelivery = document.getElementById('freeDelivery').addEventListener('click', function () {
    userDeliveryTaken = freeDeliveryCost;

    const freeDeliveryCharge = document.getElementById('deliveryCharge');
    freeDeliveryCharge.innerText = userDeliveryTaken;
    updateTotalPrice();
});


const paidDelivery = document.getElementById('paidDelivery').addEventListener('click', function () {
    userDeliveryTaken = paidDeliveryCost;

    const paidDeliveryCharge = document.getElementById('deliveryCharge');
    paidDeliveryCharge.innerText = userDeliveryTaken;
    updateTotalPrice();
});



const promoButton = document.getElementById('promoButton').addEventListener('click', function () {
    promoCode();
});

const resetBtn = document.getElementById('resetBtn').addEventListener('click', function () {
    userMemoryTaken = 0;
    userStorageTaken = 0;
    userDeliveryTaken = 0;


    const extraMemoryCostFor8Gb = document.getElementById('extraMemoryCost');
    extraMemoryCostFor8Gb.innerText = userMemoryTaken;

    const extraMemoryCostFor16Gb = document.getElementById('extraMemoryCost');
    extraMemoryCostFor16Gb.innerText = userMemoryTaken;

    const extraStorageCostFor256GbSsd = document.getElementById('extraStorageCost');
    extraStorageCostFor256GbSsd.innerText = userStorageTaken;

    const extraStorageCostFor512GbSsd = document.getElementById('extraStorageCost');
    extraStorageCostFor512GbSsd.innerText = userStorageTaken;

    const extraStorageCostFor1TbSsd = document.getElementById('extraStorageCost');
    extraStorageCostFor1TbSsd.innerText = userStorageTaken;

    const freeDeliveryCharge = document.getElementById('deliveryCharge');
    freeDeliveryCharge.innerText = userDeliveryTaken;

    const paidDeliveryCharge = document.getElementById('deliveryCharge');
    paidDeliveryCharge.innerText = userDeliveryTaken;


    const savingsAmount = document.getElementById('savingsAmount');
    savingsAmount.value = '';


    updateTotalPrice();
});