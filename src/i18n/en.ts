import type { LocaleMessages } from './types';

const en: LocaleMessages = {
  // REVIEW: English SEO title and description.
  meta: {
    titleSuffix: 'Gunung Muria Green Coffee Exporter',
    description:
      'Direct exporter of specialty green coffee from the slopes of Mount Muria, Central Java. FOB Semarang, packed in hermetic GrainPro™ liners.',
  },
  // REVIEW: Primary sample-request actions.
  actions: {
    requestSample: 'Request a sample',
    applySample: 'Request a sample',
  },
  // REVIEW: Navigation labels and accessible menu name.
  nav: {
    links: [
      { label: 'Origin', href: '#origin' },
      { label: '2026 lots', href: '#coffees' },
      { label: 'Export', href: '#export' },
      { label: 'Processing', href: '#process' },
      { label: 'Our philosophy', href: '#philosophy' },
      { label: 'FAQ', href: '#faq' },
    ],
    menuLabel: 'Open menu',
    languageSwitchLabel: 'Switch language to Bahasa Indonesia',
    logoAlt: 'PILOSO logo',
  },
  // REVIEW: Hero copy and sack image accessible label.
  hero: {
    kickerSuffix: ' / GREEN COFFEE EXPORT',
    title: 'Specialty green coffee from the slopes of Mount Muria.',
    description:
      'We export directly from partner farmer groups in Central Java. Every lot is hand-sorted to SCA standards, traceable to its farm, and shipped FOB Tanjung Emas Port, Semarang.',
    lotsLink: 'Explore the 2026 harvest lots',
    sackLabel:
      '{brand} jute sack containing 2026-harvest green coffee from Mount Muria, 60 kg, FOB Semarang',
    sackProduct: 'Green coffee',
    origin: 'Mount Muria',
    harvest: '2026 harvest',
    elevation: '800–1,450 m above sea level',
    netWeight: 'Net 60 kg',
    packaging: 'GrainPro™ liner',
    port: 'FOB Semarang',
  },
  // REVIEW: Value propositions.
  valueProps: [
    {
      title: 'Traceable by lot',
      description:
        'Every sack is linked to a farmer group and processing station on the slopes of Muria, with its harvest period recorded.',
    },
    {
      title: 'SCA Grade 1 standards',
      description:
        'Moisture at 11–12.5%, Category 1 defects below 3%, calibrated screen size, and consistent cupping scores.',
    },
    {
      title: 'Export-ready documentation',
      description:
        'Phytosanitary, Certificate of Origin, and Health Certificate arranged, with business communication in English.',
    },
  ],
  // REVIEW: Origin story, quote, and origin facts.
  origin: {
    marker: '01 / ORIGIN',
    title: 'Volcanic soil and a cool mountain climate',
    lead: 'Mount Muria rises above the north coast of Central Java. Its fertile Andisol soil, cool mountain mists, and steady sunshine create ideal conditions for slow, even drying.',
    story:
      'The name {brand} comes from the ploso flower that grows on the slopes of Muria. Ripe red cherries are processed within 8 hours of picking to preserve their fruit and floral character.',
    quote:
      'Every green coffee bean from {brand} reflects the fertility of Muria’s soil, the shelter of its forests, and the care of the farmers who tend it.',
    facts: [
      { label: 'Location', value: 'Slopes of Mount Muria, Central Java' },
      { label: 'Growing elevation', value: '800–1,450 m above sea level' },
      { label: 'Soil', value: 'Loose volcanic Andisol, shaded by natural forest' },
      { label: 'Main harvest season', value: 'May–September' },
      { label: 'Varieties', value: 'Fine Robusta and Highland Arabica' },
      { label: 'Processing methods', value: 'Natural, honey, fully washed, wine' },
      {
        label: 'Loading port',
        value: 'Tanjung Emas, Semarang (about 2 hours from the processing area)',
      },
    ],
  },
  // REVIEW: 2026 lot table labels, product descriptions, and specifications. Decimal and thousands separators use English conventions.
  coffees: {
    marker: '02 / 2026 HARVEST',
    title: '2026 harvest lots',
    description:
      'Physical samples of 200–500 g ship by international express courier. Commercial orders are available by LCL or FCL.',
    columns: ['Lot', 'Altitude (m asl)', 'Screen size', 'Moisture (%) / aW', 'Defects', 'Action'],
    lots: [
      {
        name: 'Muria Reserve Natural',
        process: 'Controlled anaerobic natural fermentation',
        notes:
          'Dark cherry, ripe plum, raw cacao, and caramelized cane sugar. Full body with a long, sweet finish.',
        altitude: '950–1,200',
        screen: '16–18',
        moisture: '11.0–12.0 / 0.58',
        defects: '≤ 2%, zero primary defects',
      },
      {
        name: '{brandTitle} Golden Honey',
        tag: 'Buyer favorite',
        process: 'Yellow honey, pulped natural',
        notes:
          'Apricot, floral honey, roasted hazelnut, balanced citrus acidity, and a smooth, velvety texture.',
        altitude: '900–1,150',
        screen: '16–18',
        moisture: '11.5–12.2 / 0.59',
        defects: '≤ 2.5%',
      },
      {
        name: 'Muria Highland Washed',
        process: 'Double washed, sun-dried',
        notes:
          'Dark chocolate nibs, sweet cedar, and nutmeg. A clean, structured cup that works well in espresso blends.',
        altitude: '850–1,050',
        screen: '16–18',
        moisture: '10.8–11.8 / 0.56',
        defects: '≤ 3%, premium grade',
      },
    ],
    note: 'All lots are packed in 60 kg GrainPro™ liners inside jute sacks.',
  },
  // REVIEW: Export terms and order workflow.
  export: {
    marker: '03 / EXPORT',
    title: 'From Muria to your roastery',
    lead: 'Clear documentation and responsive communication at every step.',
    terms: [
      { label: 'Incoterms', value: 'FOB Semarang, or CIF on request' },
      {
        label: 'MOQ',
        value: "1 metric ton (LCL) or 1 × 20' FCL, approximately 18–19.2 metric tons",
      },
      { label: 'Samples', value: '200–1,000 g per lot' },
      { label: 'Capacity', value: '3–5 FCL containers per month during harvest' },
    ],
    steps: [
      {
        title: 'Evaluate a sample',
        description:
          'We send a 200–500 g sample by DHL or FedEx with the lot specification sheet. Sample shipping costs are credited toward your first commercial order.',
      },
      {
        title: 'Quotation and contract',
        description:
          'Once you approve the sample, we issue a Proforma Invoice covering FOB or CIF pricing, volume, vessel schedule, and T/T or L/C payment options.',
      },
      {
        title: 'Certification and quarantine',
        description:
          'We arrange the Phytosanitary Certificate, Certificate of Origin, and Certificate of Analysis.',
      },
      {
        title: 'Loading',
        description:
          'Coffee is packed in GrainPro™ liners and new 60 kg jute sacks, then loaded through Tanjung Emas (Semarang) or Tanjung Perak (Surabaya).',
      },
      {
        title: 'Original documents and tracking',
        description:
          'The Bill of Lading, Invoice, Packing List, Phytosanitary Certificate, and Certificate of Origin are sent by express courier. We email digital copies for customs clearance at destination.',
      },
    ],
  },
  // REVIEW: Post-harvest process stages.
  process: {
    marker: '04 / PROCESS',
    title: 'Post-harvest processing',
    stages: [
      {
        title: 'Selective picking',
        description:
          'Only ripe red cherries are hand-picked. Green cherries are excluded from the mix.',
      },
      {
        title: 'Monitored fermentation',
        description:
          'Fermentation takes place in a shaded room with pH, temperature, and Brix monitoring.',
      },
      {
        title: 'Raised-bed drying',
        description:
          'Coffee is dried gradually on raised beds and turned regularly until moisture reaches 11–12%.',
      },
      {
        title: 'Grading and sorting',
        description:
          'Density separation and Screen 16–18 sizing, followed by Grade 1 hand sorting.',
      },
    ],
  },
  // REVIEW: Brand philosophy and image alternative text.
  philosophy: {
    marker: '05 / PHILOSOPHY',
    title: 'The meaning behind {brand}',
    imageAlt: '{brand} emblem',
    items: [
      {
        title: 'Mount Muria',
        description:
          'The mountain silhouette represents resilience and consistency, as well as the origin of our coffee.',
      },
      {
        title: 'The ploso flower',
        description:
          'The orange-red flower that inspired the name {brand} is a distinctive part of Muria’s flora.',
      },
      {
        title: 'Flower nectar',
        description:
          'The richness of our coffee comes from volcanic soil, elevation, fresh air, and mountain water.',
      },
      {
        title: 'The sun and golden circle',
        description:
          'Nature, farmers, and coffee drinkers come together under the same quality standard.',
      },
    ],
  },
  // REVIEW: Frequently asked questions and answers.
  faq: {
    marker: '06 / QUESTIONS',
    title: 'Frequently asked questions',
    items: [
      {
        question: 'How can I order a sample?',
        answer:
          'Fill out the sample request form on this site or contact us on WhatsApp. We send 200–500 g per lot with a cupping sheet and physical data. Shipping costs are credited toward your first commercial order.',
      },
      {
        question: 'What is the MOQ for a commercial order?',
        answer:
          'LCL starts at 1 metric ton (about 16–17 sacks at 60 kg each). A 20 ft FCL container holds approximately 18–19.2 metric tons, or 300–320 sacks.',
      },
      {
        question: 'Which ports and Incoterms are available?',
        answer:
          'Our standard is FOB Semarang (Tanjung Emas). We also offer FOB Surabaya (Tanjung Perak) and CIF/CFR to your destination port.',
      },
      {
        question: 'Which documents are included?',
        answer:
          'Phytosanitary Certificate, ICO Certificate of Origin, Bill of Lading, Commercial Invoice, Packing List, and Certificate of Analysis (moisture, defects, and screen size).',
      },
      {
        question: 'How is the coffee packed for shipping?',
        answer:
          'Coffee is packed in hermetic 60 kg GrainPro™ liners inside new jute sacks. This packaging protects moisture levels and aroma and helps prevent taint during ocean transit.',
      },
    ],
  },
  // REVIEW: CTA copy and localized WhatsApp message.
  cta: {
    title: 'Need a sample or an FOB quotation?',
    description: 'We can prepare a sample pack or price quotation within 24 hours.',
    whatsappLabel: 'Contact us on WhatsApp',
    whatsappMessage:
      'Hello {brand} Coffee, I would like to learn more about your Mount Muria green coffee offer.',
  },
  // REVIEW: Footer contact context, links, and copyright text.
  footer: {
    description:
      'Single-origin green coffee from Mount Muria, Central Java. Loading port: Tanjung Emas, Semarang.',
    links: [
      { label: '2026 lots', href: '#coffees' },
      { label: 'Export and logistics', href: '#export' },
      { label: 'FAQ', href: '#faq' },
    ],
    whatsappLabel: 'WhatsApp',
    responseTime: 'Response within 12–24 business hours',
    copyrightYear: '2026',
    copyrightSuffix: ' Coffee Exporter.',
    backToTop: 'Back to top',
  },
  // REVIEW: Mock sample form labels, placeholders, lot option, and success state.
  modal: {
    closeLabel: 'Close',
    title: 'Sample request',
    description:
      'A 200–500 g sample pack with cupping data sheet. Shipping costs are credited toward your first commercial order.',
    fields: {
      fullName: 'Full name',
      company: 'Company or roastery',
      email: 'Business email',
      phone: 'WhatsApp or phone',
      destination: 'Destination country and city',
      lot: 'Lot',
      notes: 'Estimated volume or notes',
    },
    placeholders: {
      destination: 'Hamburg, Germany',
      notes: 'For example: 1–2 metric tons LCL, FOB, preferred roast profile',
    },
    allLotsOption: 'All lots (complete sample pack)',
    allLotsValue: 'All 2026 Harvest Lots (Complete Sample Pack)',
    submit: 'Send request',
    successTitle: 'Sample request received',
    successDescription:
      'Our export coordinator will contact you on WhatsApp or by email within 24 hours with the tracking number and lot data sheet.',
  },
  // REVIEW: Floating WhatsApp label and localized message.
  floating: {
    label: 'WhatsApp',
    whatsappMessage:
      'Hello {brand} Coffee, I have a question about green bean exports from Mount Muria.',
  },
};

export default en;
