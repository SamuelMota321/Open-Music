export default function applyInputRangeStyle() {
  const inputRange = document.getElementById("price-range");
  const price = document.getElementById('price');
  const albums = document.getElementsByClassName('card');
  
  inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      price.innerHTML = currentInputValue;

      applyPriceFilter(currentInputValue);

      const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
      inputRange.style.background = `linear-gradient(to right, var(--brand-1) ${runnableTrackProgress}%, var(--gray-6) ${runnableTrackProgress}%)`;
  });

  function applyPriceFilter(selectedPrice) {
      [...albums].forEach((album) => {
          const albumPriceElement = album.querySelector('.album-price span');
          const albumPrice = albumPriceElement ? parseFloat(albumPriceElement.textContent.trim()) : 0;

          album.style.display = albumPrice <= selectedPrice ? 'block' : 'none';
      });
  }
}
