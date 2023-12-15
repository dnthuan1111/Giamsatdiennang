document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn việc nộp form
  
    // Lấy giá trị tên đăng nhập và mật khẩu từ form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Bảng đối chiếu tên đăng nhập và mật khẩu hợp lệ
    const validCredentials = {
        "admin": "123456",
        "user1": "password1",
        "user2": "password2"
    };
  
    // Kiểm tra tên đăng nhập và mật khẩu
    if (validCredentials.hasOwnProperty(username) && validCredentials[username] === password) {
        // Nếu đăng nhập thành công, chuyển hướng đến trang hiển thị nhiệt độ
        window.location.href = "Giamsatdiennang.html";
    } else {
        // Hiển thị thông báo lỗi
        alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
});