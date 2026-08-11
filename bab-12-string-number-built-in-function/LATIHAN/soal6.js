// nomor 6

const url = "https://santri.dev";

const dimana = url.startsWith("https");
if (dimana) {
	console.log("menggunakan https :" + dimana);
}

const posisi = url.endsWith(".dev");
if (posisi) {
	console.log("Domain .dev :" + posisi);
}
