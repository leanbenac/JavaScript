import { searchPosts } from "./SearchPosts.js";

document.addEventListener("DOMContentLoaded", (e) => {
    searchPosts(".search", "#card-container");
});