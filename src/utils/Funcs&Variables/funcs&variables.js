//funcs

export const createFilteredList = (list, string) =>
  Object.entries(list).filter(
    (subListed) => subListed[0].includes(string) && subListed[1]
  );

//Variables

export const alphabet = "abcdefghijklmnopqrstvwyz".split("");
