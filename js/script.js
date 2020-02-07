const selectElement = document.querySelector('.categories');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.results');
  result.textContent = `You like ${event.target.value}`;
});