
const inputLocation = document.getElementById('inputLocation');
const subjectForSessionPhysical = document.getElementById('subjectForSessionPhysical');
const subjectForSessionVideo = document.getElementById('subjectForSessionVideo');

document.getElementById('makeAppointmentPhysical').addEventListener('click', ()=>{
    if (!isNaN(inputLocation.value)){
        document.getElementById('locationSpan').innerHTML = "Please Enter a Valid Address"
        return false
    }
    else{
        document.getElementById('locationSpan').innerText = " "
    }

    if (!isNaN(subjectForSessionPhysical.value)){
        document.getElementById('subjectForSessionPhysicalSpan').innerHTML = "Please Enter correct information"
        return false
    }
    else{
        document.getElementById('subjectForSessionPhysicalSpan').innerText = " "
    }
})

document.getElementById('makeAppointmentVideo').addEventListener('click', ()=>{

    if (!isNaN(subjectForSessionVideo.value)){
        document.getElementById('subjectForSessionVideoSpan').innerHTML = "Please Enter correct information"
        return false
    }
    else{
        document.getElementById('subjectForSessionVideoSpan').innerText = " "
    }
})