const tanggal = new Date("2026-08-17");

tanggal.setMonth(11)
tanggal.setDate(25)

console.log(
    tanggal.toLocaleString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
);    