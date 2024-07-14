const formatNumber = (number: number) => {
  const numberAsString = number.toString();
  if (numberAsString.length === 1) {
    return "0" + numberAsString;
  }
  return numberAsString.toString();
};

export { formatNumber };
