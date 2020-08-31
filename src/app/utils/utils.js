const shortenedWord = (string, strLength) => {
  return (string.length >= strLength) ? `${string.substring(0, strLength)} ...` : string;
};

const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

export { shortenedWord, fullName };
