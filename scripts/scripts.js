//navbar
const toggleButton = document.getElementsByClassName("toggle")[0]
const mobileItems = document.getElementsByClassName('mobile-items')[0]

toggleButton.addEventListener("click",()=>{
    mobileItems.classList.toggle("active")
})

// faq
const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        if(!faq.classList.contains("open")){
            faqs.forEach(faq => {
                faq.classList.remove('open');
            })}
        faq.classList.toggle("open")
    })
})
