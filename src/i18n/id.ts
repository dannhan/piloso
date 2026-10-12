import type { LocaleMessages } from './types';

const id: LocaleMessages = {
  meta: {
    titleSuffix: 'Eksportir green coffee Gunung Muria',
    description:
      'Eksportir langsung green coffee specialty dari lereng Gunung Muria, Jawa Tengah. FOB Semarang, kemasan hermetis GrainPro™.',
  },
  actions: {
    requestSample: 'Minta sampel',
    applySample: 'Ajukan sampel',
  },
  nav: {
    links: [
      { label: 'Asal usul', href: '#origin' },
      { label: 'Lot 2026', href: '#coffees' },
      { label: 'Ekspor', href: '#export' },
      { label: 'Pengolahan', href: '#process' },
      { label: 'Filosofi', href: '#philosophy' },
      { label: 'FAQ', href: '#faq' },
    ],
    menuLabel: 'Buka menu',
  },
  hero: {
    kickerSuffix: ' / GREEN COFFEE EXPORT',
    title: 'Green coffee specialty dari lereng Gunung Muria.',
    description:
      'Kami mengekspor langsung dari kelompok tani mitra di Jawa Tengah. Setiap lot disortir manual sesuai standar SCA, bisa ditelusuri sampai kebun, dan dikirim FOB Pelabuhan Tanjung Emas, Semarang.',
    lotsLink: 'Lihat lot panen 2026',
    sackLabel:
      'Karung goni bertanda {brand}, green coffee panen 2026, Gunung Muria, 60 kg, FOB Semarang',
    sackProduct: 'Green coffee',
    origin: 'Gunung Muria',
    harvest: 'Panen 2026',
    elevation: '800–1.450 mdpl',
    netWeight: 'Net 60 kg',
    packaging: 'GrainPro™',
    port: 'FOB Semarang',
  },
  valueProps: [
    {
      title: 'Dapat ditelusuri',
      description:
        'Setiap karung terhubung ke kelompok tani dan stasiun pengolahan di lereng Muria, lengkap dengan periode panennya.',
    },
    {
      title: 'Standar SCA Grade 1',
      description:
        'Kadar air 11–12,5%, cacat kategori 1 di bawah 3%, ukuran biji terkalibrasi, dan skor cupping yang konsisten.',
    },
    {
      title: 'Dokumen siap port',
      description:
        'Fitosanitari, Certificate of Origin, dan Health Certificate disiapkan bersama komunikasi bisnis dalam bahasa Inggris.',
    },
  ],
  origin: {
    marker: '01 / ORIGIN',
    title: 'Tanah vulkanis dan iklim pegunungan',
    lead: 'Gunung Muria berdiri di pesisir utara Jawa Tengah. Tanah andisolnya subur, kabutnya sejuk, dan sinar mataharinya cukup untuk pengeringan yang pelan dan merata.',
    story:
      'Nama {brand} diambil dari bunga ploso yang tumbuh di lereng Muria. Ceri merah matang diolah kurang dari 8 jam setelah dipetik agar rasa buah dan floralnya terkunci.',
    quote:
      'Setiap butir biji kopi hijau {brand} mencerminkan kesuburan tanah Muria, keteduhan hutan, dan ketulusan para petani yang merawatnya.',
    facts: [
      { label: 'Lokasi', value: 'Lereng Gunung Muria, Jawa Tengah' },
      { label: 'Ketinggian tanam', value: '800–1.450 mdpl' },
      { label: 'Tanah', value: 'Andisol vulkanik gembur, ternaungi hutan alami' },
      { label: 'Musim panen raya', value: 'Mei–September' },
      { label: 'Varietas', value: 'Fine Robusta dan Highland Arabica' },
      { label: 'Metode olah', value: 'Natural, honey, full washed, wine' },
      { label: 'Pelabuhan muat', value: 'Tanjung Emas, Semarang (±2 jam dari sentra pengolahan)' },
    ],
  },
  coffees: {
    marker: '02 / 2026 HARVEST',
    title: 'Lot panen 2026',
    description:
      'Sampel fisik 200–500 g dikirim lewat kurir ekspres internasional. Pesanan komersial tersedia dalam LCL maupun FCL.',
    columns: ['Lot', 'Ketinggian', 'Ayakan', 'Kadar air / aW', 'Cacat', 'Aksi'],
    lots: [
      {
        name: 'Muria Reserve Natural',
        process: 'Natural anaerobic, fermentasi terkontrol',
        notes:
          'Dark cherry, plum matang, raw cacao, gula tebu karamel. Body kental, aftertaste manis panjang.',
        altitude: '950–1.200 mdpl',
        screen: 'Screen 16–18',
        moisture: '11,0–12,0% / 0,58',
        defects: '≤ 2%, zero primary',
      },
      {
        name: '{brandTitle} Golden Honey',
        tag: 'Favorit pembeli',
        process: 'Yellow honey, pulped natural',
        notes:
          'Aprikot, madu floral, hazelnut sangrai, keasaman sitrus seimbang, tekstur lembut seperti beludru.',
        altitude: '900–1.150 mdpl',
        screen: 'Screen 16–18',
        moisture: '11,5–12,2% / 0,59',
        defects: '≤ 2,5%',
      },
      {
        name: 'Muria Highland Washed',
        process: 'Double washed, jemur matahari',
        notes:
          'Dark chocolate nibs, sweet cedar, pala. Clean cup dan terstruktur, cocok untuk racikan espresso.',
        altitude: '850–1.050 mdpl',
        screen: 'Screen 16–18',
        moisture: '10,8–11,8% / 0,56',
        defects: '≤ 3%, premium',
      },
    ],
    note: 'Semua lot dikemas dalam kantong GrainPro™ 60 kg di dalam karung goni.',
  },
  export: {
    marker: '03 / EXPORT',
    title: 'Dari Muria ke roastery Anda',
    lead: 'Dokumen tertib dan komunikasi cepat di setiap tahap.',
    terms: [
      { label: 'Incoterms', value: 'FOB Semarang, atau CIF sesuai permintaan' },
      { label: 'MOQ', value: "1 ton (LCL) atau 1 × 20' FCL, sekitar 18–19,2 ton" },
      { label: 'Sampel', value: '200–1.000 g per lot' },
      { label: 'Kapasitas', value: '3–5 kontainer FCL per bulan saat panen' },
    ],
    steps: [
      {
        title: 'Evaluasi sampel',
        description:
          'Sampel 200–500 g dikirim lewat DHL atau FedEx beserta lembar spesifikasi lot. Ongkos kirim sampel dipotong dari pesanan komersial pertama Anda.',
      },
      {
        title: 'Penawaran dan kontrak',
        description:
          'Setelah sampel disetujui, kami menerbitkan Proforma Invoice berisi harga FOB atau CIF, volume, jadwal kapal, dan opsi pembayaran T/T atau L/C.',
      },
      {
        title: 'Sertifikasi dan karantina',
        description:
          'Kami mengurus Sertifikat Fitosanitari, Certificate of Origin, dan Certificate of Analysis.',
      },
      {
        title: 'Pemuatan',
        description:
          'Kopi dikemas dalam GrainPro™ dan goni baru 60 kg, lalu dimuat lewat Tanjung Emas (Semarang) atau Tanjung Perak (Surabaya).',
      },
      {
        title: 'Dokumen asli dan pelacakan',
        description:
          'Bill of Lading, Invoice, Packing List, Phyto, dan COO dikirim lewat kurir ekspres. Salinan digital kami kirim lewat email untuk kliring di negara tujuan.',
      },
    ],
  },
  process: {
    marker: '04 / PROCESS',
    title: 'Pengolahan pascapanen',
    stages: [
      {
        title: 'Petik pilih',
        description:
          'Hanya ceri merah matang yang dipetik tangan. Tidak ada ceri hijau dalam campuran.',
      },
      {
        title: 'Fermentasi terpantau',
        description: 'Dilakukan di ruang ternaungi dengan kontrol pH, suhu, dan kadar brix.',
      },
      {
        title: 'Raised beds',
        description:
          'Dikeringkan bertahap di meja gantung, dibalik teratur sampai kadar air 11–12%.',
      },
      {
        title: 'Grading dan sortasi',
        description: 'Pemisahan densitas, ayakan Screen 16–18, lalu sortasi tangan Grade 1.',
      },
    ],
  },
  philosophy: {
    marker: '05 / PHILOSOPHY',
    title: 'Makna di balik {brand}',
    imageAlt: 'Emblem {brand}',
    items: [
      {
        title: 'Gunung Muria',
        description:
          'Siluet pegunungan melambangkan keteguhan dan konsistensi, sekaligus asal kopi kami.',
      },
      {
        title: 'Bunga ploso',
        description:
          'Bunga jingga-merah yang menjadi sumber nama {brand}, penanda flora khas lereng Muria.',
      },
      {
        title: 'Nektar bunga',
        description:
          'Kekayaan rasa dari tanah vulkanik, ketinggian, udara segar, dan air pegunungan.',
      },
      {
        title: 'Matahari dan lingkaran emas',
        description:
          'Kesatuan alam, petani, dan penikmat kopi di bawah standar kualitas yang sama.',
      },
    ],
  },
  faq: {
    marker: '06 / QUESTIONS',
    title: 'Pertanyaan yang sering diajukan',
    items: [
      {
        question: 'Bagaimana cara memesan sampel?',
        answer:
          'Isi formulir sampel di situs ini atau hubungi kami lewat WhatsApp. Sampel 200–500 g per lot dikirim dengan cupping sheet dan data fisik. Ongkos kirim dipotong dari invoice pesanan komersial pertama.',
      },
      {
        question: 'Berapa MOQ untuk pesanan komersial?',
        answer:
          'LCL mulai 1 ton metrik (sekitar 16–17 karung @60 kg). Kontainer 20 ft (FCL) memuat sekitar 18–19,2 ton, atau 300–320 karung.',
      },
      {
        question: 'Pelabuhan dan Incoterms apa yang tersedia?',
        answer:
          'Standarnya FOB Semarang (Tanjung Emas). Kami juga melayani FOB Surabaya (Tanjung Perak) dan skema CIF/CFR ke pelabuhan tujuan Anda.',
      },
      {
        question: 'Dokumen apa saja yang disertakan?',
        answer:
          'Sertifikat Fitosanitari, ICO Certificate of Origin, Bill of Lading, Commercial Invoice, Packing List, dan Certificate of Analysis (kadar air, cacat, ayakan).',
      },
      {
        question: 'Bagaimana kopi dikemas untuk pelayaran?',
        answer:
          'Kantong hermetis GrainPro™ 60 kg di dalam karung goni baru. Lapisan ini menjaga kadar air, melindungi aroma, dan mencegah bau asing selama di laut.',
      },
    ],
  },
  cta: {
    title: 'Butuh sampel atau penawaran FOB?',
    description: 'Kami menyiapkan paket sampel atau penawaran harga dalam 24 jam.',
    whatsappLabel: 'Hubungi lewat WhatsApp',
    whatsappMessage:
      'Halo {brand} Coffee, saya tertarik untuk mengetahui penawaran green coffee Gunung Muria.',
  },
  footer: {
    description:
      'Green coffee single origin dari Gunung Muria, Jawa Tengah. Pelabuhan muat Tanjung Emas, Semarang.',
    links: [
      { label: 'Lot 2026', href: '#coffees' },
      { label: 'Ekspor dan logistik', href: '#export' },
      { label: 'FAQ', href: '#faq' },
    ],
    whatsappLabel: 'WhatsApp',
    responseTime: 'Respons dalam 12–24 jam kerja',
    copyrightYear: '2026',
    copyrightSuffix: ' Coffee Exporter.',
    backToTop: 'Kembali ke atas',
  },
  modal: {
    closeLabel: 'Tutup',
    title: 'Permintaan sampel',
    description:
      'Paket 200–500 g beserta cupping data sheet. Ongkos kirim dipotong dari pesanan komersial pertama.',
    fields: {
      fullName: 'Nama lengkap',
      company: 'Perusahaan atau roastery',
      email: 'Email bisnis',
      phone: 'WhatsApp atau telepon',
      destination: 'Negara dan kota tujuan',
      lot: 'Lot',
      notes: 'Perkiraan volume atau catatan',
    },
    placeholders: {
      destination: 'Jerman, Hamburg',
      notes: 'Misalnya 1–2 ton LCL, FOB, kebutuhan roast profile tertentu',
    },
    allLotsOption: 'Semua lot (sample pack lengkap)',
    allLotsValue: 'Seluruh Lot Panen 2026 (Sample Pack Lengkap)',
    submit: 'Kirim permintaan',
    successTitle: 'Permintaan sampel diterima',
    successDescription:
      'Koordinator ekspor kami akan menghubungi Anda lewat WhatsApp atau email dalam 24 jam, lengkap dengan nomor resi dan data sheet lot.',
  },
  floating: {
    label: 'WhatsApp',
    whatsappMessage:
      'Halo {brand} Coffee, saya ingin menanyakan tentang ekspor green bean Gunung Muria.',
  },
};

export default id;
