(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = "Dr Strange";
  console.log(avenger.charAt(3));
  console.log((avenger as string).charAt(3));

  avenger = 150.235123;
  console.log(<number>avenger.toFixed(2));

  console.log(exists);
  console.log(power);
})();
