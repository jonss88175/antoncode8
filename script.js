let input = document.getElementById("input");
let tombol = document.getElementById("tombol");
let hasil = document.getElementById("hasil");
let nama = document.getElementById("nama");

tombol.addEventListener("click", cekKhodam);

function cekKhodam() {
  nama.innerHTML = input.value;
  let angkaRandom = Math.floor(Math.random() * namaKhodam.length);
  hasil.innerHTML = `${namaKhodam[angkaRandom]}`;
}

const namaKhodam = [
  "Black Mamba",
  "Siluman Spion",
  "Siluman Cangcut bolong",
  "Siluman Kuda Hitam",
  "Sapi terbang",
];