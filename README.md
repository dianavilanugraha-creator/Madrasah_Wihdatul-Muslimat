# Website Madrasah Diniyah Takmiliyah Wihdatul Muslimat

## Deskripsi Proyek

Proyek ini merupakan website edukasi untuk **Madrasah Diniyah Takmiliyah Wihdatul Muslimat** yang berada di Menteng, Jakarta Pusat. Website dibuat untuk memperkenalkan profil madrasah, kurikulum, wawasan pendidikan agama, kegiatan santri, galeri foto, dan informasi kontak.

Website ini termasuk jenis **single-page website**, yaitu seluruh isi utama berada dalam satu halaman `index.html`. Ketika menu navigasi diklik, halaman akan bergulir menuju bagian yang dipilih tanpa membuka halaman HTML baru.

## Tujuan Pembuatan Website

Tujuan dari pembuatan website ini adalah:

1. Menyediakan informasi mengenai Madrasah Wihdatul Muslimat.
2. Menampilkan mata pelajaran yang diajarkan di madrasah.
3. Memberikan wawasan tentang pentingnya pendidikan agama bagi anak.
4. Menampilkan kegiatan dan dokumentasi madrasah.
5. Memudahkan pengunjung melihat alamat dan kontak madrasah.
6. Menerapkan dasar-dasar HTML, CSS, dan JavaScript dalam sebuah proyek website.

## Teknologi yang Digunakan

| Teknologi | Fungsi |
| --- | --- |
| HTML5 | Membuat struktur dan isi halaman website. |
| CSS3 | Mengatur warna, ukuran, posisi, animasi, dan tampilan responsif. |
| JavaScript | Memberikan fungsi interaktif pada menu, galeri, form, dan tombol kembali ke atas. |
| Google Fonts | Menyediakan font `DM Sans` dan `Playfair Display`. |

Proyek ini menggunakan **JavaScript murni atau Vanilla JavaScript**, sehingga tidak memakai framework seperti Bootstrap, React, atau Vue.

## Struktur File

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── logo-madrasah.jpg
    ├── identitas.jpg
    ├── kegiatan-1.jpeg
    ├── kegiatan-2.jpeg
    ├── kegiatan-4.jpeg
    ├── kegiatan-5.jpeg
    ├── kegiatan-6.jpeg
    ├── kegiatan-7.jpeg
    ├── kegiatan-8.jpeg
    ├── kegiatan-9.jpeg
    ├── kegiatan-10.jpeg
    ├── kegiatan-11.jpeg
    ├── kegiatan-12.jpeg
    ├── kegiatan-13.jpeg
    ├── kegiatan-14.jpeg
    ├── kegiatan-15.jpeg
    ├── kegiatan-16.jpeg
    └── kegiatan-17.jpeg
```

Keterangan:

- `index.html` berisi kerangka dan semua isi website.
- `style.css` berisi aturan tampilan website.
- `script.js` berisi fungsi interaktif website.
- Folder `assets` menyimpan logo dan foto yang dipakai oleh website.
- `README.md` berisi dokumentasi dan penjelasan proyek.

## Cara Menjalankan Website

1. Pastikan `index.html`, `style.css`, dan `script.js` berada dalam folder yang sama.
2. Pastikan semua gambar berada di dalam folder `assets`.
3. Buka file `index.html` menggunakan browser.
4. Agar lebih mudah saat mengembangkan website, proyek juga dapat dibuka melalui ekstensi **Live Server** di Visual Studio Code.

Contoh susunan alamat file yang benar:

```text
nama-folder/index.html
nama-folder/style.css
nama-folder/script.js
nama-folder/assets/logo-madrasah.jpg
```

## Cara Kerja Ketiga File

Ketiga file saling berhubungan sebagai berikut:

| File | Peran dalam Website |
| --- | --- |
| `index.html` | Menentukan elemen apa saja yang tampil, seperti judul, paragraf, gambar, tombol, dan form. |
| `style.css` | Mempercantik elemen HTML dan mengatur susunan halaman pada komputer, tablet, serta ponsel. |
| `script.js` | Mengambil elemen HTML melalui `id` atau `class`, kemudian memberikan respons terhadap tindakan pengguna. |

Pada bagian `<head>`, HTML memanggil file CSS:

```html
<link rel="stylesheet" href="style.css">
```

Pada bagian paling bawah `<body>`, HTML memanggil file JavaScript:

```html
<script src="script.js"></script>
```

JavaScript ditempatkan di bagian bawah agar seluruh elemen HTML sudah dibuat oleh browser sebelum JavaScript mencoba mencarinya.

---

# Penjelasan `index.html`

## 1. Deklarasi dan Bagian `<head>`

```html
<!DOCTYPE html>
<html lang="id">
```

- `<!DOCTYPE html>` memberi tahu browser bahwa dokumen menggunakan HTML5.
- `<html lang="id">` menandakan bahwa bahasa utama website adalah Bahasa Indonesia.

Bagian `<head>` menyimpan informasi mengenai halaman, tetapi sebagian besar tidak terlihat langsung di dalam isi website.

```html
<meta charset="UTF-8">
```

Kode tersebut membuat browser dapat menampilkan berbagai karakter dengan benar, termasuk tanda baca dan huruf khusus.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Kode `viewport` membuat ukuran halaman menyesuaikan lebar perangkat. Bagian ini penting agar website dapat tampil dengan baik pada ponsel.

```html
<meta name="description" content="...">
```

`description` berisi ringkasan website yang dapat digunakan oleh mesin pencari.

```html
<title>Madrasah Wihdatul Muslimat | Portal Edukasi</title>
```

`title` menentukan tulisan yang tampil pada tab browser.

## 2. Header dan Navigasi

```html
<header class="header">
```

`header` merupakan bagian paling atas website. Di dalamnya terdapat logo, nama madrasah, tombol menu ponsel, dan navigasi.

```html
<a class="brand" href="#beranda">
```

Elemen tersebut menjadi identitas atau merek website. Nilai `href="#beranda"` membuat pengguna kembali ke bagian beranda ketika logo atau nama madrasah diklik.

```html
<button class="menu" id="menuBtn" aria-label="Buka menu">☰</button>
```

Tombol ini dipakai untuk membuka dan menutup menu pada layar kecil. Penjelasannya adalah:

- `class="menu"` digunakan oleh CSS untuk mengatur tampilan tombol.
- `id="menuBtn"` digunakan JavaScript untuk menemukan tombol.
- `aria-label="Buka menu"` membantu pembaca layar memahami fungsi tombol.
- Simbol `☰` dikenal sebagai ikon hamburger menu.

```html
<nav id="navMenu">
```

`nav` merupakan elemen semantik untuk kumpulan menu navigasi. Setiap tautan mengarah ke `id` bagian tertentu, misalnya `href="#profil"` mengarah ke `<section id="profil">`.

## 3. Elemen `<main>`

Elemen `<main>` membungkus isi utama website. Di dalamnya terdapat beberapa `section` atau bagian halaman.

### A. Bagian Beranda atau Hero

```html
<section id="beranda" class="hero">
```

Bagian hero merupakan tampilan pertama yang dilihat pengunjung. Bagian ini terdiri dari:

- `.hero-bg` sebagai gambar latar belakang.
- `.hero-shade` sebagai lapisan warna gelap di atas gambar agar tulisan lebih mudah dibaca.
- `.hero-content` sebagai tempat teks dan kartu identitas madrasah.
- `.hero-copy` sebagai tempat judul, paragraf, dan tombol.
- `.hero-card` sebagai kartu berisi logo, moto, dan nomor statistik madrasah.
- `.scroll-hint` sebagai petunjuk agar pengguna menggulir halaman.

Tag `<h1>` dipakai untuk judul utama halaman. Tag `<em>` pada sebagian judul digunakan agar bagian tersebut dapat diberi warna emas oleh CSS.

```html
<a class="btn gold" href="#kurikulum">Lihat Kurikulum</a>
```

Elemen ini sebenarnya merupakan tautan, tetapi tampil seperti tombol karena memiliki class `btn` dan `gold`.

### B. Bagian Profil

```html
<section id="profil" class="section">
```

Bagian profil menjelaskan identitas dan sejarah singkat madrasah. Class `.profile-grid` membagi isi menjadi dua kolom:

1. Kolom kiri berisi judul, penjelasan, dan data singkat.
2. Kolom kanan berisi foto papan identitas madrasah.

Class `.facts` berisi empat informasi utama, yaitu tahun berdiri, nomor statistik, jenjang dasar, dan jenjang lanjutan.

### C. Bagian Kurikulum

```html
<section id="kurikulum" class="section soft">
```

Bagian ini menampilkan tujuh mata pelajaran. Setiap mata pelajaran menggunakan tag `<article>` karena setiap kartu mempunyai isi yang dapat dipahami sebagai satu pembahasan tersendiri.

```html
<article class="subject featured">
```

Class `subject` memberikan bentuk dasar kartu, sedangkan class `featured` memberikan garis hijau yang lebih tebal agar kartu Tauhid terlihat menonjol.

`curriculum-note` berisi catatan dan tautan menuju sumber Kementerian Agama. Pada tautan tersebut terdapat:

- `target="_blank"` untuk membuka halaman pada tab baru.
- `rel="noopener"` untuk menambah keamanan saat membuka situs lain pada tab baru.

### D. Bagian Wawasan Edukasi

```html
<section id="wawasan" class="section insight">
```

Bagian ini menjelaskan pentingnya pendidikan agama bagi anak. Susunannya terdiri dari:

- Satu kartu besar yang berisi kutipan dan penjelasan utama.
- Empat kartu kecil yang membahas karakter, moral digital, kesehatan mental, dan kecerdasan spiritual.
- Satu kotak referensi yang menjelaskan pengertian Madrasah Diniyah Takmiliyah.

### E. Bagian Kegiatan

```html
<section id="kegiatan" class="section soft">
```

Bagian kegiatan menggunakan empat kartu untuk menampilkan:

1. Rihlah.
2. Pesantren Kilat.
3. Kegiatan Belajar Mengajar atau KBM.
4. Jumat Berkah.

Setiap kartu memiliki gambar, kategori kegiatan, judul, dan deskripsi. Tag `alt` pada gambar menjelaskan isi gambar jika gambar gagal dimuat dan juga membantu aksesibilitas.

### F. Bagian Galeri

```html
<section id="galeri" class="section gallery-section">
```

Bagian galeri mempunyai tombol filter dan kumpulan foto. Setiap tombol menyimpan kategori melalui atribut `data-filter`.

```html
<button class="filter" data-filter="kbm">KBM</button>
```

Setiap foto menyimpan kategori melalui atribut `data-cat`.

```html
<figure data-cat="kbm">
```

JavaScript membandingkan `data-filter` pada tombol dengan `data-cat` pada foto. Jika kategorinya tidak sama, foto diberi class `hide` sehingga tidak ditampilkan.

Tag yang digunakan pada setiap gambar adalah:

- `<figure>` untuk membungkus gambar dan keterangannya.
- `<img>` untuk menampilkan gambar.
- `<figcaption>` untuk memberikan keterangan gambar.

Nilai kategori bersifat **case-sensitive**, artinya huruf besar dan kecil dianggap berbeda. Pada kode saat ini, kategori `Madrasah` pada tombol dan gambar sama-sama memakai huruf `M` besar sehingga masih dapat bekerja.

### G. Bagian Call to Action

```html
<section class="cta-section">
```

CTA merupakan singkatan dari **Call to Action**, yaitu bagian yang mengajak pengunjung melakukan sesuatu. Pada website ini, pengunjung diajak mengikuti akun Instagram madrasah.

### H. Bagian Kontak dan Form

```html
<section id="kontak" class="section contact">
```

Bagian kontak dibagi menjadi dua kolom:

1. Informasi alamat, nomor statistik, telepon, email, dan Instagram.
2. Form untuk menulis pertanyaan.

Pada input terdapat atribut `required`, sehingga browser meminta pengguna mengisi kolom sebelum form diproses. Input email menggunakan `type="email"`, sehingga browser juga memeriksa bentuk dasar alamat email.

Form ini masih merupakan **form demo**. Saat tombol diklik, data tidak dikirim ke email, server, atau database. JavaScript hanya menampilkan pesan berhasil pada halaman lalu mengosongkan form.

## 4. Footer, Tombol Atas, dan Pemanggilan JavaScript

```html
<footer>...</footer>
```

`footer` merupakan bagian penutup website. Bagian ini menampilkan nama, lokasi, tahun berdiri, dan tautan Instagram.

```html
<button class="top" id="topBtn">↑</button>
```

Tombol tersebut akan muncul setelah halaman digulir lebih dari 450 piksel. Ketika diklik, halaman kembali ke posisi paling atas secara halus.

```html
<script src="script.js"></script>
```

Kode ini menghubungkan HTML dengan file JavaScript.

## Tag HTML Penting yang Digunakan

| Tag | Fungsi |
| --- | --- |
| `<header>` | Membungkus kepala halaman dan navigasi. |
| `<nav>` | Membungkus menu navigasi. |
| `<main>` | Membungkus isi utama website. |
| `<section>` | Membagi halaman menjadi beberapa bagian. |
| `<article>` | Membungkus satu konten yang dapat berdiri sebagai pembahasan sendiri. |
| `<figure>` | Membungkus gambar beserta keterangannya. |
| `<figcaption>` | Memberikan keterangan pada gambar. |
| `<form>` | Membuat bagian formulir. |
| `<label>` | Memberikan label pada input. |
| `<input>` | Menerima teks pendek dari pengguna. |
| `<textarea>` | Menerima pesan yang lebih panjang. |
| `<footer>` | Membuat bagian penutup website. |

## Perbedaan `class` dan `id`

- `class` dapat digunakan oleh banyak elemen. Contohnya, class `btn` digunakan pada beberapa tombol.
- `id` seharusnya unik dalam satu halaman. Contohnya, `id="contactForm"` hanya digunakan oleh satu form.
- CSS biasanya memilih class menggunakan tanda titik, misalnya `.btn`.
- CSS atau JavaScript memilih id menggunakan tanda pagar atau fungsi pencarian id, misalnya `#contactForm` atau `getElementById('contactForm')`.

---

# Penjelasan `style.css`

## 1. Mengambil Font dari Google Fonts

```css
@import url('https://fonts.googleapis.com/...');
```

`@import` mengambil font `DM Sans` dan `Playfair Display` dari Google Fonts. `DM Sans` dipakai untuk teks umum, sedangkan `Playfair Display` dipakai untuk judul agar terlihat lebih formal.

Jika perangkat tidak terhubung ke internet, browser akan memakai font cadangan seperti Arial atau Georgia.

## 2. Variabel Warna pada `:root`

```css
:root {
  --green: #006b35;
  --gold: #f1cc45;
  --cream: #fffdf7;
}
```

`:root` digunakan untuk membuat variabel CSS yang dapat dipakai berulang kali. Contohnya, `var(--green)` mengambil warna dari variabel `--green`. Cara ini membuat warna website lebih konsisten dan lebih mudah diganti.

Variabel yang digunakan pada proyek ini adalah:

| Variabel | Kegunaan Umum |
| --- | --- |
| `--green` | Warna hijau utama. |
| `--deep` | Warna hijau gelap untuk hero, CTA, dan footer. |
| `--green2` | Warna hijau terang untuk aksen. |
| `--gold` | Warna emas untuk tombol dan bagian penting. |
| `--cream` | Warna latar utama halaman. |
| `--soft` | Warna hijau sangat muda untuk latar section. |
| `--ink` | Warna teks utama. |
| `--muted` | Warna teks sekunder. |
| `--line` | Warna garis atau border. |
| `--white` | Warna putih. |
| `--shadow` | Bentuk bayangan yang digunakan pada kartu. |

## 3. Aturan Dasar Website

```css
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
```

- Selector `*` memilih seluruh elemen.
- `box-sizing: border-box` membuat perhitungan ukuran elemen lebih mudah karena padding dan border masuk ke dalam lebar elemen.
- `scroll-behavior: smooth` membuat perpindahan menuju bagian tertentu berlangsung halus.

Aturan `body` menghapus jarak bawaan browser, menentukan font, warna, latar, dan jarak antarbaris. Class `.container` membatasi lebar isi maksimal 1140 piksel, tetapi tetap memakai 92% lebar layar pada perangkat yang lebih kecil.

## 4. Header dan Navigasi

| Selector | Fungsi |
| --- | --- |
| `.header` | Membuat header tetap menempel di atas dengan `position: sticky`. |
| `.nav` | Menyusun logo dan menu secara mendatar menggunakan Flexbox. |
| `.brand` | Menyusun logo dengan nama madrasah dan menghapus garis bawah tautan. |
| `.brand img` | Membuat logo berbentuk lingkaran berukuran 48 × 48 piksel. |
| `.brand b` | Mengatur tulisan nama madrasah. |
| `.brand small` | Mengatur subjudul madrasah dengan ukuran lebih kecil. |
| `nav` | Menyusun seluruh menu secara mendatar. |
| `nav a` | Mengatur tampilan setiap tautan menu. |
| `nav a:hover` | Mengubah warna menu saat kursor diarahkan ke menu. |
| `.menu` | Mengatur tombol hamburger yang awalnya disembunyikan pada layar besar. |

`z-index: 50` pada header membuat header berada di atas elemen lain saat halaman digulir. `backdrop-filter: blur(14px)` memberikan efek kaca buram pada latar header.

## 5. Hero atau Beranda

| Selector | Fungsi |
| --- | --- |
| `.hero` | Menentukan tinggi, warna, dan posisi bagian beranda. |
| `.hero-bg` | Menampilkan gambar kegiatan sebagai latar penuh. |
| `.hero-shade` | Memberikan lapisan gradasi gelap di atas gambar. |
| `.hero-content` | Membuat dua kolom untuk teks dan kartu logo menggunakan CSS Grid. |
| `.eyebrow` | Mengatur teks kecil di atas judul. |
| `.light` | Mengubah warna teks kecil menjadi emas. |
| `h1, h2` | Menggunakan font Playfair Display dan jarak baris yang lebih rapat. |
| `h1` | Mengatur ukuran judul utama secara responsif menggunakan `clamp()`. |
| `h1 em` | Memberi warna emas pada bagian judul tertentu. |
| `.actions` | Menyusun tombol-tombol hero dengan Flexbox. |
| `.btn` | Membuat bentuk dasar tombol yang dapat dipakai ulang. |
| `.gold` | Memberikan warna emas pada tombol. |
| `.glass` | Membuat tombol transparan seperti kaca. |
| `.hero-card` | Membuat kartu logo transparan dengan sudut membulat. |
| `.hero-card img` | Membuat logo besar berbentuk lingkaran dengan garis emas. |
| `.scroll-hint` | Meletakkan petunjuk gulir di bawah hero. |

Fungsi `clamp(43px, 6vw, 72px)` berarti ukuran judul minimal 43 piksel, mengikuti lebar layar sebesar `6vw`, dan maksimal 72 piksel.

## 6. Section Umum dan Profil

| Selector | Fungsi |
| --- | --- |
| `.section` | Memberikan jarak atas dan bawah sebesar 92 piksel. |
| `.soft` | Memberikan latar hijau muda. |
| `.profile-grid, .contact-grid` | Membuat susunan dua kolom. |
| `.facts` | Menyusun kotak fakta dalam dua kolom. |
| `.facts div` | Memberikan latar, border, padding, dan sudut membulat pada fakta. |
| `.facts b` | Menonjolkan nilai utama dengan warna hijau. |
| `.facts span` | Mengatur keterangan fakta dengan teks kecil. |
| `.profile-photo` | Menjadi acuan posisi untuk foto dan caption. |
| `.profile-photo img` | Membuat foto memenuhi kolom dengan sudut membulat dan bayangan. |
| `.photo-caption` | Dirancang sebagai caption yang berada di atas bagian bawah foto. |

## 7. Kurikulum

| Selector | Fungsi |
| --- | --- |
| `.section-head` | Menyusun judul bagian dan penjelasan secara bersebelahan. |
| `.subject-grid` | Membuat daftar mata pelajaran dalam dua kolom. |
| `.subject` | Membuat bentuk kartu mata pelajaran. |
| `.subject > span` | Membuat nomor mata pelajaran berbentuk lingkaran. |
| `.subject h3` | Mengatur judul mata pelajaran. |
| `.subject p` | Mengatur deskripsi mata pelajaran. |
| `.subject.featured` | Memberikan border lebih tebal pada mata pelajaran pilihan. |
| `.curriculum-note` | Membuat kotak catatan kurikulum. |

Tanda `>` pada `.subject > span` berarti CSS hanya memilih `span` yang menjadi anak langsung dari elemen `.subject`.

## 8. Wawasan Edukasi

| Selector | Fungsi |
| --- | --- |
| `.insight` | Memberikan latar putih pada bagian wawasan. |
| `.insight-grid` | Membagi isi menjadi kartu besar dan daftar kartu kecil. |
| `.insight-card` | Membuat kartu utama berwarna hijau gelap. |
| `.insight-card .quote` | Membuat simbol kutip berukuran besar dan berwarna emas. |
| `.insight-list` | Menyusun empat wawasan dalam dua kolom. |
| `.insight-list article` | Membentuk kartu wawasan kecil. |
| `.reference-box` | Membuat kotak referensi dengan garis emas di sebelah kiri. |

## 9. Kegiatan

| Selector | Fungsi |
| --- | --- |
| `.activity-cards` | Membuat empat kolom kartu kegiatan. |
| `.activity-cards article` | Mengatur bentuk dasar setiap kartu. |
| `.activity-img` | Membatasi tinggi dan menyembunyikan bagian gambar yang keluar. |
| `.activity-img img` | Membuat gambar memenuhi kotak dengan `object-fit: cover`. |
| `.activity-cards article:hover img` | Memperbesar gambar sedikit saat kartu disentuh kursor. |
| `.activity-cards article > div:last-child` | Memberikan ruang pada bagian teks kartu. |
| `.activity-cards span` | Mengatur tulisan kategori kegiatan. |

`transition: .4s` membuat proses pembesaran gambar berlangsung selama 0,4 detik sehingga terlihat halus.

## 10. Galeri dan Filter

| Selector | Fungsi |
| --- | --- |
| `.gallery-section` | Memberikan latar putih pada galeri. |
| `.filters` | Menyusun tombol filter dan mengizinkannya pindah baris. |
| `.filter` | Membuat tombol berbentuk kapsul. |
| `.filter.active, .filter:hover` | Memberi warna hijau pada filter aktif atau saat disentuh kursor. |
| `.gallery-grid` | Menyusun galeri dalam empat kolom. |
| `.gallery-grid figure` | Mengatur bentuk wadah gambar. |
| `.gallery-grid img` | Menyamakan ukuran tampilan gambar. |
| `.gallery-grid figcaption` | Mengatur keterangan gambar. |
| `.gallery-grid figure.hide` | Menyembunyikan foto yang tidak sesuai dengan filter. |

Class `hide` tidak ditulis langsung pada HTML karena class tersebut ditambahkan dan dihapus oleh JavaScript sesuai filter yang dipilih.

## 11. CTA, Kontak, Footer, dan Tombol Atas

| Selector | Fungsi |
| --- | --- |
| `.cta-section` | Membuat bagian ajakan dengan latar hijau gelap. |
| `.cta-box` | Menyusun tulisan CTA dan tombol Instagram. |
| `.contact-list` | Menyusun daftar informasi kontak secara vertikal. |
| `.contact-form` | Membuat form seperti kartu putih dengan bayangan. |
| `.contact-form label` | Mengatur label setiap isian. |
| `.contact-form input, .contact-form textarea` | Mengatur lebar, border, dan ruang dalam kolom isian. |
| `.green` | Memberikan warna hijau pada tombol kirim. |
| `.form-result` | Mengatur tampilan pesan hasil pengiriman form demo. |
| `footer` | Mengatur warna dan jarak bagian penutup. |
| `.footer-grid` | Menyusun informasi footer dan tautan Instagram. |
| `.top` | Membuat tombol kembali ke atas dan menyembunyikannya secara awal. |
| `.top.show` | Menampilkan tombol atas setelah JavaScript menambahkan class `show`. |

## 12. Tampilan Responsif

Responsive design membuat tampilan menyesuaikan ukuran perangkat.

### Layar Maksimal 900 Piksel

```css
@media (max-width: 900px) { ... }
```

Perubahan yang dilakukan adalah:

- Navigasi utama disembunyikan dan berubah menjadi menu vertikal.
- Tombol hamburger mulai ditampilkan.
- Hero, profil, kontak, dan wawasan berubah menjadi satu kolom.
- Kartu kurikulum berubah menjadi satu kolom.
- Kegiatan dan galeri berubah menjadi dua kolom.

### Layar Maksimal 560 Piksel

```css
@media (max-width: 560px) { ... }
```

Perubahan yang dilakukan adalah:

- Ukuran judul utama diperkecil.
- Jarak setiap section diperkecil.
- Tombol, CTA, dan footer disusun ke bawah.
- Fakta, wawasan, kegiatan, dan galeri berubah menjadi satu kolom.
- Tombol dibuat selebar layar.
- Ukuran logo pada kartu hero diperkecil.

## Konsep CSS yang Digunakan

| Konsep | Penjelasan Sederhana |
| --- | --- |
| CSS Variable | Menyimpan warna atau nilai agar dapat dipakai berulang kali. |
| Flexbox | Menyusun elemen dalam satu baris atau satu kolom. |
| CSS Grid | Membuat susunan beberapa baris dan kolom. |
| Pseudo-class `:hover` | Memberi efek ketika kursor berada di atas elemen. |
| Media Query | Mengubah tampilan berdasarkan ukuran layar. |
| Transition | Membuat perubahan tampilan bergerak secara halus. |
| `object-fit: cover` | Membuat gambar memenuhi kotak tanpa terlihat gepeng. |
| `position: sticky` | Membuat header tetap terlihat di bagian atas. |
| `position: absolute` | Menempatkan elemen berdasarkan elemen induknya. |

---

# Penjelasan `script.js`

## 1. Menu Navigasi pada Ponsel

```javascript
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('navMenu');
```

- `const` digunakan untuk membuat variabel yang tidak akan diarahkan ke nilai lain.
- `document.getElementById()` mencari elemen HTML berdasarkan `id`.
- `menuBtn` menyimpan tombol hamburger.
- `nav` menyimpan elemen menu navigasi.

```javascript
menuBtn?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
```

Penjelasan kode:

- `?.` disebut optional chaining. Kode event hanya dijalankan jika `menuBtn` ditemukan.
- `addEventListener('click', ...)` menjalankan fungsi ketika tombol diklik.
- `() => {}` adalah penulisan fungsi panah atau arrow function.
- `nav.style.display` membaca atau mengubah CSS `display` secara langsung.
- Operator ternary `kondisi ? nilai1 : nilai2` merupakan bentuk singkat dari `if...else`.
- Jika menu sedang memiliki `display: flex`, menu disembunyikan menjadi `none`.
- Jika tidak, menu ditampilkan menjadi `flex`.

```javascript
document.querySelectorAll('#navMenu a').forEach(a =>
  a.addEventListener('click', () => {
    if (innerWidth <= 900) nav.style.display = 'none';
  })
);
```

Penjelasan kode:

- `querySelectorAll('#navMenu a')` mengambil seluruh tautan `a` di dalam `navMenu`.
- `forEach()` mengulang setiap tautan yang ditemukan.
- Ketika salah satu menu diklik pada layar maksimal 900 piksel, menu ditutup kembali.
- `innerWidth` berisi lebar bagian dalam jendela browser.

## 2. Filter Galeri

```javascript
const filters = document.querySelectorAll('.filter');
const figures = document.querySelectorAll('#galleryGrid figure');
```

- `filters` menyimpan semua tombol dengan class `filter`.
- `figures` menyimpan semua elemen `figure` di dalam galeri.

```javascript
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(x => x.classList.remove('active'));
  btn.classList.add('active');
  const cat = btn.dataset.filter;
  figures.forEach(fig =>
    fig.classList.toggle(
      'hide',
      cat !== 'all' && fig.dataset.cat !== cat
    )
  );
}));
```

Alur kode tersebut adalah:

1. JavaScript memberikan event klik kepada setiap tombol filter.
2. Class `active` dihapus dari semua tombol.
3. Tombol yang baru diklik diberi class `active`.
4. `btn.dataset.filter` mengambil nilai atribut `data-filter` dari tombol.
5. Setiap gambar diperiksa nilai `data-cat`-nya.
6. Jika kategori tombol bukan `all` dan kategori gambar tidak sama, class `hide` ditambahkan.
7. Jika kategori sesuai, class `hide` dihapus sehingga gambar tampil.

Operator yang digunakan:

- `!==` berarti “tidak sama dengan” dengan pemeriksaan tipe data.
- `&&` berarti kedua kondisi harus benar.
- `classList.add()` menambahkan class.
- `classList.remove()` menghapus class.
- `classList.toggle(class, kondisi)` menambahkan class jika kondisi benar dan menghapusnya jika kondisi salah.

## 3. Form Kontak Demo

```javascript
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  document.getElementById('formResult').textContent =
    `Terima kasih, ${name}. Pesan berhasil dicatat pada demo website.`;
  e.target.reset();
});
```

Penjelasan kode:

- Event `submit` terjadi ketika form dikirim.
- Parameter `e` menyimpan informasi mengenai event yang sedang terjadi.
- `e.preventDefault()` mencegah browser memuat ulang halaman dan mencegah proses kirim bawaan form.
- `.value` mengambil tulisan dari kolom nama.
- `.trim()` menghapus spasi kosong di awal dan akhir nama.
- `.textContent` mengisi teks pada elemen `formResult`.
- Tanda backtick membentuk **template literal**.
- `${name}` memasukkan nilai variabel `name` ke dalam kalimat.
- `e.target` mengarah ke form yang sedang dikirim.
- `.reset()` mengosongkan seluruh isian form.

Kode ini hanya membuat simulasi pesan berhasil. Supaya benar-benar mengirim data, proyek memerlukan backend, API, layanan form, atau integrasi email.

## 4. Tombol Kembali ke Atas

```javascript
const topBtn = document.getElementById('topBtn');
```

Kode tersebut mengambil tombol dengan `id="topBtn"` dari HTML.

```javascript
window.addEventListener('scroll', () =>
  topBtn.classList.toggle('show', window.scrollY > 450)
);
```

- Event `scroll` dijalankan setiap kali halaman digulir.
- `window.scrollY` menunjukkan jarak gulir vertikal dari bagian paling atas.
- Jika jarak lebih dari 450 piksel, class `show` ditambahkan.
- CSS `.top.show` kemudian menampilkan tombol.

```javascript
topBtn.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);
```

Ketika tombol diklik, `window.scrollTo()` memindahkan halaman ke posisi `top: 0`. Nilai `behavior: 'smooth'` membuat perpindahan berlangsung halus.

## Hubungan Elemen HTML dan JavaScript

| Elemen HTML | Dipakai JavaScript untuk |
| --- | --- |
| `#menuBtn` | Mendeteksi klik tombol hamburger. |
| `#navMenu` | Menampilkan atau menyembunyikan navigasi. |
| `.filter` | Mendeteksi tombol kategori galeri yang dipilih. |
| `#galleryGrid figure` | Menampilkan atau menyembunyikan foto galeri. |
| `#contactForm` | Mendeteksi proses pengiriman form. |
| `#name` | Mengambil nama pengguna. |
| `#formResult` | Menampilkan pesan berhasil. |
| `#topBtn` | Menampilkan tombol dan mengembalikan halaman ke atas. |

## Alur Interaksi Pengguna

1. Website dibuka dan browser membaca `index.html`.
2. Browser mengambil `style.css` untuk menampilkan desain halaman.
3. Browser menjalankan `script.js` untuk menambahkan interaksi.
4. Pada ponsel, pengguna dapat membuka menu dengan tombol hamburger.
5. Pengguna dapat memilih kategori untuk menyaring foto galeri.
6. Pengguna dapat mengisi form dan menerima pesan konfirmasi demo.
7. Setelah halaman digulir, tombol panah muncul untuk kembali ke bagian atas.

---

# Catatan dan Kekurangan pada Kode Saat Ini

## 1. Kesalahan Penulisan pada Bagian Foto Profil

Pada `index.html` terdapat kode berikut:

```html
<class="photo-caption"
```

Penulisan tersebut tidak valid karena `class` adalah atribut, bukan nama tag HTML. Jika ingin membuat caption, bentuk yang benar dapat ditulis seperti berikut:

```html
<div class="photo-caption">
  <b>Madrasah Wihdatul Muslimat</b>
  <span>Menteng, Jakarta Pusat</span>
</div>
```

Jika caption memang tidak diperlukan, baris yang salah tersebut dapat dihapus.

## 2. Penutup `.container` pada Bagian Galeri

Bagian galeri membuka elemen `.container`, tetapi sebelum `</section>` hanya terlihat satu `</div>` untuk menutup `.gallery-grid`. Sebaiknya tambahkan satu penutup lagi untuk `.container` seperti berikut:

```html
    </div> <!-- menutup gallery-grid -->
  </div>   <!-- menutup container -->
</section>
```

Browser kadang mencoba memperbaiki struktur HTML yang tidak lengkap secara otomatis, tetapi hasil tampilannya dapat berbeda pada browser tertentu.

## 3. Form Belum Mengirim Data

Form hanya menampilkan pesan sukses melalui JavaScript. Nama, email, dan pesan tidak disimpan. Untuk membuat form benar-benar bekerja, diperlukan proses tambahan menggunakan backend atau layanan penyimpanan data.

## 4. Gambar Harus Berada pada Lokasi yang Tepat

Semua atribut `src` menggunakan jalur seperti `assets/kegiatan-1.jpeg`. Jika nama file, huruf besar-kecil, atau lokasi gambarnya berbeda, gambar tidak akan tampil.

## 5. Menu Dapat Menyimpan Inline Style Setelah Ukuran Layar Berubah

JavaScript mengubah `display` navigasi melalui inline style. Jika menu ditutup pada layar kecil lalu browser langsung diperbesar, nilai `display: none` dapat tetap menempel. Hal ini tidak terlalu terasa pada penggunaan biasa, tetapi dapat diperbaiki dengan mengatur ulang style ketika ukuran jendela berubah.

---

# Kesimpulan

Website Madrasah Wihdatul Muslimat menggabungkan tiga bagian utama pengembangan web. HTML dipakai untuk membuat struktur dan isi, CSS dipakai untuk membuat desain yang responsif, sedangkan JavaScript dipakai untuk membuat halaman menjadi interaktif. Melalui proyek ini, mahasiswa dapat mempelajari penggunaan elemen semantik HTML, Flexbox, CSS Grid, media query, manipulasi DOM, event, dan pengolahan class menggunakan JavaScript.

Walaupun website sudah dapat menampilkan informasi dan interaksi dasar, form kontak masih bersifat demo dan terdapat dua bagian struktur HTML yang perlu diperbaiki sebelum website dipublikasikan atau dikumpulkan sebagai hasil akhir.
