
let form = document.getElementById('fo');

let nameRegX = /^[A-Z][a-z]{2,}$/;
let nameField = document.getElementById('FN');

let lastRegX = /^[A-Z][a-z]{2,}$/;
let lastField = document.getElementById('LN');


let emailRegX = /^[\w\d@%+-]+@gmail.com$/;
let emailField = document.getElementById('YE')


let phoneRegX = /^[010|011]\d{9,}$/;
let phoneField = document.getElementById('YN');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(nameRegX.test(nameField.value))
    if (!nameRegX.test(nameField.value)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong FirstName!",

        });
    } else if (!lastRegX.test(lastField.value)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong at LastName!",

        });
    } else if (!emailRegX.test(emailField.value)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong at Email !",

        });
    } else if (!phoneRegX.test(phoneField.value)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong at Phone!",

        });

    }
    else {
        Swal.fire({
            title: "Good job!",
            text: "Validation Submitted Done!",
            icon: "success"
        });
    }
})


