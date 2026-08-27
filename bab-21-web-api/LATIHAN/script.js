// Data Khas Indonesia
const INDONESIAN_USERS = [
    {
        id: 1,
        name: "Ahmad Fauzi",
        email: "ahmad.fauzi@santri.id",
        phone: "+62 812-3456-7890",
        website: "www.ahmadfauzi.id",
        company: { name: "PT Pesantren Digital Nusantara", catchPhrase: "Membangun Generasi Rabbani" },
        address: { street: "Jl. Pesantren No. 12", suite: "Blok A", city: "Jakarta Selatan", zipcode: "12340" }
    },
    {
        id: 2,
        name: "Siti Nurhaliza",
        email: "siti.nurhaliza@pesantren.org",
        phone: "+62 813-9876-5432",
        website: "www.sitinurhaliza.org",
        company: { name: "CV Santri Kreatif Mandiri", catchPhrase: "Karya Tanpa Batas" },
        address: { street: "Jl. Malioboro No. 45", suite: "Lantai 2", city: "Yogyakarta", zipcode: "55213" }
    },
    {
        id: 3,
        name: "Muhammad Rizki",
        email: "m.rizki@coding.sch.id",
        phone: "+62 815-1122-3344",
        website: "www.rizkicode.id",
        company: { name: "Yayasan IT Al-Ikhlas", catchPhrase: "Teknologi untuk Ummat" },
        address: { street: "Jl. Diponegoro No. 88", suite: "Gedung B", city: "Bandung", zipcode: "40115" }
    },
    {
        id: 4,
        name: "Fatimah Azzahra",
        email: "fatimah.zahra@quranic.id",
        phone: "+62 817-5544-3322",
        website: "www.fatimahzahra.id",
        company: { name: "PT Berkah Mulia Sejahtera", catchPhrase: "Jujur dan Amanah" },
        address: { street: "Jl. Pemuda No. 10", suite: "Komp. Ruko Niaga", city: "Surabaya", zipcode: "60271" }
    },
    {
        id: 5,
        name: "Umar Faruq",
        email: "umar.faruq@santrihub.com",
        phone: "+62 819-8877-6655",
        website: "www.umarfaruq.com",
        company: { name: "CV Teknologi Nusantara", catchPhrase: "Solusi Digital Masa Kini" },
        address: { street: "Jl. Ahmad Yani No. 78", suite: "Kavling 5", city: "Semarang", zipcode: "50241" }
    },
    {
        id: 6,
        name: "Aisyah Putri",
        email: "aisyah.putri@madinah.net",
        phone: "+62 821-4433-2211",
        website: "www.aisyahputri.net",
        company: { name: "PT Media Dakwah Islami", catchPhrase: "Menyebar Kebaikan" },
        address: { street: "Jl. Sudirman No. 99", suite: "Apartemen Suite", city: "Malang", zipcode: "65111" }
    },
    {
        id: 7,
        name: "Zainal Abidin",
        email: "zainal.abidin@santricoding.id",
        phone: "+62 822-6655-4433",
        website: "www.zainalabidin.id",
        company: { name: "CV Solusi Pemrograman", catchPhrase: "Ngoding Sampai Sukses" },
        address: { street: "Jl. Ganesha No. 10", suite: "Komp. Kampus", city: "Bandung", zipcode: "40132" }
    },
    {
        id: 8,
        name: "Khadijah Salsabila",
        email: "khadijah.salsa@muslimah.org",
        phone: "+62 823-7788-9900",
        website: "www.khadijahsalsa.org",
        company: { name: "PT Busana Muslimah Modern", catchPhrase: "Anggun & Syar'i" },
        address: { street: "Jl. Margonda Raya No. 5", suite: "Ruko Grand", city: "Depok", zipcode: "16424" }
    },
    {
        id: 9,
        name: "Ibrahim Al-Ghifari",
        email: "ibrahim.ghifari@santripos.id",
        phone: "+62 856-3322-1144",
        website: "www.ibrahimghifari.id",
        company: { name: "CV E-Commerce Santri", catchPhrase: "Belanja Mudah Berkah" },
        address: { street: "Jl. Solo Km. 8", suite: "Gedung Utama", city: "Yogyakarta", zipcode: "55281" }
    },
    {
        id: 10,
        name: "Mariam Al-Kamilah",
        email: "mariam.kamilah@hafidzah.id",
        phone: "+62 878-9911-2233",
        website: "www.mariamkamilah.id",
        company: { name: "Yayasan Tahfidz Mandiri", catchPhrase: "Generasi Cinta Al-Qur'an" },
        address: { street: "Jl. Pasteur No. 21", suite: "Blok C", city: "Bandung", zipcode: "40161" }
    }
];

// Selektor Elemen DOM
const viewDashboard = document.getElementById('view-dashboard');
const viewDetail = document.getElementById('view-detail');
const usersContainer = document.getElementById('users-container');
const searchInput = document.getElementById('search-input');
const loadingIndicator = document.getElementById('loading-indicator');
const errorMessage = document.getElementById('error-message');
const btnBack = document.getElementById('btn-back');
const themeToggle = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');

// State Aplikasi
let allUsers = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// --- 1. INISIALISASI APLIKASI ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadUserData();
    handleRoute();

    // Event Listeners
    searchInput.addEventListener('input', filterUsers);
    btnBack.addEventListener('click', () => {
        history.pushState(null, '', '/');
        handleRoute();
    });
    themeToggle.addEventListener('click', toggleTheme);

    // Menangani tombol Back/Forward browser (History API)
    window.addEventListener('popstate', handleRoute);
});

// --- 2. PENGAMBILAN DATA (SIMULASI ASYNC & STORAGE) ---
async function loadUserData() {
    const cachedData = localStorage.getItem('usersData');
    if (cachedData) {
        allUsers = JSON.parse(cachedData);
        displayUsers(allUsers);
        loadingIndicator.style.display = 'none';
    } else {
        loadingIndicator.style.display = 'block';
    }

    try {
        await new Promise(resolve => setTimeout(resolve, 400));
        
        allUsers = INDONESIAN_USERS;
        localStorage.setItem('usersData', JSON.stringify(allUsers));
        
        errorMessage.style.display = 'none';
        displayUsers(allUsers);
    } catch (error) {
        console.error('Error loading data:', error);
        if (!cachedData) {
            errorMessage.textContent = 'Terjadi kesalahan sistem. Gagal memuat data pengguna.';
            errorMessage.style.display = 'block';
        }
    } finally {
        loadingIndicator.style.display = 'none';
    }
}

// --- 3. MENAMPILKAN KARTU PENGGUNA ---
function displayUsers(users) {
    usersContainer.innerHTML = '';
    
    if (users.length === 0) {
        usersContainer.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">Pengguna tidak ditemukan.</p>';
        return;
    }

    users.forEach(user => {
        const isFav = favorites.includes(user.id);
        const card = document.createElement('div');
        card.className = 'user-card';
        
        card.innerHTML = `
            <button class="btn-fav" data-id="${user.id}" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 18px; cursor: pointer; color: ${isFav ? 'gold' : '#ccc'};">
                <i class="fa-${isFav ? 'solid' : 'regular'} fa-star"></i>
            </button>
            <h3 style="margin-bottom: 5px; padding-right: 25px;"><i class="fa-solid fa-user-circle"></i> ${user.name}</h3>
            <p style="margin: 3px 0; font-size: 13px; color: inherit;"><i class="fa-solid fa-envelope"></i> ${user.email}</p>
            <p style="margin: 3px 0; font-size: 13px; color: inherit;"><i class="fa-solid fa-building"></i> ${user.company.name}</p>
        `;

        card.addEventListener('click', (e) => {
            if (e.target.closest('.btn-fav')) return;
            history.pushState({ userId: user.id }, '', `/user/${user.id}`);
            handleRoute();
        });

        const favBtn = card.querySelector('.btn-fav');
        favBtn.addEventListener('click', () => toggleFavorite(user.id));

        usersContainer.appendChild(card);
    });
}

// --- 4. FITUR PENCARIAN / FILTER ---
function filterUsers(e) {
    const keyword = e.target.value.toLowerCase();
    const filtered = allUsers.filter(user => user.name.toLowerCase().includes(keyword));
    displayUsers(filtered);
}

// --- 5. SISTEM FAVORIT ---
function toggleFavorite(userId) {
    if (favorites.includes(userId)) {
        favorites = favorites.filter(id => id !== userId);
    } else {
        favorites.push(userId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    const currentKeyword = searchInput.value.toLowerCase();
    const currentList = currentKeyword ? allUsers.filter(u => u.name.toLowerCase().includes(currentKeyword)) : allUsers;
    displayUsers(currentList);
}

// --- 6. NAVIGASI SPA & DETAIL PENGGUNA ---
function handleRoute() {
    const path = window.location.pathname;
    const match = path.match(/\/user\/(\d+)/);

    if (match) {
        const userId = parseInt(match[1]);
        renderDetailUser(userId);
        viewDashboard.style.display = 'none';
        viewDetail.style.display = 'block';
    } else {
        viewDetail.style.display = 'none';
        viewDashboard.style.display = 'block';
    }
}

async function renderDetailUser(userId) {
    const detailContent = document.getElementById('detail-content');
    detailContent.innerHTML = '<p>Memuat detail pengguna...</p>';

    let user = allUsers.find(u => u.id === userId);

    try {
        if (!user) {
            throw new Error('Pengguna tidak ditemukan');
        }

        detailContent.innerHTML = `
            <h2><i class="fa-solid fa-user-tie"></i> ${user.name}</h2>
            <hr style="margin: 10px 0;">
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Telepon:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <p><strong>Perusahaan / Lembaga:</strong> ${user.company.name} (${user.company.catchPhrase})</p>
            <h3 style="margin-top: 15px;">Alamat Lengkap:</h3>
            <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, Kode Pos: ${user.address.zipcode}</p>
        `;
    } catch (error) {
        detailContent.innerHTML = `<p style="color: red;">Gagal memuat detail pengguna: ${error.message}</p>`;
    }
}

// --- 7. TEMA GELAP / TERANG ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeText.textContent = 'Mode Terang';
        themeToggle.querySelector('i').className = 'fa-solid fa-sun';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeText.textContent = isDark ? 'Mode Terang' : 'Mode Gelap';
    themeToggle.querySelector('i').className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}