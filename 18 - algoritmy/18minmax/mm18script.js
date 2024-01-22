function findMinMax() {

    const inputElement = document.getElementById('numbers');
    const inputNumbers = inputElement.value.split(',').map(num => parseFloat(num.trim()));

    if (inputNumbers.some(isNaN)) {
        alert('Please enter valid numbers separated by commas.');
        return;
    }

    const minNumber = Math.min(...inputNumbers);
    const maxNumber = Math.max(...inputNumbers);

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Smallest Number: ${minNumber}, Largest Number: ${maxNumber}`;
}