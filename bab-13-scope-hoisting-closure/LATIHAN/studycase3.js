function buatDompet(saldoAwal) {
  let saldo = saldoAwal; 
  return {
    cekSaldo: function() {
      console.log(`Saldo: ${saldo}`);
    },
    
    tambahSaldo: function(jumlah) {
      saldo += jumlah;
      console.log(`Saldo berhasil ditambah: ${saldo}`);
    },
    
    kurangiSaldo: function(jumlah) {
      saldo -= jumlah;
      console.log(`Saldo berhasil dikurangi: ${saldo}`);
    }
  };
}


const dompet = buatDompet(50000);

dompet.cekSaldo();          
dompet.tambahSaldo(25000); 
dompet.kurangiSaldo(10000); 
dompet.cekSaldo();          

// Uji coba akses privat
console.log(dompet.saldo);  