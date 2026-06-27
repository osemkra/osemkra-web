const defaultDatabaseEkskul = {
    // === OLAHRAGA ===
    "futsal": {
        nama: "Futsal & Sepak Bola", kategori: "Olahraga", emoji: "⚽",
        deskripsi: "Mengembangkan teknik individu, taktik bermain beregu, serta penguatan fisik untuk berkompetisi di berbagai turnamen antar-sekolah.",
        jadwal: "Selasa & Kamis", waktu: "15.30 - 17.30 WIB", lokasi: "Lapangan Utama", ketua: "Ahmad Rifai", pembina: "Bpk. Sukresno, S.Pd.",
        prestasi: ["Juara 1 Turnamen Futsal Pelajar Tingkat Kabupaten (2025)", "Runner-Up Kejuaraan Daerah (Kejurda) Antar-SMA (2025)"],
        galeri: [{ foto: "https://picsum.photos/400/300?random=1", deskripsi: "Latihan Fisik Rutin" }, { foto: "https://picsum.photos/400/300?random=2", deskripsi: "Penyerahan Piala" }],
        proker: [{ agenda: "Sparing Partner Antar-Sekolah", waktu: "Setiap 2 Bulan", target: "Menguji mental bertanding tim" }, { agenda: "Turnamen Futsal Cup SMANKRA", waktu: "Oktober 2026", target: "Menjaring bibit unggul baru" }]
    },
    "basket": {
        nama: "Basket", kategori: "Olahraga", emoji: "🏀",
        deskripsi: "Fokus pada pelatihan teknik dasar dribbling, shooting, kerja sama tim solid, serta pembentukan mental kompetitif yang sportif.",
        jadwal: "Rabu & Sabtu", waktu: "15.30 - 17.30 WIB", lokasi: "Lapangan Basket", ketua: "Dika Pratama", pembina: "Bpk. Hermawan, S.Pd.",
        prestasi: ["Juara 2 DBL Region Juwana (2025)", "Juara 1 Turnamen HUT Kota (2024)"],
        galeri: [{ foto: "https://picsum.photos/400/300?random=3", deskripsi: "Sesi Game Internal" }],
        proker: [{ agenda: "Kompetisi DBL Nasional", waktu: "Agustus 2026", target: "Masuk babak semifinal regional" }]
    },
    "voli": {
        nama: "Voli", kategori: "Olahraga", emoji: "🏐",
        deskripsi: "Wadah melatih kekuatan fisik, ketepatan smash, passing, servis, serta kekompakan strategi di dalam lapangan.",
        jadwal: "Senin & Jumat", waktu: "15.30 - 17.30 WIB", lokasi: "Lapangan Voli", ketua: "Rian Hidayat", pembina: "Ibu Siti Aminah, S.Pd.",
        prestasi: ["Juara 3 Popda Kabupaten (2025)"], galeri: [],
        proker: [{ agenda: "Turnamen Voli Antar-Kelas", waktu: "September 2026", target: "Kaderisasi berkala" }]
    },
    "badminton": {
        nama: "Bulutangkis", kategori: "Olahraga", emoji: "🏸",
        deskripsi: "Mengasah kelincahan, refleks cepat, teknik netting, serta smash tajam baik untuk nomor tunggal maupun ganda.",
        jadwal: "Rabu & Jumat", waktu: "15.30 - 17.30 WIB", lokasi: "Gedung Serbaguna", ketua: "Fajar Nugroho", pembina: "Bpk. Budi Santoso, M.Pd.",
        prestasi: ["Juara 1 Tunggal Putra O2SN Tingkat Kabupaten (2025)"], galeri: [],
        proker: [{ agenda: "Kejuaraan Internal Single", waktu: "November 2026", target: "Penyusunan peringkat berkala sekolah" }]
    },
    "tenismeja": {
        nama: "Tenis Meja", kategori: "Olahraga", emoji: "🏓",
        deskripsi: "Melatih konsentrasi tinggi, refleks tangan, kontrol bola, serta variasi teknik spin defensif dan ofensif.",
        jadwal: "Selasa & Jumat", waktu: "15.30 - 17.00 WIB", lokasi: "Aula Kecil", ketua: "Andi Wijaya", pembina: "Bpk. Totok Andrio, S.Pd.",
        prestasi: ["Juara 2 Ganda Campuran Kejuaraan Pelajar (2024)"], galeri: [],
        proker: [{ agenda: "Pengadaan Meja Standard Nasional", waktu: "Juli 2026", target: "Standardisasi alat tanding" }]
    },
    "pencaksilat": {
        nama: "Pencak Silat", kategori: "Olahraga", emoji: "🥋",
        deskripsi: "Melestarikan budaya bangsa sekaligus melatih ketangkasan fisik, bela diri praktis, kepribadian mulia, dan mental spiritual.",
        jadwal: "Senin & Kamis", waktu: "16.00 - 18.00 WIB", lokasi: "Halaman Dalam", ketua: "Bagas Setiawan", pembina: "Bpk. Anwar Mansyur",
        prestasi: ["Juara 1 Kelas C Putra Kejuaraan Nasional (2025)"], galeri: [],
        proker: [{ agenda: "Demonstrasi Seni Tapak Suci", waktu: "Juli 2026", target: "Menarik minat peserta didik baru" }]
    },
    "karate": {
        nama: "Karate", kategori: "Olahraga", emoji: "👊",
        deskripsi: "Fokus pada pembentukan karakter, kedisiplinan keras, latihan Kata (jurus), serta Kumite (pertarungan) yang terukur.",
        jadwal: "Selasa & Sabtu", waktu: "16.00 - 18.00 WIB", lokasi: "Aula Utama", ketua: "Zaki Muttaqin", pembina: "Sensei Rahmat Hidayat",
        prestasi: ["Juara 2 Kata Perorangan Karesidenan (2025)"], galeri: [],
        proker: [{ agenda: "Latihan Alam Terbuka (Gashuku)", waktu: "September 2026", target: "Uji ketahanan mental" }]
    },

    // === SENI & BUDAYA ===
    "teater": {
        nama: "Teater & Seni Peran", kategori: "Seni & Budaya", emoji: "🎭",
        deskripsi: "Wadah mengasah ekspresi diri, vokal, penghayatan karakter, tata panggung, dan kepercayaan diri lewat pementasan drama teatrikal.",
        jadwal: "Jumat", waktu: "14.00 - 17.00 WIB", lokasi: "Sanggar Seni", ketua: "Siti Rahma", pembina: "Ibu Riva Nasution, S.Sn.",
        prestasi: ["Penyaji Terbaik Festival Teater Provinsi (2025)"],
        galeri: [{ foto: "https://picsum.photos/400/300?random=4", deskripsi: "Pementasan Utama Safesta" }],
        proker: [{ agenda: "Workshop Keaktoran Dasar", waktu: "Agustus 2026", target: "Pembekalan ekspresi mikro anggota" }]
    },
    "padus": {
        nama: "Paduan Suara (Padus)", kategori: "Seni & Budaya", emoji: "🎵",
        deskripsi: "Mengolah teknik vokal, artikulasi, harmonisasi perpaduan suara sopran, alto, tenor, bass untuk berbagai upacara dan kompetisi.",
        jadwal: "Senin & Kamis", waktu: "15.30 - 17.00 WIB", lokasi: "Ruang Musik", ketua: "Anggis Devaki", pembina: "Ibu Nadin Amizah, S.Pd.",
        prestasi: ["Juara 1 Lomba Paduan Suara Instansi Daerah (2025)"], galeri: [],
        proker: [{ agenda: "Penyusunan Aransemen Lagu Daerah", waktu: "Juli 2026", target: "Variasi harmonisasi materi baru" }]
    },
    "tari": {
        nama: "Seni Tari Tradisional & Modern", kategori: "Seni & Budaya", emoji: "💃",
        deskripsi: "Mempelajari keluwesan gerak tari kreasi daerah serta koreografi modern dance yang energik dan ekspresif.",
        jadwal: "Rabu", waktu: "15.30 - 17.30 WIB", lokasi: "Aula Utama", ketua: "Sienna Spiro", pembina: "Ibu Intan Permata, S.Sn.",
        prestasi: ["Juara I Festival Tari Tradisional Provinsi (2025)"], galeri: [],
        proker: [{ agenda: "Pementasan Tari Kolosal", waktu: "November 2026", target: "Tari pembuka pagelaran Safesta" }]
    },
    "musik": {
        nama: "Music Band & Ansambel", kategori: "Seni & Budaya", emoji: "🎸",
        deskripsi: "Mengembangkan bakat bermain instrumen musik (gitar, bass, drum, keyboard) serta teknik aransemen lagu kelompok.",
        jadwal: "Sabtu", waktu: "10.00 - 13.00 WIB", lokasi: "Studio Musik Gedung B", ketua: "Reno Guntara", pembina: "Bpk. Junaedi, S.Pd.",
        prestasi: ["Juara 1 Festival Band Pelajar Se-Karesidenan (2024)"], galeri: [],
        proker: [{ agenda: "Live Acoustic Corner Pentas", waktu: "Setiap Bulan", target: "Mengisi panggung apresiasi seni tengah semester" }]
    },
    "sinematografi": {
        nama: "Sinematografi & Fotografi", kategori: "Seni & Budaya", emoji: "📸",
        deskripsi: "Belajar dasar-dasar pencahayaan, pengambilan gambar, penulisan naskah film, tata artistik, hingga proses editing video.",
        jadwal: "Jumat", waktu: "14.30 - 17.00 WIB", lokasi: "Laboratorium Multimedia", ketua: "Jogann Fadli", pembina: "Bpk. Afif Fadli, S.Kom.",
        prestasi: ["Juara Kategori Film Pendek Dokumenter (2025)"], galeri: [],
        proker: [{ agenda: "Pameran Galeri Foto Cetak", waktu: "Desember 2026", target: "Apresiasi visual estetika lingkungan" }]
    },

    // === SAINS & AKADEMIK ===
    "kir": {
        nama: "KIR (Karya Ilmiah Remaja)", kategori: "Sains & Akademik", emoji: "🧪",
        deskripsi: "Kelompok riset ilmiah remaja yang berfokus pada eksperimen sains kreatif, penulisan karya tulis ilmiah, dan teknologi tepat guna.",
        jadwal: "Rabu", waktu: "15.30 - 17.00 WIB", lokasi: "Laboratorium Kimia", ketua: "Fanya Aurelia", pembina: "Ibu Dr. Endang Susilowati",
        prestasi: ["Juara 1 LKTI Nasional FIKSI (2025)", "Medali Emas Ruangguru Science Competition (2025)"],
        galeri: [{ foto: "https://picsum.photos/400/300?random=5", deskripsi: "Uji Eksperimen Zat" }],
        proker: [{ agenda: "Prototype Si Soma v5", waktu: "Juli 2026", target: "Pengembangan final papan mekanik edukasi" }]
    },
    "englishclub": {
        nama: "English Club (E-Club)", kategori: "Sains & Akademik", emoji: "🗣️",
        deskripsi: "Mengasah kemampuan debat bahasa Inggris, pidato (speech), membaca berita (news casting), serta storytelling.",
        jadwal: "Kamis", waktu: "15.30 - 17.00 WIB", lokasi: "Laboratorium Bahasa", ketua: "Kevin Sanjaya", pembina: "Miss Diana, M.Pd.",
        prestasi: ["Semifinalis National Schools Debating Championship (2025)"], galeri: [],
        proker: [{ agenda: "English Day Campaign", waktu: "Setiap Selasa", target: "Membiasakan English area di koridor kelas" }]
    },
    "jurnalistik": {
        nama: "Jurnalistik & Mading", kategori: "Sains & Akademik", emoji: "📰",
        deskripsi: "Melatih kemampuan wawancara, menulis berita investigasi, desain tata letak majalah dinding sekolah, dan pengelolaan website berita.",
        jadwal: "Selasa", waktu: "15.30 - 17.00 WIB", lokasi: "Ruang Redaksi Mading", ketua: "Amira Lestari", pembina: "Ibu Wahyu Utami, S.Pd.",
        prestasi: ["Juara 1 Mading 3D Kreatif Karesidenan (2024)"], galeri: [],
        proker: [{ agenda: "Penerbitan Buletin Triwulan", waktu: "Per 3 Bulan", target: "Penyebaran info prestasi internal siswa" }]
    },
    "robotik": {
        nama: "Robotik & Coding", kategori: "Sains & Akademik", emoji: "🤖",
        deskripsi: "Mempelajari perakitan sirkuit elektronik hardware mikrokontroler Arduino serta pemrograman logic software dasar komputer.",
        jadwal: "Sabtu", waktu: "09.00 - 12.00 WIB", lokasi: "Laboratorium Komputer 1", ketua: "Gathan Mahendra", pembina: "Bpk. Sony Setiawan, S.T.",
        prestasi: ["Juara Harapan 1 Line Follower Competition (2025)"], galeri: [],
        proker: [{ agenda: "Perakitan Robot Pemilah Sampah", waktu: "September 2026", target: "Inovasi teknologi tepat guna sekolah" }]
    },

    // === BELA NEGARA & KHUSUS ===
    "paskibra": {
        nama: "Paskibra (Pasukan Pengibar Bendera)", kategori: "Bela Negara", emoji: "🇮🇩",
        deskripsi: "Menanamkan kedisiplinan tinggi, pembentukan karakter patriotisme tangguh, kekuatan fisik, dan teknik baris-berbaris presisi.",
        jadwal: "Selasa & Sabtu", waktu: "15.30 - 17.30 WIB", lokasi: "Lapangan Utama", ketua: "Rangga Pratama", pembina: "Bpk. Mayor (Purn) Supriyadi",
        prestasi: ["Juara Umum Variasi Formasi Karisidenan (2025)", "Petugas Paskibraka Provinsi (2025)"], galeri: [],
        proker: [{ agenda: "Pumusatan Latihan HUT RI ke-81", waktu: "Juli - Agustus 2026", target: "Kesiapan mutlak upacara agung" }]
    },
    "pmr": {
        nama: "PMR (Palang Merah Remaja)", kategori: "Khusus", emoji: "🩺",
        deskripsi: "Pelatihan tindakan pertolongan pertama pada kecelakaan, kesiapsiagaan bencana, perawatan keluarga, dan aksi sosial kemানুsiaan.",
        jadwal: "Kamis", waktu: "15.30 - 17.00 WIB", lokasi: "Ruang UKS Utama", ketua: "Nadia Syifa", pembina: "Ibu dr. Linda Utami",
        prestasi: ["Juara Umum Jumbara PMR Wira Kabupaten (2024)"], galeri: [],
        proker: [{ agenda: "Aksi Donor Darah Massal", waktu: "September 2026", target: "Pengumpulan kantong logistik PMI" }]
    },
    "pramuka": {
        nama: "Pramuka Inti (Dewan Ambalan)", kategori: "Bela Negara", emoji: "⛺",
        deskripsi: "Ekstrakurikuler wajib yang mengasah kemandirian, survival kit lapangan, tali-temali (pioneering), sandi Morse, semapor, dan kepemimpinan.",
        jadwal: "Jumat", waktu: "13.30 - 16.30 WIB", lokasi: "Sanggar Pramuka", ketua: "Pradana Yudha", pembina: "Bpk. Joko Susilo, M.Pd.",
        prestasi: ["Juara Terbaik Raimuna Cabang (2025)"], galeri: [],
        proker: [{ agenda: "Kemah Blok Penerimaan Tamu", waktu: "Juli 2026", target: "Orientasi orientasi nilai kepanduan kelas X" }]
    },
    "pks": {
        nama: "PKS (Patroli Keamanan Sekolah)", kategori: "Bela Negara", emoji: "👮",
        deskripsi: "Membantu menegakkan ketertiban umum lingkungan sekolah, keamanan gerbang, serta pengaturan lalu lintas penyeberangan jalan siswa.",
        jadwal: "Senin & Rabu", waktu: "15.30 - 17.00 WIB", lokasi: "Pos Keamanan / Lapangan Front", ketua: "Farel Bramasta", pembina: "Aiptu Bambang Irawan",
        prestasi: ["Penghargaan PKS Teladan Resor (Polres) (2024)"], galeri: [],
        proker: [{ agenda: "Sosialisasi Safety Riding", waktu: "Oktober 2026", target: "Edukasi tertib helm berkendara murid" }]
    },
    "rohis": {
        nama: "Rohis (Rohani Islam)", kategori: "Khusus", emoji: "🕌",
        deskripsi: "Wadah pendalaman keislaman, belajar membaca Al-Qur'an (tahsin), manajemen ibadah masjid, kajian remaja Islami, dan seni rebana.",
        jadwal: "Jumat", waktu: "13.30 - 15.30 WIB", lokasi: "Masjid Al-Ikhlas Sekolah", ketua: "Muhammad Hanif", pembina: "Bpk. H. Ahmad Syukri, S.Ag.",
        prestasi: ["Juara 1 Lomba MTQ Pelajar (2025)"], galeri: [],
        proker: [{ agenda: "Peringatan Maulid Nabi", waktu: "September 2026", target: "Tabligh akbar syiar seni rebana" }]
    },
    "rokris": {
        nama: "Rokris (Rohani Kristen)", kategori: "Khusus", emoji: "⛪",
        deskripsi: "Wadah persekutuan doa bersama remaja Kristen, pendalaman Alkitab, paduan suara gerejawi, serta penanaman kasih persaudaraan.",
        jadwal: "Jumat", waktu: "13.30 - 15.30 WIB", lokasi: "Ruang Pertemuan Lt. 2", ketua: "Jonathan Christian", pembina: "Ibu Maria Natalia, S.Th.",
        prestasi: ["Penyelenggara Retreat Lintas Sekolah Sukses (2025)"], galeri: [],
        proker: [{ agenda: "Ibadah Perayaan Natal Bersama", waktu: "Desember 2026", target: "Solidaritas iman kerohanian siswa" }]
    }
};

// === GLOBAL SYNC STORAGE LAYER ===
if (!localStorage.getItem("masterEkskulData")) {
    localStorage.setItem("masterEkskulData", JSON.stringify(defaultDatabaseEkskul));
}

function getMasterDatabase() {
    return JSON.parse(localStorage.getItem("masterEkskulData"));
}

function saveMasterDatabase(updatedData) {
    localStorage.setItem("masterEkskulData", JSON.stringify(updatedData));
}