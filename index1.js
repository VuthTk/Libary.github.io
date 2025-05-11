const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".ani");
hiddenElements.forEach((el) => observer.observe(el));
function searchItems() {
  const searchTerm = document.getElementById("srch").value.toLowerCase();
  const allItems = document.querySelectorAll(".pic");

  allItems.forEach((item) => {
    const itemName = item.querySelector("h2").textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Add an event listener to the search button
document
  .querySelector(".search-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the form from submitting (assuming it's in a form)
    searchItems();
  });

// You might also want to reset the display when the user clears the search box
document.getElementById("srch").addEventListener("input", function () {
  if (this.value === "") {
    const allItems = document.querySelectorAll(".pic");
    allItems.forEach((item) => {
      item.style.display = "block";
    });
  }
});
