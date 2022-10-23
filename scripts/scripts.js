//navbar
const toggleButton = document.getElementsByClassName("toggle")
const navItems = document.getElementsByClassName('nav-items')[0]

for (let i = 0; i < toggleButton.length; i++) {
    toggleButton[i].addEventListener("click",()=>{
        navItems.classList.toggle("active")
    })
  }



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
