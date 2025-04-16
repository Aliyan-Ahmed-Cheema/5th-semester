document.addEventListener, function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const registerBtn = document.getElementById("registerBtn");
    const changePasswordBtn = document.getElementById("changePasswordBtn");


    function validateUsername(username) {
        return username.length >= 6 && username.length <= 10 && !username.includes('-');
    }

    function validatePassword(password) {
        const symbol = /[!@#$%^&*(),.?":{}|<>]/g;
        const number = /\d/;
        const alphabet = /[a-zA-Z]/;
        return password.length >= 6 && symbol.test(password) && number.test(password) && alphabet.test(password);
    }

    registerBtn.addEventListener("click", function () {
        const username = usernameInput.value;
        const password = passwordInput.value;
        if (!validateUsername(username)) {
            alert("Invalid username. Ensure it is 6-10 characters and has no hyphens.");
            return;
        }
        if (!validatePassword(password)) {
            alert("Password must be at least 6 characters long and include a symbol, a number, and a letter.");
            return;
        }
        alert("Registration successful!");
    });

    changePasswordBtn.addEventListener("click", function () {
        usernameInput.style.display = "none";
        registerBtn.style.display = "none";
        changePasswordBtn.textContent = "Change";
        changePasswordBtn.addEventListener("click", function () {
            const newPassword = passwordInput.value;
            if (!validatePassword(newPassword)) {
                alert("Invalid password format for change.");
                return;
            }
            alert("Password changed successfully!");
        });
    });
};