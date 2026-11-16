 const contactForm = document.getElementById("contactForm");   
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("name");
    const email = document.getElementById("email");
    const formMessage = document.getElementById("formMessage");
    if (username !== "" && email !== "") {
        formMessage.textContent = "Thank you for visiting, " +username + "! We will contact you at " +email + ".";
    } else {
        formMessage.textContent = "Please enter both name and email.";
    }

    const birthYearText =document.getElementById("birth-year"); 
    if (birthYearText !== "") {
        if (isNaN(birthYear)) {
            formMessage.textContent +=" Please enter a valid birth year.";
        } else {
            const age = 2026 - birthYear;
            if (age <= 25 && age >= 0) {
                formMessage.textContent += " You qualify for a student discount.";
            } else if (age >= 60) {
                formMessage.textContent +=" You qualify for a senior discount.";
            } else {
                formMessage.textContent += " You do not qualify for a special discount.";
            } }  }
});
const rows = document.querySelectorAll("#menuTable tbody tr");
rows.forEach(function(row) {
    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#f8e8c8";
    });
    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });
});


const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});

const items = document.querySelectorAll(".menu-item");
const total = document.getElementById("total");
items.forEach(function(item) {
    item.addEventListener("change", function() {
        let price = 0;
        items.forEach(function(item) {
            if (item.checked) {
                price = price + parseFloat(item.dataset.price);
            }
        });
        total.textContent = "Total: $" + price.toFixed(2);
    });
});
const readButton = document.getElementById("readMoreButton");
const extraText = document.getElementById("extraAbout");
readButton.addEventListener("click", function() {
    if (extraText.style.display == "none" ||
        extraText.style.display == "") {
         
        readButton.textContent = "Read Less";
    } else {
        extraText.style.display = "none";
        readButton.textContent = "Read More";
    }
});


const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const category = button.dataset.category;
        rows.forEach(function(row) {
            if (category == "all" ||
                row.dataset.category == category) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });   });
});
const status = document.getElementById("openingStatus");
const hour = new Date().getHours();
if (hour >= 8 && hour < 22) {
    status.textContent = "We are Open!";
    status.style.color = "#5ee35e";
} else {
    status.textContent = "Closed - Open at 8 AM";
    status.style.color = "#ff6b6b";
}
const notes = document.getElementById("special-notes");
const counter = document.getElementById("char-count");
notes.addEventListener("input", function() {
    const max = 100;
    const remaining = max - notes.value.length;
    counter.textContent = remaining + " characters remaining";
    if (remaining <= 20) {
        counter.style.color = "red";
    } else {
        counter.style.color = "#777";
    }
});