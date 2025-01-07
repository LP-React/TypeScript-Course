(() => {
  let avengers: number = 0;

  console.log(avengers);

  const villians: number = 20;

  if (avengers < villians) {
    console.log("Estamos en problemas");
  } else {
    console.log("Nos salvamos");
  }

  avengers = Number("32A");
  console.log({ avengers });
})();
