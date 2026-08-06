// soal 9

const akunBank = {
    pemilik : "ahmad", 
    saldo : 10000,

    setor (jumlah) {
        this.saldo += jumlah;
        console.log("Saldo sekarang: Rp" + this.saldo);
    }

};



akunBank.setor(5000);

