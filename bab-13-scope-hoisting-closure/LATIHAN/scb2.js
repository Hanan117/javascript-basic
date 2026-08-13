

function buatSession(username) {
    // Data PRIVATE
    let isLogin = true;

    return {
        cekStatus() {
            console.log(`User: ${username}`);

            if (isLogin) {
                console.log("Status: Login");
            } else {
                console.log("Status: Logout");
            }

            console.log("");
        },

        logout() {
            isLogin = false;
            console.log("Logout berhasil.");
            console.log("");
        },

        login() {
            isLogin = true;
            console.log("Login berhasil.");
            console.log("");
        }
    };
}


// ==========================
// SESSION BUDI
// ==========================

const sessionBudi = buatSession("budi123");

sessionBudi.cekStatus();

sessionBudi.logout();

sessionBudi.cekStatus();


// ==========================
// SESSION BUDI & ANI
// ==========================

const sessionBudi2 = buatSession("budi123");
const sessionAni = buatSession("ani456");

sessionBudi2.logout();

sessionBudi2.cekStatus();
sessionAni.cekStatus();


// ==========================
// DATA PRIVATE
// ==========================

console.log(sessionBudi2.isLogin);