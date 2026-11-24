/* ==========================================================
   DATA KULINER MALANG & LOGIKA UTAMA (MATCHA & STRAWBERRY MILK)
   ========================================================== */

let startAngle = 0;
let arc = 0;
let spinTimeout = null;
let spinAngleStart = 10;
let spinTime = 0;
let spinTimeTotal = 0;
let isSpinning = false;
let selectedIndex = -1;

const wheelColors = [
    "#BBCA6F", "#F1B4AF", "#d6df99", "#f5c5c1", 
    "#a3b355", "#e09e98", "#c8d488", "#f7d3cf"
];

let kulinerData = [
    {
        id: 1,
        name: "Ayam Goreng Nelongso",
        category: "Warung lalapan",
        priceRange: "hemat",
        priceText: "Rp 12.000 - Rp 30.000",
        rating: 4.6,
        reviews: 5120,
        address: "Jl. Soekarno Hatta No.35, Lowokwaru, Kota Malang",
        desc: "Pionir ayam pedas populer khas Malang yang buka 24 jam dengan berbagai pilihan sambal nikmat dan harga yang sangat bersahabat bagi mahasiswa.",
        image: "images/Ayam Goreng Nelongso.jpeg",
        mapsUrl: "https://maps.google.com/?q=Ayam+Goreng+Nelongso+Malang",
        signature: "Ayam Sambal Kepruk, Nasi Timbel"
    },
    {
        id: 2,
        name: "Depot Tanjung Api",
        category: "Depot & Nasi",
        priceRange: "sedang",
        priceText: "Rp 15.000 - Rp 35.000",
        rating: 4.7,
        reviews: 1280,
        address: "Jl. Trunojoyo No.23, Klojen, Kec. Klojen, Kota Malang",
        desc: "Depot kuliner legendaris di Malang yang menyajikan hidangan lezat dengan cita rasa khas rumahan yang autentik dan suasana tempo dulu.",
        image: "images/Depot Tanjung Api.jpeg",
        mapsUrl: "https://maps.google.com/?q=Depot+Tanjung+Api+Malang",
        signature: "Masakan Khas Nusantara"
    },
    {
        id: 3,
        name: "RM Sejawat",
        category: "Depot & Nasi",
        priceRange: "sedang",
        priceText: "Rp 15.000 - Rp 40.000",
        rating: 4.8,
        reviews: 1420,
        address: "Kota Malang",
        desc: "Rumah makan dengan suasana hangat dan nyaman, menyajikan pilihan menu masakan nusantara favorit yang pas untuk bersantap bersama keluarga maupun kerabat.",
        image: "images/RM SEJAWAT.jpeg",
        mapsUrl: "https://maps.google.com/?q=RM+Sejawat+Malang",
        signature: "Menu Andalan Nusantara"
    },
    {
        id: 4,
        name: "Soto Bang Ipul",
        category: "Soto",
        priceRange: "hemat",
        priceText: "Rp 12.000 - Rp 25.000",
        rating: 4.7,
        reviews: 980,
        address: "Kota Malang",
        desc: "Soto kuah gurih dan hangat dengan potongan daging melimpah serta rempah pilihan khas Nusantara yang nikmat disantap kapan saja.",
        image: "images/Soto Bang Ipul.jpeg",
        mapsUrl: "https://maps.google.com/?q=Soto+Bang+Ipul+Malang",
        signature: "Soto Daging Spesial"
    },
    {
        id: 5,
        name: "Depot KayuTangan",
        category: "Mie",
        priceRange: "sedang",
        priceText: "Rp 10.000 - Rp 25.000",
        rating: 4.7,
        reviews: 1541,
        address: "Jl. Kahuripan No. 18, Klojen, Kec. Klojen, Kota Malang",
        desc: "Depot di kawasan Kayutangan Heritage yang dikenal dengan sajian mi bergaya Malang dan suasana bernuansa klasik",
        image: "images/depot-kayutangan.jpg", 
        mapsUrl: "https://maps.google.com/?q=Depot+KayuTangan+Malang",
        signature: "Cwie Mie Spesial, Mie Yamin"
    },
    {
        id: 6,
        name: "Warung Baleluwe",
        category: "Warung lalapan",
        priceRange: "hemat",
        priceText: "Mulai Rp8.000",
        rating: 4.6,
        reviews: 450,
        address: "Jl. Terusan Surabaya No. 53, Sumbersari, Kec. Klojen, Kota Malang",
        desc: "Warung lalapan favorit anak kos dan mahasiswa di Malang yang menyajikan aneka olahan ayam dengan pilihan berbagai jenis sambal nikmat.",
        image: "images/Bale Luwe.jpeg",
        mapsUrl: "https://maps.google.com/?q=Warung+Baleluwe+Malang",
        signature: "Ayam laos, ayam krispi, dan aneka sambal"
    },
    {
        id: 7,
        name: "Lalapan CJDW Bu Bawang",
        category: "Warung lalapan",
        priceRange: "hemat",
        priceText: "Rp9.000 - Rp13.000",
        rating: 4.7,
        reviews: 620,
        address: "Jalan Sumbersari VII No. 35, Sumbersari, Kec. Lowokwaru, Kota Malang",
        desc: "Tempat makan lalapan andalan yang terkenal dengan pilihan variasi sambal melimpah (hingga belasan jenis sambal) dan harga yang sangat ramah di kantong.",
        image: "images/Lalapan CJDW.jpeg",
        mapsUrl: "https://maps.google.com/?q=Lalapan+CJDW+Bu+Bawang+Malang",
        signature: "Nasi lalapan ayam, kulit, usus dengan pilihan belasan sambal"
    },
    {
        id: 8,
        name: "Mie Ayam Pak No",
        category: "Mie",
        priceRange: "hemat",
        priceText: "Rp 10.000 - Rp 20.000",
        rating: 4.6,
        reviews: 410,
        address: "Kota Malang",
        desc: "Kedai mie ayam legendaris dengan tekstur mie kenyal, potongan ayam gurih berlimpah, serta kuah kaldu hangat yang sedap.",
        image: "images/Mie Ayam Pak No.jpeg",
        mapsUrl: "https://maps.google.com/?q=Mie+Ayam+Pak+No+Malang",
        signature: "Mie Ayam Spesial Pangsit"
    },
    {
        id: 9,
        name: "Bakso Cak Cul",
        category: "Bakso",
        priceRange: "hemat",
        priceText: "Rp 1.000 - Rp 15.000",
        rating: 4.5,
        reviews: 536,
        address: "Jl. Sigura-Gura No. 34, Sumbersari, Lowokwaru, Kota Malang",
        desc: "Bakso Malang populer dengan pilihan ragam gorengan, siomay, dan bakso berkuah gurih nikmat yang pas untuk santap santai.",
        image: "images/Bakso CAK CUL.jpeg",
        mapsUrl: "https://maps.google.com/?q=Bakso+Cak+Cul+Malang",
        signature: "Bakso Campur, Siomay, Gorengan"
    },
    {
        id: 10,
        name: "Ayam Bakar Wong Solo",
        category: "Lalapan",
        priceRange: "sedang",
        priceText: "Sekitar Rp.25.000- Rp.175.000",
        rating: 4.4,
        reviews: 2900,
        address: "Jl. Arjuno No. 2, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65119",
        desc: "Restoran keluarga yang menyajikan masakan Indonesia dengan ayam bakar sebagai menu utama, dilengkapi pilihan sambal dan lauk lainnya.",
        image: "images/Ayam Bakar Wong Solo.jpeg",
        mapsUrl: "https://maps.app.goo.gl/hULjNXbFAGR1nVZe8",
        signature: "Ayam bakar, ayam goreng/penyet, sambal, serta pilihan lauk dan sayuran"
    },
    {
        id: 11,
        name: "Sambal Bejo Bangdo",
        category: "Lalapan",
        priceRange: "hemat",
        priceText: "Sekitar Rp17.000 per porsi",
        rating: 4.5,
        reviews: 741,
        address: "Jl. Dewandaru No. 3, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141",
        desc: "Tempat makan kasual yang dikenal dengan hidangan ayam dan sambal hijau bercita rasa pedas gurih.",
        image: "images/Sambel Bedjo.jpeg",
        mapsUrl: "https://maps.app.goo.gl/aAM1CZDjY4wcyKf77?g_st=ic",
        signature: "Nasi ayam geprek/penyet dengan sambal, serta pilihan lauk lain"
    },
    {
        id: 12,
        name: "Ayam Kalasan Cak Masan",
        category: "Lalapan",
        priceRange: "sedang",
        priceText: "Rp22.900",
        rating: 3.0,
        reviews: 8,
        address: "Jl. Bendungan Kedung Ombo No. 5, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
        desc: "Cocok untuk mahasiswa dan rombongan/grup.",
        image: "images/Ayam Kalasan.jpeg",
        signature: "Ayamgoreng kalasan"
    },
    {
        id: 13,
        name: "Kedai Lestari Djiwa",
        category:  "Depot & Nasi",
        priceRange: "hemat",
        priceText: "Rp10.000 – Rp30.000",
        rating: 4.7,
        reviews: 295,
        address: "Jl. Kendalsari X No. 1, Tulusrejo, Kec. Lowokwaru, Kota Malang",
        desc: "Kedai makan bernuansa Nusantara di Kota Malang yang terkenal sebagai pelopor menu spesialis nasi kemangi dengan harga ramah kantong (anak kos friendly).",
        image: "images/Kedai Lestari Djiwa.jpeg",
        mapsUrl: "https://maps.app.goo.gl/Tq4X4KxoFZQ3yGH28",
        signature: "Nasi Kemangi Kulit Merah, Nasi Kemangi Sayap Bakar Madu, Sate Kulit Merah"
    },
    {
        id: 14,
        name: "Waroeng Madjoe Djaja",
        category:  "Depot & Nasi",
        priceRange: "hemat",
        priceText: "Rp3.000 hingga Rp25.000",
        rating: 4.9,
        reviews: 146,
        address: "Jl. Bunga Merak No. 2A, Malang",
        desc: "Pelopor menu Mie Bangladesh di Kota Malang.",
        image: "images/Maju Jaya.jpeg",
        mapsUrl: "https://maps.app.goo.gl/gDj5anxFfFweaQuD9",
        signature: "Mie Bangladesh, Pangsit/Gyoza Goreng"
    },
    {
        id: 15,
        name: "Ayam Bolo Bebek Malang",
        category: "Lalapan",
        priceRange: "sedang",
        priceText: "Sekitar Rp25.000–Rp50.000 per orang",
        rating: 4.9,
        reviews: 341,
        address: "Jl. Salatiga No. 12, Malang, Jawa Timur",
        desc: "Tempat makan yang menyediakan olahan ayam dan bebek dengan sambal.",
        image: "images/Bebek Bolo.jpeg",
        mapsUrl: "https://maps.app.goo.gl/YDCNr4gU8DEqnpYMA",
        signature: "Ayam goreng, bebek goreng, dan pelengkap sambal"
    },
    {
        id: 16,
        name: "WRB",
        category: "Rumah makan padang",
        priceRange: "hemat",
        priceText: "Rp. 2.000 - Rp.19.000",
        rating: 4.4,
        reviews: 56,
        address: "Jl. Mayjend Panjaitan No.46, Penanggungan, Kec. Klojen, Kota Malang, Jawa Timur 65113",
        desc: "Warung makan dengan menu andalan ayam kukus dan rambak siram yang cocok disantap bersama nasi hangat dan sambalnya.",
        image: "images/WRB.jpeg",
        mapsUrl: "https://maps.app.goo.gl/u65D8XXdCMe51J34A",
        signature: "Ayam kukus dan rambak siram"
    },
    {
        id: 17,
        name: "Kopi Studio 24",
        category: "Kafe",
        priceRange: "hemat",
        priceText: "Mulai Rp10.000 - Rp25.000",
        rating: 4.7,
        reviews: 1200,
        address: "Jl. Bromo No.4, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65119",
        desc: "Kafe populer 24 jam di Malang yang sering dijadikan tempat nongkrong dan nugas mahasiswa dengan pilihan kopi, camilan, serta makanan berat.",
        image: "images/KOPSTUD.jpeg",
        mapsUrl: "https://maps.app.goo.gl/gw4u9BWd2w1dByyR6?g_st=ac",
        signature: "Es Kopi Susu D'Cream, Kue Pancong, Nasi Geprek"
    },
    {
        id: 18,
        name: "Toko Kopi Jaya",
        category: "Kafe",
        priceRange: "sedang",
        priceText: "Rp20.000 - Rp50.000",
        rating: 4.6,
        reviews: 850,
        address: "Jl. Buring No. 53, Oro-oro Dowo, Kec. Klojen, Kota Malang",
        desc: "Kedai kopi favorit di kawasan Klojen/Ijen dengan suasana nyaman untuk bersantai maupun mengerjakan tugas bersama pilihan kopi dan non-kopi.",
        image: "images/KOPJAY.jpeg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Toko+Kopi+Jaya+Malang",
        signature: "Kopi Susu Jaya, Kopi Susu Berjaya di Bali, Chocolate Almond"
    },
    {
        id: 19,
        name: "Kedai Yang Mulia",
        category: "Kafe",
        priceRange: "sedang",
        priceText: "Rp15.000 - Rp35.000",
        rating: 4.7,
        reviews: 420,
        address: "Jl. Bendungan Sutami Gg. Sawah Jl. Bendungan Sutami, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144",
        desc: "Kedai santai di Malang dengan suasana hangat dan nyaman yang cocok untuk nongkrong, ngobrol, atau bersantap ringan bersama teman.",
        image: "images/Kedai yang Mulia.jpeg",
        mapsUrl: "https://maps.app.goo.gl/1vaEHdJQX2aoofUC7?g_st=ac",
        signature: "Aneka Kopi, Minuman Segar, dan Menu Kedai"
    },
    {
        id: 20,
        name: "Bakso Gacoan",
        category: "Bakso",
        priceRange: "hemat",
        priceText: "Rp10.000 - Rp25.000",
        rating: 4.5,
        reviews: 320,
        address: "Jl. Letjend S. Parman, Purwantoro, Kec. Blimbing, Kota Malang, Jawa Timur",
        desc: "Warung bakso di Malang dengan sajian kuah hangat dan pilihan bakso serta pelengkap yang cocok untuk makan santai maupun mengenyangkan.",
        image: "images/BAKSO GACOAN.jpeg",
        mapsUrl: "https://maps.app.goo.gl/cSEUHYf41YvAS57u6?g_st=ac",
        signature: "Bakso Kuah & Aneka Pelengkap"
    },
    {
        id: 21,
        name: "Bakso Sayur UB Cabang UIN",
        category: "Bakso",
        priceRange: "hemat",
        priceText: "Rp10.000 - Rp20.000",
        rating: 4.6,
        reviews: 450,
        address: "Jl. Raya Sumbersari, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
        desc: "Pilihan bakso sayur favorit di sekitar kampus yang menyajikan bakso, sayuran segar, serta pelengkap dengan harga ramah di kantong mahasiswa.",
        image: "images/BAKSO SAYUR UB.jpeg",
        mapsUrl: "https://maps.app.goo.gl/tvEUZo7fsNkLaGMQ7?g_st=ac",
        signature: "Bakso Sayur & Tahu/Gorengan"
    },
    {
        id: 22,
        name: "Bakso Solo Kidul Pasar",
        category: "Bakso",
        priceRange: "hemat",
        priceText: "Rp12.000 - Rp25.000",
        rating: 4.6,
        reviews: 540,
        address: "Jl. Halmahera No.12A, Kasin, Kec. Klojen, Kota Malang, Jawa Timur 65117",
        desc: "Tempat makan bakso gaya Solo di kawasan selatan pasar Malang dengan kuah gurih hangat dan pilihan isian bakso yang pas disantap kapan saja.",
        image: "images/BAKSO SOLO.jpeg",
        mapsUrl: "https://maps.app.goo.gl/DH8VbfyfPMBrSGnh9?g_st=ac",
        signature: "Bakso Kuah Gurih Khas Solo"
    },
    {
        id: 23,
        name: "Umayumcha",
        category: "Camilan",
        priceRange: "hemat",
        priceText: "Rp3.000 - Rp18.000",
        rating: 4.9,
        reviews: 2.237,
        address: "Jl. Welirang No.27, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119",
        desc: "Tempat kuliner santai di Malang yang menyajikan pilihan camilan dan minuman kekinian yang cocok untuk teman nongkrong atau ngemil sore.",
        image: "images/UMAYUMCHA.jpeg",
        mapsUrl: "https://maps.app.goo.gl/8SrmzxVNv7EaML8x9?g_st=ac",
        signature: "Camilan & Minuman Segar"
    },
    {
        id: 24,
        name: "Pisank Magic",
        category: "Camilan",
        priceRange: "hemat",
        priceText: "Rp10.000 - Rp17.000",
        rating: 4.9,
        reviews: 614,
        address: "Jl. Bunga Srigading Dalam No.45, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141",
        desc: "Spot camilan pisang di Malang dengan sajian manis gurih yang pas untuk dinikmati saat santai maupun berkumpul bersama teman.",
        image: "images/PISANG.jpeg",
        mapsUrl: "https://maps.app.goo.gl/GkvNGakqfvb9vy1m6?g_st=ac",
        signature: "Olahan Pisang Kekinian"
    },
    {
        id: 25,
        name: "Terang Bulan Kedai Singha",
        category: "Camilan",
        priceRange: "hemat",
        priceText: "Rp10.000",
        rating: 4.8,
        reviews: 88,
        address: "Jl. Sunan Kalijaga No.kavling 4 Kav. 4, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144",
        desc: "Kedai dengan suasana nyaman di Malang yang menawarkan beragam pilihan minuman dan menu makanan untuk bersantai atau berdiskusi.",
        image: "images/KEDAI SINGHA.jpeg",
        mapsUrl: "https://maps.app.goo.gl/Et3jvMg2ddwRfLvWA",
        signature: "Aneka Minuman & Menu Kedai"
    },
    {
        id: 26,
        name: "Hotman Dimsum",
        category: "Camilan",
        priceRange: "sedang",
        priceText: "Rp20.000 - Rp27.000",
        rating: 4.6,
        reviews: 12,
        address: "Jl. Sigura - Gura No.39C, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
        desc: "Tempat makan dimsum hangat di Malang dengan pilihan aneka dimsum gurih yang cocok untuk camilan maupun menu pendamping santai.",
        image: "images/HOTMAN.jpeg",
        mapsUrl: "https://maps.app.goo.gl/TQjkpkwo1PXW8Yjq8?g_st=ac",
        signature: "Aneka Dimsum Kukus/Goreng"
    },
    {
        id: 27,
        name: "Pancong Pocong",
        category: "Camilan",
        priceRange: "hemat",
        priceText: "Rp8.000 - Rp20.000",
        rating: 4.6,
        reviews: 520,
        address: "Jl. Terusan Ambarawa No.4, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
        desc: "Kedai kue pancong di Malang dengan tekstur lembut dan aneka pilihan topping yang banyak diminati untuk nongkrong malam.",
        image: "images/PANCONG.jpeg",
        mapsUrl: "https://maps.app.goo.gl/UmxmEvj813qxwKT16?g_st=ac",
        signature: "Kue Pancong Aneka Topping"
    },
    {
        id: 28,
        name: "Kantin Bu Yuni Tulungagung",
        category: "Mie",
        priceRange: "hemat",
        priceText: "Rp.10.000-Rp.15.000",
        rating: 4.8,
        reviews: 4168,
        address: "Kantin FMIPA UM, Jl. Cakrawala No. 2, Sumbersari, Lowokwaru, Kota Malang, Jawa Timur 65145",
        desc: "Pilihan makanan di lingkungan kantin FMIPA Universitas Negeri Malang yang cocok untuk mahasiswa maupun warga kampus di sela kegiatan perkuliahan.",
        image: "images/MI AYAM FMIPA.jpeg",
        mapsUrl: "https://maps.app.goo.gl/np1YgTN94EMwQD1f6?g_st=ic",
        signature: "Mie ayam & rawon"
    },
    {
        id: 29,
        name: "RM Sakato",
        category: "Rumah makan Padang",
        priceRange: "sedang",
        priceText: "Rp3.000-Rp20.000",
        rating: 4.8,
        reviews: 347,
        address: "Jl. Tlogo Indah No. Kav C, Tlogomas, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144",
        desc: "Rumah makan yang menyediakan berbagai hidangan khas Minangkabau dengan pilihan nasi Padang, beragam lauk, serta bumbu rempah yang kaya rasa.",
        image: "images/SAKATO.jpeg",
        mapsUrl: "https://maps.app.goo.gl/JgCW8uMUCijuueNF7?g_st=ic",
        signature: "Nasi rendang, nasi ayam goreng, nasi ayam gulai, nasi ayam balado, dan ikan kembung"
    },
    {
        id: 30,
        name: "Sego Resek Terusan Surabaya",
        category: "Warung makan / makanan rumahan",
        priceRange: "hemat",
        priceText: "Rp10.000-Rp18.000",
        rating: 4.7,
        reviews: 113,
        address: "Jl. Terusan Surabaya No. 08, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65115",
        desc: "Tempat makan dengan harga terjangkau yang menyediakan hidangan nasi dengan lauk dan sambal untuk mahasiswa maupun masyarakat sekitar.",
        image: "images/SEGO RESEK.jpeg",
        mapsUrl: "https://maps.app.goo.gl/q2NL7KmHpnkNPRdg7?g_st=ic",
        signature: "Paket Sego Jingkrak, ayam goreng, bebek goreng, nasi dengan sambal"
    },
    {
        id: 31,
        name: "RM Padang Roda Baru Depan Ringin",
        category: "Rumah makan Padang",
        priceRange: "hemat",
        priceText: "Sekitar Rp9.000–Rp25.000",
        rating: 4.9,
        reviews: 2.999,
        address: "Jl. Bendungan Sutami No. 53, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur",
        desc: "Rumah makan khas Minangkabau di sekitar kampus Universitas Negeri Malang dengan pilihan lauk beragam, porsi cukup banyak, dan harga relatif terjangkau.",
        image: "images/NASPAD RODA BARU.jpeg",
        mapsUrl: "https://maps.app.goo.gl/2eoHhky38cJv7A9F7?g_st=ic",
        signature: "Rendang, ayam pop, ayam goreng, gulai nangka, paru goreng, dan sambal hijau"
    }
];
        

let currentPriceFilter = 'all';
let favorites = JSON.parse(localStorage.getItem('kuliner_fav')) || [];

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    displayKuliner(kulinerData);
    updateFavBadge();

    document.getElementById('search-input').addEventListener('input', filterKuliner);
    document.getElementById('category-filter').addEventListener('change', filterKuliner);
});

// Fungsi Menampilkan Data ke Grid
function displayKuliner(data) {
    const grid = document.getElementById('kuliner-grid');
    const emptyState = document.getElementById('empty-state');
    const countSpan = document.getElementById('result-count');
    
    grid.innerHTML = '';
    countSpan.textContent = data.length;

    if (data.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    } else {
        emptyState.classList.add('hidden');
    }

    data.forEach(item => {
        const isFav = favorites.includes(item.id);
        const card = document.createElement('div');
        card.className = "bg-white rounded-3xl overflow-hidden border border-[#e2e8df] shadow-xs flex flex-col justify-between hover:shadow-lg transition-all";
        
        card.innerHTML = `
            <div class="relative h-52 overflow-hidden group cursor-pointer" onclick="openDetail(${item.id})">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#2c3327] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    ${item.category}
                </span>
                <button onclick="event.stopPropagation(); toggleFavorite(${item.id})" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-lg shadow-md transition-transform active:scale-90">
                    <i class="fa-solid fa-heart ${isFav ? 'text-[#F1B4AF]' : 'text-gray-300'}"></i>
                </button>
                <div class="absolute bottom-3 left-3 flex items-center space-x-1 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                    <i class="fa-solid fa-star text-amber-400"></i>
                    <span>${item.rating}</span>
                    <span class="text-gray-300 text-[10px]">(${item.reviews}+)</span>
                </div>
            </div>
            
            <div class="p-5 flex flex-col flex-grow justify-between">
                <div>
                    <h3 onclick="openDetail(${item.id})" class="font-extrabold text-lg text-[#2c3327] hover:text-[#7f8f30] cursor-pointer transition-colors line-clamp-1 mb-1">
                        ${item.name}
                    </h3>
                    <p class="text-xs text-[#707968] flex items-center mb-3">
                        <i class="fa-solid fa-location-dot mr-1.5 text-[#BBCA6F]"></i>
                        <span class="line-clamp-1">${item.address}</span>
                    </p>
                    <p class="text-xs text-[#525c4a] line-clamp-2 mb-4">
                        ${item.desc}
                    </p>
                </div>
                
                <div class="pt-4 border-t border-[#f2f4ec] flex items-center justify-between mt-auto">
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-wider text-[#8a9482] block">Kisaran Harga</span>
                        <span class="text-xs font-extrabold text-[#2c3327]">${item.priceText}</span>
                    </div>
                    <button onclick="openDetail(${item.id})" class="bg-[#f2f4ec] hover:bg-[#BBCA6F] text-[#4d5647] hover:text-[#2c3327] px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs">
                        Lihat Detail
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Fungsi Filter Pencarian & Kategori
function filterKuliner() {
    const keyword = document.getElementById('search-input').value.toLowerCase();
    const category = document.getElementById('category-filter').value;

    let filtered = kulinerData.filter(item => {
        const matchKeyword = item.name.toLowerCase().includes(keyword) || 
                             item.address.toLowerCase().includes(keyword) || 
                             item.desc.toLowerCase().includes(keyword);
        const matchCategory = category === 'all' || item.category.toLowerCase().includes(category.toLowerCase());
        const matchPrice = currentPriceFilter === 'all' || item.priceRange === currentPriceFilter;

        return matchKeyword && matchCategory && matchPrice;
    });

    displayKuliner(filtered);
}

// Fungsi Filter Harga
function filterByPrice(priceType) {
    currentPriceFilter = priceType;
    
    document.querySelectorAll('.price-btn').forEach(btn => {
        if(btn.getAttribute('data-price') === priceType) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    filterKuliner();
}

// Reset Filter
function resetFilter() {
    document.getElementById('search-input').value = '';
    document.getElementById('category-filter').value = 'all';
    currentPriceFilter = 'all';
    document.querySelectorAll('.price-btn').forEach(btn => {
        if(btn.getAttribute('data-price') === 'all') btn.classList.add('active');
        else btn.classList.remove('active');
    });
    displayKuliner(kulinerData);
}

// Modal Detail Kuliner
function openDetail(id) {
    const item = kulinerData.find(d => d.id === id);
    if (!item) return;

    const isFav = favorites.includes(id);
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = `
        <div class="relative h-64 sm:h-72">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <button onclick="closeDetail()" class="absolute top-4 right-4 text-white hover:text-gray-200 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="absolute bottom-4 left-6 right-6 text-white">
                <span class="bg-[#BBCA6F] text-[#2c3327] text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                    ${item.category}
                </span>
                <h2 class="text-2xl sm:text-3xl font-extrabold" style="font-family: 'Playfair Display', serif;">${item.name}</h2>
            </div>
        </div>
        <div class="p-6 space-y-5">
            <div class="flex flex-wrap items-center justify-between gap-4 bg-[#f9faf7] p-4 rounded-2xl border border-[#e2e8df]">
                <div class="flex items-center space-x-2">
                    <div class="w-10 h-10 rounded-xl bg-[#BBCA6F]/20 text-[#6f7c2b] flex items-center justify-center text-lg">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div>
                        <div class="text-sm font-bold text-[#2c3327]">${item.rating} / 5.0</div>
                        <div class="text-xs text-[#707968]">${item.reviews} ulasan pengunjung</div>
                    </div>
                </div>
                <div>
                    <div class="text-xs font-bold text-[#707968]">REKOMENDASI MENU</div>
                    <div class="text-sm font-extrabold text-[#2c3327]">${item.signature}</div>
                </div>
            </div>

            <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-[#707968] mb-1"><i class="fa-solid fa-location-dot mr-1.5 text-[#BBCA6F]"></i> Alamat Lokasi</h4>
                <p class="text-sm font-medium text-[#2c3327]">${item.address}</p>
            </div>

            <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-[#707968] mb-1"><i class="fa-solid fa-circle-info mr-1.5 text-[#BBCA6F]"></i> Deskripsi & Daya Tarik</h4>
                <p class="text-sm text-[#525c4a] leading-relaxed">${item.desc}</p>
            </div>

            <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-[#707968] mb-1"><i class="fa-solid fa-wallet mr-1.5 text-[#BBCA6F]"></i> Estimasi Harga</h4>
                <p class="text-sm font-extrabold text-[#2c3327]">${item.priceText}</p>
            </div>

            <div class="flex items-center gap-3 pt-4 border-t border-[#e2e8df]">
                <a href="${item.mapsUrl}" target="_blank" class="flex-1 bg-[#BBCA6F] hover:bg-[#a3b355] text-[#2c3327] py-3 px-4 rounded-xl font-bold text-sm text-center shadow-md transition-all flex items-center justify-center space-x-2">
                    <i class="fa-solid fa-map-location-dot"></i>
                    <span>Buka di Google Maps</span>
                </a>
                <button onclick="toggleFavorite(${item.id}); openDetail(${item.id});" class="p-3 px-5 rounded-xl border border-[#e2e8df] hover:bg-[#f2f4ec] text-sm font-bold text-[#2c3327] transition-all flex items-center space-x-2">
                    <i class="fa-solid fa-heart ${isFav ? 'text-[#F1B4AF]' : 'text-gray-400'}"></i>
                    <span>${isFav ? 'Disukai' : 'Suka'}</span>
                </button>
            </div>
        </div>
    `;

    document.getElementById('detail-modal').classList.remove('hidden');
}

function closeDetail() {
    document.getElementById('detail-modal').classList.add('hidden');
}

// Logika Sistem Favorit
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('kuliner_fav', JSON.stringify(favorites));
    updateFavBadge();
    filterKuliner();
    
    if(!document.getElementById('favorites-modal').classList.contains('hidden')) {
        openFavoritesModal();
    }
}

function updateFavBadge() {
    const badge = document.getElementById('fav-badge');
    if (favorites.length > 0) {
        badge.textContent = favorites.length;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function openFavoritesModal() {
    const listContainer = document.getElementById('favorites-list');
    listContainer.innerHTML = '';

    const favItems = kulinerData.filter(item => favorites.includes(item.id));

    if (favItems.length === 0) {
        listContainer.innerHTML = `
            <div class="text-center py-10 text-[#707968]">
                <i class="fa-regular fa-heart text-3xl mb-2 text-[#BBCA6F]"></i>
                <p class="text-sm font-semibold">Belum ada kuliner favorit yang disimpan.</p>
            </div>
        `;
    } else {
        favItems.forEach(item => {
            const div = document.createElement('div');
            div.className = "flex items-center justify-between p-3 rounded-2xl bg-[#f9faf7] border border-[#e2e8df] hover:border-[#BBCA6F] transition-all";
            div.innerHTML = `
                <div class="flex items-center space-x-3 cursor-pointer" onclick="closeFavoritesModal(); openDetail(${item.id})">
                    <img src="${item.image}" class="w-14 h-14 object-cover rounded-xl shadow-xs">
                    <div>
                        <h4 class="font-bold text-sm text-[#2c3327]" style="font-family: 'Playfair Display', serif;">${item.name}</h4>
                        <p class="text-xs text-[#707968]">${item.priceText}</p>
                    </div>
                </div>
                <button onclick="toggleFavorite(${item.id})" class="text-[#F1B4AF] hover:text-[#d88c85] p-2">
                    <i class="fa-solid fa-trash-can text-sm"></i>
                </button>
            `;
            listContainer.appendChild(div);
        });
    }

    document.getElementById('favorites-modal').classList.remove('hidden');
}

function closeFavoritesModal() {
    document.getElementById('favorites-modal').classList.add('hidden');
}

/* ==========================================================
   LOGIKA RODA ACAK INTERAKTIF (SPINNING WHEEL) - VERSI REVISI FINAL
   ========================================================== */

function openWheelModal() {
    document.getElementById('wheel-modal').classList.remove('hidden');
    document.getElementById('wheel-result-box').innerHTML = `<span class="text-[#8a9482] text-xs font-semibold">Tekan tombol putar di bawah!</span>`;
    document.getElementById('wheel-detail-btn').classList.add('hidden');
    
    arc = Math.PI / (kulinerData.length / 2);
    drawWheel();
}

function closeWheelModal() {
    if (isSpinning) return;
    document.getElementById('wheel-modal').classList.add('hidden');
}

// Fungsi Menggambar Roda dengan Teks Horizontal 2 Baris di Tengah (Tidak Terbalik)
function drawWheel() {
    const canvas = document.getElementById("wheel-canvas");
    if (!canvas.getContext) return;

    const ctx = canvas.getContext("2d");
    const outsideRadius = 135;
    const insideRadius = 25;

    ctx.clearRect(0, 0, 280, 280);

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;

    for (let i = 0; i < kulinerData.length; i++) {
        const angle = startAngle + i * arc;
        ctx.fillStyle = wheelColors[i % wheelColors.length];

        // Gambar Bagian Potongan Roda (Slices)
        ctx.beginPath();
        ctx.arc(140, 140, outsideRadius, angle, angle + arc, false);
        ctx.arc(140, 140, insideRadius, angle + arc, angle, true);
        ctx.stroke();
        ctx.fill();

        ctx.save();
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#2c3327";
        
        // Posisikan titik tengah teks di bagian tengah irisan roda (radius 75px)
        const midAngle = angle + arc / 2;
        ctx.translate(140 + Math.cos(midAngle) * 75, 140 + Math.sin(midAngle) * 75);
        
        // Atur rotasi agar teks tidak terbalik di sisi kiri roda
        let textAngle = midAngle;
        if (textAngle > Math.PI / 2 && textAngle < Math.PI * 1.5) {
            textAngle += Math.PI;
        }
        ctx.rotate(textAngle);
        
        ctx.font = "bold 9px 'Plus Jakarta Sans', sans-serif";
        ctx.textAlign = "center";
        
        let text = kulinerData[i].name;
        
        // Bagi teks menjadi 2 baris agar pas di tengah irisan
        let words = text.split(" ");
        let line1 = "";
        let line2 = "";
        
        if (words.length > 1) {
            let midIndex = Math.ceil(words.length / 2);
            line1 = words.slice(0, midIndex).join(" ");
            line2 = words.slice(midIndex).join(" ");
        } else {
            if (text.length > 10) {
                line1 = text.substring(0, 10);
                line2 = text.substring(10, 18);
            } else {
                line1 = text;
            }
        }

        // Cetak 2 baris mendatar tepat di tengah koordinat irisan
        if (line2) {
            ctx.fillText(line1, 0, -4);
            ctx.fillText(line2, 0, 6);
        } else {
            ctx.fillText(line1, 0, 2);
        }
        
        ctx.restore();
    }

    // Lingkaran Putih di Tengah Roda
    ctx.beginPath();
    ctx.arc(140, 140, insideRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();
}

function spinWheel() {
    if (isSpinning) return;
    
    isSpinning = true;
    document.getElementById('spin-btn').disabled = true;
    document.getElementById('spin-btn').classList.add('opacity-50');
    document.getElementById('wheel-detail-btn').classList.add('hidden');
    document.getElementById('wheel-result-box').innerHTML = `<i class="fa-solid fa-spinner animate-spin text-xl text-[#BBCA6F] mb-1"></i><span class="text-xs font-bold text-[#707968]">Memutar roda keberuntungan...</span>`;

    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3000 + 4000;
    rotateWheel();
}

function rotateWheel() {
    spinTime += 30;
    if (spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
    }
    const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI / 180);
    drawWheel();
    spinTimeout = setTimeout(rotateWheel, 30);
}

function stopRotateWheel() {
    clearTimeout(spinTimeout);
    isSpinning = false;
    
    const spinBtn = document.getElementById('spin-btn');
    spinBtn.disabled = false;
    spinBtn.classList.remove('opacity-50');

    const degrees = startAngle * 180 / Math.PI + 90;
    const arcd = arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) / arcd);
    
    selectedIndex = (index + kulinerData.length) % kulinerData.length;
    const chosen = kulinerData[selectedIndex];

    const resultBox = document.getElementById('wheel-result-box');
    resultBox.innerHTML = `
        <div class="text-center animate-fade-in">
            <span class="text-[10px] bg-[#F1B4AF] text-[#422c2a] px-2.5 py-0.5 rounded-full font-bold mb-1 inline-block">Hasil Pilihan Roda</span>
            <h4 class="font-extrabold text-base text-[#2c3327] mb-0.5" style="font-family: 'Playfair Display', serif;">${chosen.name}</h4>
            <p class="text-xs text-[#707968] line-clamp-1">${chosen.address}</p>
        </div>
    `;

    const detailBtn = document.getElementById('wheel-detail-btn');
    detailBtn.setAttribute('onclick', `closeWheelModal(); openDetail(${chosen.id})`);
    detailBtn.classList.remove('hidden');
}

function easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}