const amountOfCigaretteBlocks = document.querySelector('[data-amount]');
const priceValue = document.querySelector('[data-price-value]');
const minusButton = document.querySelector('[data-minus-btn]');
const plusButton = document.querySelector('[data-plus-btn]');
const oderAmount = document.querySelector('[data-order-amount]');
const block = document.querySelector('[data-block]');
const price = Number(priceValue.textContent);
let blockAmount = Number(amountOfCigaretteBlocks.textContent);

minusButton.addEventListener('click', () => {
    if (oderAmount.textContent === '1') {
        oderAmount.textContent = 1;
    } else {
        oderAmount.textContent = Number(oderAmount.textContent) - 1;
        priceValue.textContent = Number(priceValue.textContent) - price;
        blockAmount -= 1;
    }
    if (blockAmount === 1) block.textContent = 'блок:';
    if (blockAmount > 1 && blockAmount < 5) block.textContent = 'блока:';
    if (blockAmount > 4) block.textContent = 'блоков:';
    amountOfCigaretteBlocks.textContent = oderAmount.textContent;
});

plusButton.addEventListener('click', () => {
    if (oderAmount.textContent === '10') {
        oderAmount.textContent = 10;
    } else {
        oderAmount.textContent = Number(oderAmount.textContent) + 1;
        priceValue.textContent = Number(priceValue.textContent) + price;
        blockAmount += 1;
    }
    if (blockAmount > 1 && blockAmount < 5) block.textContent = 'блока:';
    if (blockAmount > 4) block.textContent = 'блоков:';
    amountOfCigaretteBlocks.textContent = oderAmount.textContent;
});

// For 'order--visible' div
const minusButtonVis = document.querySelector('[data-minus-btn-visible]');
const plusButtonVis = document.querySelector('[data-plus-btn-visible]');

minusButtonVis.addEventListener('click', () => {
    if (oderAmount.textContent === '1') {
        oderAmount.textContent = 1;
    } else {
        oderAmount.textContent = Number(oderAmount.textContent) - 1;
        priceValue.textContent = Number(priceValue.textContent) - price;
        blockAmount -= 1;
    }
    if (blockAmount === 1) block.textContent = 'блок:';
    if (blockAmount > 1 && blockAmount < 5) block.textContent = 'блока:';
    if (blockAmount > 4) block.textContent = 'блоков:';
    amountOfCigaretteBlocks.textContent = oderAmount.textContent;
});

plusButtonVis.addEventListener('click', () => {
    if (oderAmount.textContent === '10') {
        oderAmount.textContent = 10;
    } else {
        oderAmount.textContent = Number(oderAmount.textContent) + 1;
        priceValue.textContent = Number(priceValue.textContent) + price;
        blockAmount += 1;
    }
    if (blockAmount > 1 && blockAmount < 5) block.textContent = 'блока:';
    if (blockAmount > 4) block.textContent = 'блоков:';
    amountOfCigaretteBlocks.textContent = oderAmount.textContent;
});
