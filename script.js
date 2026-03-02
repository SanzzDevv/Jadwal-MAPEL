// ===============================
// DARK MODE
// ===============================
(function () {
    const saved = localStorage.getItem('sijap-theme');
    if (saved === 'dark') {
        document.body.classList.add('dark');
    }
})();

// ===============================
// KONFIGURASI DATA YANG MUDAH DIUBAH
// ===============================

// Data kelas 7 (mudah ditambah/diubah) - SEKARANG SAMPAI 7I
const dataKelas7 = [
    { id: "7A", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 7A" },
    { id: "7B", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 7B" },
    { id: "7C", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 7C" },
    { id: "7D", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 7D" },
    { id: "7E", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 7E" },
    { id: "7F", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 7F" },
    { id: "7G", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 7G" },
    { id: "7H", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 7H" },
    { id: "7I", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 7I" }
];

// Data kelas 8 (mudah ditambah/diubah)
const dataKelas8 = [
    { id: "8A", waliKelas: "SETIA NUR PARIDAH, S.Pd", jumlahSiswa: 34, ruang: "Kelas 8A" },
    { id: "8B", waliKelas: "DWI PRIHANTO, K S.Pd", jumlahSiswa: 34, ruang: "Kelas 8B" },
    { id: "8C", waliKelas: "Nidya Eka Pratiwi, S. Pd", jumlahSiswa: 34, ruang: "Kelas 8C" },
    { id: "8D", waliKelas: "Mega Herliani, S. Sn", jumlahSiswa: 34, ruang: "Kelas 8D" },
    { id: "8E", waliKelas: "Farhan Budiarto, S. Pd", jumlahSiswa: 34, ruang: "Kelas 8E" },
    { id: "8F", waliKelas: "Fitria Agustini, S. Pd", jumlahSiswa: 34, ruang: "Kelas 8F" },
    { id: "8G", waliKelas: "Pipin Firmansyah N, S. Pd", jumlahSiswa: 34, ruang: "Kelas 8G" },
    { id: "8H", waliKelas: "Arif Maulana Gunawan, S. T", jumlahSiswa: 34, ruang: "Kelas 8H" },
    { id: "8I", waliKelas: "Alda Aldila Riyadi, S. Pd", jumlahSiswa: 34, ruang: "Kelas 8I" }
];

// Data kelas 9 (diaktifkan)
const dataKelas9 = [
    { id: "9A", waliKelas: "IIS PRIATINI, S.Pd", jumlahSiswa: 34, ruang: "Kelas 9A" },
    { id: "9B", waliKelas: "ELLI KEMALAWATI, S.Pd", jumlahSiswa: 34, ruang: "Kelas 9B" },
    { id: "9C", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 9C" },
    { id: "9D", waliKelas: "EHA JULAEHA, S.S", jumlahSiswa: 34, ruang: "Kelas 9D" },
    { id: "9E", waliKelas: "IKA KURNIA, S.Pd.", jumlahSiswa: 34, ruang: "Kelas 9E" },
    { id: "9F", waliKelas: "RONI RAHMANSYAH, S.KOM", jumlahSiswa: 34, ruang: "Kelas 9F" },
    { id: "9G", waliKelas: "LANI MUSTIKASARI, S.Pd", jumlahSiswa: 34, ruang: "Kelas 9G" },
    { id: "9H", waliKelas: "LIA PRAMURTYA, S.Si", jumlahSiswa: 34, ruang: "Kelas 9H" },
    { id: "9I", waliKelas: "M. NOOR FENDI SAEFULOH, S.Pd.", jumlahSiswa: 34, ruang: "Kelas 9I" }
];

const jadwalKelas7 = {

"7A": {
    senin: [
        { waktu: "07.30-08.10", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7A" },
        { waktu: "08.10-08.50", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7A" },
        { waktu: "08.50-09.30", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH S. Sos", ruang: "kelas 7A" },
        { waktu: "09.30-10.00", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH S. Sos", ruang: "kelas 7A" },
        { waktu: "10.20-10.55", mapel: "Matematika", guru: "ARI NUGRAHA, S. Pd", ruang: "kelas 7A" },
        { waktu: "10.55-11.30", mapel: "Matematika", guru: "ARI NUGRAHA, S. Pd", ruang: "kelas 7A" },
        { waktu: "12.40-13.20", mapel: "IPA", guru: "QISTI SEPTIA W. A, S. Pd", ruang: "lab IPA" },
        { waktu: "13.20-14.00", mapel: "IPA", guru: "QISTI SEPTIA W. A, S. Pd", ruang: "lab IPA" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7A" },
        { waktu: "07.40-08.20", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7A" },
        { waktu: "08.20-09.00", mapel: "Informatika", guru: "ANNISA HAELWANI, S. KOM", ruang: "lab Komputer" },
        { waktu: "09.00-09.40", mapel: "Informatika", guru: "ANNISA HAELWANI, S. KOM", ruang: "lab Komputer" },
        { waktu: "10.00-10.40", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd.", ruang: "kelas 7A" },
        { waktu: "10.40-11.20", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd.", ruang: "kelas 7A" },
        { waktu: "12.40-13.20", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7A" },
        { waktu: "13.20-14.00", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7A" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S. Pd", ruang: "kelas 7A" },
        { waktu: "07.40-08.20", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S. Pd", ruang: "kelas 7A" },
        { waktu: "08.20-09.00", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S. Pd", ruang: "kelas 7A" },
        { waktu: "09.00-09.40", mapel: "Matematika", guru: "ARI NUGRAHA, S. Pd", ruang: "kelas 7A" },
        { waktu: "10.00-10.40", mapel: "Matematika", guru: "ARI NUGRAHA, S. Pd", ruang: "kelas 7A" },
        { waktu: "10.40-11.20", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S. Pd", ruang: "kelas 7A" },
        { waktu: "12.40-13.20", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" },
        { waktu: "13.20-14.00", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "IPA", guru: "QISTI SEPTIA W. A, S. Pd", ruang: "lab IPA" },
        { waktu: "07.40-08.20", mapel: "IPA", guru: "QISTI SEPTIA W. A, S. Pd", ruang: "lab IPA" },
        { waktu: "08.20-09.00", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7A" },
        { waktu: "09.00-09.40", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7A" },
        { waktu: "10.00-10.40", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7A" },
        { waktu: "10.40-11.20", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S. Pd", ruang: "kelas 7A" },
        { waktu: "12.40-13.20", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S. Pd", ruang: "kelas 7A" },
        { waktu: "13.20-14.00", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S. Pd", ruang: "kelas 7A" }
    ],
    jumat: [
        { waktu: "08.00-08.40", mapel: "Olah Raga", guru: "", ruang: "Lapangan" }
    ]
},

"7B": {
    senin: [
        { waktu: "07.30-08.10", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S. Pd", ruang: "kelas 7B" },
        { waktu: "08.10-08.50", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S. Pd", ruang: "kelas 7B" },
        { waktu: "08.50-09.30", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S. Pd", ruang: "kelas 7B" },
        { waktu: "09.30-10.00", mapel: "B. Sunda", guru: "ANNISA HAELWANI, S. KOM", ruang: "kelas 7B" },
        { waktu: "10.20-10.55", mapel: "B. Sunda", guru: "ANNISA HAELWANI, S. KOM", ruang: "kelas 7B" },
        { waktu: "10.55-11.30", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S. Pd", ruang: "kelas 7B" },
        { waktu: "12.40-13.20", mapel: "Matematika", guru: "ARI NUGRAHA, S. Pd", ruang: "kelas 7B" },
        { waktu: "13.20-14.00", mapel: "Matematika", guru: "ARI NUGRAHA, S. Pd", ruang: "kelas 7B" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7B" },
        { waktu: "07.40-08.20", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7B" },
        { waktu: "08.20-09.00", mapel: "IPA", guru: "QISTI SEPTIA W. A, S. Pd", ruang: "lab IPA" },
        { waktu: "09.00-09.40", mapel: "IPA", guru: "QISTI SEPTIA W. A, S. Pd", ruang: "lab IPA" },
        { waktu: "10.00-10.40", mapel: "Matematika", guru: "ARI NUGRAHA, S. Pd", ruang: "kelas 7B" },
        { waktu: "10.40-11.20", mapel: "Matematika", guru: "ARI NUGRAHA, S. Pd", ruang: "kelas 7B" },
        { waktu: "12.40-13.20", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" },
        { waktu: "13.20-14.00", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7B" },
        { waktu: "07.40-08.20", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7B" },
        { waktu: "08.20-09.00", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7B" },
        { waktu: "09.00-09.40", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7B" },
        { waktu: "10.00-10.40", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7B" },
        { waktu: "10.40-11.20", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7B" },
        { waktu: "12.40-13.20", mapel: "IPA", guru: "QISTI SEPTIA W. A, S. Pd", ruang: "lab IPA" },
        { waktu: "13.20-14.00", mapel: "IPA", guru: "QISTI SEPTIA W. A, S. Pd", ruang: "lab IPA" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S. Pd", ruang: "kelas 7B" },
        { waktu: "07.40-08.20", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S. Pd", ruang: "kelas 7B" },
        { waktu: "08.20-09.00", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S. Pd", ruang: "kelas 7B" },
        { waktu: "09.00-09.40", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH, S. Sos", ruang: "kelas 7B" },
        { waktu: "10.00-10.40", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH, S. Sos", ruang: "kelas 7B" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7B" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7B" },
        { waktu: "13.20-14.00", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7B" }
    ],
    jumat: [
        { waktu: "08.00-08.40", mapel: "Olah Raga", guru: "", ruang: "Lapangan" }
    ]
},

"7C": {
    senin: [
        { waktu: "07.30-08.10", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S. Pd", ruang: "kelas 7C" },
        { waktu: "08.10-08.50", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S. Pd", ruang: "kelas 7C" },
        { waktu: "08.50-09.30", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S. Pd", ruang: "kelas 7C" },
        { waktu: "09.30-10.00", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S. Pd", ruang: "kelas 7C" },
        { waktu: "10.20-10.55", mapel: "IPA", guru: "QISTI SEPTIA W. A, S. Pd", ruang: "lab IPA" },
        { waktu: "10.55-11.30", mapel: "IPA", guru: "QISTI SEPTIA W. A, S. Pd", ruang: "lab IPA" },
        { waktu: "12.40-13.20", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH, S. Sos", ruang: "kelas 7C" },
        { waktu: "13.20-14.00", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH, S. Sos", ruang: "kelas 7C" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S. Pd", ruang: "kelas 7C" },
        { waktu: "07.40-08.20", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S. Pd", ruang: "kelas 7C" },
        { waktu: "08.20-09.00", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S. Pd", ruang: "kelas 7C" },
        { waktu: "09.00-09.40", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7C" },
        { waktu: "10.00-10.40", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7C" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7C" },
        { waktu: "12.40-13.20", mapel: "IPA", guru: "QISTI SEPTIA W. A, S. Pd", ruang: "lab IPA" },
        { waktu: "13.20-14.00", mapel: "IPA", guru: "QISTI SEPTIA W. A, S. Pd", ruang: "lab IPA" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7C" },
        { waktu: "07.40-08.20", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7C" },
        { waktu: "08.20-09.00", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7C" },
        { waktu: "09.00-09.40", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7C" },
        { waktu: "10.00-10.40", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7C" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7C" },
        { waktu: "12.40-13.20", mapel: "Matematika", guru: "ARI NUGRAHA, S. Pd", ruang: "kelas 7C" },
        { waktu: "13.20-14.00", mapel: "Matematika", guru: "ARI NUGRAHA, S. Pd", ruang: "kelas 7C" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "Informatika", guru: "ANNISA HAELWANI, S. KOM", ruang: "lab Komputer" },
        { waktu: "07.40-08.20", mapel: "Informatika", guru: "ANNISA HAELWANI, S. KOM", ruang: "lab Komputer" },
        { waktu: "08.20-09.00", mapel: "Matematika", guru: "ARI NUGRAHA, S. Pd", ruang: "kelas 7C" },
        { waktu: "09.00-09.40", mapel: "Matematika", guru: "ARI NUGRAHA, S. Pd", ruang: "kelas 7C" },
        { waktu: "10.00-10.40", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" },
        { waktu: "10.40-11.20", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" },
        { waktu: "12.40-13.20", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7C" },
        { waktu: "13.20-14.00", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7C" }
    ],
    jumat: [
        { waktu: "08.00-08.40", mapel: "Olah Raga", guru: "", ruang: "Lapangan" }
    ]
},
    
    "7D": {
        senin: [
        { waktu: "07.30-08.10", mapel: "IPA", guru: "QISTI SEPTIA W. A, S.Pd", ruang: "Kelas 7D" },
        { waktu: "08.10-08.50", mapel: "IPA", guru: "QISTI SEPTIA W. A, S.Pd", ruang: "Kelas 7D" },
        { waktu: "08.50-09.30", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S.Pd", ruang: "Kelas 7D" },
        { waktu: "09.30-10.00", mapel: "B. INDONESIA", guru: "RINI SEPTIANI, S.Pd", ruang: "Kelas 7D" },
        { waktu: "10.20-10.55", mapel: "B. INDONESIA", guru: "RINI SEPTIANI, S.Pd", ruang: "Kelas 7D" },
        { waktu: "10.55-11.30", mapel: "B. INDONESIA", guru: "RINI SEPTIANI, S.Pd", ruang: "Kelas 7D" },
        { waktu: "12.40-13.20", mapel: "PAI", guru: "IMAM ADI PRASETYO, S.Pd", ruang: "Kelas 7D" },
        { waktu: "13.20-14.00", mapel: "PAI", guru: "IMAM ADI PRASETYO, S.Pd", ruang: "Kelas 7D" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "IPA", guru: "QISTI SEPTIA W. A, S.Pd", ruang: "Kelas 7D" },
        { waktu: "07.40-08.20", mapel: "IPA", guru: "QISTI SEPTIA W. A, S.Pd", ruang: "Kelas 7D" },
        { waktu: "08.20-09.00", mapel: "MATEMATIKA", guru: "ARI NUGRAHA, S.Pd", ruang: "Kelas 7D" },
        { waktu: "09.00-09.40", mapel: "MATEMATIKA", guru: "ARI NUGRAHA, S.Pd", ruang: "Kelas 7D" },
        { waktu: "10.00-10.40", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 7D" },
        { waktu: "10.40-11.20", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 7D" },
        { waktu: "12.40-13.20", mapel: "B. INDONESIA", guru: "RINI SEPTIANI, S.Pd", ruang: "Kelas 7D" },
        { waktu: "13.20-14.00", mapel: "B. INDONESIA", guru: "RINI SEPTIANI, S.Pd", ruang: "Kelas 7D" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S.Pd", ruang: "Kelas 7D" },
        { waktu: "07.40-08.20", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S.Pd", ruang: "Kelas 7D" },
        { waktu: "08.20-09.00", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S.Pd", ruang: "Kelas 7D" },
        { waktu: "09.00-09.40", mapel: "B.INGGRIS", guru: "ENDAH NURJANAH, S.Pd.", ruang: "Kelas 7D" },
        { waktu: "10.00-10.40", mapel: "B. INGGRIS", guru: "ENDAH NURJANAH, S.Pd", ruang: "Kelas 7D" },
        { waktu: "10.40-11.20", mapel: "B. INGGRIS", guru: "ENDAH NURJANAH, S.Pd", ruang: "Kelas 7D/LABKOM" },
        { waktu: "12.40-13.20", mapel: "SENPRAK", guru: "DIAH SOEPLIAH, S.Sos", ruang: "Kelas 7D" },
        { waktu: "13.20-14.00", mapel: "SENPRAK", guru: "DIAH SOEPLIAH, S.Sos", ruang: "Kelas 7D" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapang" },
        { waktu: "07.40-08.20", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapang" },
        { waktu: "08.20-09.00", mapel: "P.Pancasila", guru: "DIAN RAHMAWATI, S.Pd", ruang: "Kelas 7D" },
        { waktu: "09.00-09.40", mapel: "P.Pancasila", guru: "DIAN RAHMAWATI, S.Pd", ruang: "Kelas 7D" },
        { waktu: "10.00-10.40", mapel: "MATEMATIKA", guru: "ARI NUGRAHA, S.Pd", ruang: "Kelas 7D" },
        { waktu: "10.40-11.20", mapel: "MATEMATIKA", guru: "ARI NUGRAHA, S.Pd", ruang: "Kelas 7D" },
        { waktu: "12.40-13.20", mapel: "Informatika", guru: "ANNISA HAELWANI, S.Kom", ruang: "Kelas 7D/LABKOM" },
        { waktu: "13.20-14.00", mapel: "Informatika", guru: "ANNISA HAELWANI, S.Kom", ruang: "Kelas 7D/LABKOM" }
    ],
    jumat: [
    ]
},
    
"7E": {
    senin: [
        { waktu: "07.30-08.10", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7E" },
        { waktu: "08.10-08.50", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7E" },
        { waktu: "08.50-09.30", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7E" },
        { waktu: "09.30-10.00", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S. Pd", ruang: "kelas 7E" },
        { waktu: "10.20-10.55", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S. Pd", ruang: "kelas 7E" },
        { waktu: "10.55-11.30", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S. Pd", ruang: "kelas 7E" },
        { waktu: "12.40-13.20", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7E" },
        { waktu: "13.20-14.00", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7E" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7E" },
        { waktu: "07.40-08.20", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7E" },
        { waktu: "08.20-09.00", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "09.00-09.40", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "10.00-10.40", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S. Pd", ruang: "kelas 7E" },
        { waktu: "10.40-11.20", mapel: "B. Inggris", guru: "ENDAH NURJANAH, S. Pd", ruang: "kelas 7E" },
        { waktu: "12.40-13.20", mapel: "B. Inggris", guru: "ENDAH NURJANAH, S. Pd", ruang: "kelas 7E" },
        { waktu: "13.20-14.00", mapel: "B. Inggris", guru: "ENDAH NURJANAH, S. Pd", ruang: "kelas 7E" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH, S. Sos", ruang: "kelas 7E" },
        { waktu: "07.40-08.20", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH, S. Sos", ruang: "kelas 7E" },
        { waktu: "08.20-09.00", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7E" },
        { waktu: "09.00-09.40", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7E" },
        { waktu: "10.00-10.40", mapel: "Informatika", guru: "ANNISA HAELWANI, S. KOM", ruang: "lab Komputer" },
        { waktu: "10.40-11.20", mapel: "Informatika", guru: "ANNISA HAELWANI, S. KOM", ruang: "lab Komputer" },
        { waktu: "12.40-13.20", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7E" },
        { waktu: "13.20-14.00", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7E" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7E" },
        { waktu: "07.40-08.20", mapel: "B. Indonesia", guru: "RINI SEPTIANI, S. Pd", ruang: "kelas 7E" },
        { waktu: "08.20-09.00", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" },
        { waktu: "09.00-09.40", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" },
        { waktu: "10.00-10.40", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "10.40-11.20", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "12.40-13.20", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7E" },
        { waktu: "13.20-14.00", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7E" }
    ],
    jumat: [
    ]
},

"7F": {
    senin: [
        { waktu: "07.30-08.10", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7F" },
        { waktu: "08.10-08.50", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7F" },
        { waktu: "08.50-09.30", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7F" },
        { waktu: "09.30-10.00", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7F" },
        { waktu: "10.20-10.55", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7F" },
        { waktu: "10.55-11.30", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7F" },
        { waktu: "12.40-13.20", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "13.20-14.00", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "B. Inggris", guru: "ENDAH NURJANAH, S. Pd", ruang: "kelas 7F" },
        { waktu: "07.40-08.20", mapel: "B. Inggris", guru: "ENDAH NURJANAH, S. Pd", ruang: "kelas 7F" },
        { waktu: "08.20-09.00", mapel: "B. Inggris", guru: "ENDAH NURJANAH, S. Pd", ruang: "kelas 7F" },
        { waktu: "09.00-09.40", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7F" },
        { waktu: "10.00-10.40", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7F" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7F" },
        { waktu: "12.40-13.20", mapel: "Informatika", guru: "ANNISA HAELWANI, S. KOM", ruang: "lab Komputer" },
        { waktu: "13.20-14.00", mapel: "Informatika", guru: "ANNISA HAELWANI, S. KOM", ruang: "lab Komputer" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "07.40-08.20", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "08.20-09.00", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" },
        { waktu: "09.00-09.40", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" },
        { waktu: "10.00-10.40", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7F" },
        { waktu: "10.40-11.20", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7F" },
        { waktu: "12.40-13.20", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7F" },
        { waktu: "13.20-14.00", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7F" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "IPS", guru: "ANDRI SUNANTO, S. Pd., M. Pd", ruang: "kelas 7F" },
        { waktu: "07.40-08.20", mapel: "IPS", guru: "ANDRI SUNANTO, S. Pd., M. Pd", ruang: "kelas 7F" },
        { waktu: "08.20-09.00", mapel: "IPS", guru: "ANDRI SUNANTO, S. Pd., M. Pd", ruang: "kelas 7F" },
        { waktu: "09.00-09.40", mapel: "BP-BK", guru: "AI RIKA ISMAHANI, S. Psi", ruang: "kelas 7F" },
        { waktu: "10.00-10.40", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7F" },
        { waktu: "10.40-11.20", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7F" },
        { waktu: "12.40-13.20", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH, S. Sos", ruang: "kelas 7F" },
        { waktu: "13.20-14.00", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH, S. Sos", ruang: "kelas 7F" }
    ],
    jumat: [
    ]
},
    
"7G": {
    senin: [
        { waktu: "07.30-08.10", mapel: "MATEMATIKA", guru: "FIRDA PUTRI UTAMI,S.Pd", ruang: "Kelas 7G" },
        { waktu: "08.10-08.50", mapel: "MATEMATIKA", guru: "FIRDA PUTRI UTAMI,S.Pd", ruang: "Kelas 7G" },
        { waktu: "08.50-09.30", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapang" },
        { waktu: "09.30-10.00", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapang" },
        { waktu: "10.20-10.55", mapel: "IPA", guru: "INNA NURAINI SUJANA, S.Pd", ruang: "Kelas 7G" },
        { waktu: "10.55-11.30", mapel: "IPA", guru: "INNA NURAINI SUJANA, S.Pd", ruang: "Kelas 7G" },
        { waktu: "12.40-13.20", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 7G" },
        { waktu: "13.20-14.00", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 7G" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "Kelas 7G" },
        { waktu: "07.40-08.20", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "Kelas 7G" },
        { waktu: "08.20-09.00", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "Kelas 7G" },
        { waktu: "09.00-09.40", mapel: "IPS", guru: "ANDRI SUNANTO, S.Pd., M.Pd", ruang: "Kelas 7G" },
        { waktu: "10.00-10.40", mapel: "IPS", guru: "ANDRI SUNANTO, S.Pd., M.Pd", ruang: "Kelas 7G" },
        { waktu: "10.40-11.20", mapel: "IPS", guru: "ANDRI SUNANTO, S.Pd., M.Pd", ruang: "Kelas 7G" },
        { waktu: "12.40-13.20", mapel: "PAI", guru: "IMAM ADI PRASETYO, S.Pd.", ruang: "Kelas 7G" },
        { waktu: "13.20-14.00", mapel: "PAI", guru: "IMAM ADI PRASETYO, S.Pd.", ruang: "Kelas 7G" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "P.Pancasila", guru: "DIAN RAHMAWATI, S.Pd", ruang: "Kelas 7G" },
        { waktu: "07.40-08.20", mapel: "P.Pancasila", guru: "DIAN RAHMAWATI, S.Pd", ruang: "Kelas 7G" },
        { waktu: "08.20-09.00", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "Kelas 7G" },
        { waktu: "09.00-09.40", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "Kelas 7G" },
        { waktu: "10.00-10.40", mapel: "IPA", guru: "INNA NURAINI SUJANA, S.Pd", ruang: "Kelas 7G" },
        { waktu: "10.40-11.20", mapel: "IPA", guru: "INNA NURAINI SUJANA, S.Pd", ruang: "Kelas 7G" },
        { waktu: "12.40-13.20", mapel: "Informatika", guru: "ANNISA HAELWANI, S.Kom", ruang: "Kelas 7G/LABKOM" },
        { waktu: "13.20-14.00", mapel: "Informatika", guru: "ANNISA HAELWANI, S.Kom", ruang: "Kelas 7G/LABKOM" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "SENPRAK", guru: "DIAH SOEPLIAH, S.Sos", ruang: "Kelas 7G" },
        { waktu: "07.40-08.20", mapel: "SENPRAK", guru: "DIAH SOEPLIAH, S.Sos", ruang: "Kelas 7G" },
        { waktu: "08.20-09.00", mapel: "MATEMATIKA", guru: "FIRDA PUTRI UTAMI,S.Pd", ruang: "Kelas 7G" },
        { waktu: "09.00-09.40", mapel: "MATEMATIKA", guru: "FIRDA PUTRI UTAMI,S.Pd", ruang: "Kelas 7G" },
        { waktu: "10.00-10.40", mapel: "BP-BK", guru: "AI RIKA ISMAHANI, S.Psi", ruang: "Kelas 7G" },
        { waktu: "10.40-11.20", mapel: "B. INGGRIS", guru: "ENDAH NURJANAH, S.Pd.", ruang: "Kelas 7G" },
        { waktu: "12.40-13.20", mapel: "B. INGGRIS", guru: "ENDAH NURJANAH, S.Pd.", ruang: "Kelas 7G" },
        { waktu: "13.20-14.00", mapel: "B. INGGRIS", guru: "ENDAH NURJANAH, S.Pd.", ruang: "Kelas 7G" }
    ],
    jumat: [
    ]
},
    
"7H": {
    senin: [
        { waktu: "07.30-08.10", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "08.10-08.50", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "08.50-09.30", mapel: "BP-BK", guru: "AI RIKA ISHAMAHANI, S. Psi", ruang: "kelas 7H" },
        { waktu: "09.30-10.00", mapel: "IPS", guru: "ANDRI SUNANTO, S. Pd., M. Pd", ruang: "kelas 7H" },
        { waktu: "10.20-10.55", mapel: "IPS", guru: "ANDRI SUNANTO, S. Pd., M. Pd", ruang: "kelas 7H" },
        { waktu: "10.55-11.30", mapel: "IPS", guru: "ANDRI SUNANTO, S. Pd., M. Pd", ruang: "kelas 7H" },
        { waktu: "12.40-13.20", mapel: "Informatika", guru: "ANNISA HAELWANI, S. KOM", ruang: "lab Komputer" },
        { waktu: "13.20-14.00", mapel: "Informatika", guru: "ANNISA HAELWANI, S. KOM", ruang: "lab Komputer" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" },
        { waktu: "07.40-08.20", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" },
        { waktu: "08.20-09.00", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7H" },
        { waktu: "09.00-09.40", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7H" },
        { waktu: "10.00-10.40", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7H" },
        { waktu: "10.40-11.20", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7H" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7H" },
        { waktu: "13.20-14.00", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7H" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "B. Inggris", guru: "ENDAH NURJANAH, S. Pd", ruang: "kelas 7H" },
        { waktu: "07.40-08.20", mapel: "B. Inggris", guru: "ENDAH NURJANAH, S. Pd", ruang: "kelas 7H" },
        { waktu: "08.20-09.00", mapel: "B. Inggris", guru: "ENDAH NURJANAH, S. Pd", ruang: "kelas 7H" },
        { waktu: "09.00-09.40", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH, S. Sos", ruang: "kelas 7H" },
        { waktu: "10.00-10.40", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH, S. Sos", ruang: "kelas 7H" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7H" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7H" },
        { waktu: "13.20-14.00", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7H" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7H" },
        { waktu: "07.40-08.20", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7H" },
        { waktu: "08.20-09.00", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7H" },
        { waktu: "09.00-09.40", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7H" },
        { waktu: "10.00-10.40", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7H" },
        { waktu: "10.40-11.20", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7H" },
        { waktu: "12.40-13.20", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "13.20-14.00", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" }
    ],
    jumat: [
    ]
},

"7I": {
    senin: [
        { waktu: "07.30-08.10", mapel: "IPS", guru: "ANDRI SUNANTO, S. Pd., M. Pd", ruang: "kelas 7I" },
        { waktu: "08.10-08.50", mapel: "IPS", guru: "ANDRI SUNANTO, S. Pd., M. Pd", ruang: "kelas 7I" },
        { waktu: "08.50-09.30", mapel: "IPS", guru: "ANDRI SUNANTO, S. Pd., M. Pd", ruang: "kelas 7I" },
        { waktu: "09.30-10.00", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7I" },
        { waktu: "10.20-10.55", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7I" },
        { waktu: "10.55-11.30", mapel: "B. Inggris", guru: "ENDAH NURJANAH, S. Pd", ruang: "kelas 7I" },
        { waktu: "12.40-13.20", mapel: "B. Inggris", guru: "ENDAH NURJANAH, S. Pd", ruang: "kelas 7I" },
        { waktu: "13.20-14.00", mapel: "B. Inggris", guru: "ENDAH NURJANAH, S. Pd", ruang: "kelas 7I" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "07.40-08.20", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "08.20-09.00", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7I" },
        { waktu: "09.00-09.40", mapel: "Matematika", guru: "FIRDA PUTRI UTAMI, S. Pd", ruang: "kelas 7I" },
        { waktu: "10.00-10.40", mapel: "Informatika", guru: "ANNISA HAELWANI, S. KOM", ruang: "lab Komputer" },
        { waktu: "10.40-11.20", mapel: "Informatika", guru: "ANNISA HAELWANI, S. KOM", ruang: "lab Komputer" },
        { waktu: "12.40-13.20", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH, S. Sos", ruang: "kelas 7I" },
        { waktu: "13.20-14.00", mapel: "Seni Praktek", guru: "DIAH SOEPLIAH, S. Sos", ruang: "kelas 7I" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7I" },
        { waktu: "07.40-08.20", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7I" },
        { waktu: "08.20-09.00", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7I" },
        { waktu: "09.00-09.40", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S. Pd", ruang: "kelas 7I" },
        { waktu: "10.00-10.40", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" },
        { waktu: "10.40-11.20", mapel: "PJOK", guru: "NURILLAH EL ZAHRA, S.Pd.Gr", ruang: "Lapangan" },
        { waktu: "12.40-13.20", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7I" },
        { waktu: "13.20-14.00", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7I" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7I" },
        { waktu: "07.40-08.20", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7I" },
        { waktu: "08.20-09.00", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "09.00-09.40", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "10.00-10.40", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7I" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7I" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S. Pd", ruang: "kelas 7I" },
        { waktu: "13.20-14.00", mapel: "BP-BK", guru: "AI RIKA ISHAMAHANI, S. Psi", ruang: "kelas 7I" }
    ],
    jumat: [
    ]
},

};

const jadwalKelas8 = {
"8A": {
    senin: [
        { waktu: "07.30 - 08.10", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8A" },
        { waktu: "08.10 - 08.50", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8A" },
        { waktu: "08.50 - 09.30", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8A" },
        { waktu: "09.30 - 10.00", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8A" },
        { waktu: "10.20 - 10.55", mapel: "P.Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8A" },
        { waktu: "10.55 - 11.30", mapel: "P.Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8A" },
        { waktu: "12.40 - 13.20", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8A" },
        { waktu: "13.20 - 14.00", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8A" },
    ],
    selasa: [
        { waktu: "07.00 - 07.40", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8A" },
        { waktu: "07.40 - 08.20", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8A" },
        { waktu: "08.20 - 09.00", mapel: "B. Inggris", guru: "IWAN SETIAWAN, S.Pd", ruang: "Kelas 8A" },
        { waktu: "09.00 - 09.40", mapel: "B. Inggris", guru: "IWAN SETIAWAN, S.Pd", ruang: "Kelas 8A" },
        { waktu: "10.00 - 10.40", mapel: "B. Inggris", guru: "IWAN SETIAWAN, S.Pd", ruang: "Kelas 8A" },
        { waktu: "10.40 - 11.20", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8A" },
        { waktu: "12.40 - 13.20", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8A" },
        { waktu: "13.20 - 14.00", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8A" },
    ],
    rabu: [
        { waktu: "07.00 - 07.40", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8A" },
        { waktu: "07.40 - 08.20", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8A" },
        { waktu: "08.20 - 09.00", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8A/LABKOM" },
        { waktu: "09.00 - 09.40", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8A/LABKOM" },
        { waktu: "10.00 - 10.40", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Lapang" },
        { waktu: "10.40 - 11.20", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Lapang" },
        { waktu: "12.40 - 13.20", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Lapang" },
        { waktu: "13.20 - 14.00", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8A" },
    ],
    kamis: [
        { waktu: "07.00 - 07.40", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8A" },
        { waktu: "07.40 - 08.20", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8A" },
        { waktu: "08.20 - 09.00", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8A" },
        { waktu: "09.00 - 09.40", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S.Pd", ruang: "Kelas 8A" },
        { waktu: "10.00 - 10.40", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8A" },
        { waktu: "10.40 - 11.20", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8A" },
        { waktu: "12.40 - 13.20", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 8A" },
        { waktu: "13.20 - 14.00", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 8A" },
    ],
    jumat: [
    ]
},
    
"8B": {
    senin: [
        { waktu: "07.30 - 08.10", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8B" },
        { waktu: "08.10 - 08.50", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8B" },
        { waktu: "08.50 - 09.30", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8B" },
        { waktu: "09.30 - 10.00", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8B" },
        { waktu: "10.20 - 10.55", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "10.55 - 11.30", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "12.40 - 13.20", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "13.20 - 14.00", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S.Pd", ruang: "Kelas 8B" },
    ],
    selasa: [
        { waktu: "07.00 - 07.40", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "07.40 - 08.20", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "08.20 - 09.00", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "09.00 - 09.40", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "10.00 - 10.40", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "10.40 - 11.20", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "12.40 - 13.20", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Lapang" },
        { waktu: "13.20 - 14.00", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Lapang" },
    ],
    rabu: [
        { waktu: "07.00 - 07.40", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8B/LABKOM" },
        { waktu: "07.40 - 08.20", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8B/LABKOM" },
        { waktu: "08.20 - 09.00", mapel: "B. Inggris", guru: "IWAN SETIAWAN, S.Pd", ruang: "Kelas 8B" },
        { waktu: "09.00 - 09.40", mapel: "B. Inggris", guru: "IWAN SETIAWAN, S.Pd", ruang: "Kelas 8B" },
        { waktu: "10.00 - 10.40", mapel: "B. Inggris", guru: "IWAN SETIAWAN, S.Pd", ruang: "Kelas 8B" },
        { waktu: "10.40 - 11.20", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "12.40 - 13.20", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "13.20 - 14.00", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8B" },
    ],
    kamis: [
        { waktu: "07.00 - 07.40", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8B" },
        { waktu: "07.40 - 08.20", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8B" },
        { waktu: "08.20 - 09.00", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8B" },
        { waktu: "09.00 - 09.40", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8B" },
        { waktu: "10.00 - 10.40", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "10.40 - 11.20", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8B" },
        { waktu: "12.40 - 13.20", mapel: "P.Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8B" },
        { waktu: "13.20 - 14.00", mapel: "P.Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8B" },
    ],
    jumat: [
    ]
},
    
// KELAS 8C - JADWAL SESUNGGUHNYA
"8C": {
    senin: [
        { waktu: "07.30-08.10", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8C/LABKOM" },
        { waktu: "08.10-08.50", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8C/LABKOM" },
        { waktu: "08.50-09.30", mapel: "B. Inggris", guru: "IWAN SETIAWAN, S.Pd", ruang: "Kelas 8C" },
        { waktu: "09.30-10.00", mapel: "B. Inggris", guru: "IWAN SETIAWAN, S.Pd", ruang: "Kelas 8C" },
        { waktu: "10.20-10.55", mapel: "B. Inggris", guru: "IWAN SETIAWAN, S.Pd", ruang: "Kelas 8C" },
        { waktu: "10.55-11.30", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8C" },
        { waktu: "12.40-13.20", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8C" },
        { waktu: "13.20-14.00", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8C" },
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "P. Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8C" },
        { waktu: "07.40-08.20", mapel: "P. Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8C" },
        { waktu: "08.20-09.00", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8C" },
        { waktu: "09.00-09.40", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8C" },
        { waktu: "10.00-10.40", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8C" },
        { waktu: "10.40-11.20", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8C" },
        { waktu: "12.40-13.20", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 8C" },
        { waktu: "13.20-14.00", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 8C" },
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8C" },
        { waktu: "07.40-08.20", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8C" },
        { waktu: "08.20-09.00", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8C" },
        { waktu: "09.00-09.40", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S.Pd", ruang: "Kelas 8C" },
        { waktu: "10.00-10.40", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8C" },
        { waktu: "10.40-11.20", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Lapang" },
        { waktu: "12.40-13.20", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Lapang" },
        { waktu: "13.20-14.00", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Lapang" },
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8C" },
        { waktu: "07.40-08.20", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8C" },
        { waktu: "08.20-09.00", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8C" },
        { waktu: "09.00-09.40", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8C" },
        { waktu: "10.00-10.40", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8C" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8C" },
        { waktu: "12.40-13.20", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8C" },
        { waktu: "13.20-14.00", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8C" }
    ],
    jumat: [
    ]
},
    
"8D": {
    senin: [
        { waktu: "07.30 - 08.10", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8D" },
        { waktu: "08.10 - 08.50", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8D" },
        { waktu: "08.50 - 09.30", mapel: "P.Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8D" },
        { waktu: "09.30 - 10.00", mapel: "P.PANCASILA", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8D" },
        { waktu: "10.20 - 10.55", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "10.55 - 11.30", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "12.40 - 13.20", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Lapang" },
        { waktu: "13.20 - 14.00", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Lapang" }
    ],
    selasa: [
        { waktu: "07.00 - 07.40", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8D/LABKOM" },
        { waktu: "07.40 - 08.20", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8D/LABKOM" },
        { waktu: "08.20 - 09.00", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8D" },
        { waktu: "09.00 - 09.40", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8D" },
        { waktu: "10.00 - 10.40", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "10.40 - 11.20", mapel: "MATEMATIKA", guru: "LELA ZULKAEDAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "12.40 - 13.20", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8D" },
        { waktu: "13.20 - 14.00", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8D" }
    ],
    rabu: [
        { waktu: "07.00 - 07.40", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "07.40 - 08.20", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "08.20 - 09.00", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "09.00 - 09.40", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "10.00 - 10.40", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "10.40 - 11.20", mapel: "B. INDONESIA", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "12.40 - 13.20", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8D" },
        { waktu: "13.20 - 14.00", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8D" }
    ],
    kamis: [
        { waktu: "07.00 - 07.40", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "07.40 - 08.20", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "08.20 - 09.00", mapel: "B. Inggris", guru: "IWAN SETIAWAN, S.Pd", ruang: "Kelas 8D" },
        { waktu: "09.00 - 09.40", mapel: "B. Inggris", guru: "IWAN SETIAWAN, S.Pd", ruang: "Kelas 8D" },
        { waktu: "10.00 - 10.40", mapel: "B. Inggris", guru: "IWAN SETIAWAN, S.Pd", ruang: "Kelas 8D" },
        { waktu: "10.40 - 11.20", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S.Pd", ruang: "Kelas 8D" },
        { waktu: "12.40 - 13.20", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8D" },
        { waktu: "13.20 - 14.00", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "Kelas 8D" }
    ],
    jumat: [
    ]
},

  // KELAS 8E - JADWAL RESMI
"8E": {
    senin: [
        { waktu: "07.30-08.10", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S.Pd", ruang: "Kelas 8E" },
        { waktu: "08.10-08.50", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8E" },
        { waktu: "08.50-09.30", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8E" },
        { waktu: "09.30-10.00", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8E" },
        { waktu: "10.20-10.55", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8E" },
        { waktu: "10.55-11.30", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8E" },
        { waktu: "12.40-13.20", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8E" },
        { waktu: "13.20-14.00", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8E" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8E" },
        { waktu: "07.40-08.20", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd" , ruang: "Kelas 8E" },
        { waktu: "08.20-09.00", mapel: "P. Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8E" },
        { waktu: "09.00-09.40", mapel: "P. Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8E" },
        { waktu: "10.00-10.40", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8E/LABKOM" },
        { waktu: "10.40-11.20", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8E/LABKOM" },
        { waktu: "12.40-13.20", mapel: "Matematika", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8E" },
        { waktu: "13.20-14.00", mapel: "Matematika", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8E" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "Matematika", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8E" },
        { waktu: "07.40-08.20", mapel: "Matematika", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8E" },
        { waktu: "08.20-09.00", mapel: "Seni Praktek", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8E" },
        { waktu: "09.00-09.40", mapel: "Seni Praktek", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8E" },
        { waktu: "10.00-10.40", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8E" },
        { waktu: "10.40-11.20", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8E" },
        { waktu: "12.40-13.20", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "Kelas 8E" },
        { waktu: "13.20-14.00", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "Kelas 8E" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Kelas 8E" },
        { waktu: "07.40-08.20", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Kelas 8E" },
        { waktu: "08.20-09.00", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8E" },
        { waktu: "09.00-09.40", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8E" },
        { waktu: "10.00-10.40", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8E" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8E" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8E" },
        { waktu: "13.20-14.00", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8E" }
    ],
    jumat: [
]
},

"8F": {
    senin: [
        { waktu: "07.30 - 08.10", mapel: "P.Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8F" },
        { waktu: "08.10 - 08.50", mapel: "P.Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8F" },
        { waktu: "08.50 - 09.30", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8F/LABKOM" },
        { waktu: "09.30 - 10.00", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8F/LABKOM" },
        { waktu: "10.20 - 10.55", mapel: "MATEMATIKA", guru: "FARHAN BUDIANTO, S.Pd", ruang: "Kelas 8F" },
        { waktu: "10.55 - 11.30", mapel: "MATEMATIKA", guru: "FARHAN BUDIANTO, S.Pd", ruang: "Kelas 8F" },
        { waktu: "12.40 - 13.20", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8F" },
        { waktu: "13.20 - 14.00", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8F" }
    ],
    selasa: [
        { waktu: "07.00 - 07.40", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8F" },
        { waktu: "07.40 - 08.20", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8F" },
        { waktu: "08.20 - 09.00", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8F" },
        { waktu: "09.00 - 09.40", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S.Pd", ruang: "Kelas 8F" },
        { waktu: "10.00 - 10.40", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8F" },
        { waktu: "10.40 - 11.20", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8F" },
        { waktu: "12.40 - 13.20", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8F" },
        { waktu: "13.20 - 14.00", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8F" }
    ],
    rabu: [
        { waktu: "07.00 - 07.40", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "Kelas 8F" },
        { waktu: "07.40 - 08.20", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "Kelas 8F" },
        { waktu: "08.20 - 09.00", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8F" },
        { waktu: "09.00 - 09.40", mapel: "IPA", guru: "NIDYA EKA PRATIWI, S.Pd", ruang: "Kelas 8F" },
        { waktu: "10.00 - 10.40", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8F" },
        { waktu: "10.40 - 11.20", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8F" },
        { waktu: "12.40 - 13.20", mapel: "MATEMATIKA", guru: "FARHAN BUDIANTO, S.Pd", ruang: "Kelas 8F" },
        { waktu: "13.20 - 14.00", mapel: "MATEMATIKA", guru: "FARHAN BUDIANTO, S.Pd", ruang: "Kelas 8F" }
    ],
    kamis: [
        { waktu: "07.00 - 07.40", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8F" },
        { waktu: "07.40 - 08.20", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8F" },
        { waktu: "08.20 - 09.00", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8F" },
        { waktu: "09.00 - 09.40", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8F" },
        { waktu: "10.00 - 10.40", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8F" },
        { waktu: "10.40 - 11.20", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8F" },
        { waktu: "12.40 - 13.20", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Lapang" },
        { waktu: "13.20 - 14.00", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Lapang" }
    ],
    jumat: [
    ]
},

// KELAS 8G - JADWAL RESMI
"8G": {
    senin: [
        { waktu: "07.30-08.10", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8G" },
        { waktu: "08.10-08.50", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8G" },
        { waktu: "08.50-09.30", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8G" },
        { waktu: "09.30-10.00", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8G" },
        { waktu: "10.20-10.55", mapel: "IPS", guru: "LUTHFI HADIANSYAH, S.Pd", ruang: "Kelas 8G" },
        { waktu: "10.55-11.30", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8G" },
        { waktu: "12.40-13.20", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8G" },
        { waktu: "13.20-14.00", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8G" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "MATEMATIKA", guru: "FARHAN BUDIANTO, S.Pd", ruang: "Kelas 8G" },
        { waktu: "07.40-08.20", mapel: "MATEMATIKA", guru: "FARHAN BUDIANTO, S.Pd", ruang: "Kelas 8G" },
        { waktu: "08.20-09.00", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "Kelas 8G" },
        { waktu: "09.00-09.40", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "Kelas 8G" },
        { waktu: "10.00-10.40", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Lapang" },
        { waktu: "10.40-11.20", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Lapang" },
        { waktu: "12.40-13.20", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8G/LABKOM" },
        { waktu: "13.20-14.00", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8G/LABKOM" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S.Pd", ruang: "Kelas 8G" },
        { waktu: "07.40-08.20", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8G" },
        { waktu: "08.20-09.00", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8G" },
        { waktu: "09.00-09.40", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8G" },
        { waktu: "10.00-10.40", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "Kelas 8G" },
        { waktu: "10.40-11.20", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "Kelas 8G" },
        { waktu: "12.40-13.20", mapel: "P. Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8G" },
        { waktu: "13.20-14.00", mapel: "P. Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8G" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8G" },
        { waktu: "07.40-08.20", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8G" },
        { waktu: "08.20-09.00", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8G" },
        { waktu: "09.00-09.40", mapel: "SEPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8G" },
        { waktu: "10.00-10.40", mapel: "MATEMATIKA", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8G" },
        { waktu: "10.40-11.20", mapel: "MATEMATIKA", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8G" },
        { waktu: "12.40-13.20", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "Kelas 8G" },
        { waktu: "13.20-14.00", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "Kelas 8G" }
    ],
    jumat: [
    ]
},

// KELAS 8H - JADWAL RESMI
"8H": {
    senin: [
        { waktu: "07.30-08.10", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Kelas 8H/Lapang" },
        { waktu: "08.10-08.50", mapel: "PJOK", guru: "PIPIN FIRMANSYAH N, S.Pd", ruang: "Kelas 8H/Lapang" },
        { waktu: "08.50-09.30", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8H" },
        { waktu: "09.30-10.00", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8H" },
        { waktu: "10.20-10.55", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "Kelas 8H" },
        { waktu: "10.55-11.30", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "Kelas 8H" },
        { waktu: "12.40-13.20", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8H" },
        { waktu: "13.20-14.00", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8H" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "Seni Praktek", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8H" },
        { waktu: "07.40-08.20", mapel: "Seni Praktek", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8H" },
        { waktu: "08.20-09.00", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S.Pd", ruang: "Kelas 8H" },
        { waktu: "09.00-09.40", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "Kelas 8H" },
        { waktu: "10.00-10.40", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "Kelas 8H" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8H" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8H" },
        { waktu: "13.20-14.00", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8H" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8H" },
        { waktu: "07.40-08.20", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8H" },
        { waktu: "08.20-09.00", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8H" },
        { waktu: "09.00-09.40", mapel: "Matematika", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8H" },
        { waktu: "10.00-10.40", mapel: "Matematika", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8H" },
        { waktu: "10.40-11.20", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S.Pd", ruang: "Kelas 8H" },
        { waktu: "12.40-13.20", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S.Pd", ruang: "Kelas 8H" },
        { waktu: "13.20-14.00", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S.Pd", ruang: "Kelas 8H" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8H/LABKOM" },
        { waktu: "07.40-08.20", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8H/LABKOM" },
        { waktu: "08.20-09.00", mapel: "P. Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8H" },
        { waktu: "09.00-09.40", mapel: "P. Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8H" },
        { waktu: "10.00-10.40", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "Kelas 8H" },
        { waktu: "10.40-11.20", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "Kelas 8H" },
        { waktu: "12.40-13.20", mapel: "Matematika", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8H" },
        { waktu: "13.20-14.00", mapel: "Matematika", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8H" }
    ],
    jumat: [
    ]
},
    
  "8I": {
      senin: [
        { waktu: "07.30-08.10", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8I" },
        { waktu: "08.10-08.50", mapel: "SENPRAK", guru: "MEGA HERLIANI, S.Sn", ruang: "Kelas 8I" },
        { waktu: "08.50-09.30", mapel: "MATEMATIKA", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8I" },
        { waktu: "09.30-10.00", mapel: "MATEMATIKA", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8I" },
        { waktu: "10.20-10.55", mapel: "PJOK", guru: "PIPIN FIRMANSYAH, S.Pd", ruang: "Lapang" },
        { waktu: "10.55-11.30", mapel: "PJOK", guru: "PIPIN FIRMANSYAH, S.Pd", ruang: "Lapang" },
        { waktu: "12.40-13.20", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "Kelas 8I" },
        { waktu: "13.20-14.00", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "Kelas 8I" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8I" },
        { waktu: "07.40-08.20", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8I" },
        { waktu: "08.20-09.00", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8I" },
        { waktu: "09.00-09.40", mapel: "MATEMATIKA", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8I" },
        { waktu: "10.00-10.40", mapel: "MATEMATIKA", guru: "FARHAN BUDIARTO, S.Pd", ruang: "Kelas 8I" },
        { waktu: "10.40-11.20", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S.Pd", ruang: "Kelas 8I" },
        { waktu: "12.40-13.20", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S.Pd", ruang: "Kelas 8I" },
        { waktu: "13.20-14.00", mapel: "IPS", guru: "CANDITA REKSA RIYADI, S.Pd", ruang: "Kelas 8I" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8I" },
        { waktu: "07.40-08.20", mapel: "PAI", guru: "ALDA ALDILA RIYADI, S.Pd", ruang: "Kelas 8I" },
        { waktu: "08.20-09.00", mapel: "IPA", guru: "QISTI SEPTIA W. A, S.Pd", ruang: "Kelas 8I" },
        { waktu: "09.00-09.40", mapel: "IPA", guru: "QISTI SEPTIA W. A, S.Pd", ruang: "Kelas 8I" },
        { waktu: "10.00-10.40", mapel: "P. Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8I" },
        { waktu: "10.40-11.20", mapel: "P. Pancasila", guru: "DWI PRIHANTO K, S.Pd", ruang: "Kelas 8I" },
        { waktu: "12.40-13.20", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8I/LABKOM" },
        { waktu: "13.20-14.00", mapel: "Informatika", guru: "ARIF MAULANA GUNAWAN, S.T", ruang: "Kelas 8I/LABKOM" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8I" },
        { waktu: "07.40-08.20", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8I" },
        { waktu: "08.20-09.00", mapel: "B. Inggris", guru: "PRAPTI HANDAYANI, S.Pd", ruang: "Kelas 8I" },
        { waktu: "09.00-09.40", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8I" },
        { waktu: "10.00-10.40", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "Kelas 8I" },
        { waktu: "10.40-11.20", mapel: "IPA", guru: "QISTI SEPTIA W. A, S.Pd", ruang: "Kelas 8I" },
        { waktu: "12.40-13.20", mapel: "IPA", guru: "QISTI SEPTIA W. A, S.Pd", ruang: "Kelas 8I" },
        { waktu: "13.20-14.00", mapel: "BP-BK", guru: "SILFA AGISNI SALMA, S.Pd", ruang: "Kelas 8I" },
    ],
    jumat: [
    ]
}
};

// jadwal pelajaran UNIK untuk setiap kelas 9
const jadwalKelas9 = {
// KELAS 9A - JADWAL RESMI
"9A": {
    senin: [
        { waktu: "07.30-08.10", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9A" },
        { waktu: "08.10-08.50", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9A" },
        { waktu: "08.50-09.30", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9A" },
        { waktu: "09.30-10.00", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9A" },
        { waktu: "10.20-10.55", mapel: "BP-BK", guru: "AI RIKA ISMAHANI, S.Psi", ruang: "kelas 9A" },
        { waktu: "10.55-11.30", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9A" },
        { waktu: "12.40-13.20", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9A" },
        { waktu: "13.20-14.00", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9A" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "kelas 9A" },
        { waktu: "07.40-08.20", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "kelas 9A" },
        { waktu: "08.20-09.00", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "kelas 9A" },
        { waktu: "09.00-09.40", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9A" },
        { waktu: "10.00-10.40", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9A" },
        { waktu: "10.40-11.20", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9A" },
        { waktu: "12.40-13.20", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9A" },
        { waktu: "13.20-14.00", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9A" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9A" },
        { waktu: "07.40-08.20", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9A" },
        { waktu: "08.20-09.00", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "09.00-09.40", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "10.00-10.40", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9A" },
        { waktu: "10.40-11.20", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9A" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "kelas 9A" },
        { waktu: "13.20-14.00", mapel: "B. Indonesia", guru: "SETIA NUR PARIDAH, S.Pd", ruang: "kelas 9A" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "9A/lab Komputer" },
        { waktu: "07.40-08.20", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "9A/lab Komputer" },
        { waktu: "08.20-09.00", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "kelas 9A/Lapang" },
        { waktu: "09.00-09.40", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "kelas 9A/Lapang" },
        { waktu: "10.00-10.40", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9A" },
        { waktu: "10.40-11.20", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9A" },
        { waktu: "12.40-13.20", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "13.20-14.00", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" }
    ]
},
    
// KELAS 9B - JADWAL RESMI
"9B": {
    senin: [
        { waktu: "07.30-08.10", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd" },
        { waktu: "08.10-08.50", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd" },
        { waktu: "08.50-09.30", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd" },
        { waktu: "09.30-10.00", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd" },
        { waktu: "10.20-10.55", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd" },
        { waktu: "10.55-11.30", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd" },
        { waktu: "12.40-13.20", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd" },
        { waktu: "13.20-14.00", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd" }
    ],
    selasa: [
        { waktu: "07.40-08.20", mapel: "IPS", guru: "IIS PRIATINI, S.Pd" },
        { waktu: "08.20-09.00", mapel: "IPS", guru: "IIS PRIATINI, S.Pd" },
        { waktu: "09.00-09.40", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd" },
        { waktu: "10.00-10.40", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd" },
        { waktu: "10.40-11.20", mapel: "BP-BK", guru: "AI RIKA ISMAHANI, S.Psi" },
        { waktu: "12.40-13.20", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd" },
        { waktu: "13.20-14.00", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd" },
        { waktu: "07.40-08.20", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd" },
        { waktu: "08.20-09.00", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd" },
        { waktu: "09.00-09.40", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd" },
        { waktu: "10.00-10.40", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd" },
        { waktu: "13.20-14.00", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd" },
        { waktu: "07.40-08.20", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd" },
        { waktu: "08.20-09.00", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd" },
        { waktu: "09.00-09.40", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd" },
        { waktu: "10.00-10.40", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM" },
        { waktu: "10.40-11.20", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM" },
        { waktu: "12.40-13.20", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S" },
        { waktu: "13.20-14.00", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S" }
    ],
    jumat: [
    ]
},
    
"9B": {
    senin: [
        { waktu: "07.30-08.10", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "08.10-08.50", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "08.50-09.30", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9B" },
        { waktu: "09.30-10.00", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9B" },
        { waktu: "10.20-10.55", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "10.55-11.30", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "12.40-13.20", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9B" },
        { waktu: "13.20-14.00", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9B" }
    ],
    selasa: [
        { waktu: "07.40-08.20", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9B" },
        { waktu: "08.20-09.00", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9B" },
        { waktu: "09.00-09.40", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "kelas 9B" },
        { waktu: "10.00-10.40", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9B" },
        { waktu: "10.40-11.20", mapel: "BP-BK", guru: "AI RIKA ISMAHANI, S.Psi", ruang: "kelas 9B" },
        { waktu: "12.40-13.20", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9B" },
        { waktu: "13.20-14.00", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9B" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9B" },
        { waktu: "07.40-08.20", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9B" },
        { waktu: "08.20-09.00", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9B" },
        { waktu: "09.00-09.40", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9B" },
        { waktu: "10.00-10.40", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9B" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "kelas 9B" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "kelas 9B" },
        { waktu: "13.20-14.00", mapel: "B. Indonesia", guru: "FITRIA AGUSTINI, S.Pd", ruang: "kelas 9B" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9B" },
        { waktu: "07.40-08.20", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9B" },
        { waktu: "08.20-09.00", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "09.00-09.40", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "10.00-10.40", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" },
        { waktu: "10.40-11.20", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" },
        { waktu: "12.40-13.20", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9B" },
        { waktu: "13.20-14.00", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9B" }
    ]
},

// KELAS 9C - JADWAL RESMI
"9C": {
    senin: [
        { waktu: "07.30-08.10", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" },
        { waktu: "08.10-08.50", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" },
        { waktu: "08.50-09.30", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9C" },
        { waktu: "09.30-10.00", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9C" },
        { waktu: "10.20-10.55", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9C" },
        { waktu: "10.55-11.30", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "kelas 9C" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "kelas 9C" },
        { waktu: "13.20-14.00", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "kelas 9C" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9C" },
        { waktu: "07.40-08.20", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9C" },
        { waktu: "08.20-09.00", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "09.00-09.40", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "10.00-10.40", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9C" },
        { waktu: "10.40-11.20", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9C" },
        { waktu: "12.40-13.20", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9C" },
        { waktu: "13.20-14.00", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9C" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "07.40-08.20", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "08.20-09.00", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "09.00-09.40", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "10.00-10.40", mapel: "BP-BK", guru: "AI RIKA ISMAHANI, S.Psi", ruang: "kelas 9C" },
        { waktu: "10.40-11.20", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9C" },
        { waktu: "12.40-13.20", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9C" },
        { waktu: "13.20-14.00", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9C" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9C" },
        { waktu: "07.40-08.20", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9C" },
        { waktu: "08.20-09.00", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "kelas 9C" },
        { waktu: "09.00-09.40", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "kelas 9C" },
        { waktu: "10.00-10.40", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9C" },
        { waktu: "10.40-11.20", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9C" },
        { waktu: "12.40-13.20", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9C" },
        { waktu: "13.20-14.00", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9C" }
    ]
},
    
"9D": {
    senin: [
        { waktu: "07.30-08.10", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9D" },
        { waktu: "08.10-08.50", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9D" },
        { waktu: "08.50-09.30", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "kelas 9D" },
        { waktu: "09.30-10.00", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "kelas 9D" },
        { waktu: "10.20-10.55", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "kelas 9D" },
        { waktu: "10.55-11.30", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9D" },
        { waktu: "12.40-13.20", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9D" },
        { waktu: "13.20-14.00", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9D" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "07.40-08.20", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "08.20-09.00", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9D" },
        { waktu: "09.00-09.40", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9D" },
        { waktu: "10.00-10.40", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "10.40-11.20", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "12.40-13.20", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9D" },
        { waktu: "13.20-14.00", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9D" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" },
        { waktu: "07.40-08.20", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" },
        { waktu: "08.20-09.00", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9D" },
        { waktu: "09.00-09.40", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9D" },
        { waktu: "10.00-10.40", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9D" },
        { waktu: "10.40-11.20", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9D" },
        { waktu: "12.40-13.20", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9D" },
        { waktu: "13.20-14.00", mapel: "BP-BK", guru: "AI RIKA ISMAHANI, S.Psi", ruang: "kelas 9D" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "kelas 9D" },
        { waktu: "07.40-08.20", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "kelas 9D" },
        { waktu: "08.20-09.00", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9D" },
        { waktu: "09.00-09.40", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9D" },
        { waktu: "10.00-10.40", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "10.40-11.20", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "12.40-13.20", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9D" },
        { waktu: "13.20-14.00", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9D" }
    ]
},

// KELAS 9E - JADWAL RESMI
"9E": {
    senin: [
        { waktu: "07.30-08.10", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "08.10-08.50", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "08.50-09.30", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" },
        { waktu: "09.30-10.00", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" },
        { waktu: "10.20-10.55", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9E" },
        { waktu: "10.55-11.30", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9E" },
        { waktu: "12.40-13.20", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9E" },
        { waktu: "13.20-14.00", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9E" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9E" },
        { waktu: "07.40-08.20", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9E" },
        { waktu: "08.20-09.00", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9E" },
        { waktu: "09.00-09.40", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9E" },
        { waktu: "10.00-10.40", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9E" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9E" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9E" },
        { waktu: "13.20-14.00", mapel: "BP-BK", guru: "AI RIKA ISMAHANI, S.Psi", ruang: "kelas 9E" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "07.40-08.20", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "08.20-09.00", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9E" },
        { waktu: "09.00-09.40", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9E" },
        { waktu: "10.00-10.40", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "10.40-11.20", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "12.40-13.20", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9E" },
        { waktu: "13.20-14.00", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9E" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9E" },
        { waktu: "07.40-08.20", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9E" },
        { waktu: "08.20-09.00", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9E" },
        { waktu: "09.00-09.40", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9E" },
        { waktu: "10.00-10.40", mapel: "Matematika", guru: "ELLI KEMALAWATI, S.Pd", ruang: "kelas 9E" },
        { waktu: "10.40-11.20", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9E" },
        { waktu: "12.40-13.20", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9E" },
        { waktu: "13.20-14.00", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9E" }
    ]
},
    
"9F": {
    senin: [
        { waktu: "07.30-08.10", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9F" },
        { waktu: "08.10-08.50", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9F" },
        { waktu: "08.50-09.30", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "09.30-10.00", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "10.20-10.55", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "kelas 9F" },
        { waktu: "10.55-11.30", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "kelas 9F" },
        { waktu: "12.40-13.20", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" },
        { waktu: "13.20-14.00", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9F" },
        { waktu: "07.40-08.20", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9F" },
        { waktu: "08.20-09.00", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "09.00-09.40", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "10.00-10.40", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9F" },
        { waktu: "10.40-11.20", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9F" },
        { waktu: "12.40-13.20", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" },
        { waktu: "13.20-14.00", mapel: "IPA", guru: "Rd. SRI REJEKI, S.Pd", ruang: "lab IPA" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9F" },
        { waktu: "07.40-08.20", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9F" },
        { waktu: "08.20-09.00", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9F" },
        { waktu: "09.00-09.40", mapel: "BP-BK", guru: "AI RIKA ISMAHANI, S.Psi", ruang: "kelas 9F" },
        { waktu: "10.00-10.40", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9F" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9F" },
        { waktu: "12.40-13.20", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "kelas 9F" },
        { waktu: "13.20-14.00", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "kelas 9F" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9F" },
        { waktu: "07.40-08.20", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9F" },
        { waktu: "08.20-09.00", mapel: "B. Inggris", guru: "IKA KURNIA, S.Pd", ruang: "kelas 9F" },
        { waktu: "09.00-09.40", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9F" },
        { waktu: "10.00-10.40", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9F" },
        { waktu: "10.40-11.20", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9F" },
        { waktu: "12.40-13.20", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9F" },
        { waktu: "13.20-14.00", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9F" }
    ]
},

// KELAS 9G - JADWAL RESMI
"9G": {
    senin: [
        { waktu: "07.30-08.10", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "kelas 9G" },
        { waktu: "08.10-08.50", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "kelas 9G" },
        { waktu: "08.50-09.30", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "09.30-10.00", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "10.20-10.55", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "lab IPA" },
        { waktu: "10.55-11.30", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "lab IPA" },
        { waktu: "12.40-13.20", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9G" },
        { waktu: "13.20-14.00", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9G" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9G" },
        { waktu: "07.40-08.20", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9G" },
        { waktu: "08.20-09.00", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9G" },
        { waktu: "09.00-09.40", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9G" },
        { waktu: "10.00-10.40", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9G" },
        { waktu: "10.40-11.20", mapel: "IPS", guru: "IIS PRIATINI, S.Pd", ruang: "kelas 9G" },
        { waktu: "12.40-13.20", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" },
        { waktu: "13.20-14.00", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "kelas 9G" },
        { waktu: "07.40-08.20", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "kelas 9G" },
        { waktu: "08.20-09.00", mapel: "BP-BK", guru: "AI RIKA ISMAHANI, S.Psi", ruang: "kelas 9G" },
        { waktu: "09.00-09.40", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S.Pd", ruang: "kelas 9G" },
        { waktu: "10.00-10.40", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S.Pd", ruang: "kelas 9G" },
        { waktu: "10.40-11.20", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S.Pd", ruang: "kelas 9G" },
        { waktu: "12.40-13.20", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "lab IPA" },
        { waktu: "13.20-14.00", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "lab IPA" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9G" },
        { waktu: "07.40-08.20", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9G" },
        { waktu: "08.20-09.00", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9G" },
        { waktu: "09.00-09.40", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9G" },
        { waktu: "10.00-10.40", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9G" },
        { waktu: "10.40-11.20", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9G" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9G" },
        { waktu: "13.20-14.00", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9G" }
    ]
},

// KELAS 9H - JADWAL RESMI
"9H": {
    senin: [
        { waktu: "07.30-08.10", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9H" },
        { waktu: "08.10-08.50", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9H" },
        { waktu: "08.50-09.30", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9H" },
        { waktu: "09.30-10.00", mapel: "BP-BK", guru: "AI RIKA ISMAHANI, S.Psi", ruang: "kelas 9H" },
        { waktu: "10.20-10.55", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9H" },
        { waktu: "10.55-11.30", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "kelas 9H" },
        { waktu: "12.40-13.20", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "kelas 9H" },
        { waktu: "13.20-14.00", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "kelas 9H" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "IPS", guru: "ANDRI SUNANTO, S.Pd., M.Pd", ruang: "kelas 9H" },
        { waktu: "07.40-08.20", mapel: "IPS", guru: "ANDRI SUNANTO, S.Pd., M.Pd", ruang: "kelas 9H" },
        { waktu: "08.20-09.00", mapel: "IPS", guru: "ANDRI SUNANTO, S.Pd., M.Pd", ruang: "kelas 9H" },
        { waktu: "09.00-09.40", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S.Pd", ruang: "kelas 9H" },
        { waktu: "10.00-10.40", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S.Pd", ruang: "kelas 9H" },
        { waktu: "10.40-11.20", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S.Pd", ruang: "kelas 9H" },
        { waktu: "12.40-13.20", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9H" },
        { waktu: "13.20-14.00", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "kelas 9H" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "lab IPA" },
        { waktu: "07.40-08.20", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "lab IPA" },
        { waktu: "08.20-09.00", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "kelas 9H" },
        { waktu: "09.00-09.40", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "kelas 9H" },
        { waktu: "10.00-10.40", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9H" },
        { waktu: "10.40-11.20", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "kelas 9H" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9H" },
        { waktu: "13.20-14.00", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "kelas 9H" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "lab IPA" },
        { waktu: "07.40-08.20", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "lab IPA" },
        { waktu: "08.20-09.00", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9H" },
        { waktu: "09.00-09.40", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "kelas 9H" },
        { waktu: "10.00-10.40", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "10.40-11.20", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Lapangan" },
        { waktu: "12.40-13.20", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" },
        { waktu: "13.20-14.00", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "lab Komputer" }
    ]
},
    
// KELAS 9I - JADWAL RESMI
"9I": {
    senin: [
        { waktu: "07.30-08.10", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "Kelas 9I" },
        { waktu: "08.10-08.50", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "Kelas 9I" },
        { waktu: "08.50-09.30", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "Kelas 9I" },
        { waktu: "09.30-10.00", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "Kelas 9I" },
        { waktu: "10.20-10.55", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "Kelas 9I" },
        { waktu: "10.55-11.30", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "Kelas 9I" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "Kelas 9I" },
        { waktu: "13.20-14.00", mapel: "BP-BK", guru: "AI RIKA ISMAHANI, S.Psi", ruang: "Kelas 9I" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "Kelas 9I" },
        { waktu: "07.40-08.20", mapel: "IPA", guru: "LIA PRAMURTYA, S.Si", ruang: "Kelas 9I" },
        { waktu: "08.20-09.00", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "Kelas 9I/LABKOM" },
        { waktu: "09.00-09.40", mapel: "Informatika", guru: "RONI RAHMANSYAH, S.KOM", ruang: "Kelas 9I/LABKOM" },
        { waktu: "10.00-10.40", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Kelas 9I/Lapang" },
        { waktu: "10.40-11.20", mapel: "PJOK", guru: "Drs. AGUS MASRUQ, M.Pd", ruang: "Kelas 9I/Lapang" },
        { waktu: "12.40-13.20", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "Kelas 9I" },
        { waktu: "13.20-14.00", mapel: "P. Pancasila", guru: "A. SUTISNA, S.Pd", ruang: "Kelas 9I" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "Kelas 9I" },
        { waktu: "07.40-08.20", mapel: "B. Indonesia", guru: "LANI MUSTIKASARI, S.Pd", ruang: "Kelas 9I" },
        { waktu: "08.20-09.00", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "Kelas 9I" },
        { waktu: "09.00-09.40", mapel: "B. Sunda", guru: "EHA JULAEHA, S.S", ruang: "Kelas 9I" },
        { waktu: "10.00-10.40", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "Kelas 9I" },
        { waktu: "10.40-11.20", mapel: "Matematika", guru: "M. NOOR FENDI SAEFULOH, S.Pd", ruang: "Kelas 9I" },
        { waktu: "12.40-13.20", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "Kelas 9I" },
        { waktu: "13.20-14.00", mapel: "Seni Praktek", guru: "AHMAD RAHMAT, S.Sn, M.Pd", ruang: "Kelas 9I" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S.Pd", ruang: "Kelas 9I" },
        { waktu: "07.40-08.20", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S.Pd", ruang: "Kelas 9I" },
        { waktu: "08.20-09.00", mapel: "B. Inggris", guru: "MUH. ZAENAL ARIPIN, S.Pd", ruang: "Kelas 9I" },
        { waktu: "09.00-09.40", mapel: "IPS", guru: "ANDRI SUNANTO, S.Pd., M.Pd", ruang: "Kelas 9I" },
        { waktu: "10.00-10.40", mapel: "IPS", guru: "ANDRI SUNANTO, S.Pd., M.Pd", ruang: "Kelas 9I" },
        { waktu: "10.40-11.20", mapel: "IPS", guru: "ANDRI SUNANTO, S.Pd., M.Pd", ruang: "Kelas 9I" },
        { waktu: "12.40-13.20", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "Kelas 9I" },
        { waktu: "13.20-14.00", mapel: "PAI", guru: "FAIJUL ARIFIN, S.Pd", ruang: "Kelas 9I" }
    ],
    jumat: [
    ]
}
    
};

// Gabungkan semua jadwal
const jadwalKelas = {
    ...jadwalKelas7,
    ...jadwalKelas8,
    ...jadwalKelas9
};

// ===============================
// STATE
// ===============================
let currentKelas = null;
let currentKelasLevel = null;

// ===============================
// RENDER FUNCTIONS
// ===============================

function renderKelasGrid(containerSelector, dataKelas) {
    const grid = document.querySelector(containerSelector);
    if (!grid) return;
    grid.innerHTML = '';

    dataKelas.forEach(kelas => {
        const card = document.createElement('div');
        card.className = 'kelas-card';
        card.innerHTML = `
            <div class="kelas-card-header">
                <h3>${kelas.id}</h3>
                <span class="kelas-badge">Aktif</span>
            </div>
            <div class="kelas-meta">
                <span class="label">WALI KELAS</span>
                <span>${kelas.waliKelas}</span>
                <span class="label" style="margin-top:6px">RUANG</span>
                <span>${kelas.ruang}</span>
            </div>
            <button class="kelas-button" data-kelas="${kelas.id}">
                Lihat Jadwal →
            </button>
        `;
        grid.appendChild(card);
    });
}

function renderKelas7() { renderKelasGrid('.kelas-7-grid', dataKelas7); }
function renderKelas8() { renderKelasGrid('.kelas-8-grid', dataKelas8); }
function renderKelas9() { renderKelasGrid('.kelas-9-grid', dataKelas9); }

function renderJadwalHari(hari) {
    const tbody = document.getElementById('jadwal-tbody');
    tbody.innerHTML = '';

    if (!currentKelas || !jadwalKelas[currentKelas] || !jadwalKelas[currentKelas][hari]) {
        tbody.innerHTML = '<tr><td colspan="4" class="no-data">Tidak ada jadwal untuk hari ini.</td></tr>';
        return;
    }

    const jadwal = jadwalKelas[currentKelas][hari];
    if (!jadwal.length) {
        tbody.innerHTML = '<tr><td colspan="4" class="no-data">Jadwal belum diisi.</td></tr>';
        return;
    }

    jadwal.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.waktu}</td>
            <td>${item.mapel}</td>
            <td>${item.guru || '—'}</td>
            <td>${item.ruang}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ===============================
// NAVIGATION
// ===============================

function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active-section'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active-section');

    // Update nav active
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const navLink = document.querySelector(`.nav-link[data-section="${id}"]`);
    if (navLink) navLink.classList.add('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // If jadwal section, reset to monday
    if (id === 'jadwal-pelajaran') {
        setHariAktif('senin');
        renderJadwalHari('senin');
    }
}

function setHariAktif(hari) {
    document.querySelectorAll('.hari-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.hari-btn[data-hari="${hari}"]`);
    if (btn) btn.classList.add('active');
}

function updateBackButtons() {
    document.getElementById('backToKelas7').style.display = 'none';
    document.getElementById('backToKelas8').style.display = 'none';
    document.getElementById('backToKelas9').style.display = 'none';

    if (currentKelasLevel === '7') document.getElementById('backToKelas7').style.display = '';
    else if (currentKelasLevel === '8') document.getElementById('backToKelas8').style.display = '';
    else if (currentKelasLevel === '9') document.getElementById('backToKelas9').style.display = '';
}

// ===============================
// INIT
// ===============================

document.addEventListener('DOMContentLoaded', function () {
    renderKelas7();
    renderKelas8();
    renderKelas9();

    // DARK MODE TOGGLE
    const darkToggle = document.getElementById('darkToggle');
    if (darkToggle) {
        darkToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem('sijap-theme', isDark ? 'dark' : 'light');
        });
    }

    // NAV LINKS
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showSection(this.getAttribute('data-section'));
            document.getElementById('mainNav').classList.remove('open');
            document.getElementById('hamburger').classList.remove('open');
        });
    });

    // HAMBURGER
    document.getElementById('hamburger').addEventListener('click', function () {
        this.classList.toggle('open');
        document.getElementById('mainNav').classList.toggle('open');
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
        const nav = document.getElementById('mainNav');
        const ham = document.getElementById('hamburger');
        if (!nav.contains(e.target) && !ham.contains(e.target)) {
            nav.classList.remove('open');
            ham.classList.remove('open');
        }
    });

    // HERO BUTTONS
    document.getElementById('lihatKelasBtn').addEventListener('click', () => showSection('kelas'));

    // GRADE LEVEL BUTTONS
    document.getElementById('lihatKelas7').addEventListener('click', () => showSection('kelas-7'));
    document.getElementById('lihatKelas8').addEventListener('click', () => showSection('kelas-8'));
    document.getElementById('lihatKelas9').addEventListener('click', () => showSection('kelas-9'));

    // BACK BUTTONS
    document.getElementById('backToHome').addEventListener('click', () => showSection('beranda'));
    document.getElementById('backToClasses7').addEventListener('click', () => showSection('kelas'));
    document.getElementById('backToClasses').addEventListener('click', () => showSection('kelas'));
    document.getElementById('backToClasses9').addEventListener('click', () => showSection('kelas'));
    document.getElementById('backToKelas7').addEventListener('click', () => showSection('kelas-7'));
    document.getElementById('backToKelas8').addEventListener('click', () => showSection('kelas-8'));
    document.getElementById('backToKelas9').addEventListener('click', () => showSection('kelas-9'));

    // KELAS CARDS (delegated)
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.kelas-button');
        if (!btn) return;
        currentKelas = btn.getAttribute('data-kelas');
        currentKelasLevel = currentKelas.charAt(0);
        document.getElementById('jadwal-title').textContent = `Kelas ${currentKelas}`;
        document.getElementById('jadwal-badge').textContent = `JADWAL · ${currentKelas}`;
        showSection('jadwal-pelajaran');
        updateBackButtons();
    });

    // HARI BUTTONS
    document.querySelectorAll('.hari-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            setHariAktif(this.getAttribute('data-hari'));
            renderJadwalHari(this.getAttribute('data-hari'));
        });
    });

    // SCROLL: add class to header when scrolled
    window.addEventListener('scroll', function () {
        const header = document.getElementById('mainHeader');
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
