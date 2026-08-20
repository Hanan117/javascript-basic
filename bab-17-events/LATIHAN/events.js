const form = document.getElementById("bookingForm");
const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const inputFilm = document.getElementById("film");
const errorAlert = document.getElementById("errorAlert");
const ticketListContainer = document.getElementById("ticketListContainer");
const resetBtn = document.getElementById("resetBtn");

let listTiket = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const film = inputFilm.value.trim();

  if (nama === "" || email === "" || film === "") {
    errorAlert.style.display = "block";
    return;
  }

  errorAlert.style.display = "none";

  const tiketBaru = { id: Date.now(), nama, email, film };
  listTiket.push(tiketBaru);

  renderTiket();
  form.reset();
});

resetBtn.addEventListener("click", () => {
  form.reset();
  errorAlert.style.display = "none";
});

function renderTiket() {
  if (listTiket.length === 0) {
    ticketListContainer.innerHTML = `<p class="empty-state">Belum ada tiket yang dipesan.</p>`;
    return;
  }

  ticketListContainer.innerHTML = "";
  listTiket.forEach((tiket) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("ticket-item");
    itemDiv.innerHTML = `
            <div>
                <strong>${tiket.film}</strong><br>
                <small>${tiket.nama} (${tiket.email})</small>
            </div>
            <button class="btn-delete" onclick="hapusTiket(${tiket.id})">Hapus</button>
        `;
    ticketListContainer.appendChild(itemDiv);
  });
}

function hapusTiket(id) {
  listTiket = listTiket.filter((tiket) => tiket.id !== id);
  renderTiket();
}
