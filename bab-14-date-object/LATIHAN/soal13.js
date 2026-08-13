const tanggalTransaksi = new Date("2026-08-13");
const jatuhTempo= new Date("2026-08-20");


console.log(
    "Tanggal Transaksi:" + " " +
    tanggalTransaksi.toLocaleString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
);

console.log(
    "Jatuh Tempo:" + " " +
    jatuhTempo.toLocaleString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
);




