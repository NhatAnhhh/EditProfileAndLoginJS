//btn cancel data
document.getElementById("btnCancel").onclick = function () {
    document.getElementById("content-edit").value = "";
};


//Đóng mở thẻ bar
function closeDiv() {
    document.getElementById('setting-container').style.display = "none"
}
function openDiv() {
    document.getElementById('setting-container').style.display = "block"
}
//chọn mục trong setting
function selectDiv(element) {
    let cacDiv = document.querySelectorAll('.item-setting');
    cacDiv.forEach(function (div) {
        div.classList.remove('selected');
    });

    element.classList.add('selected');
}
//Check lỗi input
document.getElementById("btnSave").onclick = function () {
    let inputFname = document.getElementById('Firstname')
    if (inputFname.value === '') {
        inputFname.classList.add('error')
    }
    let inputLname = document.getElementById('Lastname')
    if (inputLname.value === '') {
        inputLname.classList.add('error')
    }
    let inputProfile = document.querySelectorAll('#inputProfile')
    inputProfile.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error')
        }
        // input.classList.add('error')
    })

};
//Check email
const saveButton = document.getElementById('btnSave');
saveButton.addEventListener('click', validateEmail);

function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();

    if (isValidEmail(email)) {
        console.log("giá trị hợp lệ")
    } else {
        //chưa xong
    }
}



//logout
logout = () => {
    localStorage.removeItem("data");
    localStorage.removeItem("token");

    window.location.href = "login.html";
}

//Hiển thị tên và avata
if (localStorage.getItem("name") && localStorage.getItem("image")) {
    const name = localStorage.getItem("name");
    const avatarUrl = localStorage.getItem("image");

    // Hiển thị dữ liệu trên trang
    document.getElementById("userName").textContent = name;
    document.getElementById("logoutBtn").src = avatarUrl;
}




