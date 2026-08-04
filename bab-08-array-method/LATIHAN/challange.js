let playlist = [];

playlist.push("Lagu A", "Lagu B", "Lagu C", "Lagu D", "Lagu E");

playlist.pop();

playlist.unshift("Lagu Baru");

console.log("=== Playlist Saya ===\n");

for (let i = 0; i < playlist.length; i++) {
    console.log(`${i + 1}. ${playlist[i]}`);
}

console.log(`\nTotal Lagu : ${playlist.length}`);