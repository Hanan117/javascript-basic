//Bonus

const playlist = {
  namaPlaylist: "My Playlist",
  lagu: [],

  tambahLagu(judul) {
    this.lagu.push(judul);
  },

  hapusLagu(index) {
    this.lagu.splice(index, 1);
  },

  tampilkanPlaylist() {
    console.log("=== PLAYLIST ===");
    this.lagu.forEach((lagu, index) => {
      console.log(`${index + 1}. ${lagu}`);
    });
  },
};

playlist.tambahLagu("Hymn for the Weekend");
playlist.tambahLagu("Numb");
playlist.tampilkanPlaylist();
