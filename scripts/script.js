document.addEventListener("DOMContentLoaded", function() {
    // For generating content in index.html
    const tipsContainer = document.getElementById('tips-container');
    const tips = [
        {
            title: "1. Prioritaskan Tugas",
            content: `Mulailah hari dengan menentukan tiga tugas terpenting yang harus diselesaikan. Fokuslah pada tugas-tugas ini sebelum beralih ke hal-hal lain.
            Dengan memprioritaskan tugas, Anda dapat mengelola waktu dengan lebih baik dan memastikan bahwa tugas-tugas yang paling penting tidak terabaikan.
            Jangan lupa untuk membuat daftar tugas yang jelas dan menandai kemajuan Anda saat menyelesaikan setiap tugas.`,
            image: "assets/images/1.png"
        },
        {
            title: "2. Gunakan Teknik Pomodoro",
            content: `Bekerja selama 25 menit, lalu istirahat selama 5 menit. Setelah empat sesi, ambil istirahat lebih lama. Teknik ini efektif untuk menjaga fokus.
            Teknik Pomodoro membantu Anda tetap terjaga dan produktif dengan mencegah kelelahan dan burnout.
            Gunakan aplikasi atau timer untuk memudahkan pelaksanaan teknik ini dan pantau kemajuan Anda.`,
            image: "assets/images/2.png"
        },
        {
            title: "3. Batasi Gangguan",
            content: `Matikan notifikasi yang tidak penting dan tentukan waktu khusus untuk memeriksa email atau pesan agar tidak terus terganggu.
            Dengan mengurangi gangguan, Anda dapat lebih fokus pada tugas-tugas yang sedang dikerjakan dan meningkatkan efisiensi kerja.
            Pertimbangkan juga untuk menciptakan ruang kerja yang bebas dari gangguan dan menyusun jadwal kerja yang konsisten.`,
            image: "assets/images/3.png"
        }
    ];

    tips.forEach(tip => {
        const articleHTML = `
            <article class="mx-2">
                <h3 class="poppins-semibold">${tip.title}</h3>
                <div>
                    <img src="${tip.image}" alt="${tip.title}" width="100" height="100">
                    <p class="poppins-regular">${tip.content}</p>
                </div>
            </article>
            <hr />
        `;
        tipsContainer.innerHTML += articleHTML;
    });

    function toggleDarkMode(e){
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            e.target.innerHTML = "Toggle White Mode";
        } else {
            localStorage.setItem('darkMode', 'disabled');
            e.target.innerHTML = "Toggle Dark Mode";
        }
    }

    function loadDarkModePreference(){
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'enabled') {
            document.body.classList.add('dark-mode');
        }
    }
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
    loadDarkModePreference();
});
