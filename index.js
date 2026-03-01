const trackForm = document.querySelector('#track-form');
const searchBtn = document.querySelector('#search-btn');

trackForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  // Feedback
  searchBtn.classList.toggle('is-loading');

  // 
  setTimeout(() => {
    console.log("Zoek voltooid");
  }, 100);
});




// click and scale animatie
const flowButton = document.querySelector('.mini-cards a');

flowButton.addEventListener("mousedown", function () {
  flowButton.classList.add("flowCss");
});


flowButton.addEventListener("mouseup", function () {
  flowButton.classList.remove("flowCss");
});