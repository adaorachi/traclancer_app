const shortenedWord = (string, strLength) => {
  return (string.length >= strLength) ? `${string.substring(0, strLength)} ...` : string;
};

const mme = () => {
  return false;
};

export { shortenedWord, mme };
