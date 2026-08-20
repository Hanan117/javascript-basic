const santri = {
    nama: "HANAN",
    kelas: "XXX C",
    status: "AKTIF"
};

const aktivitas = [
    "Login ke aplikasi",
    "Membaca materi JavaScript",
    "Mengerjakan latihan",
    "Mengumpulkan tugas"
];


const elNama = document.getElementById("nama-santri");
const elKelas = document.getElementById("kelas-santri");
const elStatus = document.getElementById("status-santri");
const elListAktivitas = document.getElementById("list-aktivitas");

function renderDashboard() {
   
    elNama.textContent = santri.nama;
    elKelas.textContent = santri.kelas;
    elStatus.textContent = santri.status;

    
    elListAktivitas.innerHTML = "";
    
    if (aktivitas.length === 0) {
        elListAktivitas.innerHTML = `<li style="text-align:center; color:#6b7280;">Tidak ada aktivitas.</li>`;
        return;
    }

    aktivitas.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "activity-item";

        li.innerHTML = `
            <span class="activity-text">${index + 1}. ${item}</span>
            <button class="btn-hapus" onclick="hapusAktivitas(${index})">Hapus Aktivitas</button>
        `;
        elListAktivitas.appendChild(li);
    });
}

function hapusAktivitas(index) {
    aktivitas.splice(index, 1);
    renderDashboard();
}


document.addEventListener("DOMContentLoaded", renderDashboard);