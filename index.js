let selectedRating = 0;

document.addEventListener("DOMContentLoaded", () => {
    const ratings = document.querySelectorAll(".rate");
    const submitButton = document.querySelector(".send button");

    ratings.forEach((el, index) => {
    el.addEventListener("click", () => handleRating(index + 1));
    });

    submitButton.addEventListener("click", handleSubmit);
});

const handleRating = (rating) => {
    selectedRating = rating;

    const ratings = document.querySelectorAll(".rate");
    ratings.forEach((el) => el.classList.remove("selected"));

    document.getElementById(`rate${rating - 1}`).classList.add(`selected`);
}

const handleSubmit = () => {
    document.getElementById("main0").style.display = "none";
    document.getElementById("main1").style.display = "block";
    document.getElementById(`selectedRating`).textContent = selectedRating;
}
