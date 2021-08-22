import { searchPosts } from "./SearchPosts";

document.addEventListener("DOMContentLoaded", (e) => {
    searchPosts(".search", ".card-container");
});