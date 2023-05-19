
function loginBtn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: username,
            password: password,
            // expiresInMins: 60, // optional
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem("image", data.image);
                localStorage.setItem("name", data.firstName);
                localStorage.setItem("token", data.token);
                window.location.href = "index.html"

            } else {
                alert("Đăng nhập không thành công");
            }
        })
        .catch(error => {
            console.error("Lỗi khi gửi yêu cầu đăng nhập", error);
        });
}

