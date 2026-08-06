// nomor 13

const rekening = {
    pemilik : "Radit",
    saldo : 10000,

setor(jumlah) {
    this.saldo += jumlah;
    console.log("saldo sekarang : Rp.", this.saldo);
},

tarik(jumlah) {
    this.saldo -= jumlah;
    console.log("saldo tersisa : Rp.", this.saldo);
},


cekSaldo() {
    console.log("Kamu Masih Miskin Rp,", this.saldo);
},

}


rekening.setor(1000);
rekening.tarik(10000);
rekening.cekSaldo();