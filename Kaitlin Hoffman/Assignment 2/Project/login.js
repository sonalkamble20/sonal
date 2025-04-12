document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("login").addEventListener('submit', function(event)
    {
        event.preventDefault();

        const userName = document.getElementById("uname").value;
        const password = document.getElementById("password").value;

        const user = {
            username: userName,
            password: password
        };

        console.log("User logged in: ", user);

        window.location.href = "post.html";
    });
});