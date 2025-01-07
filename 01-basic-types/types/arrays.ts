(() => {
  const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];

  numbers.push(true);

  console.log(numbers);

  const villians = ['Omega Rojo', 'Dormamu', 'Duende Verde']

  villians.forEach(v => console.log(v.toUpperCase()))

})();
