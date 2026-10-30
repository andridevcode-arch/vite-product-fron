# Product Frontend

Monorepo frontend berbasis pnpm yang memisahkan aplikasi pengguna, aplikasi admin, dan kode bersama.

## Menjalankan Aplikasi

```bash
pnpm dev:user
```

Menjalankan aplikasi user pada `http://localhost:5173`.

```bash
pnpm dev:admin
```

Menjalankan aplikasi admin pada `http://localhost:5174`.

## Struktur Proyek

```text
product-frontend/
├── apps/
│   ├── user/                 # Aplikasi untuk pengguna
│   └── admin/                # Aplikasi untuk administrator
├── packages/
│   └── shared/               # Konstanta, tipe, dan utilitas bersama
├── package.json              # Script utama workspace
├── pnpm-workspace.yaml       # Daftar package dalam monorepo
├── pnpm-lock.yaml            # Lockfile dependensi pnpm
└── README.md                 # Dokumentasi proyek ini
```

## Aplikasi User

Lokasi: `apps/user`

```text
apps/user/
├── public/
│   ├── images/               # Gambar statis yang dapat diakses langsung
│   └── icons/                # Ikon statis
├── src/
│   ├── assets/               # Aset yang diproses oleh Vite
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── components/           # Komponen yang dapat digunakan ulang
│   │   ├── ui/               # Komponen UI dasar
│   │   ├── common/           # Komponen umum
│   │   └── layout/           # Komponen layout
│   ├── features/             # Modul berdasarkan fitur
│   │   ├── auth/             # Autentikasi
│   │   └── profile/          # Profil pengguna
│   ├── hooks/                # Custom React hooks umum
│   ├── lib/                  # Helper dan konfigurasi library
│   ├── services/             # Komunikasi API atau layanan eksternal
│   ├── stores/               # State management
│   ├── routes/               # Definisi routing
│   ├── layouts/              # Layout halaman
│   ├── pages/                # Halaman aplikasi
│   ├── config/               # Konfigurasi aplikasi
│   ├── providers/            # React providers
│   ├── styles/               # Style bersama aplikasi
│   ├── App.tsx               # Komponen aplikasi utama
│   ├── main.tsx              # Entry point React
│   └── index.css             # Style global
├── .env.example              # Contoh variabel environment
├── components.json           # Konfigurasi komponen UI
├── package.json              # Dependensi dan script aplikasi user
└── vite.config.ts            # Konfigurasi Vite user
```

## Aplikasi Admin

Lokasi: `apps/admin`

```text
apps/admin/
├── public/                   # Aset statis admin
├── src/
│   ├── assets/               # Gambar, ikon, dan font admin
│   ├── components/           # Komponen UI, umum, dan layout
│   ├── features/
│   │   ├── auth/             # Autentikasi admin
│   │   ├── dashboard/        # Dashboard admin
│   │   ├── users/            # Pengelolaan pengguna
│   │   ├── roles/            # Pengelolaan peran dan akses
│   │   └── settings/         # Pengaturan aplikasi
│   ├── hooks/                # Custom hooks umum
│   ├── lib/                  # Helper dan library
│   ├── services/             # API dan layanan eksternal
│   ├── stores/               # State management
│   ├── routes/               # Routing admin
│   ├── layouts/              # Layout halaman admin
│   ├── pages/                # Halaman admin
│   ├── config/               # Konfigurasi admin
│   ├── providers/            # React providers
│   ├── styles/               # Style bersama
│   ├── App.tsx               # Komponen aplikasi utama
│   ├── main.tsx              # Entry point React
│   └── index.css             # Style global
├── .env.example              # Contoh variabel environment
├── components.json           # Konfigurasi komponen UI
├── package.json              # Dependensi dan script aplikasi admin
└── vite.config.ts            # Konfigurasi Vite admin
```

## Package Shared

Lokasi: `packages/shared`

```text
packages/shared/
├── src/
│   ├── constants/            # Nilai konstan aplikasi
│   │   ├── app.ts            # Konstanta umum aplikasi
│   │   ├── roles.ts          # Konstanta role
│   │   ├── permissions.ts    # Konstanta permission
│   │   └── status.ts         # Konstanta status
│   ├── types/                # TypeScript type bersama
│   │   ├── user.ts           # Tipe data pengguna
│   │   ├── api.ts            # Tipe respons/request API
│   │   ├── pagination.ts     # Tipe pagination
│   │   └── common.ts         # Tipe umum
│   ├── utils/                # Fungsi utilitas bersama
│   │   ├── date.ts           # Utilitas tanggal
│   │   ├── format.ts         # Utilitas format data
│   │   ├── validation.ts     # Utilitas validasi
│   │   ├── string.ts         # Utilitas teks
│   │   ├── number.ts         # Utilitas angka
│   │   └── file.ts           # Utilitas file
│   └── index.ts              # Export utama package shared
└── package.json              # Identitas package @product/shared
```

## Perintah Build

```bash
pnpm build:user
pnpm build:admin
pnpm build
```

`pnpm build` menjalankan build aplikasi user dan admin.
