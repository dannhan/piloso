export interface LocaleMessages {
  meta: {
    titleSuffix: string;
    description: string;
  };
  actions: {
    requestSample: string;
    applySample: string;
  };
  nav: {
    links: { label: string; href: string }[];
    menuLabel: string;
    logoAlt: string;
  };
  hero: {
    kickerSuffix: string;
    title: string;
    description: string;
    lotsLink: string;
    sackLabel: string;
    sackProduct: string;
    harvest: string;
    origin: string;
    elevation: string;
    netWeight: string;
    packaging: string;
    port: string;
  };
  valueProps: { title: string; description: string }[];
  origin: {
    marker: string;
    title: string;
    lead: string;
    story: string;
    quote: string;
    facts: { label: string; value: string }[];
  };
  coffees: {
    marker: string;
    title: string;
    description: string;
    columns: string[];
    emptyMessage: string;
    lots: {
      name: string;
      tag?: string;
      process: string;
      notes: string;
      altitude: string;
      screen: string;
      moisture: string;
      defects: string;
    }[];
    note: string;
  };
  export: {
    marker: string;
    title: string;
    lead: string;
    terms: { label: string; value: string }[];
    steps: { title: string; description: string }[];
  };
  process: {
    marker: string;
    title: string;
    stages: { title: string; description: string }[];
  };
  philosophy: {
    marker: string;
    title: string;
    imageAlt: string;
    items: { title: string; description: string }[];
  };
  faq: {
    marker: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    title: string;
    description: string;
    whatsappLabel: string;
    whatsappMessage: string;
  };
  footer: {
    description: string;
    links: { label: string; href: string }[];
    whatsappLabel: string;
    responseTime: string;
    copyrightYear: string;
    copyrightSuffix: string;
    backToTop: string;
  };
  modal: {
    closeLabel: string;
    title: string;
    description: string;
    fields: {
      fullName: string;
      company: string;
      email: string;
      phone: string;
      destination: string;
      lot: string;
      notes: string;
    };
    placeholders: {
      destination: string;
      notes: string;
    };
    allLotsOption: string;
    allLotsValue: string;
    submit: string;
    successTitle: string;
    successDescription: string;
  };
  floating: {
    label: string;
    whatsappMessage: string;
  };
}
