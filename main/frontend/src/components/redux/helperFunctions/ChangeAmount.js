// Changes the quantity of a product based on its name
const ChangeAmount = (array, name, newAmount) => {
  if (newAmount < 1) return array;

  return array.map((element) => {
    if (element.name === name) {
      element.quantity = newAmount;
    }
    return element;
  });
};

export default ChangeAmount;
