// Variabel
var usia = document.getElementById("usia");
var tinggi = document.getElementById("tinggi");
var berat = document.getElementById("berat");
var pria = document.getElementById("pria");
var wanita = document.getElementById("wanita");
var form = document.getElementById("form");
let hasil = document.getElementById("hasil");
// Modal
modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Count BMI
function hitungBmi() {
  var h = [usia.value, tinggi.value, berat.value];
  if (pria.checked) {
    h.push("pria");
  } else if (wanita.checked) {
    h.push("wanita");
  }
  form.reset();

  var bmi = Number(h[2]) / (((Number(h[1]) / 100) * Number(h[1])) / 100);

  var hasil = "";
  if (bmi < 18.5) {
    hasil = "Kurang Berat Badan";
    t =
      "Anda kekurangan Berat Badan, beberapa penyebab adalah masalah psikologis, makan tidak teratur, pemilihan menu makanan yang tidak sehat";
    t2 =
      "Beberapa tips untuk membuat badan lebih berisi berikut ini bisa kamu coba, menambah asupan kalori, memilih makanan bergizi, berolahraga, minum susuh weight gain";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    hasil = "Normal";
    t = "Anda Normal, tetap jaga kesehatan";
    t2 =
      "Beberapa tips untuk menjaga kesehatan tubuh adalah sebagai berikut: makan sayur-sayuran, mengurangi junk food, konsumsi vitamin, tidur yang cukup, berolahraga, hindari alkohol dan merokok.";
  } else if (25 <= bmi && bmi <= 29.9) {
    hasil = "Kelebihan Berat Badan";
    t = "Anda Kelebihan Berat Badan";
    t2 =
      "Beberapa tips untuk mengurangi berat badan adalah sebagai berikut: makan dalam porsi kecil, rutin berolahraga, makan lebih banyak serat, tidur yang cukup dan minum air putih yang banyak.";
  } else if (30 <= bmi && bmi <= 34.9) {
    hasil = "Obesitas";
    t =
      "Anda Obesitas, Obesitas adalah kondisi ketika lemak yang menumpuk di dalam tubuh sangat banyak akibat kalori masuk lebih banyak dibandingkan yang dibakar. Jika tidak segera ditangani, obesitas dapat meningkatkan risiko terjadinya penyakit jantung, hipertensi, hingga diabetes.Obesitas bukan sekadar berat badan berlebih (overweight). ";
    t2 =
      "Obesitas ditandai dengan nilai indeks massa tubuh (IMT) 30 atau lebih, mudah atau banyak berkeringat, penumpukan lemak di beberapa area tubuh, mudah lelah, dan nyeri sendi.Pada anak-anak, obesitas umumnya ditandai dengan penumpukan lemak di bagian payudara, sesak ketika melakukan aktivitas fisik, dan gangguan pubertas.Obesitas dapat disebabkan oleh konsumsi makanan cepat saji atau minuman yang mengandung gula tambahan dalam jangka panjang. Obesitas juga bisa disebabkan oleh konsumsi makanan secara berlebihan yang tidak diimbangi dengan olahraga secara rutin.";
  } else if (35 <= bmi) {
    hasil = "Sangat Obesitas";
    t =
      "Anda Sangat Obesistas, Silakan hubungi ahli gizi terdekat/secara online.";
    t2 =
      "Beberapa tips untuk anda adalah berolaraga dan mengurangi kalori per hari.";
  }

  document.querySelector("#text").innerHTML = t;
  document.querySelector("#text2").innerHTML = t2;
  document.querySelector("#penjelasan").innerHTML = hasil;
  document.querySelector("#hasil").innerHTML = bmi.toFixed(2);
}
// Kalkulasi Onclick
function calculate() {
  if (
    usia.value == "" ||
    tinggi.value == "" ||
    berat.value == "" ||
    (pria.checked == false && wanita.checked == false)
  ) {
    modal.style.display = "block";
    modalText.innerHTML = "Silakan Isi Form Dengan Benar dan Tidak Kosong";
  } else {
    hitungBmi();
  }
}
// Reset Hasil
function clearAll() {
  document.querySelector("#text").innerHTML = "";
  document.querySelector("#text2").innerHTML = "";
  document.querySelector("#penjelasan").innerHTML = "";
  document.querySelector("#hasil").innerHTML = "Hasil BMI";
}
// Close Modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
