// untuk 05_form Peminjaman
let gambarKe = 1;
function gantiFasilitas(arah){
    gambarKe=gambarKe+arah;
    if(gambarKe == 0) gambarKe = 4;
    else if(gambarKe == 5) gambarKe = 1;

    console.log(gambarKe);

    if(gambarKe == 1){
        document.querySelector('.telusuri').style.backgroundImage = "url('images/ruang1.png')";
    }
    else if(gambarKe == 2){
        document.querySelector('.telusuri').style.backgroundImage = "url('images/ruang2.png')";
    }
    else if(gambarKe == 3){
        document.querySelector('.telusuri').style.backgroundImage = "url('images/ruang3.png')";
    }
    else if(gambarKe == 4){
        document.querySelector('.telusuri').style.backgroundImage = "url('images/ruang4.png')";
    }
}

let bijiKe=1;
function biji(idx){
    document.querySelectorAll('.bidji').forEach(function(div) {
        div.classList.remove('bidji');
        div.classList.add('biji');
    });
    var img = "images/denah" + idx + ".png";
    document.getElementById('biji' + idx).classList.add('bidji');
    bijiKe = idx;
    document.getElementById('gambar-denah').setAttribute("src", img);
}

function bijii(move){
    bijiKe = bijiKe+move;
    if(bijiKe == 4) bijiKe = 1;
    else if(bijiKe == 0) bijiKe = 3;

    document.querySelectorAll('.bidji').forEach(function(div) {
        div.classList.remove('bidji');
        div.classList.add('biji');
    });
    var img = "images/denah" + bijiKe + ".png";
    document.getElementById('biji'+bijiKe).classList.add('bidji');
    document.getElementById('gambar-denah').setAttribute("src",img);
}

function ubahKonten(konten) {
    var namaKotak = document.getElementById('nama-kotak-bawah');
    var jumlahKotak = document.getElementById('jumlah-kotak-bawah');

    namaKotak.textContent = konten;
    if (konten === 'Booking Sekarang!') {
        jumlahKotak.innerHTML = '<img src="images/search.png" style="margin: -20px 0 0 55px; transform: scale(0.25)"/><span style="margin-top: 25px; font-weight: bold; color: white; font-size: 30px; margin: 35px 40px 0 0"></span>';
    } else {
        jumlahKotak.innerHTML = '<img src="images/icon_orang.png" style="margin: -20px 0 0 55px; transform: scale(0.25)"/><span style="margin-top: 25px; font-weight: bold; color: white; font-size: 30px; margin: 35px 40px 0 0">1-10+</span>';
    }
}


// untuk 01_Beranda_testimoni.html
function changeImage(filename, person){
    let img = document.querySelector("#gambar-testi");
    img.setAttribute("src", filename);
    
    // Menghilangkan kelas 'clicked' dari semua gambar
    document.querySelectorAll('.testi-bawah img').forEach(function(img) {
        img.classList.remove('clicked');
    });

    // Menambahkan kelas 'clicked' ke gambar yang diklik
    var kecil = document.querySelector('.testi-bawah li:nth-child(' + person + ') img');
    kecil.classList.add('clicked');
    
    if(person == 1){
        document.getElementById("comment-testi").innerHTML="PPTI benar-benar bermanfaat buat aku. Gak cuma belajar, di sini juga dipersiapkan untuk masuk dunia kerja. Tidak usah khawatir teman-teman di sini juga supportif saat kita kesusahan belajar";
        document.getElementById("comment-nama").innerHTML="Ivan Bryliant";
    }
    else if(person == 2){
        document.getElementById("comment-testi").innerHTML="Belajar di PPTI itu anugrah banget buat aku! Diajar oleh dosen profesional, terus ketemu sama sahabat baru! It’s a real definition of “Beyond Blesses”!!";
        document.getElementById("comment-nama").innerHTML="Nikita";
    }
    else if(person == 3){
        document.getElementById("comment-testi").innerHTML="Yang aku terima di PPTI itu paket komplit. Tidak hanya belajar akuntansi, kita juga belajar me-manage waktu, uang saku, belajar organisasi, belajar untuk saling support dan peduli";
        document.getElementById("comment-nama").innerHTML="Yosua Sugihartono";
    }
    else if(person == 4){
        document.getElementById("comment-testi").innerHTML="Ga nyangka banget bisa keterima masuk PPTI, suatu berkat yang dikasih Tuhan. Selain kesempatan bergabung dengan BCA, aku juga diperkenalkan dengan teman-teman keren yang berasal dari berbagai daerah.";
        document.getElementById("comment-nama").innerHTML="Angelina Joyvina";
    }
    else if(person == 5){
        document.getElementById("comment-testi").innerHTML="Berbagai pengalaman aku dapatkan, mulai dari dosen berkualitas hingga aktivitas dimana kami bisa bebas mengekspresikan diri. Saya sangat bersyukur karena mendapat bonus menemukan keluarga baru di PPTI!";
        document.getElementById("comment-nama").innerHTML="Yedija Hazael Tanudjaya";
    }
}


const loginButton = document.querySelector('.btn');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input');
const passwordVisibilityIcon = document.querySelector('.icon ion-icon');
const registerLink = document.querySelector('.register-link');

loginButton.addEventListener('click', function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === '' || password === '') {
        alert('Email dan password harus diisi!');
    } else {
        alert(`Email: ${email}, Password: ${password}`);
    }
});

passwordVisibilityIcon.addEventListener("click", function() {
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        passwordVisibilityIcon.classList.remove("hide");  
    }
    else{
        passwordInput.type = "password";
        passwordVisibilityIcon.classList.add("hide");    
    }
});


registerLink.addEventListener('click', function(event) {
    event.preventDefault(); 

    alert('Anda akan dialihkan ke halaman registrasi.');
});


