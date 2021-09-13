// buscador tanto en mayúscula como en minúscula 
export function searchPosts(input, selector){
    document.addEventListener("keyup", (e) => {
        if(e.target.matches(input)){
            document.querySelectorAll(selector).forEach(element =>
                element.textContent.toLowerCase().includes(e.target.value) || 
                element.textContent.toUpperCase().includes(e.target.value)
                ? element.classList.remove("filter") 
                : element.classList.add("filter")
            )
        }
    })
}

