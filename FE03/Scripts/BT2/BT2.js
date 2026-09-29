function kiemTraTextbox() {

    let hopLe = true;

    document.getElementById("errTen").innerHTML = "";
    document.getElementById("errDiaChi").innerHTML = "";
    document.getElementById("errSDT").innerHTML = "";
    document.getElementById("errTinh").innerHTML = "";
    document.getElementById("errQuan").innerHTML = "";
    document.getElementById("errPhuong").innerHTML = "";

    let ten = document.getElementById("txtTen").value.trim();
    let diaChi = document.getElementById("txtDiaChi").value.trim();
    let sdt = document.getElementById("txtSDT").value.trim();
    let tinh = document.getElementById("txtTinh").value.trim();
    let quan = document.getElementById("txtQuan").value.trim();
    let phuong = document.getElementById("txtPhuong").value.trim();

    if (ten === "") {
        document.getElementById("errTen").innerHTML =
            "Vui lòng nhập tên";
        hopLe = false;
    }

    if (diaChi === "") {
        document.getElementById("errDiaChi").innerHTML =
            "Vui lòng nhập địa chỉ";
        hopLe = false;
    }

    if (tinh === "") {
        document.getElementById("errTinh").innerHTML =
            "Vui lòng nhập tỉnh / thành phố";
        hopLe = false;
    }

    if (quan === "") {
        document.getElementById("errQuan").innerHTML =
            "Vui lòng nhập quận / huyện";
        hopLe = false;
    }

    if (phuong === "") {
        document.getElementById("errPhuong").innerHTML =
            "Vui lòng nhập phường / xã";
        hopLe = false;
    }

    if (sdt === "") {
        document.getElementById("errSDT").innerHTML =
            "Vui lòng nhập số điện thoại";
        hopLe = false;
    }
    else if (!/^\d+$/.test(sdt)) {
        document.getElementById("errSDT").innerHTML =
            "Số điện thoại chỉ được chứa số";
        hopLe = false;
    }
    else if (sdt.length < 10) {
        document.getElementById("errSDT").innerHTML =
            "Số điện thoại phải từ 10 số trở lên";
        hopLe = false;
    }

    return hopLe;
}



document.getElementById("vanPhong").onclick = function () {

    document.getElementById("loaiDiaChi").innerHTML =
        "Bạn chọn giao hàng tại văn phòng";
};


document.getElementById("nhaRieng").onclick = function () {

    document.getElementById("loaiDiaChi").innerHTML =
        "Bạn chọn giao hàng tại nhà riêng";
};



document.getElementById("luu").onclick = function () {

    let hopLe = kiemTraTextbox();

    if (!hopLe) {

        alert("Thông tin nhập không hợp lệ");

    } else {

        alert("Lưu thông tin thành công");
    }
};