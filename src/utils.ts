export const copyText = async ({
  text,
  errorMessage,
  successMessage,
}: {
  text: string;
  errorMessage?: string;
  successMessage?: string;
}) => {
  try {
    await navigator.clipboard.writeText(text);
    successMessage && window.alert(successMessage);
  } catch (err) {
    errorMessage && window.alert(errorMessage);
  }
};

export const callPhone = (phone: string) => window.open(`tel:${phone}`);
