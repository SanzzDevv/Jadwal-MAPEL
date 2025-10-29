// ===============================
// KONFIGURASI DATA YANG MUDAH DIUBAH
// ===============================

// Data kelas 7 (mudah ditambah/diubah) - SEKARANG SAMPAI 7I
const dataKelas7 = [
    { id: "7A", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 7A" },
    { id: "7B", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 7B" },
    { id: "7C", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 7C" },
    { id: "7D", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 7D" },
    { id: "7E", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 7E" },
    { id: "7F", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 7F" },
    { id: "7G", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 7G" },
    { id: "7H", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 7H" },
    { id: "7I", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 7I" }
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
    { id: "9A", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 9A" },
    { id: "9B", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 9B" },
    { id: "9C", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 9C" },
    { id: "9D", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 9D" },
    { id: "9E", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 9E" },
    { id: "9F", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 9F" },
    { id: "9G", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 9G" },
    { id: "9H", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 9H" },
    { id: "9I", waliKelas: "?", jumlahSiswa: 34, ruang: "Kelas 9I" }
];

const jadwalKelas7 = {
    "7A": {
    },
    
    "7B": {
    },
    
    "7C": {
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
        { waktu: "10.40-11.20", mapel: "Informatika", guru: "ANNISA HAELWANI, S.Kom", ruang: "Kelas 7D/LABKOM" },
        { waktu: "12.40-13.20", mapel: "SENPRAK", guru: "DIAH SOEPLIAH, S.Sos", ruang: "Kelas 7D" },
        { waktu: "13.20-14.00", mapel: "SENPRAK", guru: "DIAH SOEPLIAH, S.Sos", ruang: "Kelas 7D" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "PJOK", guru: "Drs. ASEP SUTARDI, M.Pd", ruang: "Lapang" },
        { waktu: "07.40-08.20", mapel: "PJOK", guru: "Drs. ASEP SUTARDI, M.Pd", ruang: "Lapang" },
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
    },
    
    "7F": { 
    },
    
"7G": {
    senin: [
        { waktu: "07.30-08.10", mapel: "MATEMATIKA", guru: "FIRDA PUTRI UTAMI,S.Pd", ruang: "Kelas 7G" },
        { waktu: "08.10-08.50", mapel: "MATEMATIKA", guru: "FIRDA PUTRI UTAMI,S.Pd", ruang: "Kelas 7G" },
        { waktu: "08.50-09.30", mapel: "PJOK", guru: "Drs. ASEP SUTARDI, M.Pd", ruang: "Lapang" },
        { waktu: "09.30-10.00", mapel: "PJOK", guru: "Drs. ASEP SUTARDI, M.Pd", ruang: "Lapang" },
        { waktu: "10.20-10.55", mapel: "IPA", guru: "INNA NURAINI SUJANA, S.Pd", ruang: "Kelas 7G" },
        { waktu: "10.55-11.30", mapel: "IPA", guru: "INNA NURAINI SUJANA, S.Pd", ruang: "Kelas 7G" },
        { waktu: "12.40-13.20", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 7G" },
        { waktu: "13.20-14.00", mapel: "B. Sunda", guru: "RAHMASARI AULIA KHOTIMAH, S.Pd", ruang: "Kelas 7G" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "Kelas 7G" },
        { waktu: "07.40-08.20", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "Kelas 7G" },
        { waktu: "08.20-09.00", mapel: "P.Pancasila", guru: "DIAN RAHMAWATI, S.Pd", ruang: "Kelas 7G" },
        { waktu: "09.00-09.40", mapel: "IPS", guru: "ANDRI SUNANTO, S.Pd., M.Pd", ruang: "Kelas 7G" },
        { waktu: "10.00-10.40", mapel: "IPS", guru: "ANDRI SUNANTO, S.Pd., M.Pd", ruang: "Kelas 7G" },
        { waktu: "10.40-11.20", mapel: "IPS", guru: "ANDRI SUNANTO, S.Pd., M.Pd", ruang: "Kelas 7G" },
        { waktu: "12.40-13.20", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "Kelas 7G" },
        { waktu: "13.20-14.00", mapel: "B. Indonesia", guru: "DEDEN KURNIA S, S.Pd", ruang: "Kelas 7G" }
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
        { waktu: "13.20-14.00", mapel: "B. INGGRIS", guru: "INNA NURAINI SUJANA, S.Pd", ruang: "Kelas 7G" }
    ],
    jumat: [
    ]
},
    
    "7H": { 
    },
    
    "7I": { 
    }
};

// Template jadwal pelajaran UNIK untuk setiap kelas 8
const jadwalKelas8 = {
    // KELAS 8A - JADWAL UNIK
// KELAS 8A - JADWAL SESUNGGUHNYA (Berdasarkan File PDF)
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
    "8E": { // belum ada jadwal
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
    "8H": { 
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
    // KELAS 9A - JADWAL UNIK
    "9A": {
    },
    
    // KELAS 9B - JADWAL BERBEDA
    "9B": {
    },
    
    // KELAS 9C - JADWAL BERBEDA LAGI
    "9C": {
    },
    
    "9F": { /* ... jadwal sama seperti 9D */ },
    "9G": { /* ... jadwal sama seperti 9D */ },
    "9H": { /* ... jadwal sama seperti 9D */ },
    "9I": { /* ... jadwal sama seperti 9D */ }
};

// Gabungkan semua jadwal
const jadwalKelas = {
    ...jadwalKelas7,
    ...jadwalKelas8,
    ...jadwalKelas9
};

// ===============================
// FUNGSI UTAMA
// ===============================

// Variabel global untuk menyimpan kelas yang sedang dipilih
let currentKelas = "";
let currentKelasLevel = ""; // '7', '8', atau '9'

// Fungsi untuk merender daftar kelas 7
function renderKelas7() {
    const kelas7Grid = document.querySelector('.kelas-7-grid');
    if (!kelas7Grid) return;
    
    kelas7Grid.innerHTML = '';

    dataKelas7.forEach(kelas => {
        const kelasCard = document.createElement('div');
        kelasCard.className = 'kelas-card';
        
        kelasCard.innerHTML = `
            <div class="kelas-header">
                <h3 class="kelas-name">Kelas ${kelas.id}</h3>
                <span class="kelas-status active">Aktif</span>
            </div>
            <div class="kelas-info">
                <div class="info-row">
                    <i class="fas fa-user"></i>
                    <span>Wali Kelas: ${kelas.waliKelas}</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-users"></i>
                    <span>Jumlah Siswa: ${kelas.jumlahSiswa}</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-door-open"></i>
                    <span>Ruang: ${kelas.ruang}</span>
                </div>
            </div>
            <button class="kelas-button" data-kelas="${kelas.id}">
                <i class="fas fa-calendar-alt"></i>
                Lihat Jadwal
            </button>
        `;
        
        kelas7Grid.appendChild(kelasCard);
    });
}

// Fungsi untuk merender daftar kelas 8
function renderKelas8() {
    const kelas8Grid = document.querySelector('.kelas-8-grid');
    if (!kelas8Grid) return;
    
    kelas8Grid.innerHTML = '';

    dataKelas8.forEach(kelas => {
        const kelasCard = document.createElement('div');
        kelasCard.className = 'kelas-card';
        
        kelasCard.innerHTML = `
            <div class="kelas-header">
                <h3 class="kelas-name">Kelas ${kelas.id}</h3>
                <span class="kelas-status active">Aktif</span>
            </div>
            <div class="kelas-info">
                <div class="info-row">
                    <i class="fas fa-user"></i>
                    <span>Wali Kelas: ${kelas.waliKelas}</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-users"></i>
                    <span>Jumlah Siswa: ${kelas.jumlahSiswa}</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-door-open"></i>
                    <span>Ruang: ${kelas.ruang}</span>
                </div>
            </div>
            <button class="kelas-button" data-kelas="${kelas.id}">
                <i class="fas fa-calendar-alt"></i>
                Lihat Jadwal
            </button>
        `;
        
        kelas8Grid.appendChild(kelasCard);
    });
}

// Fungsi untuk merender daftar kelas 9
function renderKelas9() {
    const kelas9Grid = document.querySelector('.kelas-9-grid');
    if (!kelas9Grid) return;
    
    kelas9Grid.innerHTML = '';

    dataKelas9.forEach(kelas => {
        const kelasCard = document.createElement('div');
        kelasCard.className = 'kelas-card';
        
        kelasCard.innerHTML = `
            <div class="kelas-header">
                <h3 class="kelas-name">Kelas ${kelas.id}</h3>
                <span class="kelas-status active">Aktif</span>
            </div>
            <div class="kelas-info">
                <div class="info-row">
                    <i class="fas fa-user"></i>
                    <span>Wali Kelas: ${kelas.waliKelas}</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-users"></i>
                    <span>Jumlah Siswa: ${kelas.jumlahSiswa}</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-door-open"></i>
                    <span>Ruang: ${kelas.ruang}</span>
                </div>
            </div>
            <button class="kelas-button" data-kelas="${kelas.id}">
                <i class="fas fa-calendar-alt"></i>
                Lihat Jadwal
            </button>
        `;
        
        kelas9Grid.appendChild(kelasCard);
    });
}

// Fungsi untuk menampilkan jadwal pelajaran berdasarkan hari
function renderJadwalHari(hari) {
    const jadwalTbody = document.getElementById('jadwal-tbody');
    jadwalTbody.innerHTML = '';

    if (!currentKelas || !jadwalKelas[currentKelas] || !jadwalKelas[currentKelas][hari]) {
        jadwalTbody.innerHTML = '<tr><td colspan="4" class="no-data">Tidak ada jadwal pelajaran untuk hari ini.</td></tr>';
        return;
    }

    const jadwalHari = jadwalKelas[currentKelas][hari];
    
    // Cek jika jadwal kosong
    if (jadwalHari.length === 0) {
        jadwalTbody.innerHTML = '<tr><td colspan="4" class="no-data">Jadwal belum diisi. Silakan hubungi administrator.</td></tr>';
        return;
    }
    
    jadwalHari.forEach(item => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${item.waktu}</td>
            <td>${item.mapel}</td>
            <td>${item.guru}</td>
            <td>${item.ruang}</td>
        `;
        
        jadwalTbody.appendChild(row);
    });
}

// Fungsi untuk mengganti section aktif
function showSection(sectionId) {
    // Sembunyikan semua section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active-section');
    });
    
    // Tampilkan section yang dipilih
    document.getElementById(sectionId).classList.add('active-section');
    
    // Update navigasi aktif
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const navLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    if (navLink) {
        navLink.classList.add('active');
    }
    
    // Jika section jadwal-pelajaran, set hari aktif ke Senin
    if (sectionId === 'jadwal-pelajaran') {
        setHariAktif('senin');
        renderJadwalHari('senin');
    }
}

// Fungsi untuk mengatur hari aktif
function setHariAktif(hari) {
    // Hapus class active dari semua tombol hari
    document.querySelectorAll('.hari-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Tambah class active ke tombol hari yang dipilih
    const targetBtn = document.querySelector(`.hari-btn[data-hari="${hari}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
}

// Fungsi untuk mengatur tombol kembali yang ditampilkan
function updateBackButtons() {
    const backToKelas7 = document.getElementById('backToKelas7');
    const backToKelas8 = document.getElementById('backToKelas8');
    const backToKelas9 = document.getElementById('backToKelas9');
    
    // Sembunyikan semua tombol kembali
    backToKelas7.style.display = 'none';
    backToKelas8.style.display = 'none';
    backToKelas9.style.display = 'none';
    
    // Tampilkan tombol kembali sesuai dengan level kelas
    if (currentKelasLevel === '7') {
        backToKelas7.style.display = 'flex';
    } else if (currentKelasLevel === '8') {
        backToKelas8.style.display = 'flex';
    } else if (currentKelasLevel === '9') {
        backToKelas9.style.display = 'flex';
    }
}

// ===============================
// EVENT LISTENERS
// ===============================

document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi data
    renderKelas7();
    renderKelas8();
    renderKelas9();
    
    // Navigasi menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
            
            // Tutup menu mobile jika terbuka
            document.getElementById('mainNav').classList.remove('active');
        });
    });
    
    // Tombol lihat kelas dari beranda
    document.getElementById('lihatKelasBtn').addEventListener('click', function() {
        showSection('kelas');
    });
    
    // Tombol lihat kelas 7
    document.getElementById('lihatKelas7').addEventListener('click', function() {
        showSection('kelas-7');
    });
    
    // Tombol lihat kelas 8
    document.getElementById('lihatKelas8').addEventListener('click', function() {
        showSection('kelas-8');
    });
    
    // Tombol lihat kelas 9
    document.getElementById('lihatKelas9').addEventListener('click', function() {
        showSection('kelas-9');
    });
    
    // Tombol kembali ke beranda
    document.getElementById('backToHome').addEventListener('click', function() {
        showSection('beranda');
    });
    
    // Tombol kembali ke daftar kelas dari kelas 7
    document.getElementById('backToClasses7').addEventListener('click', function() {
        showSection('kelas');
    });
    
    // Tombol kembali ke daftar kelas dari kelas 8
    document.getElementById('backToClasses').addEventListener('click', function() {
        showSection('kelas');
    });
    
    // Tombol kembali ke daftar kelas dari kelas 9
    document.getElementById('backToClasses9').addEventListener('click', function() {
        showSection('kelas');
    });
    
    // Tombol kembali ke kelas 7
    document.getElementById('backToKelas7').addEventListener('click', function() {
        showSection('kelas-7');
    });
    
    // Tombol kembali ke kelas 8
    document.getElementById('backToKelas8').addEventListener('click', function() {
        showSection('kelas-8');
    });
    
    // Tombol kembali ke kelas 9
    document.getElementById('backToKelas9').addEventListener('click', function() {
        showSection('kelas-9');
    });
    
    // Tombol lihat jadwal untuk setiap kelas
    document.addEventListener('click', function(e) {
        if (e.target.closest('.kelas-button')) {
            const button = e.target.closest('.kelas-button');
            currentKelas = button.getAttribute('data-kelas');
            currentKelasLevel = currentKelas.charAt(0); // Ambil angka pertama (7, 8, atau 9)
            
            document.getElementById('jadwal-title').textContent = `Jadwal Pelajaran Kelas ${currentKelas}`;
            showSection('jadwal-pelajaran');
            updateBackButtons();
        }
    });
    
    // Tombol hari
    document.querySelectorAll('.hari-btn').forEach(button => {
        button.addEventListener('click', function() {
            const hari = this.getAttribute('data-hari');
            setHariAktif(hari);
            renderJadwalHari(hari);
        });
    });
    
    // Menu mobile
    document.getElementById('mobileMenuBtn').addEventListener('click', function() {
        const nav = document.getElementById('mainNav');
        nav.classList.toggle('active');
    });
    
    // Tutup menu mobile saat mengklik di luar
    document.addEventListener('click', function(e) {
        const nav = document.getElementById('mainNav');
        const menuBtn = document.getElementById('mobileMenuBtn');
        
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.classList.remove('active');
        }
    });
    
    // Inisialisasi tombol kembali
    updateBackButtons();
});