function hienThiDongHo() {

    let now = new Date();

    let gio = now.getHours();
    let phut = now.getMinutes();
    let giay = now.getSeconds();

    let ampm = gio >= 12 ? "PM" : "AM";


    gio = gio % 12;

    if (gio === 0) {
        gio = 12;
    }

    gio = String(gio).padStart(2, "0");
    phut = String(phut).padStart(2, "0");
    giay = String(giay).padStart(2, "0");

    document.getElementById("clock").innerHTML =
        gio + ":" + phut + ":" + giay + " " + ampm;
}


hienThiDongHo();

setInterval(hienThiDongHo, 1000);