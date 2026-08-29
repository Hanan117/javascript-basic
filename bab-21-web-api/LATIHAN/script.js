document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const usersContainer = document.getElementById("users-container");
  const loadingIndicator = document.getElementById("loading-indicator");
  const errorMessage = document.getElementById("error-message");
  const searchInput = document.getElementById("search-input");
  
  const viewDashboard = document.getElementById("view-dashboard");
  const viewDetail = document.getElementById("view-detail");
  const detailContent = document.getElementById("detail-content");
  const btnBack = document.getElementById("btn-back");

  // Elemen Toggle Tema
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");

  let allUsers = [];

  // 1. Logika Mode Gelap / Terang (Dark/Light Mode)
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.className = "fa-solid fa-sun";
    themeText.textContent = "Mode Terang";
  }

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      themeIcon.className = "fa-solid fa-moon";
      themeText.textContent = "Mode Gelap";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeIcon.className = "fa-solid fa-sun";
      themeText.textContent = "Mode Terang";
    }
  });

  // 2. Ambil Data Pengguna dari API
  async function fetchUsers() {
    try {
      loadingIndicator.style.display = "block";
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Gagal mengambil data dari server.");
      
      allUsers = await response.json();
      renderUsers(allUsers);
    } catch (error) {
      errorMessage.textContent = error.message;
    } finally {
      loadingIndicator.style.display = "none";
    }
  }

  // 3. Render Kartu Pengguna ke DOM
  function renderUsers(users) {
    usersContainer.innerHTML = "";
    
    if (users.length === 0) {
      usersContainer.innerHTML = `<p style="text-align: center; grid-column: 1/-1;">Tidak ada pengguna ditemukan.</p>`;
      return;
    }

    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <div class="user-info" onclick="viewUserDetail(${user.id})" style="cursor: pointer;">
          <h3><i class="fa-solid fa-user"></i> ${user.name}</h3>
          <p><i class="fa-solid fa-at"></i> @${user.username}</p>
          <p><i class="fa-solid fa-envelope"></i> ${user.email}</p>
          <p><i class="fa-solid fa-city"></i> ${user.address ? user.address.city : '-'}</p>
        </div>
        <div class="card-actions">
          <button class="btn-edit" onclick="editUser(event, ${user.id})">
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </button>
          <button class="btn-delete" onclick="deleteUser(event, ${user.id})">
            <i class="fa-solid fa-trash"></i> Delete
          </button>
        </div>
      `;
      usersContainer.appendChild(card);
    });
  }

  // 4. Fitur Pencarian (Search)
  searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = allUsers.filter(user => 
      user.name.toLowerCase().includes(keyword) || 
      user.username.toLowerCase().includes(keyword)
    );
    renderUsers(filtered);
  });

  // 5. Fitur Delete Pengguna
  window.deleteUser = function(event, id) {
    event.stopPropagation();
    if (confirm("Apakah Anda yakin ingin menghapus pengguna ini?")) {
      allUsers = allUsers.filter(user => user.id !== id);
      renderUsers(allUsers);
    }
  };

  // 6. Fitur Edit Pengguna
  window.editUser = function(event, id) {
    event.stopPropagation();
    const userToEdit = allUsers.find(user => user.id === id);
    if (!userToEdit) return;

    const newName = prompt("Edit Nama Pengguna:", userToEdit.name);
    const newEmail = prompt("Edit Email Pengguna:", userToEdit.email);

    if (newName !== null && newEmail !== null) {
      allUsers = allUsers.map(user => {
        if (user.id === id) {
          return { ...user, name: newName, email: newEmail };
        }
        return user;
      });
      renderUsers(allUsers);
    }
  };

  // 7. Lihat Detail Pengguna (SPA View)
  window.viewUserDetail = function(id) {
    const user = allUsers.find(u => u.id === id);
    if (!user) return;

    detailContent.innerHTML = `
      <h2>Detail Pengguna</h2>
      <p><strong>Nama:</strong> ${user.name}</p>
      <p><strong>Username:</strong> @${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Telepon:</strong> ${user.phone || '-'}</p>
      <p><strong>Website:</strong> ${user.website || '-'}</p>
      <p><strong>Kota:</strong> ${user.address ? user.address.city : '-'}</p>
    `;

    viewDashboard.style.display = "none";
    viewDetail.style.display = "block";
  };

  // Tombol Kembali dari Detail
  btnBack.addEventListener("click", () => {
    viewDetail.style.display = "none";
    viewDashboard.style.display = "block";
  });

  // Inisialisasi awal
  fetchUsers();
});