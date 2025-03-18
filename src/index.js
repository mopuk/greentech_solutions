
document.addEventListener("DOMContentLoaded", () => {

    function checkForm(form) {
        let errors = {};
        message.innerHTML = "<h1>Successfully signed up</h1><p>We can't wait to work with you!</p>"
        message.className = "submit-message"

        const nameInput = form.name
        const surnameInput = form.surname
        const emailInput = form.email


        const nameReg = /^[A-Za-zÀ-ÿ]+$/;
        const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!nameReg.test(nameInput.value)) {
            nameInput.style.border = "1px solid red";
            let err = document.getElementById("name-err");
            if (!err) {
                err = document.createElement("div");
                err.innerHTML = "<b>Name must consist only of letters</b>";
                err.className = "error-msg";
                err.id = "name-err"
                nameInput.after(err);
                errors = { ...errors, name: err };
            }
        } else {
            nameInput.style.border = "none";
            const err = document.getElementById("name-err");
            if (err) {
                err.remove();
                delete errors.name;
            }
        }
        if (!nameReg.test(surnameInput.value)) {
            surnameInput.style.border = "1px solid red";
            let err = document.getElementById("surname-err");
            if (!err) {
                err = document.createElement("div");
                err.innerHTML = "<b>Surname must consist only of letters</b>";
                err.className = "error-msg";
                err.id = "surname-err"
                surnameInput.after(err);
                errors = { ...errors, surname: err };
            }
        } else {
            surnameInput.style.border = "none";
            const err = document.getElementById("surname-err");
            if (err) {
                err.remove();
                delete errors.surname;
            }
        }
        if (!emailReg.test(emailInput.value)) {
            emailInput.style.border = "1px solid red";
            let err = document.getElementById("email-err");
            if (!err) {
                err = document.createElement("div");
                err.innerHTML = "<b>Incorrect email</b>";
                err.className = "error-msg email";
                err.id = "email-err"
                emailInput.after(err);
                errors = { ...errors, email: err };
            }
        } else {
            emailInput.style.border = "none"
            const err = document.getElementById("email-err");
            if (err) {
                err.remove();
                delete errors.email;
            }
        }

        if (Array.from(document.getElementsByClassName("error-msg")).length == 0) {
            background.appendChild(message);
            document.body.append(background)
        }
    }

    const background = document.createElement("div");
    background.className = "background";

    const contactButton = document.getElementById("contact-button");
    contactButton.onclick = (e) => {
        const form = document.forms[0];

        window.scrollTo(form.offsetLeft, form.offsetTop - (form.offsetTop / 4))
    }

    const clientsList = document.getElementById("clients-list");

    const arrowLeft = document.getElementById("arrowLeft");
    const arrowRight = document.getElementById("arrowRight");

    arrowLeft.onclick = (e) => {

        const reviewSize = clientsList.firstElementChild.offsetWidth;

        if (clientsList.scrollLeft > reviewSize) {
            clientsList.scrollLeft -= reviewSize + 16;
        } else {
            clientsList.scrollLeft = 0;
        }
    }
    arrowRight.onclick = (e) => {

        const reviewSize = clientsList.firstElementChild.offsetWidth;

        if (clientsList.scrollLeft < clientsList.scrollWidth - reviewSize) {
            clientsList.scrollLeft += reviewSize + 16;
        } else {
            clientsList.scrollLeft = clientsList.scrollWidth;
        }
    }

    const forms = document.forms;
    const message = document.createElement("div");

    Array.from(forms).forEach(form => {

        form.onsubmit = (e) => {
            e.preventDefault();

            checkForm(form);
        }
    });
})