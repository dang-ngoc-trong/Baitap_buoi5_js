//bài tập 1
document.getElementById("btnKetQua").onclick = function () {
  //input : diemChuan,diemThu1,diemThu2,diemThu3,doiTuong : number
  // input : khuVuc,doiTuong : string
  var diemChuan = +document.getElementById("diemChuan").value;
  var khuVuc = document.getElementById("chonKhuVuc").value;
  var doiTuong = document.getElementById("chonDoiTuong").value;
  var diemThu1 = +document.getElementById("diemThu1").value;
  var diemThu2 = +document.getElementById("diemThu2").value;
  var diemThu3 = +document.getElementById("diemThu3").value;
  //output: tONG: NUMBER
  // ketQua : STRING
  var tong = "";
  var ketQua = "";

  if (khuVuc === "A") {
    diemKhuVuc = 2;
  } else if (khuVuc === "B") {
    diemKhuVuc = 1;
  } else if (khuVuc === "C") {
    diemKhuVuc = 0.5;
  } else {
    diemKhuVuc = 0;
  }

  if (doiTuong === "1") {
    diemDoiTuong = 2.5;
  } else if (doiTuong === "2") {
    diemDoiTuong = 1.5;
  } else if (doiTuong === "3") {
    diemDoiTuong = 1;
  } else {
    diemDoiTuong = 0;
  }
  //progress
  tong = diemThu1 + diemThu2 + diemThu3 + diemKhuVuc + diemDoiTuong;

  if (diemThu1 === 0 || diemThu2 === 0 || diemThu3 === 0) {
    ketQua = "Bạn đã rớt" + " do có điểm nhỏ hơn hoặc bằng 0" + tong;
  } else if (tong < diemChuan) {
    ketQua = "Bạn đã rớt." + "Tổng điểm" + tong;
  } else if (tong >= diemChuan) {
    ketQua = "Bạn đã đậu." + "Tổng điểm" + tong;
  } else {
    ketQua = "không xác định";
  }
  //in output ra mang hình
  document.getElementById("xuatKetQua").innerHTML = ketQua;
};
// bai tap 2
document.getElementById("btnTinhTien").onclick = function () {
  // input: hoTen : string
  // input: soKW : number
  var hoTen = document.getElementById("hoTen").value;
  var soKW = +document.getElementById("soKW").value;
  //output: tong: number
  var tong = "";
  if (soKW <= 50) {
    tong = 500 * soKW;
  } else if (soKW <= 100) {
    tong = 500 * 50 + (soKW - 50) * 650;
  } else if (soKW <= 200) {
    tong = 500 * 50 + 50 * 650 + (soKW - 100) * 850;
  } else if (soKW <= 350) {
    tong = 500 * 50 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
  } else {
    tong = 500 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
  }
  //in output ra mang hình
  document.getElementById("btnKetQua_2").innerHTML =
    hoTen + "Tổng :" + tong + " vnd";
};
// BÀI TẬP 3.4 CHUA XONG, HÔM SAU NỘP LẠI NHÉ MENTOR
// BÀI TẬP 3
document.getElementById("btnTienThue").onclick = function () {
  var hoTen = document.getElementById("hoTen1").value;
  var tongThuNhap = +document.getElementById("tongThuNhap").value;
  var soNguoiPT = +document.getElementById("soNguoiPT").value;
  var thue = "";
  if (tongThuNhap <= 60000000) {
    thueSuat = 0.05;
  } else if (tongThuNhap <= 120000000) {
    thueSuat = 0.1;
  } else if (tongThuNhap <= 210000000) {
    thueSuat = 0.15;
  } else if (tongThuNhap <= 384000000) {
    thueSuat = 0.2;
  } else if (tongThuNhap <= 624000000) {
    thueSuat = 0.25;
  } else if (tongThuNhap <= 960000000) {
    thueSuat = 0.3;
  } else {
    thueSuat = 0.35;
  }
  thue = (tongThuNhap - 4000000 - soNguoiPT * 1600000) * thueSuat;
  document.getElementById("KetQua_3").innerHTML =
    "Họ tên: " + hoTen + " Tiền thuế thu nhập cá nhân: " + thue + " vnd";
};
// bài tập 4
document.getElementById("btnTienCap").onclick = function () {
  var chonKhachHang = document.getElementById("chonKhachHang").value;
  var maKhachHang = document.getElementById("maKhachHang").value;
  var kenhCaoCap = +document.getElementById("soKenhCaoCap").value;
  var soKetNoi = +document.getElementById("soKetNoi").value;
  var tienCap = "";

  if (chonKhachHang === "1.1") {
    tienCap = 20.5 + 4.5 + kenhCaoCap * 7.5;
  } else if (chonKhachHang === "2.1" || soKetNoi > 10) {
    tienCap = 15 + 75 + kenhCaoCap * 50 + (soKetNoi - 10) * 5;
  } else {
    tienCap = 15 + 75 + kenhCaoCap * 50;
  }
  document.getElementById("KetQua_4").innerHTML =
    "Mã Khách hàng: " + maKhachHang + ", tiền cáp: " + tienCap + " $";
};
