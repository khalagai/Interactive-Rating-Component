let selectedRating = 0;

const handleRating = (rating) => {
    selectedRating = rating;

    const ratings = document.querySelectorAll(".rate");
    ratings.forEach((el)=> {
    el.classList.remove("selected");
    el.setAttribute("aria-checked", "false");
    });

    const selected = document.getElementById(`rate${rating - 1}`);
    selected.classList.add("selected");
    selected.setAttribute("aria-checked", "true");
    selected.focus();
}

const handleSubmit = () => {
    document.getElementById("main0").style.display = "none";
    document.getElementById("main1").style.display = "block";
    document.getElementById("selectedRating").textContent = selectedRating;
    document.getElementById("thankYouHeading").focus();
}

// Add event listeners for rating buttons
const ratings = document.querySelectorAll(".rate");
ratings.forEach((rate, index) => {
    rate.addEventListener('click', () => handleRating(index + 1));
    rate.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
         e.preventDefault();
         handleRating(index + 1);
        }
    });
});

// Add event listener for submit button
document.querySelector('.send button').addEventListener('click', handleSubmit);