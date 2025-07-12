export const cleanHtmlContent = htmlString => {
  if (!htmlString) return '';

  return (
    htmlString
      .replace(/<div[^>]*>/gi, '<div>')

      //.replace(/(<br\s*\/?>\s*){2,}/gi, '<br /> \n')
      //.replace(/(<br\s*\/?>\s*){3,}/gi, '<br /> \n')
      .replace(/(<strong\s*\/?>\s*){2,}/gi, '<strong />')
      .replace(/<sup[^>]*>(.*?)<\/sup>/gi, '$1')
      .replace(/<p[^>]*?>\s*&nbsp;\s*<\/p>/gi, '')
  );
};
