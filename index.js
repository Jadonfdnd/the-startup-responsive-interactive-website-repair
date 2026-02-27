let trackForm = document.querySelector('#track-form');
let searchBtn = document.querySelector('#search-btn');

trackForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  // Feedback
  searchBtn.classList.add('is-loading');

  // 
  setTimeout(() => {
    console.log("Zoek voltooid");
  }, 1200);
});