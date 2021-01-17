const inputs = document.querySelectorAll('input');
console.log(inputs);
//verification via prompt start
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let postal = document.getElementById("postal");

//addEventListener and promt and check
//define EventListener
email.addEventListener("click", (e) => {
    let email_re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    choice = prompt("Enter Your Email: ");
    let post = choice.match(email_re);
    var text;
    if (post) {
        text = "Email is Valid!";
    } else {
        text = "Email is not Valid! Please read the instruction";
    }
    alert(text);
});

phone.addEventListener("click", (e) => {
    let phone_re = /^\d{11}$/;
    choice = prompt("Enter Your Phone Number: ");
    let post = choice.match(phone_re);

    var text;
    if (post) {
        text = "Phone Number is Valid!";

    } else {
        text = "Phone Number is not Valid! Please follow the instruction";
    }
    alert(text);
});


postal.addEventListener("click", (e) => {
    let post_re = /^\d{4}$/;
    choice = prompt("Enter Your PostCode: ");
    let post = choice.match(post_re);
    var text;
    if (post) {
        text = "Post Code is Valid!";
    } else {
        text = "Post Code is not Valid! please follow the instruction";
    }
    alert(text);
});


//regular expression pattern

const patterns = {
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    telephone: /^\d{11}$/,
    postCode: /^\d{4}$/
};

//validation function
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

//attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        console.log(e.target.attributes.name.value)


        console.log(patterns[e.target.attributes.name.value]);
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})