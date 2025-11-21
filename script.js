// Fungsi untuk menampilkan waktu saat ini
function updateClock() {
    // 1. Membuat objek Date baru, yang berisi tanggal dan waktu saat ini
    const now = new Date(); 

    // 2. Mengambil jam, menit, dan detik
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 3. Menambahkan nol di depan angka jika angkanya kurang dari 10 (misal: 9 menjadi 09)
    // Ini adalah operator ternary, cara singkat dari 'if...else'
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // 4. Menggabungkan jam, menit, dan detik menjadi format string "HH:MM:SS"
    const timeString = hours + ':' + minutes + ':' + seconds;

    // 5. Menemukan elemen HTML dengan ID "jam" dan memperbarui teks di dalamnya
    document.getElementById('jam').textContent = timeString;
}

// 6. Memanggil fungsi updateClock() segera setelah halaman dimuat
updateClock(); 

// 7. Mengatur interval agar fungsi updateClock() dipanggil setiap 1000 milidetik (1 detik)
// Ini yang membuat jam terus berdetak.
setInterval(updateClock, 1000);