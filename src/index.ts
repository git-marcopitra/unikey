const unikey = (length = 8): string =>
  Array.from({ length }, () => {
    const charCodeIndex = ~~(Math.random() * 61); // Find a digit between 0 to 61, where from {25,...,32} and {58,...,61} are reserved for digits, and rest for charCode to jump special characters

    if (charCodeIndex >= 58) return charCodeIndex - 51; // return a number between {7,8,9}

    if (charCodeIndex > 25 && charCodeIndex < 33) return charCodeIndex - 25; // return a number between {0,1,2,3,4,5,6}

    return String.fromCharCode(charCodeIndex + 65); // return a alphabetical character from js charCode
  }).join('');

export default unikey;
