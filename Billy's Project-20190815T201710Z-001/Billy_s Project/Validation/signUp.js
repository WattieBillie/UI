const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const workMail = document.getElementById('workMail');
const password = document.getElementById('password');
const companyName = document.getElementById('companyName');
const phoneNumber = document.getElementById('phoneNumber');


document.getElementById('SignUpFree').addEventListener('click', ()=>{
    if (!isNaN(firstName.value)){
        document.getElementById('firstNameSpan').innerHTML = "Please Enter valid name"
        return false
    }
    else{
        document.getElementById('firstNameSpan').innerText = " "
    }

    if (!isNaN(lastName.value)){
        document.getElementById('lastNameSpan').innerHTML = "Please Enter valid name"
        return false
    }
    else{
        document.getElementById('lastNameSpan').innerText = " "
    }

    if (!isNaN(workMail.value)){
        document.getElementById('workMailSpan').innerHTML = "Please Enter valid email"
        return false
    }
    else{
        document.getElementById('workMailSpan').innerText = " "
    }

    if (password.value.length == 0){
        document.getElementById('passwordSpan').innerHTML = "Please Enter valid password"
        return false
    }
    else{
        document.getElementById('passwordSpan').innerText = " "
    }

    if (!isNaN(companyName.value)){
        document.getElementById('companyNameSpan').innerHTML = "Please Enter valid Company Name"
        return false
    }
    else{
        document.getElementById('companyNameSpan').innerText = " "
    }

    if (isNaN(phoneNumber.value) || phoneNumber.value.length <= 9){
        document.getElementById('phoneNumberSpan').innerHTML = "Please Enter valid Phone Number"
        return false
    }
    else{
        document.getElementById('phoneNumberSpan').innerText = " "
    }
})