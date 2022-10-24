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

function handleOpen(num) {
    const number = num.toString()
    const n = document.getElementById(number)
    faqs.forEach((faq,idx)=>{
        if(idx+1===num){
            n.classList.toggle("open")
        }else{
            faq.classList.remove("open")
        }
       
    })
}