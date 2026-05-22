import { Project, Skill, TimelineEvent } from './types';

export const PERSONAL_INFO = {
  fullName: "DRAZAT HERDIANSYAH",
  shortName: "Azatz",
  title: "Student Programmer & Tech Enthusiast",
  subTitle: "Memulai petualangan IT sejak kelas 5 SD di tahun nostalgia 2021.",
  bio: "Halo! Saya Drazat Herdiansyah, biasa akrab dipanggil Azatz. Saya seorang siswa SMP yang sangat antusias dengan dunia teknologi informasi, pemrograman, dan robotik. Saya memulai perjalanan IT dari masa paling nostalgia yaitu tahun 2021 saat kelas 5 di SDN Kurniabakti. Sejak itu, saya ketagihan mengeksplorasi server VPS, website berbasis PHP, robotika, hingga teknologi kecerdasan buatan (AI) untuk masa depan.",
  location: "Ciawi, Tasikmalaya, Jawa Barat (Kode Pos 46156)",
  email: "henhendrazat@gmail.com",
  availability: "Selalu Siap Belajar & Belajar Hal Baru",
  education: "SMP Negeri 1 Ciawi",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    discord: "https://discord.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Al-Powered School Assets Web App",
    description: "Aplikasi inventaris sekolah berbasis PHP dan database MySQL yang saya kembangkan pada tahun 2024 menggunakan bantuan asisten AI untuk mempermudah pencatatan fasilitas belajar.",
    category: "Fullstack",
    image: "edumate",
    technologies: ["PHP", "MySQL", "HTML", "Tailwind CSS", "AI Assistant"],
    liveLink: "#",
    githubLink: "#",
    problemSolved: "Seringkali pencatatan peralatan lab dan fasilitas sekolah masih manual di buku, sehingga rentan hilang dan sulit diperbarui datanya secara instan.",
    keyFeatures: [
      "Manajemen data inventaris (Create, Read, Update, Delete)",
      "Pencarian barang cepat berbasis modul Javascript sederhana",
      "Login sistem admin aman tersimpan di database MySQL",
      "Desain UI responsif untuk akses cepat via smartphone"
    ]
  },
  {
    id: 2,
    title: "Basic VPS Server Auto-Setup Script",
    description: "Kumpulan skrip konfigurasi dasar VPS untuk setup sistem operasi Linux, pengaturan firewall dasar (UFW), serta instalasi web server instan.",
    category: "Tools",
    image: "kantingo",
    technologies: ["Linux Bash", "VPS", "Web Server", "SSH Secure"],
    liveLink: "#",
    githubLink: "#",
    problemSolved: "Bagi pemula, melakukan konfigurasi command-line VPS pertama kali sangatlah membingungkan dan rawan terjadi salah ketik perintah root.",
    keyFeatures: [
      "Instalasi paket web server basic sekali klik",
      "Skrip backup data backup otomatis terjadwal",
      "Konfigurasi filter port keamanan default luar",
      "Monitoring performa CPU & RAM real-time di terminal"
    ]
  },
  {
    id: 3,
    title: "Smart AI Line Follower Robot Simulator",
    description: "Konsep rancangan simulasi robot pelacak garis menggunakan sensor virtual dengan integrasi teknologi AI untuk melatih gerak navigasi belokan yang mulus.",
    category: "Tools",
    image: "ecosphere",
    technologies: ["Robotics Simulator", "AI Logic", "Arduino Sketch", "C++"],
    liveLink: "#",
    githubLink: "#",
    problemSolved: "Harga komponen hardware robot yang cukup mahal menyulitkan proses belajar robotik secara langsung di rumah tanpa media simulasi virtual.",
    keyFeatures: [
      "Simulasi jalur trek kompleks berliku-liku 2D",
      "Logika koreksi arah otomatis menggunakan algoritma PID dasar",
      "Preview visualisasi status sensor inframerah aktif",
      "Integrasi parameter kecerdasan buatan berbasis nilai ambang adaptif"
    ]
  },
  {
    id: 4,
    title: "Nostalgic School Landing Page",
    description: "Halaman web prestisius bertema kenangan masa sekolah dasar yang saya bangun untuk melatih kemampuan visualisasi struktur web modern menggunakan HTML.",
    category: "Frontend",
    image: "codequest",
    technologies: ["HTML", "Vanilla CSS", "Responsive Design"],
    liveLink: "#",
    githubLink: "#",
    problemSolved: "Menyediakan halaman profil kenangan sekolah yang interaktif dan nyaman dibaca dari device manapun tanpa lag berlebih.",
    keyFeatures: [
      "Layout modern dengan struktur semantik standard HTML",
      "Galeri foto nostalgia masa kelas 5 SD yang responsif",
      "Navigasi dinamis bebas lag dengan CSS transition murni",
      "Konten biografi sejarah inspiratif yang terstruktur rapi"
    ]
  },
  {
    id: 5,
    title: "Node.js 40% Simple Task Manager API",
    description: "REST API sederhana yang melatih pemahaman backend dasar saya dalam mengelola request HTTP untuk daftar tugas belajar harian.",
    category: "Fullstack",
    image: "custom",
    technologies: ["Node.js", "Express.js", "REST API", "JSON Database"],
    liveLink: "#",
    githubLink: "#",
    problemSolved: "Belajar backend membutuhkan modul praktis awal untuk melihat bagaimana data ditukar secara asinkron dari browser ke server.",
    keyFeatures: [
      "Routing dasar ExpressJS (/tasks, /add, /delete)",
      "Penyimpanan database berbasis file JSON lokal",
      "Penanganan CORS terintegrasi untuk integrasi client-side",
      "Response payload teratur dengan pesan status sukses"
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    name: "HTML Markup",
    category: "Frontend",
    level: 60,
    iconName: "Code2",
    description: "Kemampuan menyusun kerangka website yang bersih, semantik, responsif, dan ramah SEO dasar."
  },
  {
    name: "Node.js",
    category: "Backend",
    level: 40,
    iconName: "Cpu",
    description: "Memahami runtime backend Javascript, routing sederhana dengan Express, serta pengolahan request JSON."
  },
  {
    name: "VPS Server Basic Startup",
    category: "Database",
    level: 50,
    iconName: "Server",
    description: "Kemampuan setting sorage, setup sistem Linux dasar di cloud provider, instalasi webserver, dan konfigurasi IP."
  },
  {
    name: "PHP & Database MySQL",
    category: "Database",
    level: 45,
    iconName: "Database",
    description: "Mengembangkan website terintegrasi database menggunakan PHP Native dan MySQL dibantu kecerdasan buatan (AI)."
  },
  {
    name: "AI & Robotics Tech Exploration",
    category: "Tools",
    level: 55,
    iconName: "Sparkles",
    description: "Mendalami teknologi kecerdasan buatan, logika robotik, simulator sirkuit, dan integrasi mikrokontroler dasar."
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2021",
    title: "Masa-Masa Paling Nostalgia (Kelas 5 SD)",
    org: "SDN Kurniabakti",
    description: "Awal mula ketertarikan dengan dunia teknologi informasi. Mulai mengeksplorasi dasar-dasar internet dan kagum dengan bagaimana website bekerja di balik layar.",
    type: "education"
  },
  {
    year: "2023",
    title: "Menempuh Pendidikan Menengah Pertama",
    org: "SMP Negeri 1 Ciawi",
    description: "Mulai masuk ke jenjang SMP, merambah ke komunitas IT dasar, dan mencoba mempelajari logika pemecahan masalah sederhana.",
    type: "education"
  },
  {
    year: "2024",
    title: "Mengeksplorasi PHP, MySQL & Bantuan AI",
    org: "Eksplorasi Mandiri",
    description: "Mulai tertarik lebih dalam tentang IT. Berhasil membuat website fungsional berbasis PHP dan MySQL dengan memanfaatkan asisten AI.",
    type: "work"
  },
  {
    year: "2025",
    title: "Fokus Teknologi Robotik & Kecerdasan Buatan (AI)",
    org: "Inovasi Masa Depan",
    description: "Mengalihkan semangat belajar pada bidang robotik modern, algoritma cerdas, dan visualisasi perangkat keras pintar.",
    type: "achievement"
  },
  {
    year: "2026",
    title: "Progress Berkelanjutan & Pengembangan Skill",
    org: "AZATZ's Coding Corner",
    description: "Terus mengasah skill Node.js, memperluas wawasan server VPS, dan siap menciptakan karya-karya teknologi inovatif berikutnya.",
    type: "achievement"
  }
];
