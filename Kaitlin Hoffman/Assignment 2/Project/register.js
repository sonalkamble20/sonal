document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("register").addEventListener('submit', function(event)
    {
        event.preventDefault();

        const firstName = document.getElementById("fname").value;
        const lastName = document.getElementById("lname").value;
        const userName = document.getElementById("uname").value;
        const password = document.getElementById("password").value;

        const user = {
            username: userName,
            firstName: firstName,
            lastName: lastName,
            password: password
        };

        console.log("User registered: ", user);
        window.location.href = "post.html";
    });
});