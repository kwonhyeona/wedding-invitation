export const copyText = (text: string) =>
  window.navigator.clipboard.writeText(text);

export const callPhone = (phone: string) => window.open(`tel:${phone}`);
