# Mini SCADA Tangki Susu - Cimory Diaryland

Sistem monitoring dan kontrol sederhana untuk tangki susu menggunakan React.js dan Tailwind CSS.

## Fitur

- 🌡️ Monitoring suhu real-time
- 📊 Monitoring level tangki real-time
- 📈 Visualisasi data menggunakan grafik
- 🎛️ Panel kontrol untuk start/stop monitoring
- 🔄 Auto-update setiap 2 detik
- 📱 Responsive design untuk desktop dan mobile

## Teknologi yang Digunakan

- React.js - Framework JavaScript untuk UI
- TypeScript - Untuk type safety
- Tailwind CSS - Untuk styling
- Recharts - Untuk visualisasi data

## Cara Menjalankan

1. Clone repository
```bash
git clone https://github.com/yeninurar/mini-scada-tangki-susu-cimorydiaryland.git
```

2. Masuk ke direktori project
```bash
cd mini-scada-tangki-susu-cimorydiaryland/mini-scada-frontend
```

3. Install dependencies
```bash
npm install
```

4. Jalankan aplikasi
```bash
npm start
```

5. Buka browser dan akses `http://localhost:3000`

## Struktur Project

```
mini-scada-frontend/
├── src/
│   ├── components/
│   │   ├── TankCard.tsx     # Komponen untuk menampilkan status tangki
│   │   ├── TankChart.tsx    # Komponen untuk menampilkan grafik
│   │   └── ControlPanel.tsx # Panel kontrol untuk start/stop
│   ├── pages/
│   │   └── Dashboard.tsx    # Halaman utama dashboard
│   └── services/
└── public/
```

## Fitur Monitoring

- **Suhu**
  - Range: 0-70°C
  - Indikator warna:
    - 🟢 Normal (< 40°C)
    - 🟡 Peringatan (40-60°C)
    - 🔴 Kritis (> 60°C)

- **Level Tangki**
  - Range: 0-100%
  - Indikator warna:
    - 🔴 Rendah (< 20%)
    - 🟡 Medium (20-50%)
    - 🟢 Tinggi (> 50%)

## Pengembangan Selanjutnya

- [ ] Integrasi dengan backend untuk data real
- [ ] Sistem notifikasi untuk kondisi kritis
- [ ] Fitur export data historis
- [ ] Dashboard konfigurasi untuk setting parameter
- [ ] Autentikasi pengguna

## Kontribusi

Kontribusi selalu diterima. Untuk perubahan besar, silakan buka issue terlebih dahulu untuk mendiskusikan perubahan yang diinginkan.

## Lisensi

[MIT](https://choosealicense.com/licenses/mit/)