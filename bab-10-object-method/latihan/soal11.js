// nomor 11

const game = {
    pemain : "radit",
    nyawa : 100,
    
    terkenaSerangan: function (damage) {
        this.nyawa -= damage;
        console.log(this.pemain + " terkena serangan! Nyawa tersisa:", this.nyawa);
    },

    sisaNyawa: function (level) {
        console.log("Nyawa Sekarang :" + this.nyawa)
    }
}


game.terkenaSerangan(30);
game.sisaNyawa(70);