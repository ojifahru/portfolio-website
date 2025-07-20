# 🚀 Cara Deploy Website Portfolio ke GitHub Pages

## Prerequisites
- Akun GitHub
- Git terinstall di komputer
- Repository GitHub (public untuk GitHub Pages gratis)

## Langkah-langkah Deploy:

### 1. Upload ke GitHub Repository

#### Cara 1: Menggunakan GitHub Desktop (Recommended untuk pemula)
1. Download dan install GitHub Desktop
2. Login dengan akun GitHub Anda
3. Klik "Add an Existing Repository from your Hard Drive"
4. Pilih folder portfolio ini
5. Buat repository baru di GitHub dengan nama "portfolio" atau sesuai keinginan
6. Commit dan push semua file

#### Cara 2: Menggunakan Command Line
```bash
# Inisialisasi git repository
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial portfolio website"

# Tambahkan remote repository (ganti dengan URL repository Anda)
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git

# Push ke GitHub
git push -u origin main
```

### 2. Aktivasi GitHub Pages

1. Buka repository di GitHub.com
2. Klik tab **"Settings"** di repository
3. Scroll ke bawah sampai bagian **"Pages"**
4. Di bagian **"Source"**, pilih:
   - Source: **"Deploy from a branch"**
   - Branch: **"main"**
   - Folder: **"/ (root)"**
5. Klik **"Save"**

### 3. Akses Website

- GitHub akan memproses deployment (biasanya 2-10 menit)
- Website akan tersedia di: `https://USERNAME.github.io/REPOSITORY-NAME`
- Link akan muncul di bagian Pages di Settings

## 🔄 Update Website

Setiap kali Anda mengubah kode dan push ke GitHub:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Website akan otomatis terupdate dalam beberapa menit.

## ⚡ Tips untuk Deployment

### Domain Custom (Opsional)
- Beli domain dari provider (Namecheap, GoDaddy, dll)
- Tambahkan file `CNAME` dengan isi nama domain Anda
- Konfigurasi DNS di provider domain

### Optimasi SEO
- Pastikan semua `<title>` dan `<meta>` tags sudah diisi
- Tambahkan `sitemap.xml` dan `robots.txt`
- Gunakan Open Graph meta tags untuk social sharing

### Performance
- Kompres semua gambar
- Minify CSS dan JS (opsional untuk project kecil)
- Gunakan CDN untuk dependencies eksternal

## 🐛 Troubleshooting

### Website tidak muncul
- Pastikan repository adalah public
- Check di Settings > Pages apakah sudah dikonfigurasi
- Tunggu sampai 10 menit untuk propagasi

### Gambar tidak muncul
- Pastikan path gambar menggunakan relative path
- Check nama file case-sensitive (GitHub Pages case-sensitive)

### CSS/JS tidak load
- Pastikan path ke file CSS dan JS benar
- Check di browser developer tools untuk error

### Custom domain tidak berfungsi
- Pastikan file CNAME ada di root repository
- Check konfigurasi DNS di domain provider
- Tunggu propagasi DNS (sampai 24 jam)

## 📱 Test Responsiveness

Sebelum deploy, test website di:
- Chrome DevTools (F12 > Toggle Device Toolbar)
- Berbagai ukuran screen
- Mobile browser asli
- Tool online seperti responsivedesignchecker.com

## 🎯 Next Steps

Setelah website live:
1. Tambahkan Google Analytics untuk tracking
2. Submit ke Google Search Console
3. Share di social media dan LinkedIn
4. Update CV dengan link portfolio
5. Terus update dengan project baru

---

**Good luck dengan portfolio website Anda! 🎉**
