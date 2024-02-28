const unikey = (
  length = 8,
  options?: { case: 'mixed' | 'lower' | 'upper' }
): string =>
  Array.from({ length }, () => {
    const charCodeIndex = ~~(Math.random() * 35); // Find a digit between 0 to 35, where from {25,...,35} are reserved for digits

    if (charCodeIndex > 25) return charCodeIndex - 25; // return a number between {0..9}

    if (options?.case && options.case !== 'lower')
      return String.fromCharCode(charCodeIndex + 97)[
        options.case === 'upper'
          ? 'toUpperCase'
          : Math.random() > 0.5
            ? 'toUpperCase'
            : 'toLowerCase'
      ](); // return a alphabetical character from js charCode

    return String.fromCharCode(charCodeIndex + 97); // return a alphabetical character from js charCode
  }).join('');

export default unikey;
