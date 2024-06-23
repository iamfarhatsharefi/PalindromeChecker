document.getElementById('check-btn').addEventListener('click', function () {const inputElement = document.getElementById('text-input');
  const resultElement = document.getElementById('result');
  const inputValue = inputElement.value.trim();

    if (inputValue === "") {
  alert('Please input a value');
  return;
    }
      
    const cleanedInput = inputValue.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reversedInput = cleanedInput.split('').reverse().join('');
  
    if (cleanedInput === reversedInput) {
  resultElement.textContent = `${inputValue} is a palindrome`;
    } else {
  resultElement.textContent = `${inputValue} is not a palindrome`;
    }
});