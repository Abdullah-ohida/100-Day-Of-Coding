// select element
const value = document.querySelector('.message');
const output = document.querySelector('.output');
const btn = document.querySelector('.btn');
const error = document.querySelector('.error')

// get userinput
btn.addEventListener('click', function(){
    getUserInput(value);
});

function getUserInput(input){
    if(input.value.trim() === "" || null){ 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Input can't be empty!",
        })
         
    }else{
        Swal.fire({
            title: `Message: ${input.value}`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        output.textContent = input.value;
        error.classList.remove('show-error');
        input.value = "";
    }
    
}

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })

