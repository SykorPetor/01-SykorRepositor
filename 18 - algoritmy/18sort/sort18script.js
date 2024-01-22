function sortNumbers() {
    const inputElement = document.getElementById('numbers');
    const inputNumbers = inputElement.value.split(',').map(num => parseFloat(num.trim()));

    if (inputNumbers.some(isNaN)) {
      alert('Please enter valid numbers separated by commas.');
      return;
    }

    const sortedNumbers = inputNumbers.sort((a, b) => a - b);

    const sortedNumbersElement = document.getElementById('sortedNumbers');
    sortedNumbersElement.textContent = sortedNumbers.join(', ');
  }