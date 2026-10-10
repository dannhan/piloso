# Panduan Migrasi Framework (Future Migration Guide)

Repository ini telah direstrukturisasi agar siap digunakan sekarang sebagai situs statis di Cloudflare Pages, sekaligus memudahkan migrasi ke modern web framework ketika klien telah menentukan opsi desain final.

---

## 1. Struktur Saat Ini

```text
piloso/
├── index.html               # Showcase & Client Review Portal (Portal Utama)
├── designs/                 # Koleksi 4 Arah Desain
│   ├── 1/                   # Opsi 1: Agro-Heritage & Forest
│   ├── 2/                   # Opsi 2: Warm Roast & Vintage Gold
│   ├── 3/                   # Opsi 3: Editorial Specialty
│   └── 4/                   # Opsi 4: Modern Commercial
├── 1/, 2/, 3/, 4/           # Fallback redirect stubs (ke /designs/X/)
├── assets/                  # Brand assets bersama (logo, emblem)
├── references/              # PDF filosofi & inspirasi
├── _redirects               # Konfigurasi routing Cloudflare Pages
├── _headers                 # Header keamanan (iframe SAMEORIGIN) & cache
├── package.json             # Script npm (preview & deploy)
└── .gitignore               # Proteksi file environment & cache
```

---

## 2. Cara Kerja Sekarang

- **Root (`/`)**: Menampilkan showcase portal interaktif dengan device preview (Desktop, Tablet, Mobile) dan kartu kurasi untuk presentasi ke klien.
- **Sub-path (`/designs/1/`, `/designs/2/`, dll)**: Masing-masing opsi berjalan independen dengan CSS dan JS masing-masing.
- **Deploy Langsung ke Cloudflare**:
  ```bash
  wrangler login
  npm run deploy
  # atau: wrangler pages deploy . --project-name piloso
  ```

---

## 3. Langkah Migrasi Nanti (Ketika Opsi Terpilih)

Misalnya klien memilih **Opsi 2 (Warm Roast & Gold)** atau **Opsi 3 (Editorial)**:

### Rekomendasi Framework: **Astro**
Astro adalah framework paling ideal untuk situs marketing/katalog ekspor kopi seperti PILOSO karena:
- **Zero JS by default**: Loading ultra cepat di mobile maupun luar negeri.
- **Komponen Modular**: Nav, Hero, Lot Table, dan Modal Sampel dipisah ke `.astro` komponen.
- **Deploy Native di Cloudflare Pages**: Didukung penuh oleh Cloudflare Pages adapter.

### Langkah Migrasi ke Astro:
1. Inisialisasi Astro di folder proyek:
   ```bash
   npm create astro@latest .
   ```
2. Pindahkan folder `designs/` ke `public/designs/` jika masih ingin menyimpan opsi lama sebagai arsip.
3. Buat komponen di `src/components/`:
   - `Navbar.astro`
   - `Hero.astro`
   - `LotCatalog.astro` (data lot bisa disimpan di `src/data/lots.json`)
   - `ExportSpecs.astro`
   - `SampleModal.astro`
4. Masukkan variabel CSS dari opsi terpilih ke `src/styles/global.css`.

### Alternatif Framework: **Next.js** / **Nuxt** / **Vite**
Jika membutuhkan autentikasi buyer portal atau CMS dinamis (Sanity / Strapi / Decap):
- Letakkan aset statis di folder `public/`.
- Jalankan integrasi Cloudflare via OpenNext (`@opennextjs/cloudflare`) atau Cloudflare Pages Nuxt adapter.
