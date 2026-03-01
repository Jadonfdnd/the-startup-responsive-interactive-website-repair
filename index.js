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


const allMiniCards = document.querySelectorAll('.mini-cards');

allMiniCards.forEach(card => {

    card.addEventListener("mousedown", function(e) {
    
        this.classList.add("click-and-scale");
    });

    card.addEventListener("animationend", function() {
        this.classList.remove("click-and-scale");
    });
    const link = card.querySelector('a');
    if (link) {
        link.addEventListener("click", function(e) {
            e.preventDefault(); 
        });
    }
});


