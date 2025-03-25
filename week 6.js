// Show More Button Functionality
document.getElementById("showMoreBtn").addEventListener("click", function () {
    let moreInfo = document.getElementById("moreInfo");
    if (moreInfo.classList.contains("hidden")) {
        moreInfo.classList.remove("hidden");
        this.textContent = "Show Less";
    } else {
        moreInfo.classList.add("hidden");
        this.textContent = "Show More";
    }
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("formMessage");

    if (name === "" || email === "") {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
    } else {
        message.style.color = "green";
        message.textContent = "Form submitted successfully!";
        this.reset();
    }
});
