export const SITE = {
  brand: 'PILOSO',
  brandTitleCase: 'Piloso',
  email: 'export@pilosocoffee.com',
  whatsappNumber: '6281234567890',
  whatsappDisplay: '+62 812-3456-7890',
} as const;

export function withBrand(message: string): string {
  return message.replaceAll('{brand}', SITE.brand).replaceAll('{brandTitle}', SITE.brandTitleCase);
}
