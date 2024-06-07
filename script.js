const nimInput = document.getElementById('nim');
const namaInput = document.getElementById('nama');
const presensiInput = document.getElementById('presensi');
const tugasInput = document.getElementById('tugas');
const utsInput = document.getElementById('uts');
const uasInput = document.getElementById('uas');
const presensi2Input = document.getElementById('presensi2');
const tugas2Input = document.getElementById('tugas2');
const uts2Input = document.getElementById('uts2');
const uas2Input = document.getElementById('uas2');
const simpanButton = document.getElementById('simpan');
const batalButton = document.getElementById('batal');
const nilaiTable = document.getElementById('nilai-table').getElementsByTagName('tbody')[0];
const resetButton = document.getElementById('reset');

let nilaiData = [];

function hitungNilaiAkhir(presensi, tugas, uts, uas, presensi2, tugas2, uts2, uas2) {
  const presensiTotal = (presensi + presensi2) / 2;
  const tugasTotal = (tugas + tugas2) / 2;
  const utsTotal = (uts + uts2) / 2;
  const uasTotal = (uas + uas2) / 2;

  const nilaiAkhir = ((presensiTotal / 14 * 100) * 0.1) + (tugasTotal * 0.3) + (utsTotal * 0.3) + (uasTotal * 0.3);
  return nilaiAkhir;
}

function getGrade(nilaiAkhir) {
  if (nilaiAkhir >= 80) {
    return 'A';
  } else if (nilaiAkhir >= 70) {
    return 'B';
  } else if (nilaiAkhir >= 60) {
    return 'C';
  } else if (nilaiAkhir >= 60) {
    return 'D';
  } else {
    return 'E';
  }
}

function renderNilaiTable() {
  nilaiTable.innerHTML = '';
  nilaiData.forEach((data, index) => {
    const row = nilaiTable.insertRow();
    const noCell = row.insertCell(0);
    const nimCell = row.insertCell(1);
    const namaCell = row.insertCell(2);
    const presensiCell = row.insertCell(3);
    const tugasCell = row.insertCell(4);
    const utsCell = row.insertCell(5);
    const uasCell = row.insertCell(6);
    const nilaiAkhirCell = row.insertCell(7);
    const gradeCell = row.insertCell(8);

    noCell.textContent = index + 1;
    nimCell.textContent = data.nim;
    namaCell.textContent = data.nama;
    presensiCell.textContent = data.presensiTotal;
    tugasCell.textContent = data.tugasTotal;
    utsCell.textContent = data.utsTotal;
    uasCell.textContent = data.uasTotal;
    nilaiAkhirCell.textContent = data.nilaiAkhir;
    gradeCell.textContent = data.grade;
  });
}

function validateForm() {
  const nim = nimInput.value.trim();
  const nama = namaInput.value.trim();
  const presensi = parseFloat(presensiInput.value);
  const tugas = parseFloat(tugasInput.value);
  const uts = parseFloat(utsInput.value);
  const uas = parseFloat(uasInput.value);
  const presensi2 = parseFloat(presensi2Input.value);
  const tugas2 = parseFloat(tugas2Input.value);
  const uts2 = parseFloat(uts2Input.value);
  const uas2 = parseFloat(uas2Input.value);

  if (!nim || !nama || isNaN(presensi) || isNaN(tugas) || isNaN(uts) || isNaN(uas) || isNaN(presensi2) || isNaN(tugas2) || isNaN(uts2) || isNaN(uas2)) {
    alert('mohon untuk diisi semua ya banggr! 🙏');
    return false;
  }

  return true;
}

simpanButton.addEventListener('click', () => {
  if (validateForm()) {
  const nim = nimInput.value;
  const nama = namaInput.value;
  const presensi = parseFloat(presensiInput.value);
  const tugas = parseFloat(tugasInput.value);
  const uts = parseFloat(utsInput.value);
  const uas = parseFloat(uasInput.value);
  const presensi2 = parseFloat(presensi2Input.value);
  const tugas2 = parseFloat(tugas2Input.value);
  const uts2 = parseFloat(uts2Input.value); 
  const uas2 = parseFloat(uas2Input.value);

  const nilaiAkhir = hitungNilaiAkhir(presensi, tugas, uts, uas, presensi2, tugas2, uts2, uas2);
  const grade = getGrade(nilaiAkhir);

  const presensiTotal = (presensi + presensi2) / 2;
  const tugasTotal = (tugas + tugas2) / 2;
  const utsTotal = (uts + uts2) / 2;
  const uasTotal = (uas + uas2) / 2;

  const data = {
    nim,
    nama,
    presensiTotal,
    tugasTotal,
    utsTotal,
    uasTotal,
    nilaiAkhir,
    grade
  };

  nilaiData.push(data);
  renderNilaiTable();

  nimInput.value = '';
  namaInput.value = '';
  presensiInput.value = '';
  tugasInput.value = '';
  utsInput.value = '';
  uasInput.value = '';
  presensi2Input.value = '';
  tugas2Input.value = '';
  uas2Input.value = '';
  uts2Input.value = '';
  }
});

batalButton.addEventListener('click', () => {
  presensiInput.value = '';
  tugasInput.value = '';
  utsInput.value = '';
  uasInput.value = '';
  presensi2Input.value = '';
  tugas2Input.value = '';
  uas2Input.value = '';
  uts2Input.value = '';
});

resetButton.addEventListener('click', () => {
  nilaiData = [];
  renderNilaiTable();
});
