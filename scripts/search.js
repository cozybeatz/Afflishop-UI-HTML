let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");

function toggleSearchBar() {
  searchForm.classList.toggle("hidden");
  searchForm.classList.toggle("animate-ping-in");
}
