document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // รับค่าชื่อผู้ใช้และรหัสผ่านจากฟอร์ม
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // เช็คความถูกต้อง
        if (username === "admin" && password === "password") {
            alert("เข้าสู่ระบบสำเร็จ");
        } else {
            alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        }
    });
});
