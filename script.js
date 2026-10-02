// Toggle Menu Navbar untuk Tampilan Mobile (Responsif)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu saat link diklik di perangkat mobile
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Tab Navigasi untuk Bagian Jadwal & Hasil Pertandingan
const tabBtns = document.querySelectorAll('.tab-btn');
const matchContents = document.querySelectorAll('.match-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hapus kelas aktif dari semua tombol dan konten
        tabBtns.forEach(b => b.classList.remove('active'));
        matchContents.forEach(c => c.classList.remove('active'));

        // Tambahkan kelas aktif ke tombol yang diklik
        btn.classList.add('active');

        // Tampilkan konten yang sesuai dengan data-tab
        const targetId = btn.getAttribute('data-tab');
        document.getElementById(targetId).classList.add('active');
    });
});

// Kirim Pesan Form Kontak ke WhatsApp
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Ambil nilai dari input form
        // Urutan input: 0 = Nama, 1 = Email/No HP, 2 = Pesan/Undangan
        const inputs = contactForm.querySelectorAll('input, textarea');
        const nama = inputs[0].value;
        const kontak = inputs[1].value;
        const pesan = inputs[2].value;

        // Nomor WhatsApp Admin (Ganti dengan nomor WhatsApp klub Anda, awali dengan kode negara misal 62)
        const nomorWhatsApp = "6282320329715"; // Contoh: +62 823-2032-9715

        // Format teks pesan untuk WhatsApp
        const teks = `Halo Manajemen Dobrak Futsal Club,%0A%0A` +
                     `Nama: *${nama}*%0A` +
                     `Kontak: *${kontak}*%0A%0A` +
                     `Pesan:%0A${pesan}`;

        // Buka URL WhatsApp
        const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${teks}`;
        window.open(urlWhatsApp, '_blank');

        // Reset form setelah dikirim
        contactForm.reset();
    });
}