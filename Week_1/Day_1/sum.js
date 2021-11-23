
const listOfNumbers = process.argv;
const sumOfCleanNumbers = function(listOfNumbers) {
  
  let total = 0;

  for (const currentNumber of listOfNumbers) {
    const parseNumber = Number(currentNumber);
    if (!Number.isNaN(parseNumber)) {
      total += parseNumber;
    }
  }

  return total;
};

const result = sumOfCleanNumbers(listOfNumbers);
console.log(result);