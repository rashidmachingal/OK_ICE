const toggleButton = document.getElementsByClassName("toggle")[0]
const mobileItems = document.getElementsByClassName('mobile-items')[0]

toggleButton.addEventListener("click",()=>{
    mobileItems.classList.toggle("active")
})
