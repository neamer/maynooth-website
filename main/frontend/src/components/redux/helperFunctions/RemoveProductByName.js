// Removes a product from an array by its name
const RemoveProductByName = (array, name) => {
  let resultArray = [];

  array.forEach((element) => {
    if (element.name !== name) resultArray.push(element);
  });

  return resultArray;
};

export default RemoveProductByName;
