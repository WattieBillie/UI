
const additionalInformation = document.getElementById('additionalInformation');


document.getElementById('makeAppointment').addEventListener('click', ()=>{
    if (!isNaN(additionalInformation.value)){
        document.getElementById('additionalInformationSpan').innerHTML = "Please Enter valid information"
        return false
    }
    else{
        document.getElementById('additionalInformationSpan').innerText = " "
    }
})