var phanTram1 = 60;
var phanTram2 = 30;
var phanTram3 = 53;

function hienThiProgress(id, phanTram) {

    var bar = document.getElementById(id);

    bar.style.width = phanTram + "%";
    bar.innerHTML = phanTram + "%";
}


hienThiProgress("bar1", phanTram1);
hienThiProgress("bar2", phanTram2);
hienThiProgress("bar3", phanTram3);