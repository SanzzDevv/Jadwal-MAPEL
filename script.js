// ===============================
// IKON SVG BERSAMA (feather-style, stroke-based)
// Dipakai untuk mengganti emoji di berbagai bagian UI
// ===============================
const ICONS = {
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18"/><path d="M6 12H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2"/><path d="M18 12h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2"/><line x1="10" y1="6" x2="10" y2="6.01"/><line x1="14" y1="6" x2="14" y2="6.01"/><line x1="10" y1="10" x2="10" y2="10.01"/><line x1="14" y1="10" x2="14" y2="10.01"/><line x1="10" y1="14" x2="10" y2="14.01"/><line x1="14" y1="14" x2="14" y2="14.01"/><line x1="10" y1="18" x2="14" y2="18"/></svg>',
    teacher: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5"/></svg>',
    warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
};
function metaIcon(name) {
    return '<span style="display:inline-flex;width:13px;height:13px;flex-shrink:0;vertical-align:-2px;margin-right:4px;">' + ICONS[name] + '</span>';
}

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

    var loadingHidden = false;
    function hideLoadingScreen() {
        if (loadingHidden) return;
        loadingHidden = true;
        const screen = document.getElementById('loadingScreen');
        if (screen) {
            screen.classList.add('hide');
            setTimeout(function () {
                screen.style.display = 'none';
                document.body.classList.remove('loading');
                triggerReveal();
            }, 520);
        }
    }

    window.addEventListener('load', function () {
        setTimeout(hideLoadingScreen, 900);
    });

    // Jaga-jaga: kalau event 'load' gak pernah nembak (misal ada resource
    // eksternal yang lambat/diblokir jaringan), paksa tutup loading screen
    // setelah maksimal 4.5 detik biar situs gak macet selamanya.
    setTimeout(hideLoadingScreen, 4500);
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
    { id: "8A", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 8A" },
    { id: "8B", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 8B" },
    { id: "8C", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 8C" },
    { id: "8D", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 8D" },
    { id: "8E", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 8E" },
    { id: "8F", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 8F" },
    { id: "8G", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 8G" },
    { id: "8H", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 8H" },
    { id: "8I", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 8I" }
];

const dataKelas9 = [
    { id: "9A", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 9A" },
    { id: "9B", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 9B" },
    { id: "9C", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 9C" },
    { id: "9D", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 9D" },
    { id: "9E", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 9E" },
    { id: "9F", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 9F" },
    { id: "9G", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 9G" },
    { id: "9H", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 9H" },
    { id: "9I", waliKelas: "-", jumlahSiswa: 34, ruang: "Kelas 9I" }
];

// ===============================
// DATA GURU
// Tambahkan guru di sini. Nama harus sama persis dengan yang ada di jadwal.
// tingkat: "7", "8", "9", atau "semua" jika mengajar lintas tingkat
// ===============================
const dataGuru = [
    { id: "guru-001", nama: "A. SUTISNA, S.Pd",                    mapel: "-",  waliKelas: "-", tingkat: "9" },
    { id: "guru-002", nama: "AHMAD RAHMAT, S.Sn, M.Pd",            mapel: "-",  waliKelas: "-", tingkat: "9" },
    { id: "guru-003", nama: "AI RIKA ISMAHANI, S.Psi",             mapel: "-",         waliKelas: "-", tingkat: "9" },
    { id: "guru-004", nama: "ALDA ALDILA RIYADI, S.Pd",            mapel: "-",           waliKelas: "-", tingkat: "8" },
    { id: "guru-005", nama: "ANDRI SUNANTO, S. Pd., M. Pd",        mapel: "-",           waliKelas: "-", tingkat: "7" },
    { id: "guru-006", nama: "ANDRI SUNANTO, S.Pd., M.Pd",          mapel: "-",           waliKelas: "-", tingkat: "9" },
    { id: "guru-007", nama: "ANNISA HAELWANI, S. KOM",             mapel: "-",   waliKelas: "-", tingkat: "7" },
    { id: "guru-008", nama: "ARI NUGRAHA, S. Pd",                  mapel: "-",    waliKelas: "-", tingkat: "7" },
    { id: "guru-009", nama: "ARIF MAULANA GUNAWAN, S.T",           mapel: "-",   waliKelas: "-", tingkat: "8" },
    { id: "guru-010", nama: "CANDITA REKSA RIYADI, S. Pd",         mapel: "-",           waliKelas: "-", tingkat: "7" },
    { id: "guru-011", nama: "DEDEN KURNIA S, S. Pd",               mapel: "-",  waliKelas: "-", tingkat: "7" },
    { id: "guru-012", nama: "DEDEN KURNIA S, S.Pd",                mapel: "-",  waliKelas: "-", tingkat: "9" },
    { id: "guru-013", nama: "DIAH SOEPLIAH, S. Sos",               mapel: "-",  waliKelas: "-", tingkat: "7" },
    { id: "guru-014", nama: "DIAN RAHMAWATI, S. Pd",               mapel: "-",  waliKelas: "-", tingkat: "7" },
    { id: "guru-015", nama: "Drs. AGUS MASRUQ, M.Pd",              mapel: "-",          waliKelas: "-", tingkat: "9" },
    { id: "guru-016", nama: "DWI PRIHANTO K, S.Pd",                mapel: "-",  waliKelas: "-", tingkat: "8" },
    { id: "guru-017", nama: "EHA JULAEHA, S.S",                    mapel: "-",      waliKelas: "-", tingkat: "9" },
    { id: "guru-018", nama: "ELLI KEMALAWATI, S.Pd",               mapel: "-",    waliKelas: "-", tingkat: "9" },
    { id: "guru-019", nama: "ENDAH NURJANAH, S. Pd",               mapel: "-",    waliKelas: "-", tingkat: "7" },
    { id: "guru-020", nama: "FAIJUL ARIFIN, S.Pd",                 mapel: "-",           waliKelas: "-", tingkat: "9" },
    { id: "guru-021", nama: "FARHAN BUDIARTO, S.Pd",               mapel: "-",    waliKelas: "-", tingkat: "8" },
    { id: "guru-022", nama: "FIRDA PUTRI UTAMI, S. Pd",            mapel: "-",    waliKelas: "-", tingkat: "7" },
    { id: "guru-023", nama: "FITRIA AGUSTINI, S.Pd",               mapel: "-",  waliKelas: "-", tingkat: "8" },
    { id: "guru-024", nama: "HENDRA SAPUTRA, S.Pd",                mapel: "-",           waliKelas: "-", tingkat: "8" },
    { id: "guru-025", nama: "IIS PRIATINI, S.Pd",                  mapel: "-",           waliKelas: "-", tingkat: "9" },
    { id: "guru-026", nama: "IKA KURNIA, S.Pd",                    mapel: "-",    waliKelas: "-", tingkat: "9" },
    { id: "guru-027", nama: "IMAM ADI PRASETYO, S. Pd",            mapel: "-",           waliKelas: "-", tingkat: "7" },
    { id: "guru-028", nama: "INNA NURAINI SUJANA, S. Pd",          mapel: "-",           waliKelas: "-", tingkat: "7" },
    { id: "guru-029", nama: "IWAN SETIAWAN, S.Pd",                 mapel: "-",    waliKelas: "-", tingkat: "8" },
    { id: "guru-030", nama: "LANI MUSTIKASARI, S.Pd",              mapel: "-",  waliKelas: "-", tingkat: "9" },
    { id: "guru-031", nama: "LELA ZULKAEDAH, S.Pd",                mapel: "-",    waliKelas: "-", tingkat: "8" },
    { id: "guru-032", nama: "LIA PRAMURTYA, S.Si",                 mapel: "-",           waliKelas: "-", tingkat: "9" },
    { id: "guru-033", nama: "LUTHFI HADIANSYAH, S.Pd",             mapel: "-",           waliKelas: "-", tingkat: "8" },
    { id: "guru-034", nama: "M. NOOR FENDI SAEFULOH, S.Pd",        mapel: "-",    waliKelas: "-", tingkat: "9" },
    { id: "guru-035", nama: "MEGA HERLIANI, S.Sn",                 mapel: "-",  waliKelas: "-", tingkat: "8" },
    { id: "guru-036", nama: "MUH. ZAENAL ARIPIN, S. Pd",           mapel: "-",    waliKelas: "-", tingkat: "7" },
    { id: "guru-037", nama: "MUH. ZAENAL ARIPIN, S.Pd",            mapel: "-",    waliKelas: "-", tingkat: "9" },
    { id: "guru-038", nama: "NIDYA EKA PRATIWI, S.Pd",             mapel: "-",           waliKelas: "-", tingkat: "8" },
    { id: "guru-039", nama: "PIPIN FIRMANSYAH N, S.Pd",            mapel: "-",          waliKelas: "-", tingkat: "8" },
    { id: "guru-040", nama: "PRAPTI HANDAYANI, S.Pd",              mapel: "-",    waliKelas: "-", tingkat: "8" },
    { id: "guru-041", nama: "QISTI SEPTIA W. A, S. Pd",            mapel: "-",           waliKelas: "-", tingkat: "7" },
    { id: "guru-042", nama: "RAHMASARI AULIA KHOTIMAH, S. Pd",     mapel: "-",      waliKelas: "-", tingkat: "7" },
    { id: "guru-043", nama: "Rd. SRI REJEKI, S.Pd",                mapel: "-",           waliKelas: "-", tingkat: "9" },
    { id: "guru-044", nama: "RINI SEPTIANI, S. Pd",                mapel: "-",  waliKelas: "-", tingkat: "7" },
    { id: "guru-045", nama: "RONI RAHMANSYAH, S.KOM",              mapel: "-",   waliKelas: "-", tingkat: "9" },
    { id: "guru-046", nama: "SARIYA DEWI SARASWATI, S. Pd",        mapel: "-",          waliKelas: "-", tingkat: "7" },
    { id: "guru-047", nama: "SETIA NUR PARIDAH, S.Pd",             mapel: "-",  waliKelas: "-", tingkat: "8" },
    { id: "guru-048", nama: "SILFA AGISNI SALMA, S. Pd",           mapel: "-",         waliKelas: "-", tingkat: "7" },
    { id: "guru-049", nama: "TATA NURHAYATI, S.Pd",                mapel: "-",  waliKelas: "-", tingkat: "8" }
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
    { waktu: "09.40-10.00", mapel: "Istirahat",              guru: "", ruang: "-" }
];

const jadwalKelas7 = {

"7A": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},

"7B": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},

"7C": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},
    
    "7D": {
        senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},
    
"7E": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},

"7F": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},
    
"7G": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},
    
"7H": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},

"7I": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},

};

const jadwalKelas8 = {
"8A": {
    senin: [
        { waktu: "07.30 - 08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10 - 08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50 - 09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30 - 10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20 - 10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55 - 11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" },
    ],
    selasa: [
        { waktu: "07.00 - 07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40 - 08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20 - 09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00 - 09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00 - 10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40 - 11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" },
    ],
    rabu: [
        { waktu: "07.00 - 07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40 - 08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20 - 09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00 - 09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00 - 10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40 - 11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" },
    ],
    kamis: [
        { waktu: "07.00 - 07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40 - 08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20 - 09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00 - 09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00 - 10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40 - 11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" },
    ],
    jumat: jadwalJumat
},
    
"8B": {
    senin: [
        { waktu: "07.30 - 08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10 - 08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50 - 09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30 - 10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20 - 10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55 - 11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" },
    ],
    selasa: [
        { waktu: "07.00 - 07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40 - 08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20 - 09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00 - 09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00 - 10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40 - 11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" },
    ],
    rabu: [
        { waktu: "07.00 - 07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40 - 08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20 - 09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00 - 09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00 - 10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40 - 11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" },
    ],
    kamis: [
        { waktu: "07.00 - 07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40 - 08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20 - 09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00 - 09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00 - 10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40 - 11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" },
    ],
    jumat: jadwalJumat
},
    
"8C": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" },
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" },
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" },
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},
    
"8D": {
    senin: [
        { waktu: "07.30 - 08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10 - 08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50 - 09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30 - 10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20 - 10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55 - 11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00 - 07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40 - 08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20 - 09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00 - 09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00 - 10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40 - 11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00 - 07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40 - 08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20 - 09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00 - 09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00 - 10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40 - 11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00 - 07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40 - 08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20 - 09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00 - 09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00 - 10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40 - 11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},

  // KELAS 8E - JADWAL RESMI
"8E": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-" , ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},

"8F": {
    senin: [
        { waktu: "07.30 - 08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10 - 08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50 - 09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30 - 10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20 - 10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55 - 11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00 - 07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40 - 08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20 - 09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00 - 09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00 - 10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40 - 11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00 - 07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40 - 08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20 - 09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00 - 09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00 - 10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40 - 11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00 - 07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40 - 08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20 - 09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00 - 09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00 - 10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40 - 11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40 - 13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20 - 14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},

"8G": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},

"8H": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    jumat: jadwalJumat
},
    
  "8I": {
      senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" },
    ],
    jumat: jadwalJumat
}
};

const jadwalKelas9 = {
"9A": {
    senin: [
        { waktu: "07.30-08.10", mapel: "IPS", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "INFORMATIKA", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "INFORMATIKA", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ]
},
    
"9B": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-" }
    ],
    selasa: [
        { waktu: "07.40-08.20", mapel: "-", guru: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-" }
    ],
    jumat: jadwalJumat
},
    
"9B": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ]
},

"9C": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ]
},
    
"9D": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ]
},

"9E": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ]
},
    
"9F": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ]
},

"9G": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ]
},

"9H": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ]
},
    
"9I": {
    senin: [
        { waktu: "07.30-08.10", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.10-08.50", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.50-09.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.30-10.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.20-10.55", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.55-11.30", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    selasa: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    rabu: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
    ],
    kamis: [
        { waktu: "07.00-07.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "07.40-08.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "08.20-09.00", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "09.00-09.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.00-10.40", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "10.40-11.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "12.40-13.20", mapel: "-", guru: "-", ruang: "-" },
        { waktu: "13.20-14.00", mapel: "-", guru: "-", ruang: "-" }
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
                    (guru.mapel !== '-' ? '<span class="guru-mapel">' + guru.mapel + '</span>' : '') +
                    (guru.waliKelas !== '-' ? '<span class="guru-wali"> Wali Kelas: ' + guru.waliKelas + '</span>' : '') +
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
                    hasil[hari].push({ kelas: kelasId, waktu: item.waktu, mapel: item.mapel, ruang: item.ruang || '-' });
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
        tr.innerHTML = `<td data-label="Waktu">${item.waktu}</td><td data-label="Kelas">${item.kelas}</td><td data-label="Mapel">${item.mapel}</td><td data-label="Ruang">${item.ruang}</td>`;
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
            <td data-label="Waktu">${item.waktu}</td>
            <td data-label="Mapel">${item.mapel}</td>
            <td data-label="Guru">${item.guru || '-'}</td>
            <td data-label="Ruang">${item.ruang}</td>
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

    // Update nav active (top nav + bottom tabbar sekaligus)
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll(`.nav-link[data-section="${id}"]`).forEach(l => l.classList.add('active'));

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

// ===============================
// SAPAAN NAMA (greeting widget di Beranda)
// ===============================
// Ikon SVG waktu (feather-style, mengikuti ikon lain di halaman ini)
var SAPAAN_ICONS = {
    tengahMalam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/><path d="M15 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/></svg>',
    subuh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/><line x1="2" y1="22" x2="22" y2="22"/><polyline points="8 6 12 2 16 6"/></svg>',
    pagi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    siang: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 20a4 4 0 1 1 .9-7.9 5.5 5.5 0 0 1 10.6 1.9H18a3.5 3.5 0 0 1 0 7z"/><path d="M12 2v2"/><path d="M4.9 4.9l1.4 1.4"/><path d="M2 12h2"/></svg>',
    sore: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="9" x2="12" y2="2"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/><line x1="2" y1="22" x2="22" y2="22"/><polyline points="16 5 12 9 8 5"/></svg>',
    malam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
};

function getSapaanWaktu(jam) {
    if (jam >= 0 && jam < 3)  return { label: 'Selamat tengah malam', icon: SAPAAN_ICONS.tengahMalam };
    if (jam >= 3 && jam < 7)  return { label: 'Selamat subuh',        icon: SAPAAN_ICONS.subuh };
    if (jam >= 7 && jam < 12) return { label: 'Selamat pagi',         icon: SAPAAN_ICONS.pagi };
    if (jam >= 12 && jam < 15) return { label: 'Selamat siang',       icon: SAPAAN_ICONS.siang };
    if (jam >= 15 && jam < 18) return { label: 'Selamat sore',        icon: SAPAAN_ICONS.sore };
    return { label: 'Selamat malam', icon: SAPAAN_ICONS.malam };
}

function tampilkanSapaan(nama) {
    var sapaan = getSapaanWaktu(new Date().getHours());
    document.getElementById('greetingEmoji').innerHTML = sapaan.icon;
    document.getElementById('greetingText').textContent = sapaan.label + ', ' + nama + '!';
    document.getElementById('greetingInputRow').style.display = 'none';
    document.getElementById('greetingMessage').style.display = 'flex';
}

function initGreetingWidget() {
    var savedNama = localStorage.getItem('sijap-nama');
    if (savedNama) {
        tampilkanSapaan(savedNama);
        document.getElementById('namaUserInput').value = savedNama;
    }

    function simpanNama() {
        var nama = document.getElementById('namaUserInput').value.trim();
        if (!nama) return;
        localStorage.setItem('sijap-nama', nama);
        tampilkanSapaan(nama);
    }

    document.getElementById('simpanNamaBtn').addEventListener('click', simpanNama);
    document.getElementById('namaUserInput').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') simpanNama();
    });
    document.getElementById('gantiNamaBtn').addEventListener('click', function () {
        document.getElementById('greetingMessage').style.display = 'none';
        document.getElementById('greetingInputRow').style.display = 'flex';
        document.getElementById('namaUserInput').focus();
        document.getElementById('namaUserInput').select();
    });
}

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

    initGreetingWidget();

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

    // GURU - tombol lihat jadwal (delegated)
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

    // GURU - tab hari
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

    // CLASS SEARCH (on Kelas page)
    var kelasSearchInput = document.getElementById('kelasSearchInput');
    var kelasSearchBtn   = document.getElementById('kelasSearchBtn');
    var kelasSearchMsg   = document.getElementById('kelasSearchMsg');

    function doKelasSearch() {
        if (!kelasSearchInput) return;
        var raw   = kelasSearchInput.value.trim().toUpperCase().replace(/\s+/g, '');
        var valid = /^[789][A-I]$/.test(raw);
        if (!valid) {
            if (kelasSearchMsg) {
                kelasSearchMsg.textContent = 'Ketik nama kelas yang valid, contoh: 7F, 8C, 9A';
                kelasSearchMsg.style.color = 'var(--text-muted, #64748b)';
                kelasSearchMsg.style.display = 'block';
            }
            return;
        }
        if (kelasSearchMsg) kelasSearchMsg.style.display = 'none';
        // Navigate directly to that class schedule
        currentKelas = raw;
        currentKelasLevel = raw.charAt(0);
        document.getElementById('jadwal-title').textContent = 'Kelas ' + raw;
        document.getElementById('jadwal-badge').textContent = 'JADWAL \u00b7 ' + raw;
        showSection('jadwal-pelajaran');
        updateBackButtons();
        // Clear search input after jump
        kelasSearchInput.value = '';
    }

    if (kelasSearchBtn) {
        kelasSearchBtn.addEventListener('click', doKelasSearch);
    }
    if (kelasSearchInput) {
        kelasSearchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') doKelasSearch();
        });
        kelasSearchInput.addEventListener('input', function() {
            if (kelasSearchMsg) kelasSearchMsg.style.display = 'none';
        });
    }

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
    "kelas9": { password: "cw8Q72A7", role: "siswa", label: "Siswa Kelas 9", kelasLevel: "9" },
    // ── Per-class student accounts (7A–9I) ──────────────────────────────
    "7a": { password: "ZVVb^VPt^492", role: "siswa", label: "Siswa Kelas 7A", kelasLevel: "7", kelasId: "7A" },
    "7b": { password: "1%mC^KgWPKxq", role: "siswa", label: "Siswa Kelas 7B", kelasLevel: "7", kelasId: "7B" },
    "7c": { password: "#kv0UU&625Up", role: "siswa", label: "Siswa Kelas 7C", kelasLevel: "7", kelasId: "7C" },
    "7d": { password: "*^l@WK7o2r8Y", role: "siswa", label: "Siswa Kelas 7D", kelasLevel: "7", kelasId: "7D" },
    "7e": { password: "*TFTVEP@c@B7", role: "siswa", label: "Siswa Kelas 7E", kelasLevel: "7", kelasId: "7E" },
    "7f": { password: "DP8ZOTmZVD^L", role: "siswa", label: "Siswa Kelas 7F", kelasLevel: "7", kelasId: "7F" },
    "7g": { password: "&jWT!Dg95nfP", role: "siswa", label: "Siswa Kelas 7G", kelasLevel: "7", kelasId: "7G" },
    "7h": { password: "3@&^ynfI4qtE", role: "siswa", label: "Siswa Kelas 7H", kelasLevel: "7", kelasId: "7H" },
    "7i": { password: "%7J^Cgnpu!!b", role: "siswa", label: "Siswa Kelas 7I", kelasLevel: "7", kelasId: "7I" },
    "8a": { password: "cmk1W!DOeieO", role: "siswa", label: "Siswa Kelas 8A", kelasLevel: "8", kelasId: "8A" },
    "8b": { password: "w0cRe#C*&h1W", role: "siswa", label: "Siswa Kelas 8B", kelasLevel: "8", kelasId: "8B" },
    "8c": { password: "BBXX1h3Y@1i3", role: "siswa", label: "Siswa Kelas 8C", kelasLevel: "8", kelasId: "8C" },
    "8d": { password: "@y^bC2xxaKOy", role: "siswa", label: "Siswa Kelas 8D", kelasLevel: "8", kelasId: "8D" },
    "8e": { password: "wLwb5UN&DK!^", role: "siswa", label: "Siswa Kelas 8E", kelasLevel: "8", kelasId: "8E" },
    "8f": { password: "nLPw!1PDEx$S", role: "siswa", label: "Siswa Kelas 8F", kelasLevel: "8", kelasId: "8F" },
    "8g": { password: "JnrUaBWPJ$6O", role: "siswa", label: "Siswa Kelas 8G", kelasLevel: "8", kelasId: "8G" },
    "8h": { password: "QYYu^6#rzIDB", role: "siswa", label: "Siswa Kelas 8H", kelasLevel: "8", kelasId: "8H" },
    "8i": { password: "16wwM$#GQxGJ", role: "siswa", label: "Siswa Kelas 8I", kelasLevel: "8", kelasId: "8I" },
    "9a": { password: "ug9u7g3*6@Cs", role: "siswa", label: "Siswa Kelas 9A", kelasLevel: "9", kelasId: "9A" },
    "9b": { password: "h8JMx^4#mKVr", role: "siswa", label: "Siswa Kelas 9B", kelasLevel: "9", kelasId: "9B" },
    "9c": { password: "I4DH5fk^zKcV", role: "siswa", label: "Siswa Kelas 9C", kelasLevel: "9", kelasId: "9C" },
    "9d": { password: "yf*m&80J%I7K", role: "siswa", label: "Siswa Kelas 9D", kelasLevel: "9", kelasId: "9D" },
    "9e": { password: "QX^cXo4AnQ$q", role: "siswa", label: "Siswa Kelas 9E", kelasLevel: "9", kelasId: "9E" },
    "9f": { password: "05uLN&IBtE7d", role: "siswa", label: "Siswa Kelas 9F", kelasLevel: "9", kelasId: "9F" },
    "9g": { password: "*9D8UT&L@TMn", role: "siswa", label: "Siswa Kelas 9G", kelasLevel: "9", kelasId: "9G" },
    "9h": { password: "f$lU9iF1w&wg", role: "siswa", label: "Siswa Kelas 9H", kelasLevel: "9", kelasId: "9H" },
    "9i": { password: "BCzn*DG4@so*", role: "siswa", label: "Siswa Kelas 9I", kelasLevel: "9", kelasId: "9I" },
    // ── Admin account ──────────────────────────────────────────────────
    "admin": { password: "c&|b_kpv&t}3RXKw+kUDjX?x", role: "admin", label: "Administrator SIJAP" }
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
    document.body.classList.remove('role-admin');
    updateAuthUI();
    showSection('beranda');
}

function onLoginSuccess() {
    updateAuthUI();

    // Admin dapat layout sidebar kiri di tampilan web (desktop) menggantikan nav atas
    document.body.classList.toggle('role-admin', currentUser.role === 'admin');

    if (currentUser.role === 'guru' || currentUser.role === 'admin') {
        renderDashboardNav();
        // Update dashboard title
        var titleEl = document.getElementById('dashboardTitle');
        if (titleEl) titleEl.textContent = 'Dashboard - ' + (currentUser.namaGuru || currentUser.label);
        // Tampilkan pesan login berhasil (menggantikan status Firebase teknis)
        var fbBar = document.getElementById('fbStatusBar');
        if (fbBar) {
            fbBar.style.display = 'flex';
            fbBar.className = 'fb-status-bar fb-status-ok';
            fbBar.innerHTML = '<span>Login berhasil! (' + escapeHtml(currentUser.namaGuru || currentUser.label) + ')</span>';
        }
        showSection('dashboard-guru');
        // Start real-time listener for all homework (teacher/admin sees everything)
        subscribeHwGuru('');
    } else {
        // Student: use specific class if available, otherwise grade level
        var displayId = currentUser.kelasId || currentUser.kelasLevel;
        renderTodaySchedule();
        showSection('jadwal-hari-ini');
        var titleEl2 = document.getElementById('todayScheduleTitle');
        if (titleEl2) titleEl2.textContent = 'Jadwal Hari Ini - Kelas ' + displayId;
        subscribeHwSiswa(displayId);
    }
}

function updateAuthUI() {
    var navLoginBtn = document.getElementById('navLoginBtn');
    var userBar     = document.getElementById('userBar');
    var userBarLbl  = document.getElementById('userBarLabel');

    if (currentUser) {
        // Full label still used in the user bar below the header
        var shortLabel = currentUser.role === 'guru'
            ? (currentUser.namaGuru || currentUser.label)
            : currentUser.label;

        // Nav button always shows a short, fixed "Dashboard" label for every role
        // (admin, guru, or kelas/siswa) so the header never overflows or pushes
        // the theme toggle / hamburger out of place.
        navLoginBtn.innerHTML =
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;flex-shrink:0;">' +
            '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>' +
            '<rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> Dashboard';
        navLoginBtn.title = 'Dashboard';

        var ROLE_ICONS = {
            guru: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5"/></svg>',
            admin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><circle cx="7.5" cy="15.5" r="5.5"/><path d="M21 2l-9.6 9.6"/><path d="M15.5 7.5l3 3L22 7l-3-3"/></svg>',
            kelas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'
        };
        var roleName = currentUser.role === 'guru' ? 'Guru' : currentUser.role === 'admin' ? 'Admin' : 'Siswa';
        var roleIcon = currentUser.role === 'guru' ? ROLE_ICONS.guru : currentUser.role === 'admin' ? ROLE_ICONS.admin : ROLE_ICONS.kelas;
        userBar.style.display = 'block';
        userBarLbl.innerHTML = '<span style="display:inline-flex;align-items:center;gap:5px;">' + roleIcon + roleName + '</span> - ' + escapeHtml(shortLabel);
        document.body.classList.add('has-userbar');
    } else {
        navLoginBtn.innerHTML =
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;">' +
            '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>' +
            '<polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg> Login';
        navLoginBtn.title = 'Login';
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
            '<span>Firebase terhubung - Data real-time aktif ✓</span>';
    } else {
        bar.style.display = 'flex';
        bar.className = 'fb-status-bar fb-status-error';
        bar.innerHTML =
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' +
            '<span>Firebase error: ' + escapeHtml(msg || 'Tidak dapat terhubung') +
            ' - Periksa konfigurasi di script.js</span>';
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
    if (!isoStr) return '-';
    var d = new Date(isoStr + 'T00:00:00');
    var days   = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    var months = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
    return days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}

// ===================================================
// FIREBASE - ADD HOMEWORK
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
// FIREBASE - UPDATE HOMEWORK
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
// FIREBASE - DELETE HOMEWORK
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
// FIREBASE - REAL-TIME LISTENER: TEACHER (all classes)
// ===================================================

function subscribeHwGuru(filterKelas) {
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

    // Tidak pakai orderBy supaya tidak perlu Firestore Index.
    // Pengurutan dilakukan di JavaScript setelah data diterima.
    var query = db.collection('homeworks');
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
        // Urutkan dari yang terbaru ke yang lama
        list.sort(function(a, b) {
            var ta = (a.timestamp && a.timestamp.toMillis) ? a.timestamp.toMillis() : 0;
            var tb = (b.timestamp && b.timestamp.toMillis) ? b.timestamp.toMillis() : 0;
            return tb - ta;
        });
        renderHwListGuruData(list, false);
    }, function(err) {
        console.error('[SIJAP] Firestore listener error (guru):', err);
        renderHwListGuruData([], true, err.message);
    });
}

// ===================================================
// FIREBASE - REAL-TIME LISTENER: STUDENT (filtered by class)
// ===================================================

function subscribeHwSiswa(kelasFilter) {
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

    // Tidak pakai orderBy supaya tidak perlu Firestore Index.
    // Filter 'in' tetap dipakai untuk menyaring per kelas.
    // Pengurutan dilakukan di JavaScript setelah data diterima.
    var classesToQuery = buildClassFilterList(kelasFilter);

    var query = db.collection('homeworks')
        .where('class', 'in', classesToQuery);

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
        // Urutkan dari yang terbaru ke yang lama
        list.sort(function(a, b) {
            var ta = (a.timestamp && a.timestamp.toMillis) ? a.timestamp.toMillis() : 0;
            var tb = (b.timestamp && b.timestamp.toMillis) ? b.timestamp.toMillis() : 0;
            return tb - ta;
        });
        renderHwListSiswaData(list, kelasFilter, false);
        // Update juga kolom PR di tabel jadwal hari ini
        renderTodaySchedule(list);
    }, function(err) {
        console.error('[SIJAP] Firestore listener error (siswa):', err);
        renderHwListSiswaData([], kelasFilter, true, err.message);
    });
}

function buildClassFilterList(kelasFilter) {
    // If kelasFilter is a specific class (e.g. "7A", "8F"), return just that one
    if (kelasFilter && kelasFilter.length > 1) return [kelasFilter];
    // Otherwise it's a grade level ("7", "8", "9") - return all 9 classes
    var suffix = ['A','B','C','D','E','F','G','H','I'];
    return suffix.map(function(s) { return kelasFilter + s; });
}

// ===================================================
// RENDER - TEACHER HOMEWORK LIST
// ===================================================

function renderHwListGuruData(list, hasError, errMsg) {
    var container = document.getElementById('hwListGuru');
    if (!container) return;

    if (hasError) {
        container.innerHTML =
            '<div class="hw-empty" style="color:#dc2626;">' +
            metaIcon('warning') + 'Gagal memuat data.' +
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
                    '<span>' + metaIcon('calendar') + formatTanggal(hw.tanggal) + '</span>' +
                    '<span>' + metaIcon('building') + 'Kelas ' + escapeHtml(hw.kelas) + '</span>' +
                    '<span>' + metaIcon('teacher') + escapeHtml(hw.namaGuru) + '</span>' +
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
// RENDER - STUDENT HOMEWORK LIST
// ===================================================

function renderHwListSiswaData(list, kelasLevel, hasError, errMsg) {
    var container = document.getElementById('hwListSiswa');
    if (!container) return;

    var titleEl = document.getElementById('hwSiswaTitle');
    if (titleEl) titleEl.textContent = 'Semua PR & Tugas Kelas ' + kelasLevel;

    if (hasError) {
        container.innerHTML =
            '<div class="hw-empty" style="color:#dc2626;">' +
            metaIcon('warning') + 'Gagal memuat tugas.' +
            (errMsg ? ' (' + escapeHtml(errMsg) + ')' : '') + '</div>';
        return;
    }

    if (!list.length) {
        container.innerHTML =
            '<div class="hw-empty">' +
            '<span style="display:block;width:28px;height:28px;margin:0 auto 10px;color:var(--green);">' + ICONS.checkCircle + '</span>' +
            'Tidak ada PR / Tugas saat ini.</div>';
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
                    '<span>' + metaIcon('calendar') + formatTanggal(hw.tanggal) + '</span>' +
                    '<span>' + metaIcon('building') + 'Kelas ' + escapeHtml(hw.kelas) + '</span>' +
                    '<span>' + metaIcon('teacher') + escapeHtml(hw.namaGuru) + '</span>' +
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

    // Determine which class to show based on logged-in student's kelasId or kelasLevel
    var displayKelas = '8F';
    if (currentUser && currentUser.kelasId) {
        // Per-class student login: show their exact class
        displayKelas = currentUser.kelasId;
    } else if (currentUser && currentUser.kelasLevel) {
        // Grade-level student login: show representative class
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
        titleEl.textContent = 'Jadwal Hari Ini - Kelas ' + displayKelas;
    }

    var hariKey = getTodayHariKey();
    tbody.innerHTML = '';

    if (!hariKey) {
        tbody.innerHTML = '<tr><td colspan="5" class="no-data">Hari ini libur - tidak ada jadwal pelajaran.</td></tr>';
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
            hwCell = '<span class="no-hw-badge">-</span>';
        }

        tr.innerHTML =
            '<td data-label="Waktu">' + escapeHtml(item.waktu)       + '</td>' +
            '<td data-label="Mapel">' + escapeHtml(item.mapel)       + '</td>' +
            '<td data-label="Guru">' + escapeHtml(item.guru || '-') + '</td>' +
            '<td data-label="Ruang">' + escapeHtml(item.ruang)       + '</td>' +
            '<td data-label="Tugas">' + hwCell                        + '</td>';
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
                    // Real-time listener will auto-update the list - no manual refresh needed
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

function initAuthSystem() {
    // Nav login button
    document.getElementById('navLoginBtn').addEventListener('click', function() {
        if (currentUser) {
            if (currentUser.role === 'guru' || currentUser.role === 'admin') {
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
    document.getElementById('loginCloseBtn').addEventListener('click', hideLoginOverlay);
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