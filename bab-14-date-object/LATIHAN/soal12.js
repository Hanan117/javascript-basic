const sekarang = new Date("2026-08-13");
const deadline = new Date("2026-08-20");
const deadline1 = true;

const selisihMs = deadline - sekarang;
const selisihHari = Math.floor(selisihMs / (1000 * 60 * 60 * 24));



console.log(
    deadline.toLocaleString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
);    

console.log("Sisa waktu:", selisihHari, "hari");

if (selisihHari < 0) {
    console.log(`Sisa waktu: ${selisihHari} hari lagi`);
} else {
    console.log("Deadline sudah terlewat.");
}


