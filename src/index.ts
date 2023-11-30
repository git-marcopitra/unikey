const unikey = (length = 8): string => {
  const charCodeIndexes = Array.from({ length }, () => ~~(Math.random() * 61));

  return charCodeIndexes
    .map((charCodeIndex) => {
      if (charCodeIndex >= 58) return charCodeIndex - 51;

      if (charCodeIndex > 25 && charCodeIndex < 33) return charCodeIndex - 25;

      return String.fromCharCode(charCodeIndex + 65);
    })
    .join('');
};

export default unikey;
