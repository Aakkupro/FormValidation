document.addEventListener('DOMContentLoaded', function () {
    const formDataArray = [];

    document.getElementById('myForm').addEventListener('submit', function (event) {

        event.preventDefault();

        // Fetch values from the form
        const name = document.getElementById('name').value;
        const age = parseInt(document.getElementById('age').value);
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const mobile = document.getElementById('number').value;
        const dob = document.getElementById('dob').value;

        let isValid = true;

        // Validate Name
        const namePattern = /^[a-zA-Z\s]+$/;
        if (!namePattern.test(name)) {
            console.log("name incorrect");
            document.getElementById('name_span').innerHTML = 'Name is required and must contain only letters.';
            isValid = false;
        } else {
            document.getElementById('name_span').innerHTML = '';
        }





        // Validate Age
        if (isNaN(age) || age < 18) {
            console.log("age incorrect");
            document.getElementById('age_span').innerHTML = 'Age must be at least 18 years.';
            isValid = false;
        } else {
            document.getElementById('age_span').innerHTML = '';
        }

        // Validate Email
        //const emailPattern = /^[a-zA-Z0-9._-]+@navgurukul\.org$/; //only for navgurukul
        // const specificEmailPattern = /^[a-zA-Z0-9._%+-]+@(navgurukul\.org|gmail\.com)$/; //for navgurukul and gmail
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //for all emails
        if (!emailPattern.test(email)) {
            console.log("email incorrect");
            document.getElementById('email_span').innerHTML = 'Please enter a valid email (e.g. abc@xyz.efg)';
            isValid = false;
        } else {
            document.getElementById('email_span').innerHTML = '';
        }

        // Validate Password
        if (password.length < 8) {
            console.log("password incorrect");
            document.getElementById('pass_span').innerHTML = 'Password must be at least 8 characters long.';
            isValid = false;
        } else {
            document.getElementById('pass_span').innerHTML = '';
        }

        // Validate Mobile Number
        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobile) || mobile.length !== 10) {
            console.log("mobile incorrect");
            document.getElementById('mob_span').innerHTML = 'Please enter a valid 10-digit mobile number.';
            isValid = false;
        } else {
            document.getElementById('mob_span').innerHTML = '';
        }

        // Validate Date of Birth
        if (dob === '') {
            console.log("dob incorrect");
            document.getElementById('dob_span').innerHTML = 'Please select your date of birth.';
            isValid = false;
        }
        else {
            // Convert the input date from dd/mm/yyyy to a Date object
            const [day, month, year] = dob.split('/');
            const inputDate = new Date(`${year}-${month}-${day}`);
            const currentDate = new Date(); // Today's date

            if (inputDate > currentDate) {
                console.log("Future date not allowed");
                document.getElementById('dob_span').innerHTML = 'Please enter a date of birth that is not in the future.';
                isValid = false;
            } else {
                document.getElementById('dob_span').innerHTML = '';
            }
        }


        // If all validations pass
        if (isValid) {
            console.log("yes it is valid");
            // Store data in the array
            let formData = {
                name: name,
                age: age,
                email: email,
                password: password,
                mobile: mobile
            };
            formDataArray.push(formData);
            // console.log(formDataArray);

            localStorage.setItem("FormDataArray", JSON.stringify(formDataArray));
            console.log(JSON.parse(localstorage.getItem("formDataArray")));

            alert('Form submitted successfully!');

            // Clear form fields
            document.getElementById('myForm').reset();
        }
    });
});
