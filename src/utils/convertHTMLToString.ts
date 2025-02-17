function stripHtml(htmlString: string) {
  if (typeof document !== 'undefined') {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    const textContent = tempDiv.textContent || tempDiv.innerText;
    return textContent;
  }

  return htmlString;
}

export { stripHtml };
