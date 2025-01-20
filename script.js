document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000); // Задержка в 2 секунды для показа загрузки

    document.getElementById('registerBtn').addEventListener('click', function () {
        Swal.fire({
            title: 'Register',
            html: '<input type="text" id="username" class="swal2-input" placeholder="Username">' +
                  '<input type="password" id="password" class="swal2-input" placeholder="Password">',
            confirmButtonText: 'Register',
            focusConfirm: false,
            preConfirm: () => {
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                if (!username || !password) {
                    Swal.showValidationMessage('Please fill in both fields');
                    return;
                }
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                Swal.fire('Success!', 'You are now registered!', 'success');
            }
        });
    });

    document.getElementById('loginBtn').addEventListener('click', function () {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        if (username && password) {
            Swal.fire('Welcome Back!', `Hello, ${username}`, 'success');
        } else {
            Swal.fire('Please Register First');
        }
    });

    const buttons = document.querySelectorAll('.get-btn');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const username = localStorage.getItem('username');
            if (username) {
                Swal.fire('Downloading...', 'Your program is being downloaded', 'info');
            } else {
                Swal.fire('Please log in first');
            }
        });
    });
});
