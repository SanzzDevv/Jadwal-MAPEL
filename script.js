// ===============================
// KONFIGURASI STATUS SITUS
// Ganti "on" menjadi "off" untuk mengaktifkan halaman maintenance
// ===============================
const siteStatus = "on";

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
// LOADING SCREEN
// ===============================
(function () {
    document.body.classList.add('loading');

    const steps = [
        { pct: 20, msg: 'Memuat sistem...' },
        { pct: 55, msg: 'Menyiapkan data jadwal...' },
        { pct: 80, msg: 'Menginisialisasi antarmuka...' },
        { pct: 100, msg: 'Selesai!' }
    ];

    let i = 0;
    const bar    = document.getElementById('loadingBar');
    const status = document.getElementById('loadingStatus');

    function nextStep() {
        if (i >= steps.length) return;
        const s = steps[i++];
        if (bar)    bar.style.width = s.pct + '%';
        if (status) status.textContent = s.msg;
        if (i < steps.length) {
            setTimeout(nextStep, 280 + Math.random() * 150);
        }
    }

    setTimeout(nextStep, 120);

    window.addEventListener('load', function () {
        setTimeout(function () {
            const screen = document.getElementById('loadingScreen');
            if (screen) {
                screen.classList.add('hide');
                setTimeout(function () {
                    screen.style.display = 'none';
                    document.body.classList.remove('loading');
                    triggerReveal();
                }, 520);
            }
        }, 900);
    });
})();

// ===============================
// DATA KELAS
// ===============================

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

// ===============================
// DATA GURU
// Tambahkan guru di sini. Nama harus sama persis dengan yang ada di jadwal.
// tingkat: "7", "8", "9", atau "semua" jika mengajar lintas tingkat
// ===============================
const dataGuru = [
    { id: "guru-001", nama: "A. SUTISNA, S.Pd",                    mapel: "P. Pancasila",  waliKelas: "—", tingkat: "9" },
    { id: "guru-002", nama: "AHMAD RAHMAT, S.Sn, M.Pd",            mapel: "Seni Praktek",  waliKelas: "—", tingkat: "9" },
    { id: "guru-003", nama: "AI RIKA ISMAHANI, S.Psi",             mapel: "BP-BK",         waliKelas: "—", tingkat: "9" },
    { id: "guru-004", nama: "ALDA ALDILA RIYADI, S.Pd",            mapel: "PAI",           waliKelas: "8I", tingkat: "8" },
    { id: "guru-005", nama: "ANDRI SUNANTO, S. Pd., M. Pd",        mapel: "IPS",           waliKelas: "—", tingkat: "7" },
    { id: "guru-006", nama: "ANDRI SUNANTO, S.Pd., M.Pd",          mapel: "IPS",           waliKelas: "—", tingkat: "9" },
    { id: "guru-007", nama: "ANNISA HAELWANI, S. KOM",             mapel: "Informatika",   waliKelas: "—", tingkat: "7" },
    { id: "guru-008", nama: "ARI NUGRAHA, S. Pd",                  mapel: "Matematika",    waliKelas: "—", tingkat: "7" },
    { id: "guru-009", nama: "ARIF MAULANA GUNAWAN, S.T",           mapel: "Informatika",   waliKelas: "8H", tingkat: "8" },
    { id: "guru-010", nama: "CANDITA REKSA RIYADI, S. Pd",         mapel: "IPS",           waliKelas: "—", tingkat: "7" },
    { id: "guru-011", nama: "DEDEN KURNIA S, S. Pd",               mapel: "B. Indonesia",  waliKelas: "—", tingkat: "7" },
    { id: "guru-012", nama: "DEDEN KURNIA S, S.Pd",                mapel: "B. Indonesia",  waliKelas: "—", tingkat: "9" },
    { id: "guru-013", nama: "DIAH SOEPLIAH, S. Sos",               mapel: "Seni Praktek",  waliKelas: "—", tingkat: "7" },
    { id: "guru-014", nama: "DIAN RAHMAWATI, S. Pd",               mapel: "P. Pancasila",  waliKelas: "—", tingkat: "7" },
    { id: "guru-015", nama: "Drs. AGUS MASRUQ, M.Pd",              mapel: "PJOK",          waliKelas: "—", tingkat: "9" },
    { id: "guru-016", nama: "DWI PRIHANTO K, S.Pd",                mapel: "P. Pancasila",  waliKelas: "8B", tingkat: "8" },
    { id: "guru-017", nama: "EHA JULAEHA, S.S",                    mapel: "B. Sunda",      waliKelas: "9D", tingkat: "9" },
    { id: "guru-018", nama: "ELLI KEMALAWATI, S.Pd",               mapel: "Matematika",    waliKelas: "9B", tingkat: "9" },
    { id: "guru-019", nama: "ENDAH NURJANAH, S. Pd",               mapel: "B. Inggris",    waliKelas: "—", tingkat: "7" },
    { id: "guru-020", nama: "FAIJUL ARIFIN, S.Pd",                 mapel: "PAI",           waliKelas: "—", tingkat: "9" },
    { id: "guru-021", nama: "FARHAN BUDIARTO, S.Pd",               mapel: "Matematika",    waliKelas: "8E", tingkat: "8" },
    { id: "guru-022", nama: "FIRDA PUTRI UTAMI, S. Pd",            mapel: "Matematika",    waliKelas: "—", tingkat: "7" },
    { id: "guru-023", nama: "FITRIA AGUSTINI, S.Pd",               mapel: "B. Indonesia",  waliKelas: "8F", tingkat: "8" },
    { id: "guru-024", nama: "HENDRA SAPUTRA, S.Pd",                mapel: "IPA",           waliKelas: "—", tingkat: "8" },
    { id: "guru-025", nama: "IIS PRIATINI, S.Pd",                  mapel: "IPS",           waliKelas: "9A", tingkat: "9" },
    { id: "guru-026", nama: "IKA KURNIA, S.Pd",                    mapel: "B. Inggris",    waliKelas: "9E", tingkat: "9" },
    { id: "guru-027", nama: "IMAM ADI PRASETYO, S. Pd",            mapel: "PAI",           waliKelas: "—", tingkat: "7" },
    { id: "guru-028", nama: "INNA NURAINI SUJANA, S. Pd",          mapel: "IPA",           waliKelas: "—", tingkat: "7" },
    { id: "guru-029", nama: "IWAN SETIAWAN, S.Pd",                 mapel: "B. Inggris",    waliKelas: "—", tingkat: "8" },
    { id: "guru-030", nama: "LANI MUSTIKASARI, S.Pd",              mapel: "B. Indonesia",  waliKelas: "9G", tingkat: "9" },
    { id: "guru-031", nama: "LELA ZULKAEDAH, S.Pd",                mapel: "Matematika",    waliKelas: "—", tingkat: "8" },
    { id: "guru-032", nama: "LIA PRAMURTYA, S.Si",                 mapel: "IPA",           waliKelas: "9H", tingkat: "9" },
    { id: "guru-033", nama: "LUTHFI HADIANSYAH, S.Pd",             mapel: "IPS",           waliKelas: "—", tingkat: "8" },
    { id: "guru-034", nama: "M. NOOR FENDI SAEFULOH, S.Pd",        mapel: "Matematika",    waliKelas: "9I", tingkat: "9" },
    { id: "guru-035", nama: "MEGA HERLIANI, S.Sn",                 mapel: "Seni Praktek",  waliKelas: "8D", tingkat: "8" },
    { id: "guru-036", nama: "MUH. ZAENAL ARIPIN, S. Pd",           mapel: "B. Inggris",    waliKelas: "—", tingkat: "7" },
    { id: "guru-037", nama: "MUH. ZAENAL ARIPIN, S.Pd",            mapel: "B. Inggris",    waliKelas: "—", tingkat: "9" },
    { id: "guru-038", nama: "NIDYA EKA PRATIWI, S.Pd",             mapel: "IPA",           waliKelas: "8C", tingkat: "8" },
    { id: "guru-039", nama: "PIPIN FIRMANSYAH N, S.Pd",            mapel: "PJOK",          waliKelas: "8G", tingkat: "8" },
    { id: "guru-040", nama: "PRAPTI HANDAYANI, S.Pd",              mapel: "B. Inggris",    waliKelas: "—", tingkat: "8" },
    { id: "guru-041", nama: "QISTI SEPTIA W. A, S. Pd",            mapel: "IPA",           waliKelas: "—", tingkat: "7" },
    { id: "guru-042", nama: "RAHMASARI AULIA KHOTIMAH, S. Pd",     mapel: "B. Sunda",      waliKelas: "—", tingkat: "7" },
    { id: "guru-043", nama: "Rd. SRI REJEKI, S.Pd",                mapel: "IPA",           waliKelas: "—", tingkat: "9" },
    { id: "guru-044", nama: "RINI SEPTIANI, S. Pd",                mapel: "B. Indonesia",  waliKelas: "—", tingkat: "7" },
    { id: "guru-045", nama: "RONI RAHMANSYAH, S.KOM",              mapel: "Informatika",   waliKelas: "9F", tingkat: "9" },
    { id: "guru-046", nama: "SARIYA DEWI SARASWATI, S. Pd",        mapel: "PJOK",          waliKelas: "—", tingkat: "7" },
    { id: "guru-047", nama: "SETIA NUR PARIDAH, S.Pd",             mapel: "B. Indonesia",  waliKelas: "8A", tingkat: "8" },
    { id: "guru-048", nama: "SILFA AGISNI SALMA, S. Pd",           mapel: "BP-BK",         waliKelas: "—", tingkat: "7" },
    { id: "guru-049", nama: "TATA NURHAYATI, S.Pd",                mapel: "B. Indonesia",  waliKelas: "—", tingkat: "8" }
];

// ===============================
// JADWAL JUMAT (berlaku untuk semua kelas)
// ===============================
const jadwalJumat = [
    { waktu: "07.00-07.20", mapel: "Persiapan Sholat Dhuha", guru: "", ruang: "Masjid" },
    { waktu: "07.20-07.40", mapel: "Sholat Dhuha",           guru: "", ruang: "Masjid" },
    { waktu: "07.40-07.50", mapel: "Baca Doa",               guru: "", ruang: "Masjid" },
    { waktu: "07.50-08.20", mapel: "Baca Surah Al Kahf",     guru: "", ruang: "Masjid" },
    { waktu: "08.20-08.40", mapel: "Baca Surah Pendek",      guru: "", ruang: "Masjid" },
    { waktu: "08.40-09.00", mapel: "Ceramah",                guru: "", ruang: "Masjid" },
    { waktu: "09.00-09.40", mapel: "Senam",                  guru: "", ruang: "Lapangan" },
    { waktu: "09.40-10.00", mapel: "Istirahat",              guru: "", ruang: "—" }
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
        { waktu: "12.40-13.20", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" },
        { waktu: "13.20-14.00", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" }
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
    jumat: jadwalJumat
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
        { waktu: "12.40-13.20", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" },
        { waktu: "13.20-14.00", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" }
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
    jumat: jadwalJumat
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
        { waktu: "10.00-10.40", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" },
        { waktu: "10.40-11.20", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" },
        { waktu: "12.40-13.20", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7C" },
        { waktu: "13.20-14.00", mapel: "P. Pancasila", guru: "DIAN RAHMAWATI, S. Pd", ruang: "kelas 7C" }
    ],
    jumat: jadwalJumat
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
        { waktu: "07.00-07.40", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapang" },
        { waktu: "07.40-08.20", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapang" },
        { waktu: "08.20-09.00", mapel: "P.Pancasila", guru: "DIAN RAHMAWATI, S.Pd", ruang: "Kelas 7D" },
        { waktu: "09.00-09.40", mapel: "P.Pancasila", guru: "DIAN RAHMAWATI, S.Pd", ruang: "Kelas 7D" },
        { waktu: "10.00-10.40", mapel: "MATEMATIKA", guru: "ARI NUGRAHA, S.Pd", ruang: "Kelas 7D" },
        { waktu: "10.40-11.20", mapel: "MATEMATIKA", guru: "ARI NUGRAHA, S.Pd", ruang: "Kelas 7D" },
        { waktu: "12.40-13.20", mapel: "Informatika", guru: "ANNISA HAELWANI, S.Kom", ruang: "Kelas 7D/LABKOM" },
        { waktu: "13.20-14.00", mapel: "Informatika", guru: "ANNISA HAELWANI, S.Kom", ruang: "Kelas 7D/LABKOM" }
    ],
    jumat: jadwalJumat
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
        { waktu: "08.20-09.00", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" },
        { waktu: "09.00-09.40", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" },
        { waktu: "10.00-10.40", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "10.40-11.20", mapel: "IPA", guru: "INNA NURAINI SUJANA, S. Pd", ruang: "lab IPA" },
        { waktu: "12.40-13.20", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7E" },
        { waktu: "13.20-14.00", mapel: "PAI", guru: "IMAM ADI PRASETYO, S. Pd", ruang: "kelas 7E" }
    ],
    jumat: jadwalJumat
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
        { waktu: "08.20-09.00", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" },
        { waktu: "09.00-09.40", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" },
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
    jumat: jadwalJumat
},
    
"7G": {
    senin: [
        { waktu: "07.30-08.10", mapel: "MATEMATIKA", guru: "FIRDA PUTRI UTAMI,S.Pd", ruang: "Kelas 7G" },
        { waktu: "08.10-08.50", mapel: "MATEMATIKA", guru: "FIRDA PUTRI UTAMI,S.Pd", ruang: "Kelas 7G" },
        { waktu: "08.50-09.30", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapang" },
        { waktu: "09.30-10.00", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapang" },
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
    jumat: jadwalJumat
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
        { waktu: "07.00-07.40", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" },
        { waktu: "07.40-08.20", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" },
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
    jumat: jadwalJumat
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
        { waktu: "10.00-10.40", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" },
        { waktu: "10.40-11.20", mapel: "PJOK", guru: "SARIYA DEWI SARASWATI, S. Pd", ruang: "Lapangan" },
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
    jumat: jadwalJumat
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
    jumat: jadwalJumat
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
    jumat: jadwalJumat
},
    
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
    jumat: jadwalJumat
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
    jumat: jadwalJumat
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
    jumat: jadwalJumat
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
    jumat: jadwalJumat
},

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
    jumat: jadwalJumat
},

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
    jumat: jadwalJumat
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
    jumat: jadwalJumat
}
};

const jadwalKelas9 = {
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
    jumat: jadwalJumat
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
    jumat: jadwalJumat
}
    
};

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
let currentGuruId  = null;
let currentGuruHari = 'senin';

// ===============================
// SCROLL REVEAL
// ===============================
function triggerReveal() {
    document.querySelectorAll('.reveal-item:not(.revealed)').forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight - 40) {
            el.classList.add('revealed');
        }
    });
}

// ===============================
// RENDER GURU
// ===============================
let filterGuru = 'semua';

function renderGuru() {
    const grid = document.querySelector('.guru-grid');
    if (!grid) return;

    const filtered = dataGuru
        .filter(function (g) { return filterGuru === 'semua' || g.tingkat === filterGuru; })
        .sort(function (a, b) { return a.nama.localeCompare(b.nama, 'id'); });

    grid.innerHTML = '';

    if (!filtered.length) {
        grid.innerHTML = '<p class="no-data" style="padding:24px">Tidak ada guru untuk kategori ini.</p>';
        return;
    }

    filtered.forEach(function (guru) {
        const card = document.createElement('div');
        card.className = 'guru-card reveal-item';
        card.innerHTML =
            '<div class="guru-card-inner">' +
                '<div class="guru-avatar">' +
                    '<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">' +
                        '<circle cx="40" cy="30" r="18" fill="#94a3b8"/>' +
                        '<ellipse cx="40" cy="70" rx="26" ry="18" fill="#94a3b8"/>' +
                    '</svg>' +
                '</div>' +
                '<div class="guru-info">' +
                    '<h3 class="guru-nama">' + guru.nama + '</h3>' +
                    '<span class="guru-mapel">' + guru.mapel + '</span>' +
                    (guru.waliKelas !== '—' ? '<span class="guru-wali"> Wali Kelas: ' + guru.waliKelas + '</span>' : '') +
                '</div>' +
            '</div>' +
            '<button class="guru-jadwal-btn" data-guru-id="' + guru.id + '">LIHAT JADWAL GURU</button>';
        grid.appendChild(card);
    });

    setTimeout(triggerReveal, 50);
}

// ===============================
// CARI & RENDER JADWAL GURU
// ===============================
function cariJadwalGuru(namaGuru) {
    const semuaJadwal = { ...jadwalKelas7, ...jadwalKelas8, ...jadwalKelas9 };
    const hasil = { senin: [], selasa: [], rabu: [], kamis: [], jumat: [] };
    Object.keys(semuaJadwal).forEach(function (kelasId) {
        const jadwalKelas = semuaJadwal[kelasId];
        ['senin','selasa','rabu','kamis','jumat'].forEach(function (hari) {
            (jadwalKelas[hari] || []).forEach(function (item) {
                if (item.guru && item.guru.trim() === namaGuru.trim()) {
                    hasil[hari].push({ kelas: kelasId, waktu: item.waktu, mapel: item.mapel, ruang: item.ruang || '—' });
                }
            });
        });
    });
    return hasil;
}

function renderJadwalGuru(hari) {
    const tbody = document.getElementById('guru-jadwal-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    const guru = dataGuru.find(function (g) { return g.id === currentGuruId; });
    if (!guru) return;
    const jadwal = cariJadwalGuru(guru.nama);
    const rows = jadwal[hari] || [];
    if (!rows.length) {
        tbody.innerHTML = '<tr><td colspan="4" class="no-data">Tidak ada jadwal untuk hari ini.</td></tr>';
        return;
    }
    rows.forEach(function (item) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.waktu}</td><td>${item.kelas}</td><td>${item.mapel}</td><td>${item.ruang}</td>`;
        tbody.appendChild(tr);
    });
}

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

    // Trigger reveal animasi setelah section tampil
    setTimeout(triggerReveal, 80);
}

function setHariAktif(hari) {
    document.querySelectorAll('.hari-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.hari-btn[data-hari="${hari}"]`);
    if (btn) btn.classList.add('active');
}

function setGuruHariAktif(hari) {
    document.querySelectorAll('.guru-jadwal-tabs .hari-btn').forEach(function (b) { b.classList.remove('active'); });
    const btn = document.querySelector('.guru-jadwal-tabs .hari-btn[data-hari="' + hari + '"]');
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

    // MAINTENANCE MODE
    if (siteStatus === 'off') {
        document.getElementById('mainHeader').style.display = 'none';
        document.querySelector('.main').style.display = 'none';
        document.querySelector('.footer').style.display = 'none';
        const m = document.getElementById('maintenancePage');
        if (m) m.style.display = 'flex';
        return;
    }

    renderKelas7();
    renderKelas8();
    renderKelas9();
    renderGuru();

    // Scroll reveal
    window.addEventListener('scroll', triggerReveal, { passive: true });
    setTimeout(triggerReveal, 200);

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
    document.querySelectorAll('.nav-link').forEach(function (link) {
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
        this.setAttribute('aria-expanded', this.classList.contains('open') ? 'true' : 'false');
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

    // HERO BUTTON
    document.getElementById('lihatKelasBtn').addEventListener('click', function () { showSection('kelas'); });

    // GRADE LEVEL BUTTONS
    document.getElementById('lihatKelas7').addEventListener('click', function () { showSection('kelas-7'); });
    document.getElementById('lihatKelas8').addEventListener('click', function () { showSection('kelas-8'); });
    document.getElementById('lihatKelas9').addEventListener('click', function () { showSection('kelas-9'); });

    // BACK BUTTONS
    document.getElementById('backToHome').addEventListener('click',     function () { showSection('beranda'); });
    document.getElementById('backToClasses7').addEventListener('click', function () { showSection('kelas'); });
    document.getElementById('backToClasses').addEventListener('click',  function () { showSection('kelas'); });
    document.getElementById('backToClasses9').addEventListener('click', function () { showSection('kelas'); });
    document.getElementById('backToKelas7').addEventListener('click',   function () { showSection('kelas-7'); });
    document.getElementById('backToKelas8').addEventListener('click',   function () { showSection('kelas-8'); });
    document.getElementById('backToKelas9').addEventListener('click',   function () { showSection('kelas-9'); });

    const backToGuruBtn = document.getElementById('backToGuru');
    if (backToGuruBtn) backToGuruBtn.addEventListener('click', function () { showSection('guru'); });

    // KELAS CARDS (delegated)
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.kelas-button');
        if (!btn) return;
        currentKelas = btn.getAttribute('data-kelas');
        currentKelasLevel = currentKelas.charAt(0);
        document.getElementById('jadwal-title').textContent = 'Kelas ' + currentKelas;
        document.getElementById('jadwal-badge').textContent = 'JADWAL \u00b7 ' + currentKelas;
        showSection('jadwal-pelajaran');
        updateBackButtons();
    });

    // HARI BUTTONS (jadwal kelas)
    document.querySelectorAll('#jadwal-pelajaran .hari-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('#jadwal-pelajaran .hari-btn').forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');
            renderJadwalHari(this.getAttribute('data-hari'));
        });
    });

    // GURU FILTER TABS
    document.querySelectorAll('.guru-filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.guru-filter-btn').forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');
            filterGuru = this.getAttribute('data-filter');
            renderGuru();
        });
    });

    // GURU — tombol lihat jadwal (delegated)
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.guru-jadwal-btn');
        if (!btn) return;
        currentGuruId = btn.getAttribute('data-guru-id');
        const guru = dataGuru.find(function (g) { return g.id === currentGuruId; });
        if (!guru) return;
        const titleEl = document.getElementById('jadwal-guru-title');
        if (titleEl) titleEl.textContent = guru.nama;
        currentGuruHari = 'senin';
        setGuruHariAktif('senin');
        showSection('jadwal-guru');
        renderJadwalGuru('senin');
    });

    // GURU — tab hari
    const guruTabs = document.querySelector('.guru-jadwal-tabs');
    if (guruTabs) {
        guruTabs.addEventListener('click', function (e) {
            const btn = e.target.closest('.hari-btn');
            if (!btn) return;
            const hari = btn.getAttribute('data-hari');
            currentGuruHari = hari;
            setGuruHariAktif(hari);
            renderJadwalGuru(hari);
        });
    }

    // SCROLL: header shadow
    window.addEventListener('scroll', function () {
        document.getElementById('mainHeader').classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
});

// ===================================================
// LOGIN & HOMEWORK SYSTEM
// ===================================================

// ---- ACCOUNTS ----
// Generated automatically. Do NOT edit manually.
// For the full credential list see: accounts.txt
var ACCOUNTS = {
    "a_sutisna": { password: "f5sbLJIj", role: "guru",  label: "A. SUTISNA, S.Pd", namaGuru: "A. SUTISNA, S.Pd" },
    "ahmad_rahmat": { password: "ZneWCs8T", role: "guru",  label: "AHMAD RAHMAT, S.Sn, M.Pd", namaGuru: "AHMAD RAHMAT, S.Sn, M.Pd" },
    "ai_rika": { password: "E87fp8Wa", role: "guru",  label: "AI RIKA ISMAHANI, S.Psi", namaGuru: "AI RIKA ISMAHANI, S.Psi" },
    "alda_aldila": { password: "EVavb2XN", role: "guru",  label: "ALDA ALDILA RIYADI, S.Pd", namaGuru: "ALDA ALDILA RIYADI, S.Pd" },
    "andri_sunanto": { password: "11AEWaYW", role: "guru",  label: "ANDRI SUNANTO, S. Pd., M. Pd", namaGuru: "ANDRI SUNANTO, S. Pd., M. Pd" },
    "annisa_haelwani": { password: "a3AypPwy", role: "guru",  label: "ANNISA HAELWANI, S. KOM", namaGuru: "ANNISA HAELWANI, S. KOM" },
    "ari_nugraha": { password: "MYhnqki9", role: "guru",  label: "ARI NUGRAHA, S. Pd", namaGuru: "ARI NUGRAHA, S. Pd" },
    "arif_maulana": { password: "bq9FZtqQ", role: "guru",  label: "ARIF MAULANA GUNAWAN, S.T", namaGuru: "ARIF MAULANA GUNAWAN, S.T" },
    "candita_reksa": { password: "6PRJRMWi", role: "guru",  label: "CANDITA REKSA RIYADI, S. Pd", namaGuru: "CANDITA REKSA RIYADI, S. Pd" },
    "deden_kurnia": { password: "kAUEg4W8", role: "guru",  label: "DEDEN KURNIA S, S. Pd", namaGuru: "DEDEN KURNIA S, S. Pd" },
    "diah_soepliah": { password: "L6lYRWda", role: "guru",  label: "DIAH SOEPLIAH, S. Sos", namaGuru: "DIAH SOEPLIAH, S. Sos" },
    "dian_rahmawati": { password: "PGLxye6R", role: "guru",  label: "DIAN RAHMAWATI, S. Pd", namaGuru: "DIAN RAHMAWATI, S. Pd" },
    "agus_masruq": { password: "i981iEXo", role: "guru",  label: "Drs. AGUS MASRUQ, M.Pd", namaGuru: "Drs. AGUS MASRUQ, M.Pd" },
    "dwi_prihanto": { password: "1W11wt8D", role: "guru",  label: "DWI PRIHANTO K, S.Pd", namaGuru: "DWI PRIHANTO K, S.Pd" },
    "eha_julaeha": { password: "pukXfqc7", role: "guru",  label: "EHA JULAEHA, S.S", namaGuru: "EHA JULAEHA, S.S" },
    "elli_kemalawati": { password: "m4peOVV9", role: "guru",  label: "ELLI KEMALAWATI, S.Pd", namaGuru: "ELLI KEMALAWATI, S.Pd" },
    "endah_nurjanah": { password: "GY0NhhwX", role: "guru",  label: "ENDAH NURJANAH, S. Pd", namaGuru: "ENDAH NURJANAH, S. Pd" },
    "faijul_arifin": { password: "vH8SiZQx", role: "guru",  label: "FAIJUL ARIFIN, S.Pd", namaGuru: "FAIJUL ARIFIN, S.Pd" },
    "farhan_budiarto": { password: "8ZXs112q", role: "guru",  label: "FARHAN BUDIARTO, S.Pd", namaGuru: "FARHAN BUDIARTO, S.Pd" },
    "firda_putri": { password: "A6UyUwlh", role: "guru",  label: "FIRDA PUTRI UTAMI, S. Pd", namaGuru: "FIRDA PUTRI UTAMI, S. Pd" },
    "fitria_agustini": { password: "EavNOQA2", role: "guru",  label: "FITRIA AGUSTINI, S.Pd", namaGuru: "FITRIA AGUSTINI, S.Pd" },
    "hendra_saputra": { password: "amA8nlWB", role: "guru",  label: "HENDRA SAPUTRA, S.Pd", namaGuru: "HENDRA SAPUTRA, S.Pd" },
    "iis_priatini": { password: "h5MZh0lC", role: "guru",  label: "IIS PRIATINI, S.Pd", namaGuru: "IIS PRIATINI, S.Pd" },
    "ika_kurnia": { password: "rGUjTb78", role: "guru",  label: "IKA KURNIA, S.Pd", namaGuru: "IKA KURNIA, S.Pd" },
    "imam_adi": { password: "arvXUfu7", role: "guru",  label: "IMAM ADI PRASETYO, S. Pd", namaGuru: "IMAM ADI PRASETYO, S. Pd" },
    "inna_nuraini": { password: "I2R08GbV", role: "guru",  label: "INNA NURAINI SUJANA, S. Pd", namaGuru: "INNA NURAINI SUJANA, S. Pd" },
    "iwan_setiawan": { password: "EcGBD5Xe", role: "guru",  label: "IWAN SETIAWAN, S.Pd", namaGuru: "IWAN SETIAWAN, S.Pd" },
    "lani_mustikasari": { password: "3morcDtq", role: "guru",  label: "LANI MUSTIKASARI, S.Pd", namaGuru: "LANI MUSTIKASARI, S.Pd" },
    "lela_zulkaedah": { password: "k8QAem08", role: "guru",  label: "LELA ZULKAEDAH, S.Pd", namaGuru: "LELA ZULKAEDAH, S.Pd" },
    "lia_pramurtya": { password: "o1MHyOKH", role: "guru",  label: "LIA PRAMURTYA, S.Si", namaGuru: "LIA PRAMURTYA, S.Si" },
    "luthfi_hadiansyah": { password: "X4IjJZeo", role: "guru",  label: "LUTHFI HADIANSYAH, S.Pd", namaGuru: "LUTHFI HADIANSYAH, S.Pd" },
    "noor_fendi": { password: "Vv0iEHey", role: "guru",  label: "M. NOOR FENDI SAEFULOH, S.Pd", namaGuru: "M. NOOR FENDI SAEFULOH, S.Pd" },
    "mega_herliani": { password: "vtSb2eDs", role: "guru",  label: "MEGA HERLIANI, S.Sn", namaGuru: "MEGA HERLIANI, S.Sn" },
    "muh_zaenal": { password: "nQVZmsg9", role: "guru",  label: "MUH. ZAENAL ARIPIN, S. Pd", namaGuru: "MUH. ZAENAL ARIPIN, S. Pd" },
    "nidya_eka": { password: "EyVCTb9v", role: "guru",  label: "NIDYA EKA PRATIWI, S.Pd", namaGuru: "NIDYA EKA PRATIWI, S.Pd" },
    "pipin_firmansyah": { password: "rWE31IwE", role: "guru",  label: "PIPIN FIRMANSYAH N, S.Pd", namaGuru: "PIPIN FIRMANSYAH N, S.Pd" },
    "prapti_handayani": { password: "LM4sxagH", role: "guru",  label: "PRAPTI HANDAYANI, S.Pd", namaGuru: "PRAPTI HANDAYANI, S.Pd" },
    "qisti_septia": { password: "Y7JGedaO", role: "guru",  label: "QISTI SEPTIA W. A, S. Pd", namaGuru: "QISTI SEPTIA W. A, S. Pd" },
    "rahmasari_aulia": { password: "KV8Kd619", role: "guru",  label: "RAHMASARI AULIA KHOTIMAH, S. Pd", namaGuru: "RAHMASARI AULIA KHOTIMAH, S. Pd" },
    "rd_sri": { password: "gics4Bwb", role: "guru",  label: "Rd. SRI REJEKI, S.Pd", namaGuru: "Rd. SRI REJEKI, S.Pd" },
    "rini_septiani": { password: "xdiliI4o", role: "guru",  label: "RINI SEPTIANI, S. Pd", namaGuru: "RINI SEPTIANI, S. Pd" },
    "roni_rahmansyah": { password: "aVSK8MwP", role: "guru",  label: "RONI RAHMANSYAH, S.KOM", namaGuru: "RONI RAHMANSYAH, S.KOM" },
    "sariya_dewi": { password: "g0f91JKh", role: "guru",  label: "SARIYA DEWI SARASWATI, S. Pd", namaGuru: "SARIYA DEWI SARASWATI, S. Pd" },
    "setia_nur": { password: "h7otJycq", role: "guru",  label: "SETIA NUR PARIDAH, S.Pd", namaGuru: "SETIA NUR PARIDAH, S.Pd" },
    "silfa_agisni": { password: "qa14vrFd", role: "guru",  label: "SILFA AGISNI SALMA, S. Pd", namaGuru: "SILFA AGISNI SALMA, S. Pd" },
    "tata_nurhayati": { password: "BuPyCw2Z", role: "guru",  label: "TATA NURHAYATI, S.Pd", namaGuru: "TATA NURHAYATI, S.Pd" },
    "kelas7": { password: "Bjl15rCR", role: "siswa", label: "Siswa Kelas 7", kelasLevel: "7" },
    "kelas8": { password: "7UWFfTnF", role: "siswa", label: "Siswa Kelas 8", kelasLevel: "8" },
    "kelas9": { password: "cw8Q72A7", role: "siswa", label: "Siswa Kelas 9", kelasLevel: "9" }
};

// ---- SESSION ----
var currentUser = null;  // { username, role, label }

// ---- BRUTE-FORCE PROTECTION ----
var MAX_ATTEMPTS  = 3;
var LOCKOUT_MS    = 2 * 60 * 1000; // 2 minutes
var LOGIN_STORAGE = 'sijap-login-attempts';

function getLoginAttempts() {
    try {
        var raw = localStorage.getItem(LOGIN_STORAGE);
        if (!raw) return { count: 0, lockedUntil: 0 };
        return JSON.parse(raw);
    } catch(e) {
        return { count: 0, lockedUntil: 0 };
    }
}

function saveLoginAttempts(data) {
    localStorage.setItem(LOGIN_STORAGE, JSON.stringify(data));
}

function resetLoginAttempts() {
    localStorage.removeItem(LOGIN_STORAGE);
}

function isLockedOut() {
    var d = getLoginAttempts();
    if (d.lockedUntil && Date.now() < d.lockedUntil) return d.lockedUntil;
    return false;
}

function recordFailedAttempt() {
    var d = getLoginAttempts();
    d.count = (d.count || 0) + 1;
    if (d.count >= MAX_ATTEMPTS) {
        d.lockedUntil = Date.now() + LOCKOUT_MS;
    }
    saveLoginAttempts(d);
    return d;
}

// ---- LOGIN UI ----
function showLoginOverlay() {
    var overlay = document.getElementById('loginOverlay');
    overlay.style.display = 'flex';
    // clear inputs
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginError').style.display = 'none';
    checkLockStatus();
}

function hideLoginOverlay() {
    document.getElementById('loginOverlay').style.display = 'none';
}

function checkLockStatus() {
    var lockedUntil = isLockedOut();
    var lockEl = document.getElementById('loginLocked');
    var btnEl  = document.getElementById('loginBtn');
    if (lockedUntil) {
        lockEl.style.display = 'flex';
        btnEl.disabled = true;
        var remaining = Math.ceil((lockedUntil - Date.now()) / 1000);
        document.getElementById('loginLockedMsg').textContent =
            'Terlalu banyak percobaan. Tunggu ' + remaining + ' detik lagi.';
        setTimeout(checkLockStatus, 1000);
    } else {
        lockEl.style.display = 'none';
        btnEl.disabled = false;
    }
}

function doLogin() {
    if (isLockedOut()) {
        checkLockStatus();
        return;
    }

    var username = document.getElementById('loginUsername').value.trim().toLowerCase();
    var password = document.getElementById('loginPassword').value;
    var errEl = document.getElementById('loginError');

    if (!username || !password) {
        errEl.textContent = 'Username dan password harus diisi.';
        errEl.style.display = 'flex';
        return;
    }

    var account = ACCOUNTS[username];
    if (!account || account.password !== password) {
        var d = recordFailedAttempt();
        var remaining = MAX_ATTEMPTS - d.count;
        if (d.count >= MAX_ATTEMPTS) {
            errEl.style.display = 'none';
            checkLockStatus();
        } else {
            errEl.textContent = 'Username atau password salah. Sisa percobaan: ' + remaining;
            errEl.style.display = 'flex';
        }
        return;
    }

    // Success
    resetLoginAttempts();
    currentUser = {
        username:   username,
        role:       account.role,
        label:      account.label,
        namaGuru:   account.namaGuru   || null,
        kelasLevel: account.kelasLevel || null
    };
    hideLoginOverlay();
    onLoginSuccess();
}

function doLogout() {
    // Stop all real-time listeners
    if (hwUnsubscribeGuru) {
        hwUnsubscribeGuru();
        hwUnsubscribeGuru = null;
    }
    if (hwUnsubscribeSiswa) {
        hwUnsubscribeSiswa();
        hwUnsubscribeSiswa = null;
    }
    currentUser = null;
    updateAuthUI();
    showSection('beranda');
}

function onLoginSuccess() {
    updateAuthUI();
    if (currentUser.role === 'guru') {
        renderDashboardNav();
        // Update dashboard title
        var titleEl = document.getElementById('dashboardTitle');
        if (titleEl) titleEl.textContent = 'Dashboard — ' + (currentUser.namaGuru || currentUser.label);
        showSection('dashboard-guru');
        // Start real-time listener for all homework (teacher sees everything)
        subscribeHwGuru('');
    } else {
        // Student: start real-time listener filtered to their grade
        renderTodaySchedule();
        showSection('jadwal-hari-ini');
        var titleEl2 = document.getElementById('todayScheduleTitle');
        if (titleEl2) titleEl2.textContent = 'Jadwal Hari Ini — Kelas ' + currentUser.kelasLevel;
        subscribeHwSiswa(currentUser.kelasLevel);
    }
}

function updateAuthUI() {
    var navLoginBtn = document.getElementById('navLoginBtn');
    var userBar     = document.getElementById('userBar');
    var userBarLbl  = document.getElementById('userBarLabel');

    if (currentUser) {
        // Build a short label for the nav button
        var shortLabel = currentUser.role === 'guru'
            ? (currentUser.namaGuru || currentUser.label)
            : currentUser.label;

        // Truncate if very long for nav button
        var displayLabel = shortLabel.length > 28 ? shortLabel.substring(0, 26) + '…' : shortLabel;
        navLoginBtn.textContent = displayLabel;

        var roleTag = currentUser.role === 'guru' ? '👨‍🏫 Guru' : '📚 Siswa';
        userBar.style.display = 'block';
        userBarLbl.textContent = roleTag + ' — ' + shortLabel;
        document.body.classList.add('has-userbar');
    } else {
        navLoginBtn.innerHTML =
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;">' +
            '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>' +
            '<polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg> Login';
        userBar.style.display = 'none';
        document.body.classList.remove('has-userbar');
        var dashNav = document.getElementById('dashboardNavLink');
        if (dashNav) dashNav.remove();
    }
}

function renderDashboardNav() {
    if (document.getElementById('dashboardNavLink')) return;
    var nav = document.getElementById('mainNav');
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'nav-link';
    link.id = 'dashboardNavLink';
    link.setAttribute('data-section', 'dashboard-guru');
    link.innerHTML = '<span class="nav-icon">⊕</span><span>Dashboard</span>';
    link.addEventListener('click', function(e) {
        e.preventDefault();
        showSection('dashboard-guru');
        renderHwListGuru();
        nav.classList.remove('open');
        document.getElementById('hamburger').classList.remove('open');
    });
    nav.appendChild(link);
}

// ===================================================
// FIREBASE CONFIGURATION
// ===================================================
// ⚠️  REPLACE THE VALUES BELOW WITH YOUR OWN CONFIG
//     From: Firebase Console → Your Project → Project Settings → Your Apps → SDK setup
// ===================================================
var FIREBASE_CONFIG = {
    apiKey:            "AIzaSyBbOyHHcsFv7dB6vINYOqhkGvz-synfY78",
    authDomain:        "sijap-smpn24.firebaseapp.com",
    projectId:         "sijap-smpn24",
    storageBucket:     "sijap-smpn24.firebasestorage.app",
    messagingSenderId: "44069478574",
    appId:             "1:44069478574:web:6af07c1bc334fcbc5e8d3f"
};

// ===================================================
// FIREBASE INIT
// ===================================================

var db = null;              // Firestore instance (set after init)
var fbReady = false;        // true once Firebase has initialised successfully
var fbError = false;        // true if Firebase failed to connect
var hwUnsubscribeGuru   = null;   // real-time listener handle for teacher view
var hwUnsubscribeSiswa  = null;   // real-time listener handle for student view

function initFirebase() {
    try {
        // Guard: only init once
        if (!firebase.apps.length) {
            firebase.initializeApp(FIREBASE_CONFIG);
        }
        db = firebase.firestore();
        fbReady = true;
        showFbStatus('connected');
    } catch (err) {
        fbReady = false;
        fbError = true;
        showFbStatus('error', err.message);
        console.error('[SIJAP] Firebase init error:', err);
    }
}

// ── Firebase status bar (only visible in teacher dashboard) ──────────
function showFbStatus(state, msg) {
    var bar = document.getElementById('fbStatusBar');
    if (!bar) return;
    if (state === 'connected') {
        bar.style.display = 'flex';
        bar.className = 'fb-status-bar fb-status-ok';
        bar.innerHTML =
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;flex-shrink:0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.92a16 16 0 0 0 6 6l1.27-.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
            '<span>Firebase terhubung — Data real-time aktif ✓</span>';
    } else {
        bar.style.display = 'flex';
        bar.className = 'fb-status-bar fb-status-error';
        bar.innerHTML =
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' +
            '<span>Firebase error: ' + escapeHtml(msg || 'Tidak dapat terhubung') +
            ' — Periksa konfigurasi di script.js</span>';
    }
}

// ===================================================
// HELPERS
// ===================================================

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function formatTanggal(isoStr) {
    if (!isoStr) return '—';
    var d = new Date(isoStr + 'T00:00:00');
    var days   = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    var months = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
    return days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

// ===================================================
// FIREBASE — ADD HOMEWORK
// ===================================================

function addHomeworkToFirebase(data, onSuccess, onError) {
    if (!fbReady || !db) {
        onError('Firebase belum siap. Coba refresh halaman.');
        return;
    }
    db.collection('homeworks').add({
        class:       data.kelas,
        subject:     data.mapel,
        teacher:     data.namaGuru,
        description: data.deskripsi,
        date:        data.tanggal,
        timestamp:   firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function() { onSuccess(); })
    .catch(function(err) { onError(err.message); });
}

// ===================================================
// FIREBASE — UPDATE HOMEWORK
// ===================================================

function updateHomeworkInFirebase(docId, data, onSuccess, onError) {
    if (!fbReady || !db) {
        onError('Firebase belum siap.');
        return;
    }
    db.collection('homeworks').doc(docId).update({
        class:       data.kelas,
        subject:     data.mapel,
        description: data.deskripsi,
        date:        data.tanggal
    })
    .then(function() { onSuccess(); })
    .catch(function(err) { onError(err.message); });
}

// ===================================================
// FIREBASE — DELETE HOMEWORK
// ===================================================

function deleteHomeworkFromFirebase(docId, onSuccess, onError) {
    if (!fbReady || !db) {
        onError('Firebase belum siap.');
        return;
    }
    db.collection('homeworks').doc(docId).delete()
    .then(function() { onSuccess(); })
    .catch(function(err) { onError(err.message); });
}

// ===================================================
// FIREBASE — REAL-TIME LISTENER: TEACHER (all classes)
// ===================================================

function subscribeHwGuru(filterKelas) {
    // Unsubscribe from any existing listener first
    if (hwUnsubscribeGuru) {
        hwUnsubscribeGuru();
        hwUnsubscribeGuru = null;
    }

    if (!fbReady || !db) {
        renderHwListGuruData([], true);
        return;
    }

    var container = document.getElementById('hwListGuru');
    if (container) {
        container.innerHTML =
            '<div class="hw-loading"><div class="hw-loading-spinner"></div><span>Memuat data...</span></div>';
    }

    var query = db.collection('homeworks').orderBy('timestamp', 'desc');
    if (filterKelas && filterKelas !== '') {
        query = query.where('class', '==', filterKelas);
    }

    hwUnsubscribeGuru = query.onSnapshot(function(snapshot) {
        var list = [];
        snapshot.forEach(function(doc) {
            var d = doc.data();
            list.push({
                id:        doc.id,
                kelas:     d.class       || '',
                mapel:     d.subject     || '',
                namaGuru:  d.teacher     || '',
                deskripsi: d.description || '',
                tanggal:   d.date        || '',
                timestamp: d.timestamp
            });
        });
        renderHwListGuruData(list, false);
    }, function(err) {
        console.error('[SIJAP] Firestore listener error (guru):', err);
        renderHwListGuruData([], true, err.message);
    });
}

// ===================================================
// FIREBASE — REAL-TIME LISTENER: STUDENT (filtered by class)
// ===================================================

function subscribeHwSiswa(kelasFilter) {
    // Unsubscribe from previous listener
    if (hwUnsubscribeSiswa) {
        hwUnsubscribeSiswa();
        hwUnsubscribeSiswa = null;
    }

    if (!fbReady || !db) {
        renderHwListSiswaData([], kelasFilter, true);
        return;
    }

    var container = document.getElementById('hwListSiswa');
    if (container) {
        container.innerHTML =
            '<div class="hw-loading"><div class="hw-loading-spinner"></div><span>Memuat tugas...</span></div>';
    }

    // Build class filter list.
    // kelas7 → all 7A-7I, kelas8 → all 8A-8I, kelas9 → all 9A-9I
    var classesToQuery = buildClassFilterList(kelasFilter);

    // Firestore 'in' operator supports max 10 values — we have max 9 per grade, so it's fine.
    var query = db.collection('homeworks')
        .where('class', 'in', classesToQuery)
        .orderBy('timestamp', 'desc');

    hwUnsubscribeSiswa = query.onSnapshot(function(snapshot) {
        var list = [];
        snapshot.forEach(function(doc) {
            var d = doc.data();
            list.push({
                id:        doc.id,
                kelas:     d.class       || '',
                mapel:     d.subject     || '',
                namaGuru:  d.teacher     || '',
                deskripsi: d.description || '',
                tanggal:   d.date        || '',
                timestamp: d.timestamp
            });
        });
        renderHwListSiswaData(list, kelasFilter, false);
        // Also re-render today's schedule table so homework column updates
        renderTodaySchedule(list);
    }, function(err) {
        console.error('[SIJAP] Firestore listener error (siswa):', err);
        renderHwListSiswaData([], kelasFilter, true, err.message);
    });
}

function buildClassFilterList(kelasLevel) {
    var suffix = ['A','B','C','D','E','F','G','H','I'];
    return suffix.map(function(s) { return kelasLevel + s; });
}

// ===================================================
// RENDER — TEACHER HOMEWORK LIST
// ===================================================

function renderHwListGuruData(list, hasError, errMsg) {
    var container = document.getElementById('hwListGuru');
    if (!container) return;

    if (hasError) {
        container.innerHTML =
            '<div class="hw-empty" style="color:#dc2626;">' +
            '⚠️ Gagal memuat data.' +
            (errMsg ? ' (' + escapeHtml(errMsg) + ')' : '') +
            ' Periksa konfigurasi Firebase di script.js.</div>';
        return;
    }

    if (!list.length) {
        container.innerHTML = '<div class="hw-empty">Belum ada tugas yang dikirim.</div>';
        return;
    }

    container.innerHTML = '';
    list.forEach(function(hw) {
        var item = document.createElement('div');
        item.className = 'hw-item';
        item.innerHTML =
            '<div class="hw-item-mapel-badge">' + escapeHtml(hw.mapel) + '</div>' +
            '<div class="hw-item-body">' +
                '<div class="hw-item-desc">' + escapeHtml(hw.deskripsi) + '</div>' +
                '<div class="hw-item-meta">' +
                    '<span>📅 ' + formatTanggal(hw.tanggal) + '</span>' +
                    '<span>🏫 Kelas ' + escapeHtml(hw.kelas) + '</span>' +
                    '<span>👨‍🏫 ' + escapeHtml(hw.namaGuru) + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="hw-item-actions">' +
                '<button class="hw-action-btn hw-edit-btn" data-hw-id="' + hw.id + '" ' +
                    'data-hw-kelas="' + escapeHtml(hw.kelas) + '" ' +
                    'data-hw-mapel="' + escapeHtml(hw.mapel) + '" ' +
                    'data-hw-desc="'  + escapeHtml(hw.deskripsi) + '" ' +
                    'data-hw-date="'  + escapeHtml(hw.tanggal) + '">Edit</button>' +
                '<button class="hw-action-btn hw-delete-btn" data-hw-del-id="' + hw.id + '">Hapus</button>' +
            '</div>';
        container.appendChild(item);
    });
}

// ===================================================
// RENDER — STUDENT HOMEWORK LIST
// ===================================================

function renderHwListSiswaData(list, kelasLevel, hasError, errMsg) {
    var container = document.getElementById('hwListSiswa');
    if (!container) return;

    var titleEl = document.getElementById('hwSiswaTitle');
    if (titleEl) titleEl.textContent = 'Semua PR & Tugas Kelas ' + kelasLevel;

    if (hasError) {
        container.innerHTML =
            '<div class="hw-empty" style="color:#dc2626;">' +
            '⚠️ Gagal memuat tugas.' +
            (errMsg ? ' (' + escapeHtml(errMsg) + ')' : '') + '</div>';
        return;
    }

    if (!list.length) {
        container.innerHTML = '<div class="hw-empty">Tidak ada PR / Tugas saat ini. 🎉</div>';
        return;
    }

    container.innerHTML = '';
    list.forEach(function(hw) {
        var item = document.createElement('div');
        item.className = 'hw-item';
        item.innerHTML =
            '<div class="hw-item-mapel-badge">' + escapeHtml(hw.mapel) + '</div>' +
            '<div class="hw-item-body">' +
                '<div class="hw-item-desc">' + escapeHtml(hw.deskripsi) + '</div>' +
                '<div class="hw-item-meta">' +
                    '<span>📅 ' + formatTanggal(hw.tanggal) + '</span>' +
                    '<span>🏫 Kelas ' + escapeHtml(hw.kelas) + '</span>' +
                    '<span>👨‍🏫 ' + escapeHtml(hw.namaGuru) + '</span>' +
                '</div>' +
            '</div>';
        container.appendChild(item);
    });
}

// ===================================================
// TODAY'S SCHEDULE
// ===================================================

function getTodayHariKey() {
    var day = new Date().getDay();
    var map = { 1: 'senin', 2: 'selasa', 3: 'rabu', 4: 'kamis', 5: 'jumat' };
    return map[day] || null;
}

// kelasId: e.g. "8F"  |  homeworkList: array from Firebase snapshot (optional)
function renderTodaySchedule(homeworkList) {
    var tbody   = document.getElementById('today-tbody');
    var labelEl = document.getElementById('todayDateLabel');
    var titleEl = document.getElementById('todayScheduleTitle');
    if (!tbody) return;

    // Determine which class to show based on logged-in student's kelasLevel
    // For now the today-schedule is keyed to 8F as the pilot; the full
    // per-class schedule would need the student to pick a specific class (7A-7I etc).
    // We default to 8F for kelas8 students and show a note for others.
    var displayKelas = '8F';
    if (currentUser && currentUser.kelasLevel) {
        // Default representative class per grade for the schedule preview
        var gradeDefaults = { '7': '7A', '8': '8F', '9': '9A' };
        displayKelas = gradeDefaults[currentUser.kelasLevel] || '8F';
    }

    var today  = new Date();
    var days   = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    var months = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
    if (labelEl) {
        labelEl.textContent = days[today.getDay()] + ', ' + today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();
    }
    if (titleEl) {
        titleEl.textContent = 'Jadwal Hari Ini — Kelas ' + displayKelas;
    }

    var hariKey = getTodayHariKey();
    tbody.innerHTML = '';

    if (!hariKey) {
        tbody.innerHTML = '<tr><td colspan="5" class="no-data">Hari ini libur — tidak ada jadwal pelajaran.</td></tr>';
        return;
    }

    var jadwalKls = jadwalKelas[displayKelas];
    if (!jadwalKls || !jadwalKls[hariKey]) {
        tbody.innerHTML = '<tr><td colspan="5" class="no-data">Jadwal belum tersedia untuk kelas ' + escapeHtml(displayKelas) + '.</td></tr>';
        return;
    }

    var schedule = jadwalKls[hariKey];

    // Build subject → homework map from the passed list (or empty)
    var hwMap = {};
    if (homeworkList && homeworkList.length) {
        homeworkList.forEach(function(hw) {
            if (hw.kelas === displayKelas) {
                var key = hw.mapel.toLowerCase().trim();
                if (!hwMap[key]) hwMap[key] = [];
                hwMap[key].push(hw);
            }
        });
    }

    schedule.forEach(function(item) {
        var tr = document.createElement('tr');
        var mapelKey = item.mapel.toLowerCase().trim();
        var hwItems  = hwMap[mapelKey] || [];

        var hwCell = '';
        if (hwItems.length) {
            hwItems.forEach(function(hw) {
                hwCell += '<span class="hw-badge-in-table" title="' + escapeHtml(hw.deskripsi) + '">' +
                    escapeHtml(hw.deskripsi.substring(0, 30)) + (hw.deskripsi.length > 30 ? '…' : '') +
                    '</span> ';
            });
        } else {
            hwCell = '<span class="no-hw-badge">—</span>';
        }

        tr.innerHTML =
            '<td>' + escapeHtml(item.waktu)       + '</td>' +
            '<td>' + escapeHtml(item.mapel)       + '</td>' +
            '<td>' + escapeHtml(item.guru || '—') + '</td>' +
            '<td>' + escapeHtml(item.ruang)       + '</td>' +
            '<td>' + hwCell                        + '</td>';
        tbody.appendChild(tr);
    });
}

// ===================================================
// HOMEWORK FORM SUBMIT (TEACHER)
// ===================================================

function initHomeworkForm() {
    var submitBtn     = document.getElementById('hwSubmitBtn');
    var cancelEditBtn = document.getElementById('hwCancelEditBtn');
    if (!submitBtn) return;

    // Set default date to today
    document.getElementById('hwTanggal').value = new Date().toISOString().substring(0, 10);

    // ── Cancel edit button ─────────────────────────────
    if (cancelEditBtn) {
        cancelEditBtn.addEventListener('click', function() {
            resetHwForm();
        });
    }

    // ── Submit / Update ────────────────────────────────
    submitBtn.addEventListener('click', function() {
        var kelas     = document.getElementById('hwKelas').value.trim();
        var mapel     = document.getElementById('hwMapel').value.trim();
        var deskripsi = document.getElementById('hwDeskripsi').value.trim();
        var tanggal   = document.getElementById('hwTanggal').value;
        var errEl     = document.getElementById('hwFormError');
        var successEl = document.getElementById('hwSuccessMsg');
        var savingEl  = document.getElementById('hwSavingMsg');

        errEl.style.display = 'none';

        if (!kelas) {
            errEl.textContent = 'Pilih kelas tujuan terlebih dahulu.';
            errEl.style.display = 'flex'; return;
        }
        if (!mapel) {
            errEl.textContent = 'Pilih mata pelajaran terlebih dahulu.';
            errEl.style.display = 'flex'; return;
        }
        if (!deskripsi) {
            errEl.textContent = 'Deskripsi tugas tidak boleh kosong.';
            errEl.style.display = 'flex'; return;
        }
        if (!tanggal) {
            errEl.textContent = 'Tanggal pengumpulan harus diisi.';
            errEl.style.display = 'flex'; return;
        }
        if (!fbReady) {
            errEl.textContent = 'Firebase belum terhubung. Periksa konfigurasi.';
            errEl.style.display = 'flex'; return;
        }

        var editId   = submitBtn.getAttribute('data-edit-id');
        var namaGuru = (currentUser && currentUser.namaGuru) ? currentUser.namaGuru : 'Guru';

        submitBtn.disabled = true;
        savingEl.style.display = 'inline';

        var payload = { kelas: kelas, mapel: mapel, deskripsi: deskripsi, tanggal: tanggal, namaGuru: namaGuru };

        if (editId) {
            // UPDATE existing document
            updateHomeworkInFirebase(editId, payload,
                function() {
                    submitBtn.disabled = false;
                    savingEl.style.display = 'none';
                    successEl.textContent = '✓ Tugas berhasil diperbarui!';
                    successEl.style.display = 'inline';
                    setTimeout(function() { successEl.style.display = 'none'; }, 2500);
                    resetHwForm();
                },
                function(errMsg) {
                    submitBtn.disabled = false;
                    savingEl.style.display = 'none';
                    errEl.textContent = 'Gagal update: ' + errMsg;
                    errEl.style.display = 'flex';
                }
            );
        } else {
            // ADD new document
            addHomeworkToFirebase(payload,
                function() {
                    submitBtn.disabled = false;
                    savingEl.style.display = 'none';
                    successEl.textContent = '✓ Tugas berhasil disimpan ke Firebase!';
                    successEl.style.display = 'inline';
                    setTimeout(function() { successEl.style.display = 'none'; }, 2500);
                    resetHwForm();
                    // Real-time listener will auto-update the list — no manual refresh needed
                },
                function(errMsg) {
                    submitBtn.disabled = false;
                    savingEl.style.display = 'none';
                    errEl.textContent = 'Gagal simpan: ' + errMsg;
                    errEl.style.display = 'flex';
                }
            );
        }
    });

    // ── Delegated delete / edit on hw list ────────────
    var hwListGuru = document.getElementById('hwListGuru');
    if (hwListGuru) {
        hwListGuru.addEventListener('click', function(e) {
            var delBtn  = e.target.closest('[data-hw-del-id]');
            var editBtn = e.target.closest('[data-hw-id]');

            if (delBtn) {
                var docId = delBtn.getAttribute('data-hw-del-id');
                if (!confirm('Hapus tugas ini dari Firebase?')) return;
                deleteHomeworkFromFirebase(docId,
                    function() { /* listener auto-updates UI */ },
                    function(err) { alert('Gagal hapus: ' + err); }
                );
                return;
            }

            if (editBtn) {
                // Populate form with data stored as data-* attributes (no extra Firestore read needed)
                var docId    = editBtn.getAttribute('data-hw-id');
                var hwKelas  = editBtn.getAttribute('data-hw-kelas');
                var hwMapel  = editBtn.getAttribute('data-hw-mapel');
                var hwDesc   = editBtn.getAttribute('data-hw-desc');
                var hwDate   = editBtn.getAttribute('data-hw-date');

                document.getElementById('hwKelas').value     = hwKelas;
                document.getElementById('hwMapel').value     = hwMapel;
                document.getElementById('hwDeskripsi').value = hwDesc;
                document.getElementById('hwTanggal').value   = hwDate;

                var btn = document.getElementById('hwSubmitBtn');
                btn.setAttribute('data-edit-id', docId);
                btn.innerHTML =
                    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;">' +
                    '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>' +
                    '<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Update Tugas';

                var cancelBtn = document.getElementById('hwCancelEditBtn');
                if (cancelBtn) cancelBtn.style.display = 'inline-flex';

                document.querySelector('.hw-form-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // ── Filter kelas dropdown (teacher) ───────────────
    var filterSelect = document.getElementById('hwFilterKelas');
    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            subscribeHwGuru(this.value);
        });
    }
}

function resetHwForm() {
    document.getElementById('hwKelas').value     = '';
    document.getElementById('hwMapel').value     = '';
    document.getElementById('hwDeskripsi').value = '';
    document.getElementById('hwTanggal').value   = new Date().toISOString().substring(0, 10);

    var btn = document.getElementById('hwSubmitBtn');
    btn.removeAttribute('data-edit-id');
    btn.disabled = false;
    btn.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;">' +
        '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Simpan Tugas';

    var cancelBtn = document.getElementById('hwCancelEditBtn');
    if (cancelBtn) cancelBtn.style.display = 'none';

    var errEl = document.getElementById('hwFormError');
    if (errEl) errEl.style.display = 'none';
}

// ===================================================
// INIT AUTH EVENTS (called after DOMContentLoaded)
// ===================================================

function initAuthSystem() {
    // Nav login button
    document.getElementById('navLoginBtn').addEventListener('click', function() {
        if (currentUser) {
            if (currentUser.role === 'guru') {
                showSection('dashboard-guru');
            } else {
                renderTodaySchedule();
                showSection('jadwal-hari-ini');
            }
        } else {
            showLoginOverlay();
        }
    });

    // Login form events
    document.getElementById('loginBtn').addEventListener('click', doLogin);
    document.getElementById('loginPassword').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') doLogin();
    });
    document.getElementById('loginUsername').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') document.getElementById('loginPassword').focus();
    });

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', doLogout);

    // Back button on today's schedule
    var backBtn = document.getElementById('backFromTodayBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // Clean up student listener when leaving
            if (hwUnsubscribeSiswa) {
                hwUnsubscribeSiswa();
                hwUnsubscribeSiswa = null;
            }
            showSection('beranda');
        });
    }

    // Init homework form
    initHomeworkForm();
}

// ===================================================
// HOOK INTO EXISTING DOMContentLoaded
// ===================================================

document.addEventListener('DOMContentLoaded', function() {
    initFirebase();   // must be first
    initAuthSystem();
});