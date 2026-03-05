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
