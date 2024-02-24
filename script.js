const errorInfo = document.querySelector(".error");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector(".submit-btn");


function checkEmail(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(emailInput.value)){
        errorInfo.classList.remove("hidden");
    }  
}

submitBtn.addEventListener("click", function(){
    event.preventDefault();
    checkEmail();
})
