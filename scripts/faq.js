const faqSearchBar = document.querySelector("#faqSearchBar");
const faqs = document.querySelectorAll(".faq");
let h3Elements = document.querySelectorAll(".faq h3");
h3Elements = Array.from(h3Elements);

function handleSearch() {
  // Retrieve the input element by its ID
  const searchBar = document.getElementById("faqSearchBar");

  // Get the value of the input
  const searchQuery = searchBar.value;

  // Perform any desired actions with the searchQuery
  console.log("Search query:", searchQuery);

  for (let h3 in h3Elements) {
    const h3TextContent = h3Elements[h3].textContent;

    if (h3TextContent.toLowerCase().includes(searchQuery.toLowerCase())) {
      console.log(h3TextContent);
    } else {
      h3Elements[h3].parentElement.classList.toggle("hidden");
    }
  }
  // Example: You can perform an AJAX request or modify the DOM based on the search query
}
