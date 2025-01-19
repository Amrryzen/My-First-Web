const nama = "Naufal Ammar";
let usia = 20;

let biodata = document.getElementById("biodata");
console.log(biodata);

function generateBiodata() {
    let generasi;
    if (usia >= 46 && usia <= 60) {
        generasi = "Gen X";
    } else if (usia >= 29 && usia <= 45) {
        generasi = "Gen Y atau Millenials";
    } else if (usia >= 61 & usia <= 79) {
        generasi = "Gen Baby Boomers";
    } else if (usia >= 15 && usia <= 28) {
        generasi = "Gen Z";
    } else {
        generasi = "Gen Alpha";
    }
    return biodata.innerHTML = generasi;
    //return console.log(`Nama saya ${nama}, saya berusia ${usia} tahun, saya merupakan ${generasi}.`);
}

generateBiodata();