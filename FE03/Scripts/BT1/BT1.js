
document.getElementById("chuyenNganh").addEventListener("change", function () {
    let chuyenNganh = this.value;
    let soTruong = document.getElementById("soTruong");

    if (chuyenNganh === "Hệ thống") {
        soTruong.textContent = "Phân tích và Thiết kế";
    }
    else if (chuyenNganh === "Phần mềm") {
        soTruong.textContent = "Lập trình";
    }
    else if (chuyenNganh === "Mạng máy tính") {
        soTruong.textContent = "Quản lý mạng";
    }
    else {
        soTruong.textContent = "";
    }
});



document.getElementById("formDangKy").addEventListener("submit", function (event) {

    event.preventDefault();


    document.getElementById("errMaSV").textContent = "";
    document.getElementById("errHoTen").textContent = "";
    document.getElementById("errTuoi").textContent = "";
    document.getElementById("errNgoaiNgu").textContent = "";
    document.getElementById("message").textContent = "";

    let maSV = document.getElementById("maSV").value.trim();
    let hoTen = document.getElementById("hoTen").value.trim();
    let tuoi = document.getElementById("tuoi").value;

    let hopLe = true;

    if (maSV.length !== 10) {
        document.getElementById("errMaSV").textContent =
            "Mã sinh viên gồm 10 ký tự";
        hopLe = false;
    }

    if (hoTen === "" || hoTen.length > 30) {
        document.getElementById("errHoTen").textContent =
            "Họ tên không rỗng và < 30 ký tự";
        hopLe = false;
    }


    if (tuoi === "" || Number(tuoi) < 18) {
        document.getElementById("errTuoi").textContent =
            "Tuổi phải 18 trở lên";
        hopLe = false;
    }


    let ngoaiNgu = document.querySelectorAll(
        'input[name="ngoaiNgu"]:checked'
    );

    if (ngoaiNgu.length === 0) {
        document.getElementById("errNgoaiNgu").textContent =
            "Vui lòng chọn ngoại ngữ";
        hopLe = false;
    }


    if (hopLe) {
        document.getElementById("message").textContent =
            "Bạn đã đăng ký thành công";
    } else {
        document.getElementById("message").textContent =
            "Bạn phải nhập lại";
    }
});